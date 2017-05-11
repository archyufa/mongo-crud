import React from 'react'
import { render } from 'react-dom'
require('bootstrap')
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Base from './components/Layout/Base'
import Header from './components/Header'
import Main from './components/Main'
import Find from './components/Find'
render(
  (
    <Base>
      <Header />
      <Main />
      <Find />
    </Base>
  ), document.getElementById('app'))
