const nextNoteID = (state = 0, action) => {
  if (action.type === 'INCREMENT_NOTE_ID') {
    return ++state
  }
  return state
}

export default nextNoteID
