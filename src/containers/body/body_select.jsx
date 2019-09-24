import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { flipBody } from '../../actions/index';

class BodySelect extends PureComponent {
  handleBodyFlip = (event) => {
    if (event.target.innerText === "Arrière") {
      this.props.flipBody("back");
    }
    if (event.target.innerText === "Avant") {
      this.props.flipBody("face");
    }
  }

  render() {
    return (
      <div className="body-select">
        <button className="btn btn-grey" onClick={this.handleBodyFlip}>Front</button>
        <button className="btn btn-grey" onClick={this.handleBodyFlip}>Back</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    body: state.body
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { flipBody },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BodySelect);
