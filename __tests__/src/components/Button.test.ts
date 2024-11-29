import { fireEvent } from '@testing-library/react-native';
import { Button, ButtonProps } from '../../../src/components/Button';
import { renderGenericComponent } from '../../utils';

describe('Button tests', () => {
  function renderButton(props?: Partial<ButtonProps>) {
    return renderGenericComponent(
      Button,
      {
        label: 'Label',
        onPress: jest.fn(),
        testID: 'button',
      },
      props,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render and press correctly', () => {
    const {
      component: { getByTestId },
      props,
    } = renderButton();

    fireEvent.press(getByTestId('button'));

    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('Shound render disabled and not execute onPress', () => {
    const {
      component: { getByTestId },
      props,
    } = renderButton({ disabled: true });

    fireEvent.press(getByTestId('button'));
    expect(props.onPress).not.toHaveBeenCalled();
  });
});
