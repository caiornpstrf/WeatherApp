import styled from 'styled-components/native';
import { StyledText, StyledView } from '../../../../components';

export const MainContainer = styled(StyledView).attrs({
  mx: '24px',
  flex: 1,
  mt: '64px',
})``;

export const SectionContainer = styled(StyledView).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})``;

export const ConditionContainer = styled(StyledView)``;

export const HourItemContainer = styled(StyledView).attrs({
  flexDirection: 'row',
  alignItems: 'center',
})``;

export const Temperature = styled(StyledText).attrs({
  fontSize: 64,
})``;

export const Label = styled(StyledText)``;

export const ConditionIcon = styled.Image.attrs({
  height: 64,
  width: 64,
})``;

export const ItemSpacer = styled(StyledView).attrs({
  width: '16px',
})``;

export const ScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})``;
