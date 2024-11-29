import { Header } from '../../../src/components/Header';
import { renderGenericComponent } from '../../utils';

describe('Header tests', () => {
  function renderHeader() {
    return renderGenericComponent(Header, {
      title: 'Header',
    });
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const {
      component: { getByText },
    } = renderHeader();

    expect(getByText('Header')).toBeDefined();
  });
});
