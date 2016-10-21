const job = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        id: action.id,
        company: action.company,
        position: action.position,
        url: action.url,
        contact: action.contact,
        notes: action.notes,
      }
    default:
      return state
  }
}

export default job;