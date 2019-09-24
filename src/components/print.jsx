import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';
import ReactToPrint from 'react-to-print';

import Reset from './reset';
import ComponentToPrint from '../containers/component_to_print';
import logo from '../../assets/images/icon.png';

import { printingToogle } from '../actions/index';

class Print extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  startPrinting = () => {
    this.setState({ open: true });
    this.props.printingToogle(true);
  }

  cancelPrinting = () => {
    this.setState({ open: false });
    this.props.printingToogle(false);
  }

  removePrintingElement = () => {
    this.props.printingToogle(false);
  }

  handleReview = (event) => {
    event.preventDefault();
    const popUp = typeformEmbed.makePopup(
      'https://vizz.typeform.com/to/IhOm3d',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: () => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    );
    popUp.open();
  }

  render() {
    return (
      <div className="print">
        <ReactToPrint
          trigger={() => <button className="btn  btn-success" ref={(el) => { this.printingBtn = el; }} onClick={this.startPrinting}>Print</button>}
          content={() => this.componentToPrintRef}
          onBeforeGetContent={this.startPrinting}
          onAfterPrint={this.removePrintingElement}
        />
        <Popup
          modal
          position="right center"
          open={this.state.open}
          onClose={this.cancelPrinting}
        >
          <form onSubmit={this.handleSubmit} >
            <div className="gradient-square">
              <h5 className="gradient-square-text">Thanks for using</h5>
              <img src={logo} className="print-icon" alt="VizzMD logo" height="80" width="70" />
            </div>
            <h2 className="print-pop-up-text">Printing..</h2>
            <div className="print-btns">
              <Reset />
              <button onClick={this.handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Tell us what you think!</button>
            </div>
          </form>
        </Popup>
        <ComponentToPrint ref={(el) => { this.componentToPrintRef = el; }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    printing: state.printing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { printingToogle },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Print);
