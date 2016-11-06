import { combineReducers } from 'redux';
import stage from './stage'
import {getStageTitle, getStageSubtitle, stage_type_to_icon} from './stagePresentation'

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

export const getStagesForJob = (state, jobId) => {
  let stageIds = state.jobs.jobsById[jobId].stages
  return stageIds.map(id => state.stages.stagesById[id])
}

const getPresentationProps = (stages) => {
  return stages.map(stage => ({
    stageTitle: getStageTitle(stage),
    timeSubtitle: getStageSubtitle(stage),
    iconName: stage_type_to_icon[stage.type], 
    key: stage.id,
  }))
}

const getAllStages = (state) => state.allStageIds.map(id => state.stagesById[id]);

export default stages;