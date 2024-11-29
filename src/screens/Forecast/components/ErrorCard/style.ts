import styled from 'styled-components/native';
import { StyledText, StyledView } from '../../../../components';
import { borderRadius, color, compose, space } from 'styled-system';

export const MainContainer = styled(StyledView).attrs({
  mx: '24px',
  flex: 1,
  mt: '64px',
  alignItems: 'center',
})``;

export const ErrorIcon = styled(StyledText).attrs({
  fontSize: 64,
  children: '!',
  color: 'text-light',
  bg: 'error',
  px: '32px',
  borderRadius: 16,
  bold: true,
})`
  ${compose(borderRadius, space, color)}
`;

export const ErrorText = styled(StyledText).attrs({
  fontSize: 24,
  textAlign: 'center',
  mt: '32px',
})``;
