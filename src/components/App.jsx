import React from 'react';

import PatientPopUp from '../containers/PatientPopUp';
import MusclePopUp from '../containers/MusclePopUp';
import PatientRef from '../containers/PatientRef';
import BodySelect from '../containers/body/BodySelect';
import Scale from '../components/Scale';
import Body from '../containers/body/Body';
import Brand from '../components/Brand';
import PrintBtn from '../containers/printElements/PrintBtn';
import Reset from '../components/Reset';
import MusclesTable from '../containers/MusclesTable';

const App = () => {
  return (
    <div className="app">
      <div className="top-actions">
        <Brand />
        <PatientPopUp />
        <BodySelect />
        <Reset />
        <PrintBtn />
      </div>
      <MusclePopUp />
      <PatientRef />
      <div className="scale-body">
        <Scale />
        <Body frontBodyViewbox="-200 0 1700 2830" backBodyViewBox="-200 0 1700 2840" />
      </div>
      <MusclesTable />
    </div>
  );
};

export default App;
