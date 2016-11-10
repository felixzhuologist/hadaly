import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import without from 'lodash/without';

import job from './job';


const jobsById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JOB':
    case 'ADD_STAGE':
      return {
        ...state,
        [action.id]: job(state[action.id], action),
      };
    case 'DELETE_JOB':
      return omit(state, action.id)
    default:
      return state;
  }
};

const allJobIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return [...state, action.id];
    case 'DELETE_JOB':
      return without(state, action.id)
    default:
      return state;
  }
};

const jobs = combineReducers({
  jobsById,
  allJobIds
});

export default jobs;

const getAllJobs = (state) =>
  state.allJobIds.map(id => state.jobsById[id]);