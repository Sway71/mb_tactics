import React from 'react';
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { BattleSelection } from '../components/BattleSelection/BattleSelection';

import { getMaps } from '../actions/mapDataActions';
import { getCharacters } from '../actions/characterDataActions';
import { getEnemies } from '../actions/enemyDataActions';
import {
  selectMap,
  selectCharacter,
  selectEnemy,
  createBattle
} from '../actions/battleConfigActions';

class BattleSelectionContainer extends React.Component {
  componentWillMount() {
    this.props.getMaps();
    this.props.getCharacters();
    this.props.getEnemies();
  }

  render() {
    const {
      history,
      battleConfig,
      mapData,
      characterData,
      enemyData
    } = this.props;

    return (
      <div>
        <BattleSelection
          history={history}
          battleConfig={battleConfig}
          mapsList={mapData.mapsList}
          charactersList={characterData.charactersList}
          enemiesList={enemyData.enemiesList}
          selectMap={this.props.selectMap}
          selectCharacter={this.props.selectCharacter}
          selectEnemy={this.props.selectEnemy}
          createBattle={this.props.createBattle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    battleConfig: state.battleConfig,
    mapData: state.mapData,
    characterData: state.characterData,
    enemyData: state.enemyData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMaps,
    getCharacters,
    getEnemies,
    selectMap,
    selectCharacter,
    selectEnemy,
    createBattle
  },
  dispatch
);
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleSelectionContainer));
