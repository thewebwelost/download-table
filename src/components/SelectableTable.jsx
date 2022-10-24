import React, { useState } from 'react';
import TableRow from './TableRow';

function SelectableTable({ rows }) {
  const [activeCount, setActiveCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  // adding id and state to component state
  const initialState = rows.map((row) => ({
    ...row,
    isSelected: false,
    isAvailable: row.status === 'available',
    id: row.device,
  }));

  const [rowsState, setRowsState] = useState(initialState);

  return (
    <table>
      <thead>
        <tr>
          {/*
           * first cell reserved for checkbox column, asuming it will be
           * common field for any table. table headings come from raw data
           */}
          <th></th>
          {Object.keys(rows[0]).map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsState.map((row, i) => (
          <TableRow key={i} {...row} />
        ))}
      </tbody>
    </table>
  );
}

export default SelectableTable;
