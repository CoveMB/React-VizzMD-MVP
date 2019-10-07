import React, { Fragment } from 'react';

import Reset from './Reset';
import Brand from './Brand';
import PrintNSaveBtn from './printNSaveElements/PrintNSaveBtn';
import BodySelect from '../containers/body/BodySelect';
import PatientPopUp from '../containers/PatientPopUp';

const TopActions = () => {
  return (
    <Fragment>
      <Brand />
      <PatientPopUp />
      <BodySelect />
      <Reset />
      <PrintNSaveBtn function="print" />
      <PrintNSaveBtn function="save" />
    </Fragment>
  );
};

export default TopActions;
