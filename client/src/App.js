import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// import tags for pages
import About from './pages/About'
import Quickstart from './pages/Quickstart'

const App = () => {
  return (
    <Router>
      <div>
        {/* link tags */}
        <Switch>
          <Route exact path="/">
            {/* page tags */}
            <About />
          </Route>
          <Route path="/quickstart">
            <Quickstart />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App