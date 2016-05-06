import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'


const timestamp = () => +new Date()

// REDUCERS
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

const store = createStore(combineReducers({
  notes,
  selectedNoteID,
  noteOrder
}))

let nextNoteID = 0



// COMPONENTS
const App = () => (
  <div className="app">
    <AddNoteButton />
    <NoteList />
    {store.getState().selectedNoteID !== false && <NoteEditor />}
  </div>
)

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

const orderer = (key, order = 'ASC') => (
  (a,b) => {
    if (a[key] < b[key]) return order === 'ASC' ? -1 : 1;
    if (a[key] > b[key]) return order === 'ASC' ? 1 : -1;
    return 0;
  }
)

class NoteList extends Component {
  render() {
    let orderedNoteIDs
    switch (store.getState().noteOrder) {
      case 'UPDATED_DESC':
      default:
        orderedNoteIDs = store.getState().notes.sort(orderer('last_updated','DESC')).map(n => n.id)
    }
    return (
      <ul>
        {orderedNoteIDs.map((id) => ( <NoteListItem id={id} key={id} /> ))}
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

const NoteEditor = () => (
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



// RENDERER
const renderApp = () => {
  render( <App />, document.getElementById('app') )
}


// SUBSCRIBE TO CHANGES
store.subscribe(renderApp)
renderApp()
