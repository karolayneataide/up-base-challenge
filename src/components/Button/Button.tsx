import { Colors } from '@styles';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from '../Typography';
import { ButtonProps } from './Button.props';
import { styles } from './Button.styles';

const TypographyModifiers = {
  text: Colors.Utils.Accent,
  contained: Colors.Utils.White,
};

const Button = ({ children, variant = 'text' }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.default, styles[variant]]}>
      <Typography
        variant="button"
        color={TypographyModifiers[variant]}
        textAlign="center"
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
