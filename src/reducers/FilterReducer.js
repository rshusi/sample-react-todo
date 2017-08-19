import {
  FILTER_VIEW_ALL, FILTER_VIEW_PENDING,
  FILTER_VIEW_COMPLETED } from '../constants/action-types';

let initialState = 'SHOW_ALL';

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_VIEW_ALL:
      state = 'SHOW_ALL';
      break;
    case FILTER_VIEW_PENDING:
      state = 'SHOW_PENDING';
      break;
    case FILTER_VIEW_COMPLETED:
      state = 'SHOW_COMPLETED';
      break;
    default:
      return state;
  }

  return state;
}

export default FilterReducer;
