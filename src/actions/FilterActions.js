import {
  FILTER_VIEW_ALL, FILTER_VIEW_PENDING,
  FILTER_VIEW_COMPLETED } from '../constants/action-types';

export const filterViewAll = () => {
  return {
    type: FILTER_VIEW_ALL,
  };
};

export const filterViewPending = () => {
  return {
    type: FILTER_VIEW_PENDING,
  };
};

export const filterViewCompleted = () => {
  return {
    type: FILTER_VIEW_COMPLETED,
  };
};

export default { filterViewAll, filterViewPending, filterViewCompleted };
