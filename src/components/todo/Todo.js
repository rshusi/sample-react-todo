import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { todoAdd, todoComplete, todoPending, todoRemove } from '../../actions/TodoActions';
import { filterViewAll, filterViewPending, filterViewCompleted } from '../../actions/FilterActions';

import Header from './component/Header';
import AddForm from './component/AddForm';
import Filter from './component/Filter';
import TodoList from './component/TodoList';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.onTodoChange = this.onTodoChange.bind(this);
    this.onTodoRemove = this.onTodoRemove.bind(this);
    this.onTodoAdd = this.onTodoAdd.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onTodoChange(status, id) {
    if (!status)
      this.props.completeTodo(id);
    else
      this.props.pendingTodo(id);
  }

  onTodoRemove(id) {
    this.props.removeTodo(id);
  }

  onTodoAdd(todo) {
    this.props.addTodo(todo);
  }

  onFilterChange(filter) {
    switch (filter) {
      case 2:
        this.props.viewPending();
        break;
      case 3:
        this.props.viewCompleted();
        break;
      default:
        this.props.viewAll();
    }
  }

  render() {
    return(
      <div>
        <Modal.Dialog>
          <Modal.Body>
            <Header />
            <AddForm onTodoAdd={this.onTodoAdd} />
            <Filter onFilterChange={this.onFilterChange} />
            <TodoList todos={this.props.todos}
              onTodoChange={this.onTodoChange}
              onTodoRemove={this.onTodoRemove} />
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_PENDING':
      return todos.filter(todo => !todo.completed)
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.Todo.todos, state.Filter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => {
      dispatch(todoAdd(todo));
    },
    completeTodo: (i) => {
      dispatch(todoComplete(i));
    },
    pendingTodo: (i) => {
      dispatch(todoPending(i));
    },
    removeTodo: (i) => {
      dispatch(todoRemove(i));
    },
    viewAll: () => {
      dispatch(filterViewAll());
    },
    viewPending: () => {
      dispatch(filterViewPending());
    },
    viewCompleted: () => {
      dispatch(filterViewCompleted());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
