import React from 'react';
import SelectableTable from './SelectableTable';
import TableHeader from './TableHeader';

function DownloadTable({ data }) {
  return (
    <div>
      <TableHeader />
      <SelectableTable />
    </div>
  );
}

export default DownloadTable;
