import React from 'react';
import SelectableTable from './SelectableTable';
import TableHeader from './TableHeader';

function DownloadTable({ data }) {
  return (
    <div>
      <TableHeader />
      <SelectableTable rows={data} />
    </div>
  );
}

export default DownloadTable;
