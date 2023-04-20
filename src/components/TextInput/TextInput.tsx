import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { styles } from './TextInput.styles';

const TextInput = (props: TextInputProps) => {
  return <RNTextInput style={styles.input} {...props} />;
};

export default TextInput;
