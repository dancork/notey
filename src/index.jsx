import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'
import reducers from './reducers'

// COMPONENTS
render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
)
