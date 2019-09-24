import React, { Component } from 'react';

import BodyMucle from './body_muscle';

class BodyMusclesCouple extends Component {
  shouldComponentUpdate(nextProps) {
    return ((this.props.muscleRightForce !== nextProps.muscleRightForce)
      ||
      this.props.muscleLeftForce !== nextProps.muscleLeftForce);
  }

  render() {
    const {
      muscleName,
      muscleRightSVGPath,
      muscleRightForce,
      muscleLeftSVGPath,
      muscleLeftForce } = this.props;
    return (
      [
        <BodyMucle
          key={`${muscleName}-right`}
          muscleId={`${muscleName}-right`}
          muscleSVGPath={muscleRightSVGPath}
          muscleForce={muscleRightForce}
        />,
        <BodyMucle
          key={`${muscleName}-left`}
          muscleId={`${muscleName}-left`}
          muscleSVGPath={muscleLeftSVGPath}
          muscleForce={muscleLeftForce}
        />
      ]
    );
  }
}

export default BodyMusclesCouple;
