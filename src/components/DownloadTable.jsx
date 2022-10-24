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

  return (
    <div>
      <TableHeader count={selectedCount} />
      <SelectableTable rows={rowsState} />
    </div>
  );
}

export default DownloadTable;
