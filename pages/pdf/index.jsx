import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Recap from '../../src/components/Recap';
import PrintNSavePopUp from '../../src/components/printNSaveElements/PrintNSavePopUp';


const pdfPage = () => {
  return (
    <Fragment>
      <PrintNSavePopUp gradientText="Generating Pdf.." function="save" />
      <Recap />
    </Fragment>
  );
};

export default connect(state => state)(pdfPage);
