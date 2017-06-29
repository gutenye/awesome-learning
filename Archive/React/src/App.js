import React from 'react'
import Root from './Root'
import Home from './Home'
import Quotes from './Quotes'
import QuotesShow from './QuotesShow'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Root} >
          <IndexRoute path='/' component={Home} />
          <Route path='quotes' component={Quotes}>
            <Route path=':id' component={QuotesShow} />
          </Route>
        </Route>
      </Router>
    )
  }
}

export default App
