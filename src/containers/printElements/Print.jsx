import React, { Component, Fragment, Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import Reset from '../../components/Reset';
import BrandWhite from '../../components/BrandWhite';
// import ComponentToPrint from './ComponentToPrint';

import { printingToogle } from '../../actions/index';

const ComponentToPrint = React.lazy(() => import('./ComponentToPrint'));

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.printing !== this.props.printing);
  }

  startPrinting = () => {
    this.setState({ open: true });
    this.props.printingToogle(true);
    setTimeout(() => {
      window.print();
    }, 10);
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
            popUp.close();
            this.props.printingToogle(false);
            this.setState({ open: true });
          }, 1000);
        }
      }
    );
    popUp.open();
  }

  render() {
    return (
      <Fragment>
        <div id="not-to-be-printed">
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
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ComponentToPrint printableId="printComponent" />
        </Suspense>
      </Fragment>
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
