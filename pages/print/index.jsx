import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

import Recap from '../../src/components/Recap';
import PrintNSavePopUp from '../../src/components/printNSaveElements/PrintNSavePopUp';


class printPage extends Component {
  componentDidMount() {
    window.print();
  }

  render() {
    return (
      <Fragment>
        <PrintNSavePopUp gradientText="Printing.." />
        <Recap />
      </Fragment>
    );
  }
}

export default connect(state => state)(printPage);
