import React from 'react';

function TableHeader({
  isChecked,
  isIndeterminate,
  count,
  handleSelectAll,
  handleDownload,
}) {
  return (
    <header>
      <label>
        <input
          type={'checkbox'}
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
        Select all
      </label>

      <div>{count > 0 ? `Selected: ${count}` : 'None selected'}</div>

      <div>
        <button onClick={handleDownload}>Download selected</button>
      </div>
    </header>
  );
}

export default TableHeader;
