import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { enterPatient } from '../actions/index';

class CustomPopUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { patient: '', open: true };
  }

  componentDidMount() {
    this.openModal();
  }

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  handleChange = (event) => {
    this.setState({ patient: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.enterPatient(this.state.patient);
    this.setState({ patient: "", open: false });
  }

  render() {
    return (
      <Popup
        trigger={
          <button onClick={this.openModal}>Change patient ref</button>
        }
        modal
        position="right center"
        open={this.state.open}
        onClose={this.closeModal}
      >
        <form onSubmit={this.handleSubmit} >
          <h3>Quel est la référence du patient?</h3>
          <input
            type="text"
            id="ref"
            name="ref"
            required
            size="15"
            value={this.state.patient}
            onChange={this.handleChange}
          />
          <button type="submit">Ok</button>
        </form>

      </Popup>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { enterPatient },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CustomPopUp);
