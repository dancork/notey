import React from 'react'
import { connect } from 'react-redux'

let nextNoteID = 0

const AddNoteButton = connect()(
  ({ dispatch }) => (
    <button onClick={() => {
      dispatch({
        type: 'ADD_NOTE',
        id: nextNoteID++
      })
    }}>
      Add Note
    </button>
  )
)

export default AddNoteButton
