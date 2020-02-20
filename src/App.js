
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from './stores/store'
import Home from './components/home'
import About from './components/about'
import AppLayout from './components/app-layout'
import Calendar from './components/calendar'
import Help from './components/help'
import Login from './components/login'
import Logout from './components/logout'
import NavHeader from './components/nav-header'
import workerSetup from './workers/worker-setup'
import workerScript from './workers/worker'

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  const [initialized, setInitialized] = useState(false);
  const { ['webWorker']: [webWorker, setWebWorker] } = useContext(StoreContext);

  const [num, setNum] = useState(0);
  let worker = null;

  useEffect(() => {
    if (!initialized) {
      worker = new workerSetup(workerScript);
      worker.onerror = onError;
      worker.onmessage = onMessage;
      setWebWorker(worker);
      setInitialized(true);
    }
  }, []);

  return (
    <Router>
      <>
          <NavHeader/>
      </>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/app" component={AppLayout} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/help" component={Help} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Router>
  )

  function onError(error) {
    console.log(error)
  }

  function onMessage(e) {
    console.log("[MAIN] MSG FROM WORKER: ", e.data);
  }
}

export default App;
