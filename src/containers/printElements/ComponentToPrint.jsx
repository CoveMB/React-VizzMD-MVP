
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PatientRef from '../PatientRef';
import Date from '../../components/Date';
import Brand from '../../components/Brand';
import MusclesTable from '../MusclesTable';
import FrontBody from '../body/FrontBody';
import BackBody from '../body/BackBody';

class ComponentToPrint extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.printing !== this.props.printing);
  }

  shouldPrintComponentBuild = () => {
    if (this.props.printing) {
      return (
        <div id={this.props.printableId}>
          <div className="print-container print-brand-section">
            <div className="print-item">
              <Brand />
            </div>
            <div className="print-item">
              <div className="print-info">
                <Date />
                <PatientRef />
              </div>
            </div>
          </div>
          <div className="print-container">
            <div className="print-body-part">
              <FrontBody frontBodyViewbox="-18 0 700 2830" />
            </div>
            <div className="print-body-part">
              <BackBody backBodyViewBox="717 0 700 2840" />
            </div>
            <div className="print-table">
              <MusclesTable />
            </div>
            <div className="print-body-part">
              <BackBody backBodyViewBox="-18 0 700 2840" />
            </div>
            <div className="print-body-part">
              <FrontBody frontBodyViewbox="675 0 700 2830" />
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
