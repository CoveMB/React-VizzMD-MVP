import React from 'react';
import { connect } from "react-redux";

import App from '../src/components/App';

import '../static/css/application.scss';


const rootPage = () => {
  return (
    <App />
  );
};

export default connect(state => state)(rootPage);
