import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Reset = () => {
  const reload = () => {
    window.location.reload();
  };
  return (

    <button className="btn btn-danger reset" onClick={reload}>Next patient <FontAwesomeIcon icon={faSyncAlt} /></button>

  );
};

export default Reset;
