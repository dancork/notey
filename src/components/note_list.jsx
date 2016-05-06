import React from 'react'
import { connect } from 'react-redux'

import NoteListItem from './note_list_item'

const NoteList = ({ notes }) => (
  <ul>
    {notes.map((id) => ( <NoteListItem id={id} key={id} /> ))}
  </ul>
)

export default NoteList
