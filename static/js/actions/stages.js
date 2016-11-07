import { v4 } from 'node-uuid';

export const addStage = (params) => ({
  ...params,
  type: 'ADD_STAGE',
  stageId: v4()
});