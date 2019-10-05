
import React, { Component, Fragment } from 'react';

import PatientRef from '../PatientRef';
import Date from '../../components/Date';
import Brand from '../../components/Brand';
import MusclesTable from '../MusclesTable';
import FaceBody from '../body/FaceBody';
import PrintPopUp from './PrintPopUp';

class ComponentToPrint extends Component {
  componentDidMount() {
    window.print();
  }

  render() {
    return (
      <Fragment>
        <PrintPopUp />
        <div id="printComponent">
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
              <FaceBody svgViewBox="-18 0 700 2830" bodySide="front" />
            </div>
            <div className="print-body-part">
              <FaceBody svgViewBox="717 0 700 2840" bodySide="back" />
            </div>
            <div className="print-table">
              <MusclesTable />
            </div>
            <div className="print-body-part">
              <FaceBody svgViewBox="-18 0 700 2840" bodySide="front" />
            </div>
            <div className="print-body-part">
              <FaceBody svgViewBox="675 0 700 2830" bodySide="back" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ComponentToPrint;
