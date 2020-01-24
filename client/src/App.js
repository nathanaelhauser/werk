import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Drawer from './components/Drawer'
import DrawerContext from './utils/DrawerContext'
// import tags for pages
import About from './pages/About'

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
    <DrawerContext.Provider value={drawerState}>
      <Router>
        <div>
          {/* link tags */}
          <Drawer />
          <Switch>
            <Route exact path="/">
              {/* page tags */}
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </DrawerContext.Provider>
  )
}

export default App