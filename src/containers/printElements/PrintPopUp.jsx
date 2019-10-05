import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Popup from "reactjs-popup";
import * as typeformEmbed from '@typeform/embed';
import Router from 'next/router';
import HomeBtn from '../../components/HomeBtn';
import BrandWhite from '../../components/BrandWhite';

const backHome = () => {
  Router.push("/");
};

const handleReview = (event) => {
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
          Router.push("/");
        }, 1000);
      }
    }
  );
  popUp.open();
};

const PrintPopUp = () => {
  return (
    <div id="not-to-be-printed">
      <Popup
        modal
        position="right center"
        open
        onClose={backHome}
      >
        <Fragment>
          <div className="gradient-square">
            <h5 className="gradient-square-text">Thanks for using</h5>
            <BrandWhite />
          </div>
          <h2 className="print-pop-up-text">Printing...</h2>
          <div className="print-pop-up-btns">
            <HomeBtn />
            <button onClick={handleReview} className="btn btn-secondary btn-pop-up-review" type="submit">Tell us what you think <FontAwesomeIcon icon={faComment} /></button>
          </div>
        </Fragment>
      </Popup>
    </div>
  );
};

export default PrintPopUp;
