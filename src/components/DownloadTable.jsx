import React, { useEffect, useState } from 'react';
import SelectableTable from './SelectableTable';
import TableHeader from './TableHeader';

// data is passed as a parameter, but worth changing to fetch
// will keep it simple for now
function DownloadTable({ data }) {
  const [selectedCount, setSelectedCount] = useState(0);
  // adding id and row state to component state
  const initialState = data.map((row) => ({
    ...row,
    isSelected: false,
    isAvailable: row.status === 'available',
    id: row.device,
  }));

  const [rowsState, setRowsState] = useState(initialState);

  useEffect(() => {
    const stats = rowsState.reduce(
      (acc, item) => {
        if (item.isSelected) acc.selected++;
        return acc;
      },
      {
        selected: 0,
      }
    );

    setSelectedCount(stats.selected);
  }, [rowsState]);

  // select certain row by id (device)
  const handleSelectRow = (device) => {
    console.log({ device });
    setRowsState(
      rowsState.map((row) => {
        if (row.isAvailable && row.id === device) {
          row.isSelected = !row.isSelected;
        }
        return row;
      })
    );
  };

  return (
    <div>
      <TableHeader count={selectedCount} />
      <SelectableTable
        rows={rowsState}
        handleSelectRow={handleSelectRow}
        legend={Object.keys(data[0])}
      />
    </div>
  );
}

export default DownloadTable;
