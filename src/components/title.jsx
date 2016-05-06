import React from 'react'

const Title = ({ onChange, id, title }) => (
  <input onChange={(event) => { onChange({ id, title: event.currentTarget.value }) }} value={title} />
)

export default Title
