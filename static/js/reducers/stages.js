import { combineReducers } from 'redux';
import stage from './stage'

const stagesById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_STAGE':
      return {
        ...state,
        [action.id]: stage(state[action.id], action)
      }
    default:
      return state;
  }
}

const allStageIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STAGE':
      return [...state, action.stageId]
    default:
      return state;
  }
}

const stages = combineReducers({
  stagesById,
  allStageIds
});

const getAllStages = (state) =>
  state.allStageIds.map(id => state.stagesById[id]);

export default stages;