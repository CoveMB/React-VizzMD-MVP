import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';
import ReactToPrint from 'react-to-print';

import Reset from './reset';
import ComponentToPrint from '../containers/component_to_print';

import { printing } from '../actions/index';

class Print extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  startPrinting = () => {
    this.setState({ open: true });
    this.props.printing(true);
  }

  cancelPrinting = () => {
    this.setState({ open: false });
    this.props.printing(false);
  }

  removePrintingElement = () => {
    this.props.printing(false);
  }

  handleReview = (event) => {
    console.log(this.state);
    event.preventDefault();
    const popUp = typeformEmbed.makePopup(
      'https://vizz.typeform.com/to/IhOm3d',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: () => {
          // window.location.reload();
        }
      }
    );
    popUp.open();
    window.location.reload();
  }

  render() {
    console.log(this.state);
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
              <h5 id="editUserModallabel" className="gradient-square-text">Merci d'avoir utiliser VizzMD</h5>
            </div>
            <h2 className="print-pop-up-text">Impression en cours..</h2>
            <div className="print-btns">
              <Reset />
              <button onClick={this.handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Donnez nous votre avis!</button>
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
    { printing },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Print);
