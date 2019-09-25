import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';
import NotToPrint from './hoc/not_to_print';
// import ReactToPrint from 'react-to-print';

import { Document, Page } from '@react-pdf/renderer';

import Reset from './reset';
import ComponentToPrint from '../containers/component_to_print';
import BrandWhite from '../components/brand_white';

import { printingToogle } from '../actions/index';

class Print extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  startPrinting = () => {
    this.setState({ open: true });
    this.props.printingToogle(true);
    // const printableComponent = document.getElementById('printComponent').innerHTML;
    setTimeout(() => {
      // const printComponent = document.getElementById('printComponent').innerHTML;
      // const orderHtml = `<html><head><title></title></head><body>${printComponent}</body></html>`;
      // const oldPage = document.body.innerHTML;
      // document.body.innerHTML = orderHtml;

      window.print();
      // this.props.printingToogle(false);
      // this.setState({ open: true });
      // this.props.printingToogle(false);
    }, 10);
    // console.log(this.componentToPrintRef);
    // this.printIFrame.contentWindow.document.open();
    // this.printIFrame.contentWindow.document.write(this.componentToPrintRef.outerHTML);
    // this.printIFrame.contentWindow.document.close();
    // this.printIFrame.contentWindow.focus();
    // this.printIFrame.contentWindow.print();
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
        <NotToPrint>
          <button className="btn  btn-success" ref={(el) => { this.printingBtn = el; }} onClick={this.startPrinting}>Print</button>
          <iframe id="print-iFrame" title="printIFrame" ref={(el) => { this.printIFrame = el; }} />
          <Popup
            modal
            position="right center"
            open={this.state.open}
            onClose={this.cancelPrinting}
          >
            <form onSubmit={this.handleSubmit} >
              <div className="gradient-square">
                <h5 className="gradient-square-text">Thanks for using</h5>
                <BrandWhite />
              </div>
              <h2 className="print-pop-up-text">Printing...</h2>
              <div className="print-btns">
                <Reset />
                <button onClick={this.handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Tell us what you think!</button>
              </div>
            </form>
          </Popup>
        </NotToPrint>
        <div style={{ display: "block" }} ><ComponentToPrint printableId="printComponent" ref={(el) => { this.componentToPrintRef = el; }} /></div>
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
