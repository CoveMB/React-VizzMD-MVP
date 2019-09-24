import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableRow from './table_row';

class MusclesTabe extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.muscles !== this.props.muscles);
  }

  buildTable = () => {
    return this.props.muscles.map((muscleObj) => {
      return (
        <TableRow
          rightMuscleId={`${muscleObj.name}-right`}
          leftMuscleId={`${muscleObj.name}-left`}
          name={muscleObj.name}
          rightForce={muscleObj.rightForce}
          nerf={muscleObj.nerf}
          root={muscleObj.root}
          leftForce={muscleObj.leftForce}
          key={muscleObj.name}
        />
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Droite</th>
            <th scope="col">Muscle</th>
            <th scope="col">Nerf</th>
            <th scope="col">Racine</th>
            <th scope="col">Gauche</th>
          </tr>
        </thead>
        <tbody>
          {this.buildTable()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    muscles: state.muscles
  };
}

export default connect(mapStateToProps)(MusclesTabe);
