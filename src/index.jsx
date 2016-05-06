import React, { Component } from 'react'
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
  if(action.type === 'UPDATE_NOTE_CONTENT') {
    return state.map((note) => {
      if (note.id !== action.id) return note
      return {
        ...note,
        content: action.content
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

const App = () => {
  const { notes, selectedNoteID } = store.getState()
  return (
    <div className="app">
      <AddNoteButton />
      <NoteList />
      {selectedNoteID !== false && <Note />}
    </div>
  )
}

const AddNoteButton = () => (
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
)

class NoteList extends Component {
  render() {
    return (
      <ul>
        { store.getState().notes.map((n) => (
          <NoteListItem id={n.id} key={n.id} />
        )) }
      </ul>
    )
  }
}

class NoteListItem extends Component {
  render() {
    const { id } = this.props
    const { notes } = store.getState()
    const note = notes.filter((n) => { return n.id === id })[0]
    return (
      <ListItem
        onClick={()=>{
          store.dispatch({
            type: 'CHANGE_SELECTED_NOTE',
            id: note.id
          })
        }}>
        {note.title || 'untitled'}
      </ListItem>
    )
  }
}

const ListItem = ({ onClick, children }) => (
  <li onClick={() => { onClick() }}>
    {children}
  </li>
)

const Note = () => (
  <div>
    <NoteTitle />
    <NoteContent />
  </div>
)

class NoteTitle extends Component {
  render() {
    const { notes, selectedNoteID } = store.getState()
    return (
      <Title
        onChange={(event) => {
          store.dispatch({
            type: 'UPDATE_NOTE_TITLE',
            id: selectedNoteID,
            title: event.currentTarget.value
          })
        }}
        value={notes.filter((n) => { return n.id === selectedNoteID })[0].title || ''}
      />
    )
  }
}

const Title = ({ onChange, value }) => (
  <input onChange={(event) => { onChange (event) }} value={value} />
)

class NoteContent extends Component {
  render() {
    const state = store.getState()
    return (
      <Content
        onChange={(event) => {
          store.dispatch({
            type: 'UPDATE_NOTE_CONTENT',
            id: state.selectedNoteID,
            content: event.currentTarget.value
          })
        }}
        value={state.notes.filter((note) => { return note.id === state.selectedNoteID })[0].content || ''}
      />
    )
  }
}

const Content = ({ onChange, value }) => (
  <textarea onChange={(event) => { onChange (event) }} value={value} />
)

const renderApp = () => {
  render( <App />, document.getElementById('app') )
}

store.subscribe(renderApp)
renderApp()
