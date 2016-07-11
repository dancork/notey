import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './components/app'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
