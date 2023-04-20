import { Colors, Spacing } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.Spacing[3],
    paddingHorizontal: Spacing.Spacing[5],
    borderRadius: Spacing.Spacing[1],
  },
  text: {
    backgroundColor: Colors.Utils.Transparent,
    color: Colors.Utils.Accent,
  },
  contained: {
    backgroundColor: Colors.Utils.Accent,
    color: Colors.Utils.White,
  },
});
