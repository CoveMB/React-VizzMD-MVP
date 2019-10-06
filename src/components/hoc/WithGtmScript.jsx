import React, { Fragment, Component } from 'react';
import TagManager from 'react-gtm-module';

class GtmScript extends Component {
  componentDidMount() {
    if (window.location.href.match(/test-vizzmd-test.netlify/)) {
      const tagManagerArgs = {
        gtmId: 'GTM-MM93V8P'
      };
      TagManager.initialize(tagManagerArgs);
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

export default GtmScript;
