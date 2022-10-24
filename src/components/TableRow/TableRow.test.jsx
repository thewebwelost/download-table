import { screen, render, cleanup } from '@testing-library/react';
import TableRow from '.';

describe('<TableRow />', () => {
  const mockedProps = {
    name: 'name',
    device: 'device',
    path: 'path',
    status: 'status',
    isAvailable: true,
    isSelected: false,
    handleClick: jest.fn(() => ({})),
  };

  afterEach(cleanup);

  it('should render properly', () => {
    render(<TableRow {...mockedProps} />);

    expect(screen.getByText('name').textContent).toBe('name');
    expect(screen.getByText('device').textContent).toBe('device');
    expect(screen.getByText('path').textContent).toBe('path');
    expect(screen.getByText('status').textContent).toBe('status');

    expect(true).toBe(true);
  });
});
