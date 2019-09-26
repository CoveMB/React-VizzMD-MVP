import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

import { flipBody } from '../../actions/index';

class BodySelect extends PureComponent {
  handleBodyFlip = () => {
    if (this.props.body === "back") {
      this.props.flipBody("front");
    }
    if (this.props.body === "front") {
      this.props.flipBody("back");
    }
  }

  render() {
    return (
      <div className="body-select">
        <button className="btn btn-blue" onClick={this.handleBodyFlip}><FontAwesomeIcon icon={faUndo} /> Back - Front <FontAwesomeIcon icon={faRedo} /></button>
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
