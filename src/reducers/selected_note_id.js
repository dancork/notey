const selectedNoteID = (state = false, action) => {
  if (action.type === 'CHANGE_SELECTED_NOTE') {
    return action.id
  }
  return state
}

export default selectedNoteID
