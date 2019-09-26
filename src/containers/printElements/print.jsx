import React, { PureComponent } from 'react';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

import Reset from '../../components/reset';
import BrandWhite from '../../components/brand_white';

class Print extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  startPrinting = () => {
    this.setState({ open: true });
    const iframe = document.frames ? document.frames[" printRecap"] : document.getElementById("printRecap");
    const iframeWindow = iframe.contentWindow || iframe;
    iframe.focus();
    // iframeWindow.print();
    iframeWindow.queryCommandSupported("print");
  }

  cancelPrinting = () => {
    this.setState({ open: false });
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
            popUp.close();
          }, 1000);
        }
      }
    );
    popUp.open();
  }

  render() {
    return (
      <div className="print">
        <button className="btn btn-blue print-btn" ref={(el) => { this.printingBtn = el; }} onClick={this.startPrinting}>Print <FontAwesomeIcon icon={faPrint} /></button>
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
            <div className="print-pop-up-btns">
              <Reset />
              <button onClick={this.handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Tell us what you think!</button>
            </div>
          </form>
        </Popup>
        <iframe id="printRecap" src="/#/print" style={{ display: 'none' }} title="printRecap" />
      </div>
    );
  }
}

export default Print;
