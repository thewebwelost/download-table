import React from 'react';
import TableRow from './TableRow';

function SelectableTable({ rows }) {
  return (
    <table>
      <thead>
        <tr>
          <th>test head</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <TableRow key={i} {...row} />
        ))}
      </tbody>
    </table>
  );
}

export default SelectableTable;
