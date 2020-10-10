
export function personaReducer(state = {}, action) {
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
