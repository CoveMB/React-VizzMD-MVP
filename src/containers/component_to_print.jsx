import React, { Component } from 'react';
import { connect } from 'react-redux';

import PatientRef from './patient_ref';
import Brand from '../components/brand';
import MusclesTabe from './muscles_table';
import FrontBody from './body/front_body';
import BackBody from './body/back_body';

class ComponentToPrint extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.printing !== this.props.printing);
  }

  shouldPrintComponentBuild = () => {
    if (this.props.printing) {
      return (
        <div >
          <div className="print-container print-brand-section">
            <div className="print-item">
              <Brand />
            </div>
            <div className="print-item">
              <PatientRef />
            </div>
          </div>
          <div className="print-container">
            <div className="print-body-part">
              <FrontBody frontBodyViewbox="-117 0 800 2830" />
            </div>
            <div className="print-body-part">
              <BackBody backBodyViewBox="717 0 800 2840" />
            </div>
            <div className="print-table">
              <MusclesTabe />;
            </div>
            <div className="print-body-part">
              <BackBody backBodyViewBox="-108 0 800 2840" />
            </div>
            <div className="print-body-part">
              <FrontBody frontBodyViewbox="675 0 800 2830" />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.shouldPrintComponentBuild()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    printing: state.printing
  };
}

export default connect(mapStateToProps)(ComponentToPrint);
