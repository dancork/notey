import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  nextNoteID: state.nextNoteID
})

const AddNoteButton = connect(
  mapStateToProps
)(
  ({ dispatch, nextNoteID }) => (
    <button onClick={() => {
      dispatch({
        type: 'ADD_NOTE',
        id: nextNoteID
      })
      dispatch({
        type: 'INCREMENT_NOTE_ID'
      })
    }}>
      Add Note
    </button>
  )
)

export default AddNoteButton
