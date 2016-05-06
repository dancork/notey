import { combineReducers } from 'redux'

import { timestamp } from './lib/helpers'

const notes = (state = [], action) => {
  if (action.type === 'ADD_NOTE') {
    return [
      ...state,
      {
        id: action.id,
        last_updated: timestamp()
      }
    ]
  }
  if(action.type === 'UPDATE_NOTE_TITLE') {
    return state.map((note) => {
      if (note.id !== action.id) return note
      return {
        ...note,
        title: action.title,
        last_updated: timestamp()
      }
    });
  }
  if(action.type === 'UPDATE_NOTE_CONTENT') {
    return state.map((note) => {
      if (note.id !== action.id) return note
      return {
        ...note,
        content: action.content,
        last_updated: timestamp()
      }
    });
  }
  return state
}

const selectedNoteID = (state = false, action) => {
  if (action.type === 'CHANGE_SELECTED_NOTE') {
    return action.id
  }
  return state
}

const noteOrder = (state = 'UPDATED_DESC', action) => {
  if (action.type === 'CHANGE_NOTE_ORDER') {
    return action.order
  }
  return state
}

export default combineReducers({
  notes,
  selectedNoteID,
  noteOrder
})
