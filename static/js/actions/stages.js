import { v4 } from 'node-uuid';

export const addStage = (params) => ({
  ...params,
  type: 'ADD_STAGE',
  stageId: v4()
});

export const updateStage = (stageId, newStageInfo) => ({
  type: 'UPDATE_STAGE',
  stageId,
  newStageInfo,
})
