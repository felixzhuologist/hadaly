import { combineReducers } from 'redux';
import byId, * as fromId from './byId';
import jobs from './jobs';
import stages from './stages';

const rootReducer = combineReducers({
  jobs,
  stages
})

export default rootReducer;