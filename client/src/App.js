import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// import tags for pages


const App = () => {
  return (
    <Router>
      <div>
        {/* link tags */}
        <Switch>
          <Route exact path="/">
            {/* page tags */}

          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App