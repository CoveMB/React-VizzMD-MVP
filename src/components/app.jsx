import React from 'react';

import PatientPopUp from '../containers/patient_pop_up';
import MusclePopUp from '../containers/muscle_pop_up';
import PatientRef from '../containers/patient_ref';
import BodySelect from '../containers/body/body_select';
import Scale from '../components/scale';
import Body from '../containers/body/body';
import Brand from '../components/brand';
import Print from '../components/print';
import Reset from '../components/reset';
import MusclesTabe from '../containers/muscles_tabe';

const App = () => {
  return (
    <div className="app">
      <div className="top-actions">
        <Brand />
        <PatientPopUp />
        <BodySelect />
        <Reset />
        <Print />
      </div>
      <MusclePopUp />
      <PatientRef />
      <div className="scale-body">
        <Scale />
        <Body />
      </div>
      <MusclesTabe />
    </div>
  );
};

export default App;
