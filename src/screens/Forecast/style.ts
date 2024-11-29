import styled from 'styled-components/native';
import { StyledSafeArea, StyledView } from '../../components';
import { theme } from '../../theme';
import {
  KeyboardAvoidingView,
  Platform,
  KeyboardAvoidingViewProps,
} from 'react-native';
import { flexbox } from 'styled-system';

export const MainContainer = styled(StyledSafeArea).attrs({
  flex: 1,
  bg: 'background',
})``;

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.select({
    ios: 'padding',
    android: 'height',
  }) as KeyboardAvoidingViewProps['behavior'],
  flex: 1,
})`
  ${flexbox}
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    flexGrow: 1,
  },
  keyboardShouldPersistTaps: 'handled',
})``;

export const ContentContainer = styled(StyledView).attrs({
  flex: 1,
  justifyContent: 'space-between',
  flexDirection: 'column',
  pt: 24,
  pb: 32,
})``;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.primary,
})``;
