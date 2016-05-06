import React from 'react'

import AddNoteButton from './add_note_button'
import OrderedNoteList from './ordered_note_list'
import NoteEditor from './note_editor'

const App = () => (
  <div className="app">
    <AddNoteButton />
    <OrderedNoteList />
    <NoteEditor />
  </div>
)

export default App
