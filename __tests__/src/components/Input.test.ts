import { Input } from '../../../src/components/Input';
import { renderGenericComponent } from '../../utils';

describe('Input tests', () => {
  function renderInput() {
    return renderGenericComponent(Input, {
      testID: 'input',
    });
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const {
      component: { getByTestId },
    } = renderInput();

    expect(getByTestId('input')).toBeDefined();
  });
});
