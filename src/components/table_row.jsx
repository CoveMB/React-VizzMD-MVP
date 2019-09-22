import React from 'react';

const TableRow = (props) => {
  return (
    <tr >
      <td>{props.rightForce}</td>
      <td>{props.name}</td>
      <td>{props.nerf}</td>
      <td>{props.root}</td>
      <td>{props.leftForce}</td>
    </tr>
  );
};

export default TableRow;
