import React from 'react';
import { ButtonContainer, ButtonText, MainContainer, Pressable } from './style';

export type ButtonProps = {
  testID?: string;
  label?: string;
  disabled?: boolean;
  onPress?(): void;
};

export function Button({ testID, label, disabled, onPress }: ButtonProps) {
  return (
    <MainContainer>
      <Pressable disabled={disabled} testID={testID} onPress={onPress}>
        <ButtonContainer disabled={disabled}>
          <ButtonText>{label}</ButtonText>
        </ButtonContainer>
      </Pressable>
    </MainContainer>
  );
}
