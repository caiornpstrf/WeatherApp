import {TextInputProps} from 'react-native';
import React from 'react';
import { TextInput } from './style';

export function Input(props: TextInputProps) {
  return (
    <TextInput {...props} />
  );
}
