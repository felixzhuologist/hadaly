import { combineReducers } from 'redux';
import job from './job';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        ...state,
        [action.id]: job(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return [...state, action.id];
    default:
      return state;
  }
};

const jobs = combineReducers({
  byId,
  allIds
});

export default jobs;

const getAllJobs = (state) =>
  state.allIds.map(id => state.byId[id]);