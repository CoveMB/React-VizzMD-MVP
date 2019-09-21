import React, { PureComponent } from 'react';
import FaceBodyRight from './face_body_right';
import FaceBodyLeft from './face_body_left';

class FaceBody extends PureComponent {
  render() {
    return (
      <div className="svg-body">
        <FaceBodyRight />
        <FaceBodyLeft />
      </div>
    );
  }
}

export default FaceBody;
