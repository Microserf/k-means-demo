const DEFAULT_STATE = {
  name: 'Alannah',
  concern: 'hardware'
}


export function personaReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload
      }

    case 'concern':
      return {
        ...state,
        concern: action.payload
      }

    default:
      return state
  }
}
