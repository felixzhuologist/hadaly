const job = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        id: action.stageId,
        company: action.company,
        title: action.title,
        url: action.url,
        contact: action.contact,
        notes: action.notes,
        stages: [],
      }
    case 'ADD_STAGE':
      return {
        ...state,
        stages: [...state.stages, action.stageId]
      }
    default:
      return state
  }
}

export default job;