import React from 'react';
import ReactGA from 'react-ga';

import PatientPopUp from '../containers/patient_pop_up';
import MusclePopUp from '../containers/muscle_pop_up';
import PatientRef from '../containers/patient_ref';
import BodySelect from '../containers/body/body_select';
import Scale from '../components/scale';
import Body from '../containers/body/body';
import Brand from '../components/brand';
import Print from '../components/print';
import Reset from '../components/reset';
import MusclesTabe from '../containers/muscles_table';

import ComponentToPrint from '../containers/component_to_print';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-148344671-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
      <ComponentToPrint />
    </div>
  );
};

export default App;
