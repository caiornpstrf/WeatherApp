import type {TextProps} from 'react-native';

import styled from 'styled-components/native';
import {
  ColorProps,
  TextAlignProps,
  FontSizeProps,
  LineHeightProps,
  FontWeightProps,
  SpaceProps,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  compose,
  color,
  space,
} from 'styled-system';

export type StyledTextProps = SpaceProps &
  ColorProps &
  TextAlignProps &
  FontSizeProps &
  LineHeightProps &
  FontWeightProps &
  TextProps;

export const StyledText = styled.Text.attrs<StyledTextProps>(
  ({color: txtColor}) => {
    return {color: txtColor ? txtColor : 'text-dark'};
  },
)<StyledTextProps>`
  ${compose(space, color, fontSize, textAlign, lineHeight, fontWeight)};
`;
