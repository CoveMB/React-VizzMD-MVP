import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMuscle } from '../actions/index';

class TableRow extends PureComponent {
  handleClickMuscle = (event) => {
    event.persist();
    this.props.selectMuscle(event.target.getAttribute('id'));
  }

  render() {
    return (
      <tr >
        <td><button className="btn btn-secondary btn-force" id={this.props.rightMuscleId} onClick={this.handleClickMuscle}>{this.props.rightForce}<i className="arrow down" /></button></td>
        <td>{this.props.name}</td>
        <td>{this.props.nerf}</td>
        <td>{this.props.root}</td>
        <td><button className="btn btn-secondary btn-force" id={this.props.leftMuscleId} onClick={this.handleClickMuscle}>{this.props.leftForce}<i className="arrow down" /></button></td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
