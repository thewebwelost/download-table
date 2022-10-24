import React from 'react';

function TableRow({
  name,
  device,
  path,
  status,
  isAvailable,
  isSelected,
  handleClick,
}) {
  const handleRowClick = () => {
    isAvailable && handleClick(device);
  };

  return (
    <tr onClick={handleRowClick}>
      <td>
        <input
          type={'checkbox'}
          onChange={(e) => e.preventDefault()}
          checked={isSelected || false}
          disabled={!isAvailable}
          aria-label={`select file ${name} from ${device} device`}
        />
      </td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td>
        {isAvailable && <div className={'status available'} />}
        {status}
      </td>
    </tr>
  );
}

export default TableRow;
