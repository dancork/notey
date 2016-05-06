import { combineReducers } from 'redux'

import notes from './reducers/notes'
import selectedNoteID from './reducers/selected_note_id'
import nextNoteID from './reducers/next_note_id'
import noteOrder from './reducers/note_order'

export default combineReducers({
  notes,
  selectedNoteID,
  nextNoteID,
  noteOrder
})
