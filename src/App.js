import styles from './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import BattleSelectionContainer from './containers/BattleSelectionContainer';
import ThreeTestContainer from './containers/ThreeTestContainer';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/battle-selection" component={BattleSelectionContainer} />
          <Route exact path="/three-test" component={ThreeTestContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
