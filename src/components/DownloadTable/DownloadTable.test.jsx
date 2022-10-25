import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import DownloadTable from '.';

import data from '../../assets/data.json';

afterEach(cleanup);

describe('<TableHeader />', () => {
  // it('should render properly', () => {
  //   const tree = renderer.create(<DownloadTable data={data} />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should render table rows correctly', () => {
    render(<DownloadTable data={data} />);
    expect(screen.getAllByRole('row', { name: /select file/i })).toHaveLength(
      data.length
    );
  });

  it('should render table columns correctly', () => {
    render(<DownloadTable data={data} />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(
      Object.keys(data[0]).length + 1
    );
  });

  it('should select all available rows', () => {
    render(<DownloadTable data={data} />);

    const selectAll = screen.getByLabelText('Select all');
    userEvent.click(selectAll);

    expect(
      screen.getAllByRole('checkbox', { name: /select file/i, checked: true })
    ).toHaveLength(2);
  });

  it('should select available rows', () => {
    render(<DownloadTable data={data} />);

    const row = screen.getByRole('row', { name: /Targaryen/i });
    userEvent.click(row);

    expect(
      screen.getAllByRole('checkbox', { name: /select file/i, checked: true })
    ).toHaveLength(1);
  });

  it('should deselect all available rows', async () => {
    render(<DownloadTable data={data} />);

    const selectAll = screen.getByLabelText('Select all');
    await userEvent.click(selectAll);

    expect(await screen.findByLabelText('Deselect all')).toBeVisible();
  });

  it('should trigger error msg instead of download', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<DownloadTable data={data} />);

    await userEvent.click(
      screen.getByRole('button', {
        name: /Download/i,
      })
    );

    expect(alertMock).toHaveBeenCalledWith('Please select a file');
  });

  it('should trigger download correctly', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<DownloadTable data={data} />);

    const row = screen.getByRole('row', { name: /Targaryen/i });
    await userEvent.click(row);
    await userEvent.click(
      screen.getByRole('button', {
        name: /Download/i,
      })
    );

    expect(alertMock).toHaveBeenCalledWith(
      '[{"device":"Targaryen","path":"\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\netsh.exe"}]'
    );
  });
});
