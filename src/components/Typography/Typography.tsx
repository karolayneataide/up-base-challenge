import { Colors } from '@styles';
import React from 'react';
import { Text } from 'react-native';
import { TypographyProps } from './Typography.props';
import { styles } from './Typography.styles';

const Typography = ({
  variant = 'p2',
  color = Colors.Gray[700],
  textAlign = 'justify',
  ...props
}: TypographyProps) => {
  return (
    <Text
      style={[styles.default, styles[variant], { color }, { textAlign }]}
      {...props}
    />
  );
};

export default Typography;
