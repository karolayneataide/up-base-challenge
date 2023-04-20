import { Typography } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
  },
  title: {
    fontSize: Typography.Sizes.title,
    fontWeight: Typography.Weights.semibold,
  },
  button: {
    fontSize: Typography.Sizes.button,
    fontWeight: Typography.Weights.medium,
  },
  p2: {
    fontSize: Typography.Sizes.p2,
    fontWeight: Typography.Weights.medium,
  },
  p1: {
    fontSize: Typography.Sizes.p1,
    fontWeight: Typography.Weights.semibold,
  },
  p4: {
    fontSize: Typography.Sizes.p4,
    fontWeight: Typography.Weights.semibold,
  },
  placeholder: {
    fontSize: Typography.Sizes.placeholder,
    fontWeight: Typography.Weights.regular,
  },
  description: {
    fontSize: Typography.Sizes.description,
    fontWeight: Typography.Weights.regular,
  },
});
