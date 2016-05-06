const selectedNoteID = (state = false, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
    case 'CHANGE_SELECTED_NOTE':
      return action.id
      break
  }
  return state
}

export default selectedNoteID
