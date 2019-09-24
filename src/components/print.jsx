import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';

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
        <button className="btn  btn-success" onClick={this.startPrinting}>Print</button>
        <Popup
          modal
          position="right center"
          open={this.state.open}
          onClose={this.cancelPrinting}
        >
          <form onSubmit={this.handleSubmit} >
            <h2>Impression en cours..</h2>
            <h3>Merci d'avoir utiliser VizzMD</h3>

            <button onClick={this.handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Donnez nous votre avis!</button>
          </form>
        </Popup>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { printing },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Print);
