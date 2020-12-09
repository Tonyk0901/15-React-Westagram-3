import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import LoginPark from './Pages/chaehoonpark/Login/Login';
// import MainPark from './Pages/chaehoonpark/Main/Main';
// import LoginLee from './Pages/janghyeonlee/Login/Login';
// import MainLee from './Pages/janghyeonlee/Main/Main';
import LoginKim from './Pages/sunghoonkim/Login/Login';
import MainKim from './Pages/sunghoonkim/Main/Main';
// import LoginLim from './Pages/daehoim/Login/Login';
// import MainLim from './Pages/daehoim/Main/Main';
// import LoginIm from './Pages/taejinlim/Login/Login';
// import MainIm from './Pages/taejinlim/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/LoginLee" component={LoginLee} />
          <Route exact path="/LoginPark" component={LoginPark} /> */}
          <Route exact path="/LoginKim" component={LoginKim} />
          {/* <Route exact path="/LoginLim" component={LoginLim} />
          <Route exact path="/LoginIm" component={LoginIm} />

          <Route exact path="/MainLee" component={MainLee} />
          <Route exact path="/MainPark" component={MainPark} /> */}
          <Route exact path="/MainKim" component={MainKim} />
          {/* <Route exact path="/MainLim" component={MainLim} />
          <Route exact path="/MainIm" component={MainIm} /> */}
        </Switch>
      </Router>
    )
  }
}


export default Routes;
