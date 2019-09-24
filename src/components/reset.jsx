import React from 'react';

const Reset = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="reset">
      <button className="btn btn-danger" onClick={reload}>Next patient</button>
    </div>
  );
};

export default Reset;
