import React from 'react';
import { connect } from "react-redux";
import TagManager from 'react-gtm-module';

import App from '../components/App';

import '../static/css/application.scss';

if (typeof window !== 'undefined') {
  if (window.location.href.match(/vizzmd.netlify.com/)) {
    console.log(" here");
    const tagManagerArgs = {
      gtmId: 'GTM-MM93V8P'
    };

    TagManager.initialize(tagManagerArgs);
  }
}

const rootPage = () => {
  return (
    <App />
  );
};

export default connect(state => state)(rootPage);
