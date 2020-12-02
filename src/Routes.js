import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/LoginLee" component={LoginLee} />
          <Route exact path="/LoginPark" component={LoginPark} />
          <Route exact path="/LoginKim" component={LoginKim} />
          <Route exact path="/LoginLim" component={LoginLim} />
          <Route exact path="/LoginIm" component={LoginIm} />

          <Route exact path="/MainLee" component={MainLee} />
          <Route exact path="/MainPark" component={MainPark} />
          <Route exact path="/MainKim" component={MainKim} />
          <Route exact path="/MainLim" component={MainLim} />
          <Route exact path="/MainIm" component={MainIm} />
        </Switch>
      </Router>
    )
  }
}


export default Routes;
