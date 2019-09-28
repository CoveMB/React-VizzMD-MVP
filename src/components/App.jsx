import React from 'react';

import MusclePopUp from '../containers/MusclePopUp';
import PatientRef from '../containers/PatientRef';
import TopActions from './TopActions';
import Scale from '../components/Scale';
import Body from '../containers/body/Body';
import Print from '../containers/printElements/Print';
import MusclesTable from '../containers/MusclesTable';
import NotToPrint from '../containers/hoc/NotToPrint';

const App = () => {
  return (
    <div>
      <Print />
      <NotToPrint>
        <div className="app">
          <div className="top-actions">
            <TopActions />
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
