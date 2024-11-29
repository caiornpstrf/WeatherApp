import styled from 'styled-components/native';
import { StyledText, StyledView } from '../../../../components';

export const MainContainer = styled(StyledView).attrs({
  alignItems: 'center',
  justifyContent: 'center',
  py: '16px',
})``;

export const Label = styled(StyledText).attrs({
  fontSize: 11,
  fontWeight: 'bold',
})``;

export const ConditionIcon = styled.Image.attrs({
  height: 50,
  width: 50,
})``;
