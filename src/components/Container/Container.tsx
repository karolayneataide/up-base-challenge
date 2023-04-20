import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './Container.styles';

export const Container = ({ children }: PropsWithChildren) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;
