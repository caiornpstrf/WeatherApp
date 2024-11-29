import styled from 'styled-components/native';
import { StyledView } from '../StyledView';
import { StyledText } from '../StyledText';
import { ColorProps, color } from 'styled-system';

export const SafeArea = styled.SafeAreaView.attrs<ColorProps>({
  bg: 'primary',
})`
  ${color}
`;

export const MainContainer = styled(StyledView).attrs({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  px: 24,
  bg: 'primary',
})``;

export const Title = styled(StyledText).attrs({
  color: 'text-dark',
  fontSize: 24,
  fontWeight: 'bold',
})``;
