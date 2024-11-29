import styled from 'styled-components/native';
import { StyledSafeArea, StyledView } from '../../components';
import { theme } from '../../theme';

export const MainContainer = styled(StyledSafeArea).attrs({
  flex: 1,
  bg: 'background',
})``;

export const ContentContainer = styled(StyledView).attrs({
  flex: 1,
  justifyContent: 'space-between',
  flexDirection: 'column',
  py: 24,
})``;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.primary,
})``;
