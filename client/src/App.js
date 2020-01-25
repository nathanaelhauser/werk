import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import tags for pages
import About from './pages/About'
import Quickstart from './pages/Quickstart'
import Nav from './components/Nav'
import NavDrawer from './components/NavDrawer'
import DrawerContext from './utils/DrawerContext'

const App = () => {

  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  return (
<<<<<<< HEAD
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
=======
    <DrawerContext.Provider value={drawerState}>
      <Router>
        <div>
          {/* link tags */}
          <Nav />
          <NavDrawer />
          <Switch>
            <Route exact path="/">
              {/* page tags */}
              <About />
            </Route>
          </Switch>
        </div>
      </Router>      
    </DrawerContext.Provider>

>>>>>>> c25a5a70df2f881993f0258e5ffb44a264c576b4
  )
}

export default App