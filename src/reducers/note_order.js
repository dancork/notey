const noteOrder = (state = 'UPDATED_DESC', action) => {
  if (action.type === 'CHANGE_NOTE_ORDER') {
    return action.order
  }
  return state
}

export default noteOrder
