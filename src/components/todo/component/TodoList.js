import '../style/todo-list.css';

import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoChange, onTodoRemove }) => (
  <div className="todo-list">
    {
      todos.length > 0 ?
      <div className="row">
        {
          todos.map((todo,i) => (
            <TodoItem key={todo.id} {...todo}
              onTodoChange={() => onTodoChange(todo.completed, todo.id)}
              onTodoRemove={() => onTodoRemove(todo.id)} />
          ))
        }
      </div> :
      <div className="row">
        <div className="col-xs-12">
          <p className="no-todos">Cheers! Everything seems done.</p>
        </div>
      </div>
    }
  </div>
);

export default TodoList;
