import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import FrontBody from './front_body';
import BackBody from './back_body';

class Body extends PureComponent {
  bodyParts = () => {
    if (this.props.body === "back") {
      return <BackBody backBodyViewBox={this.props.backBodyViewBox} />;
    }
    return <FrontBody frontBodyViewbox={this.props.frontBodyViewbox} />;
  }

  render() {
    return (
      <div className="svg-body">
        {this.bodyParts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    body: state.body
  };
}

export default connect(mapStateToProps)(Body);
