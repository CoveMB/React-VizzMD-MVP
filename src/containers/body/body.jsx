import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import FaceBody from './face_body';
import BackBody from './back_body';

class Body extends PureComponent {
  bodyParts = () => {
    if (this.props.body === "back") {
      return <BackBody backBodyViewbox={this.props.backBodyViewbox} />;
    }
    return <FaceBody faceBodyViewbox={this.props.faceBodyViewbox} />;
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
