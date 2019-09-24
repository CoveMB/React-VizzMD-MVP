import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMuscle } from '../../actions/index';

class BodyMusclesCouple extends Component {
  componentDidMount() {
    this.applyColorToMuscle(this.props.muscleForce, this.muscleSVG);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.muscleForce !== nextProps.muscleForce);
  }

  componentDidUpdate() {
    this.applyColorToMuscle(this.props.muscleForce, this.muscleSVG);
  }

  applyColorToMuscle = (force, muscle) => {
    switch (force) {
      case 1:
        muscle.classList.remove(...muscle.classList);
        muscle.classList.add("one-force");
        break;
      case 2:
        muscle.classList.remove(...muscle.classList);
        muscle.classList.add("two-force");
        break;
      case 3:
        muscle.classList.remove(...muscle.classList);
        muscle.classList.add("three-force");
        break;
      case 4:
        muscle.classList.remove(...muscle.classList);
        muscle.classList.add("four-force");
        break;
      case 5:
        muscle.classList.remove(...muscle.classList);
        muscle.classList.add("five-force");
        break;
      default:
        muscle.classList.remove(...muscle.classList);
        break;
    }
  }

  handleClickMuscle = (event) => {
    event.persist();
    this.props.selectMuscle(event.target.getAttribute('id'));
  }

  render() {
    return (
      <path id={this.props.muscleId} ref={(muscleSVG) => { this.muscleSVG = muscleSVG; }} fill=" #FFFFFF" onClick={this.handleClickMuscle} d={this.props.muscleSVGPath} stroke="#CD0F0F" strokeWidth="7" />
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
