
import React from 'react'
import Home from './components/home'
import About from './components/about'
import AppLayout from './components/app-layout'
import Help from './components/help'
import Login from './components/login'
import Logout from './components/logout'
import NavHeader from './components/nav-header'

import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

function App() {
  
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/" component={Login}/>
  //       <Route path="/login" component={Login}/>
  //       <PrivateRoute path='/app' component={AppLayout} />
  //     </Switch>
  //   </Router>
  // )
  return (
    <Router>
      <>
          <NavHeader/>
      </>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/app" component={AppLayout} />
        <Route path="/help" component={Help} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Router>
  )
}

export default App;
