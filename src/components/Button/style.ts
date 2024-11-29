import styled from 'styled-components/native';
import { StyledView } from '../StyledView';
import { StyledText } from '../StyledText';
import { compose, flexbox, space } from 'styled-system';

export const MainContainer = styled(StyledView).attrs({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
})``;

export const Pressable = styled.TouchableOpacity`
  ${compose(space, flexbox)}
  flex: 1;
`;

type ButtonContainerProps = {
  disabled?: boolean;
};
export const ButtonContainer = styled(StyledView).attrs<ButtonContainerProps>(
  ({ disabled }) => ({
    minHeight: 60,
    borderRadius: 16,
    bg: !disabled ? 'primary' : 'disabled',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
)``;

export const ButtonText = styled(StyledText).attrs({
  color: 'text-light',
  fontSize: 16,
  fontWeight: 'bold',
})``;
