import React from 'react'
import { connect } from 'react-redux'

import Editor from './editor'

const mapStateToProps = (state) => ({
  show: state.selectedNoteID !== false
})

const NoteEditor = connect( mapStateToProps )( ({ show }) => show && <Editor /> )

export default NoteEditor
