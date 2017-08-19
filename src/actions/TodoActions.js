import {
  TODO_ADD, TODO_COMPLETE,
  TODO_PENDING, TODO_REMOVE } from '../constants/action-types';

export const todoAdd = (todo) => {
  return {
    type: TODO_ADD,
    payload: todo,
  };
};

export const todoComplete = (id) => {
  return {
    type: TODO_COMPLETE,
    payload: id,
  };
};

export const todoPending = (id) => {
  return {
    type: TODO_PENDING,
    payload: id,
  };
};

export const todoRemove = (id) => {
  return {
    type: TODO_REMOVE,
    payload: id,
  };
};

export default { todoAdd, todoComplete, todoPending, todoRemove };
