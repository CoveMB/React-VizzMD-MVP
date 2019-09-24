import React, { PureComponent } from 'react';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';

class Print extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
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
          // window.location.reload();
        }
      }
    );
    popUp.open();
    window.location.reload();
  }

  render() {
    return (
      <div className="print">
        <Popup
          trigger={
            <button className="btn  btn-success" onClick={this.openModal}>Print</button>
          }
          modal
          position="right center"
          open={this.state.open}
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

export default Print;
