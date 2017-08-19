import shortid from 'shortid';

import {
  TODO_ADD, TODO_COMPLETE,
  TODO_PENDING, TODO_REMOVE } from '../constants/action-types';

let initialState = {
  todos: [ ]
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      state = {
        ...state,
        todos: [ ...state.todos, {
          id: shortid.generate(),
          text: action.payload,
          completed: false,
        }],
      };
      break;
    case TODO_COMPLETE:
      state = {
        ...state,
        todos: state.todos.map((todo,id) => todo.id === action.payload ? {...todo, completed:true} : todo),
      };
      break;
    case TODO_PENDING:
      state = {
        ...state,
        todos: state.todos.map((todo,id) => todo.id === action.payload ? {...todo, completed:false} : todo),
      };
      break;
    case TODO_REMOVE:
      state = {
        ...state,
        todos: state.todos.filter((todo,id) => todo.id !== action.payload),
      };
      break;
    default:
      return state;
  }

  return state;
};

export default TodoReducer;
