import React from 'react';

import PatientPopUp from '../containers/patient_pop_up';
import MusclePopUp from '../containers/muscle_pop_up';
import PatientRef from '../containers/patient_ref';
import BodySelect from '../containers/body_select';
import Scale from '../components/scale';
import Body from '../containers/body/body';
import Brand from '../components/brand';
import Print from '../components/print';
import Reset from '../components/reset';

const App = () => {
  return (
    <div className="app">
      <div className="top-actions">
        <PatientRef />
        <PatientPopUp />
        <BodySelect />
      </div>
      <MusclePopUp />
      <div className="scale-body">
        <Scale />
        <Body />
      </div>
      <div className="bottom-actions">
        <Brand />
        <Print />
        <Reset />
      </div>
    </div>
  );
};

export default App;
