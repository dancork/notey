import React from 'react'

const Content = ({ content, id, onChange }) => (
  <textarea onChange={(event) => { onChange ({ id, content: event.target.value }) }} value={content} />
)

export default Content
