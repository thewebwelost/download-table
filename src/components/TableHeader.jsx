import React from 'react';

function TableHeader({ isChecked, count }) {
  return (
    <header>
      <label>
        <input
          type={'checkbox'}
          onChange={(e) => e.preventDefault()}
          checked={isChecked}
        />
        Select all
      </label>

      <div>{count > 0 ? `Selected: ${count}` : 'None selected'}</div>

      <div>
        <button>Download selected</button>
      </div>
    </header>
  );
}

export default TableHeader;
