const state = (state, action) => {
  switch (action.type) {
    case 'ADD_STAGE':
      return {
        id: action.stageId,
        type: action.type,
        interviewer: action.interviewer,
        date: action.date,
        time: action.time,
        notes: action.notes,
      }
    default:
      return state
  }
}

export default state;