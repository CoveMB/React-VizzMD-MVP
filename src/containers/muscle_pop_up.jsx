import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { selectMuscle } from '../actions/index';

class MusclePopUp extends PureComponent {
  closeModal = () => {
    // this.setState({ open: false });
    this.props.selectMuscle(null);
  }

  isMuscleSelected = () => {
    if (this.props.selectedMuscle) {
      return true;
    }
    return false;
  }

  handleForceOnMuscle = (event) => {
    event.preventDefault();
    // send new force to muscle !!!! duplicate muscle object for shwallow comparaison
    this.props.selectMuscle(null);
  }

  render() {
    return (
      <Popup
        modal
        position="right center"
        open={this.isMuscleSelected()}
        onClose={this.closeModal}
      >
        <div className="scale-muscle-popup">
          <h3 className="muscle-pop-ip-title">{this.props.selectedMuscle}</h3>
          <button onClick={this.handleForceOnMuscle} className="one-force">1</button>
          <button onClick={this.handleForceOnMuscle} className="two-force">2</button>
          <button onClick={this.handleForceOnMuscle} className="three-force">3</button>
          <button onClick={this.handleForceOnMuscle}className="three-force">3</button>
          <button className="four-force">4</button>
          <button onClick={this.handleForceOnMuscle}className="three-force">3</button>
          <button className="five-force">5</button>
        </div>
      </Popup>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MusclePopUp);
