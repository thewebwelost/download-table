import React, { useEffect, useState } from 'react';
import SelectableTable from './SelectableTable';
import TableHeader from './TableHeader';

// data is passed as a parameter, but worth changing to fetch
// will keep it simple for now
function DownloadTable({ data }) {
  const [availableCount, setAvailableCount] = useState(0);
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
        if (item.isAvailable) acc.available++;
        return acc;
      },
      {
        selected: 0,
        available: 0,
      }
    );

    setSelectedCount(stats.selected);
    setAvailableCount(stats.available);
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

  const handleSelectAll = () => {
    const allSelected = rowsState.map((row) => {
      if (row.isAvailable) {
        row.isSelected = availableCount === selectedCount ? false : true;
      }
      return row;
    });

    setRowsState(allSelected);
  };

  // reduce state to a list of items to be downloaded
  const handleDownload = () => {
    const res = rowsState.reduce((acc, row) => {
      if (row.isSelected) {
        acc.push({
          device: row.device,
          path: row.path,
        });
      }

      return acc;
    }, []);

    const message =
      res.length > 0 ? JSON.stringify(res) : 'Please select a file';

    alert(message);
  };

  return (
    <div>
      <TableHeader
        count={selectedCount}
        handleSelectAll={handleSelectAll}
        handleDownload={handleDownload}
        isChecked={availableCount === selectedCount}
      />
      <SelectableTable
        rows={rowsState}
        handleSelectRow={handleSelectRow}
        legend={Object.keys(data[0])}
      />
    </div>
  );
}

export default DownloadTable;
