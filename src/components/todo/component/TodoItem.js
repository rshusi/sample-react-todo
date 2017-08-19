import '../style/todo-item.css';

import React from 'react';

const Todo = ({ completed, text, onTodoChange, onTodoRemove }) => (
  <div className="todo-item">
    <div className="col-xs-12">
      <div className="col-xs-2">
        <button className="btn btn-link" type="button" onClick={onTodoChange}>
          <span className={completed ? "fa fa-check-square-o" : "fa fa-square-o"} aria-hidden="true"></span>
        </button>
      </div>
      <div className="col-xs-8">
        <p style={{textDecoration: completed ? 'line-through' : 'inherit'}}>{text}</p>
      </div>
      <div className="col-xs-2">
        <button className="btn btn-link todo-remove" type="button" onClick={onTodoRemove}>
          <span className="fa fa-trash-o" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
);

export default Todo;
