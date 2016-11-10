import { v4 } from 'node-uuid';

export const addJob = (params) => ({
  ...params,
  type: 'ADD_JOB',
  id: v4()
});

export const deleteJob = (job) => ({
  type: 'DELETE_JOB',
  id: job.jobId,
  stageIds: job.stages.map(stage => stage.stageId)
})
