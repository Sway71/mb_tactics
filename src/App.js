import styles from './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';
import MapSelectionContainer from './containers/MapSelectionContainer';
import ThreeTestContainer from './containers/ThreeTestContainer';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/map-selection" component={MapSelectionContainer} />
          <Route path="/three-test" component={ThreeTestContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
