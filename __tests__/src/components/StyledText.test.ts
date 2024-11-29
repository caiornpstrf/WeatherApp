import {
  StyledText,
  StyledTextProps,
} from '../../../src/components/StyledText';
import { renderGenericComponent } from '../../utils';

describe('StyledText tests', () => {
  function renderStyledText(props?: Partial<StyledTextProps>) {
    return renderGenericComponent(
      StyledText,
      {
        testID: 'styled-text',
      },
      props,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly with default props', () => {
    const {
      component: { getByTestId },
    } = renderStyledText();

    expect(getByTestId('styled-text').props.color).toBe('text-dark');
  });

  it('Should render correctly with custom color', () => {
    const {
      component: { getByTestId },
    } = renderStyledText({ color: 'text-light' });
    expect(getByTestId('styled-text').props.color).toBe('text-light');
  });
});
