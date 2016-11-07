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
    default:
      return state
  }
}

export default state;