import React from 'react'
import { connect } from 'react-redux'

import ListItem from './list_item'

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.filter((n) => n.id === ownProps.id )[0]
  return {
    id: note.id,
    children: note.title || 'untitled'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => {
    dispatch({
      type: 'CHANGE_SELECTED_NOTE',
      id
    })
  }
})

const NoteListItem = connect( mapStateToProps, mapDispatchToProps )( ListItem )

export default NoteListItem
