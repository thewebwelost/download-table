import React, { useState } from 'react';
import SelectableTable from './SelectableTable';
import TableHeader from './TableHeader';

// data is passed as a parameter, but worth changing to fetch
// will keep it simple for now
function DownloadTable({ data }) {
  const [activeCount, setActiveCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  // adding id and row state to component state
  const initialState = data.map((row) => ({
    ...row,
    isSelected: false,
    isAvailable: row.status === 'available',
    id: row.device,
  }));

  const [rowsState, setRowsState] = useState(initialState);

  // select certain row by id (device)
  const handleSelectRow = (device) => {
    console.log({ device });
    setRowsState(
      rowsState.map((row) => {
        if (row.isAvailable && row.device === device) {
          row.isSelected = !row.isSelected;
        }
        return row;
      })
    );
  };

  return (
    <div>
      <TableHeader count={selectedCount} />
      <SelectableTable rows={rowsState} handleSelectRow={handleSelectRow} />
    </div>
  );
}

export default DownloadTable;
