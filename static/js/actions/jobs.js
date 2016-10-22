import { v4 } from 'node-uuid';

export const addJob = (params) => ({
  ...params,
  type: 'ADD_JOB',
  id: v4()
});