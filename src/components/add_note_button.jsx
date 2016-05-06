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
    }}>
      Add Note
    </button>
  )
)

export default AddNoteButton
