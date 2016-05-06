import React, { Component } from 'react'
import { connect } from 'react-redux'

import NoteList from './note_list'
import { orderer } from '../lib/helpers'

const getOrderedNoteIDs = (notes, order) => {
  switch (order) {
    case 'UPDATED_DESC':
      return notes.sort(orderer('last_updated','DESC')).map(n => n.id)
  }
}

const mapStateToProps = (state) => {
  return {
    notes: getOrderedNoteIDs(state.notes, state.noteOrder)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick: (id) => {
      dispatch({
        type: 'CHANGE_SELECTED_NOTE',
        id: note.id
      })
    }
  }
}

const OrderedNoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)

export default OrderedNoteList
