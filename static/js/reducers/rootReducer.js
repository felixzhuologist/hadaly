import { combineReducers } from 'redux';
import byId, * as fromId from './byId';
import jobs from './jobs';

const rootReducer = combineReducers({
  jobs
})

export default rootReducer;