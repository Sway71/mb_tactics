import React from 'react';
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';

import { BattleSelection } from '../components/BattleSelection/BattleSelection';

import { getCharacters } from '../actions/characterDataActions';
import { getMaps } from '../actions/mapDataActions';

class BattleSelectionContainer extends React.Component {
  componentWillMount() {
    this.props.getCharacters();
    this.props.getMaps();
  }

  render() {
    const { characterData, mapData } = this.props;

    return (
      <div>
        <BattleSelection
          charactersList={characterData.charactersList}
          mapsList={mapData.mapsList}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characterData: state.characterData,
    mapData: state.mapData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCharacters,
    getMaps
  },
  dispatch
);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleSelectionContainer);
