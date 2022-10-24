import React from 'react';

import classes from './TableHeader.module.css';

function TableHeader({
  isChecked,
  isIndeterminate,
  count,
  handleSelectAll,
  handleDownload,
}) {
  return (
    <header className={classes.header}>
      <label className={classes.selectAll} htmlFor={'selectAllCheckbox'}>
        <input
          type={'checkbox'}
          label={'Select all rows'}
          id={'selectAllCheckbox'}
          ref={(input) => {
            // indeterminate state can be set only directly
            if (input) {
              input.indeterminate = isIndeterminate;
            }
          }}
          onChange={(e) => {
            e.preventDefault();
            handleSelectAll();
          }}
          checked={isChecked}
        />
        {isChecked ? 'Deselect all' : 'Select all'}
      </label>

      <div>{count > 0 ? `Selected: ${count}` : 'None selected'}</div>

      <div>
        <button onClick={handleDownload}>Download selected</button>
      </div>
    </header>
  );
}

export default TableHeader;
