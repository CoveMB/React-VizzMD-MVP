import React, { Fragment } from 'react';

import Reset from '../components/Reset';
import Brand from '../components/Brand';
import PrintBtn from '../containers/printElements/PrintBtn';
import BodySelect from '../containers/body/BodySelect';
import PatientPopUp from '../containers/PatientPopUp';

const TopActions = () => {
  return (
    <Fragment>
      <Brand />
      <PatientPopUp />
      <BodySelect />
      <Reset />
      <PrintBtn />
    </Fragment>
  );
};

export default TopActions;
