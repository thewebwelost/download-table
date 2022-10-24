import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DownloadTable from '.';

import data from '../../assets/data.json';

afterEach(cleanup);

describe('<TableHeader />', () => {
  it('should render properly', () => {
    const tree = renderer.create(<DownloadTable data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render table rows correctly', () => {});
  it('should select all available rows', () => {});
  it('should deselect all available rows', () => {});
  it('should trigger download correctly', () => {});
});
