import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'

function notes(state = [], action) {
  if (action.type === 'ADD_NOTE') {
    return [
      ...state,
      {
        id: action.id
      }
    ]
  }
  if(action.type === 'UPDATE_NOTE_TITLE') {
    return state.map((note) => {
      if (note.id !== action.id) return note
      return {
        ...note,
        title: action.title
      }
    });
  }
  return state
}

function selectedNoteID(state = false, action) {
  if (action.type === 'CHANGE_SELECTED_NOTE') {
    return action.id
  }
  return state
}

const store = createStore(combineReducers({
  notes,
  selectedNoteID
}))
let nextNoteID = 0

function App() {
  const { notes, selectedNoteID } = store.getState()
  return (
    <div className="app">
      <button
        onClick={() => {
          store.dispatch({
            type: 'ADD_NOTE',
            id: nextNoteID++
          })
        }}
      >
        add
      </button>
      <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={()=>{
            store.dispatch({
              type: 'CHANGE_SELECTED_NOTE',
              id: note.id
            })
          }}
        >
          {note.title || 'untitled'}
        </li>
      ))}
      </ul>
      {selectedNoteID}
      {selectedNoteID !== false &&
      <div>
        <input
          onKeyUp={(event) => {
            store.dispatch({
              type: 'UPDATE_NOTE_TITLE',
              id: selectedNoteID,
              title: event.currentTarget.value
            })
          }}
          value={notes.filter((note) => { return note.id === selectedNoteID })[0].title}
        />
        <textarea />
      </div>
      }
    </div>
  )
}

function renderApp() {
  render( <App />, document.getElementById('app') )
}

store.subscribe(renderApp)
renderApp()
