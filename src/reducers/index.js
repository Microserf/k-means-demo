const DEFAULT_STATE = {
  name: 'Alannah',
  job: 'hardware'
}


export function personaReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload
      }

    case 'job':
      return {
        ...state,
        job: action.payload
      }

    default:
      return state
  }
}
