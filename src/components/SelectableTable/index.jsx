import React from 'react';
import TableRow from '../TableRow';

import classes from './SelectableTable.module.css';

function SelectableTable({ rows, handleSelectRow, legend }) {
  const renderTableHead = () => {
    return (
      <tr>
        {/*
         * first cell reserved for checkbox column, asuming it will be
         * common field for any table. table headings come from raw data
         */}
        <th></th>
        {legend.map((title, i) => (
          <th key={i} className={classes.tableHead}>
            {title}
          </th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    if (!rows || !rows.length) {
      return (
        <tr>
          <td colSpan={legend.length + 1}>Nothing here yet!</td>
        </tr>
      );
    }

    return rows.map((row, i) => (
      <TableRow key={i} {...{ ...row, handleClick: handleSelectRow }} />
    ));
  };

  return (
    <table className={classes.table}>
      <thead>{rows.length > 0 && renderTableHead()}</thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
}

export default SelectableTable;
