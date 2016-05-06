const nextNoteID = (state = 0, action) => {
  if (action.type === 'ADD_NOTE') {
    return ++state
  }
  return state
}

export default nextNoteID
