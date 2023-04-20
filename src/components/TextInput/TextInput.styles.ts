import { Colors, Spacing } from '@styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.Gray[300],
    paddingVertical: Spacing.Spacing[3],
    paddingHorizontal: Spacing.Spacing[6],
    color: Colors.Gray[700],
  },
});
