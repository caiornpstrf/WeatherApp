import { SafeAreaView } from 'react-native';

import styled from 'styled-components/native';
import type {
  AlignItemsProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexDirectionProps,
  FlexProps,
  JustifyContentProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import {
  alignItems,
  background,
  border,
  color,
  compose,
  flex,
  justifyContent,
  layout,
  space,
} from 'styled-system';

export type SafeAreaViewProps = React.ComponentProps<typeof SafeAreaView>;

export type StyledSafeAreaProps = SpaceProps &
  BackgroundProps &
  ColorProps &
  BorderProps &
  LayoutProps &
  FlexDirectionProps &
  AlignItemsProps &
  FlexProps &
  JustifyContentProps &
  Partial<Pick<SafeAreaViewProps, 'children'>>;

export const StyledSafeArea = styled(SafeAreaView)<StyledSafeAreaProps>`
  ${compose(
    space,
    background,
    color,
    border,
    layout,
    flex,
    justifyContent,
    alignItems,
  )};
`;
