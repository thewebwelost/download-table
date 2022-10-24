import React from 'react';
import SelectableTable from './SelectableTable';
import TableHeader from './TableHeader';

// data is passed as a parameter, but worth changing to fetch
// will keep it simple for now
function DownloadTable({ data }) {
  return (
    <div>
      <TableHeader />
      <SelectableTable rows={data} />
    </div>
  );
}

export default DownloadTable;
