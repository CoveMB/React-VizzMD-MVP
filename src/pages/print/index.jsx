import React from 'react';
import { connect } from "react-redux";

import ComponentToPrint from '../../containers/printElements/ComponentToPrint';


const printPage = () => {
  return (
    <ComponentToPrint />
  );
};

export default connect(state => state)(printPage);
