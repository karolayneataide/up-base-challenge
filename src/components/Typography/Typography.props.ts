import { Typography } from '@styles';
import { TextProps } from 'react-native';

export interface TypographyProps extends TextProps {
  variant?: keyof typeof Typography.Sizes;
  color?: string;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
}
