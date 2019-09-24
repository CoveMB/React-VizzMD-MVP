import React, { Component } from 'react';
import { connect } from 'react-redux';

import MusclesTabe from './muscles_table';

class ComponentToPrint extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    return (nextProps.printing !== this.props.printing);
  }

  shouldBuild = () => {
    if (this.props.printing) {
      return <MusclesTabe />;
    }
    return null;
  }

  render() {
    console.log("render printing");
    console.log(this.props);
    return (
      <div>
        {this.shouldBuild()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    printing: state.printing
  };
}

export default connect(mapStateToProps)(ComponentToPrint);
