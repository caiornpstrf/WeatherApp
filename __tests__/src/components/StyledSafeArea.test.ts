import { StyledSafeArea } from '../../../src/components/StyledSafeArea';
import { renderGenericComponent } from '../../utils';

describe('StyledSafeArea tests', () => {
  function renderStyledSafeArea() {
    return renderGenericComponent(StyledSafeArea, {
      testID: 'styled-safe-area',
    });
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const {
      component: { getByTestId },
    } = renderStyledSafeArea();

    expect(getByTestId('styled-safe-area')).toBeDefined();
  });
});
