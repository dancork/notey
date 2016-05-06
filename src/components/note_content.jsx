import React from 'react'
import { connect } from 'react-redux'

import Content from './content'

const mapStateToProps = (state) => {
  return {
    id: state.selectedNoteID,
    content: state.notes.filter((n) => { return n.id === state.selectedNoteID })[0].content || ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: ({ id, content }) => {
      dispatch({ type: 'UPDATE_NOTE_CONTENT', id, content })
    }
  }
}

const NoteContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default NoteContent
