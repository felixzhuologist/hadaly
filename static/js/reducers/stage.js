const state = (state, action) => {
  switch (action.type) {
    case 'ADD_STAGE':
      return {
        stageId: action.stageId,
        type: action.stageType,
        interviewer: action.interviewer,
        date: action.date,
        responseDate: action.responseDate,
        notes: action.notes,
      }
    case 'UPDATE_STAGE':
      return {
        ...state,
        ...action.newStageInfo
      }
    default:
      return state
  }
}

export default state;