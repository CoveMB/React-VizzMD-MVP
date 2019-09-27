import React from 'react';

import PatientPopUp from '../containers/PatientPopUp';
import MusclePopUp from '../containers/MusclePopUp';
import PatientRef from '../containers/PatientRef';
import BodySelect from '../containers/body/BodySelect';
import Scale from '../components/Scale';
import Body from '../containers/body/Body';
import Brand from '../components/Brand';
import Print from '../containers/printElements/Print';
import Reset from '../components/Reset';
import MusclesTable from '../containers/MusclesTable';
import NotToPrint from '../containers/hoc/NotToPrint';

const App = () => {
  return (
    <div>
      <Print />
      <NotToPrint>
        <div className="app">
          <div className="top-actions">
            <Brand />
            <PatientPopUp />
            <BodySelect />
            <Reset />
          </div>
          <MusclePopUp />
          <PatientRef />
          <div className="scale-body">
            <Scale />
            <Body frontBodyViewbox="-200 0 1700 2830" backBodyViewBox="-200 0 1700 2840" />
          </div>
          <MusclesTable />
        </div>
      </NotToPrint>
    </div>
  );
};

export default App;
