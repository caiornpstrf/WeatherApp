import { StyledView } from '../../../src/components/StyledView';
import { renderGenericComponent } from '../../utils';

describe('StyledView tests', () => {
  function renderStyledView() {
    return renderGenericComponent(StyledView, {
      testID: 'styled-view',
    });
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const {
      component: { getByTestId },
    } = renderStyledView();

    expect(getByTestId('styled-view')).toBeDefined();
  });
});
