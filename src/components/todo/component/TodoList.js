import React from "react";
import "../style/todo-list.scss";
import TodoItem from "./TodoItem";

const TodoList = ({ filter, todos, onTodoChange, onTodoRemove }) => {
  let emptyMessage = "Cheers! Everything seems done.";

  if (filter === "SHOW_COMPLETED")
    emptyMessage = "Nothing is done yet. What are you waiting for?";

  if (todos && filter === "SHOW_ALL")
    emptyMessage = "No task to do. Care to add some?";

  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        <div className="row">
          {todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onTodoChange={() => onTodoChange(todo.completed, todo.id)}
              onTodoRemove={() => onTodoRemove(todo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="row">
          <div className="col-xs-12">
            <p className="no-todos">{emptyMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
