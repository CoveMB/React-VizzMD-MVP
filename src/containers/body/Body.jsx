import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaceBody from './FaceBody';

class Body extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.body !== this.props.body);
  }

  bodyParts = () => {
    if (this.props.body === "back") {
      return <FaceBody svgViewBox={this.props.backBodyViewBox} bodySide="back" />;
    }
    return <FaceBody svgViewBox={this.props.frontBodyViewbox} bodySide="front" />;
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
