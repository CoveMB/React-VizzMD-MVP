import React, { Fragment, Component } from 'react';
import TagManager from 'react-gtm-module';

class GtmScript extends Component {
  componentDidMount() {
    const tagManagerArgs = {
      gtmId: 'GTM-MM93V8P'
    };

    TagManager.initialize(tagManagerArgs);
  }

  render() {
    return (
      <Fragment />
    );
  }
}

export default GtmScript;
