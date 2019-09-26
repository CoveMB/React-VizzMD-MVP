import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotToPrint extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.printing !== this.props.printing);
  }

  shouldPrintComponentBuild = () => {
    if (!this.props.printing) {
      return (
        <div >
          {this.props.children}
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.shouldPrintComponentBuild()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    printing: state.printing
  };
}

export default connect(mapStateToProps)(NotToPrint);
