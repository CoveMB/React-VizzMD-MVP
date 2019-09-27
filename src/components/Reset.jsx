import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Reset = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="reset">
      <button className="btn btn-danger" onClick={reload}>Next patient <FontAwesomeIcon icon={faSyncAlt} /></button>
    </div>
  );
};

export default Reset;
