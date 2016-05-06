import React from 'react'
import { connect } from 'react-redux'

import NoteTitle from './note_title'
import NoteContent from './note_content'

const mapStateToProps = (state) => ({
  show: state.selectedNoteID !== false
})

const NoteEditor = connect( mapStateToProps )(
  ({ show }) => (
    show && (
      <div>
        <NoteTitle />
        <NoteContent />
      </div>
    )
  )
)

export default NoteEditor
