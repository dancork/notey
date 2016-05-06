import React from 'react'

const ListItem = ({ children, id, onClick }) => (
  <li onClick={() => { onClick(id) }}>
    {children}
  </li>
)

export default ListItem
