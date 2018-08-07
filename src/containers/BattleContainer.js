import React from 'react';
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { BattleRoot } from '../components/Battle/BattleRoot';

class BattleContainer extends React.Component {
  render() {
    const { params } = this.props.match;

    return (
      <BattleRoot battleId={params.battleId} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    battleConfig: state.battleConfig
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},
  dispatch
);
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleContainer));
