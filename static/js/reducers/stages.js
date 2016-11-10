import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import without from 'lodash/without';

import stage from './stage'
import {getStageTitle, getStageSubtitle, stage_type_to_icon} from './stagePresentation'


const stagesById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_STAGE':
    case 'UPDATE_STAGE':
      return {
        ...state,
        [action.stageId]: stage(state[action.stageId], action)
      }
    case 'DELETE_JOB':
      return omit(state, action.stageIds)
    default:
      return state;
  }
}

const allStageIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STAGE':
      return [...state, action.stageId]
    case 'DELETE_JOB':
      return without(state, ...action.stageIds)
    default:
      return state;
  }
}

const stages = combineReducers({
  stagesById,
  allStageIds
});

export const isUnaryStage = (stage) => {
  return stage.type == 'RECRUITER' || stage.type == 'OFFER' || stage.type == 'REJECTION'
}

export const getStagesForJob = (state, jobId) => {
  let stageIds = state.jobs.jobsById[jobId].stages
  return stageIds.map(id => state.stages.stagesById[id])
}

export const getPresentationProps = (stages) => {
  return stages.map(stage => ({
    stageTitle: getStageTitle(stage),
    timeSubtitle: getStageSubtitle(stage),
    iconName: stage_type_to_icon[stage.type], 
    key: stage.id,
  }))
}

const getAllStages = (state) => state.allStageIds.map(id => state.stagesById[id]);

export default stages;