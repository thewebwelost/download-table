import React from 'react';
import TableRow from './TableRow';

function SelectableTable({ rows, handleSelectRow, legend }) {
  return (
    <table>
      <thead>
        <tr>
          {/*
           * first cell reserved for checkbox column, asuming it will be
           * common field for any table. table headings come from raw data
           */}
          <th></th>
          {legend.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <TableRow key={i} {...{ ...row, handleClick: handleSelectRow }} />
        ))}
      </tbody>
    </table>
  );
}

export default SelectableTable;
