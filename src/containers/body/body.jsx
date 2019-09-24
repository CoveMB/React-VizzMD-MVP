import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import FaceBody from './face_body';
import BackBody from './back_body';

class Body extends PureComponent {
  bodyParts = () => {
    console.log(this.props.body);
    if (this.props.body === "back") {
      return <BackBody />;
    }
    return <FaceBody />;
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
