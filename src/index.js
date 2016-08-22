import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      {/* <Route path ='detail/:id' component={Detail}/> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
