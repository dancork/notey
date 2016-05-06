import React from 'react'
import { connect } from 'react-redux'

import Title from './title'

const mapStateToProps = (state) => {
  return {
    id: state.selectedNoteID,
    title: state.notes.filter((n) => { return n.id === state.selectedNoteID })[0].title || ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: ({ id, title }) => {
      dispatch({ type: 'UPDATE_NOTE_TITLE', id, title })
    }
  }
}

const NoteTitle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Title)

export default NoteTitle
