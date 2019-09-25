import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { enterPatient } from '../actions/index';

class PatientPopUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { patient: '', open: false };
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

  focusInput = () => {
    setTimeout(() => {
      if (this.patientRefInput) {
        this.patientRefInput.focus();
      }
    }, 100);
  }

  render() {
    return (
      <div>
        <button className="btn btn-grey" onClick={this.openModal}>Change reference</button>
        <Popup
          modal
          position="right center"
          open={this.state.open}
          onClose={this.closeModal}
          onOpen={this.focusInput}
        >
          <form onSubmit={this.handleSubmit} >
            <div className="gradient-square">
              <h5 className="gradient-square-text">What is the patient's reference?</h5>
            </div>
            <input
              className="form-control patient-ref-input"
              type="text"
              id="ref"
              ref={(el) => { this.patientRefInput = el; }}
              name="ref"
              required
              size="15"
              value={this.state.patient}
              onChange={this.handleChange}
            />
            <button className="btn btn-grey btn-pop-up-ok float-right" type="submit">Ok</button>
          </form>

        </Popup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { enterPatient },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(PatientPopUp);
