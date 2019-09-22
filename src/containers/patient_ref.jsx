import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PatientRef extends PureComponent {
  render() {
    return (
      <h2 className="patient-ref">{this.props.patient}</h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    patient: state.patient
  };
}

export default connect(mapStateToProps)(PatientRef);
