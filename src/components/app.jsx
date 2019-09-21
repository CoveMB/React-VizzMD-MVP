import React from 'react';

import CustomPopUp from '../containers/custom_pop_up';
import PatientRef from '../containers/patient_ref';
import Body from '../containers/body/body';

const App = () => {
  return (
    <div className="app">
      <PatientRef />
      <CustomPopUp />
      <Body />
    </div>
  );
};

export default App;
