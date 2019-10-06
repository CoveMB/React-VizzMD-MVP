import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMuscle } from '../../actions/index';

class BodyMusclesCouple extends Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.muscleForce !== nextProps.muscleForce);
  }

  muscleClass = () => {
    switch (this.props.muscleForce) {
      case 1:
        return "one-force";
      case 2:
        return "two-force";
      case 3:
        return "three-force";
      case 4:
        return "four-force";
      case 5:
        return "five-force";
      default:
        return "zero-force";
    }
  }

  handleClickMuscle = (event) => {
    event.persist();
    this.props.selectMuscle(event.target.getAttribute('id'));
  }

  render() {
    return (
      <path id={this.props.muscleId} className={this.muscleClass()} ref={(muscleSVG) => { this.muscleSVG = muscleSVG; }} fill=" #FFFFFF" onClick={this.handleClickMuscle} d={this.props.muscleSVGPath} stroke="#CD0F0F" strokeWidth="7" />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(BodyMusclesCouple);
