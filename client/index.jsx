import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from '../shared/components/Root'
import routes from '../shared/routes'

if (module.hot) module.hot.accept()

render(
  <Root history={browserHistory} />,
  document.getElementById('app')
)
