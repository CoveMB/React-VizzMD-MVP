import React from 'react';

import CustomPopUp from '../containers/custom_pop_up';
import PatientRef from '../containers/patient_ref';
import FaceBody from '../containers/face_body';
import BackBody from '../containers/back_body';

const App = () => {
  return (
    <div className="app">
      <PatientRef />
      <CustomPopUp />
      <FaceBody />
      // <BackBody />
    </div>
  );
};

export default App;
