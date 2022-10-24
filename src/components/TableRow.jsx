import React from 'react';

import classes from './TableRow.module.css';

function TableRow({
  name,
  device,
  path,
  status,
  isAvailable,
  isSelected,
  handleClick,
}) {
  const handleRowClick = () => {
    isAvailable && handleClick(device);
  };

  return (
    <tr
      onClick={handleRowClick}
      className={`${classes.row}
      ${!isAvailable && classes.unavailable} 
      ${isSelected && classes.selected}`}
    >
      <td className={classes.cell}>
        <input
          type={'checkbox'}
          onChange={(e) => e.preventDefault()}
          checked={isSelected || false}
          disabled={!isAvailable}
          aria-label={`select file ${name} from ${device} device`}
        />
      </td>
      <td className={classes.cell}>{name}</td>
      <td className={classes.cell}>{device}</td>
      <td className={classes.cell}>{path}</td>
      <td className={classes.cell}>
        {isAvailable && <div className={classes.statusAvailable} />}
        {status}
      </td>
    </tr>
  );
}

export default TableRow;
