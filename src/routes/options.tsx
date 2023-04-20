import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { HeaderBackButton } from '@react-navigation/elements';
import { Colors } from '@styles';
import React from 'react';

export const screenOptions = ({ route }: { route: { name: string } }) =>
  ({
    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
      let iconName:
        | 'home'
        | 'clipboard-check-outline'
        | 'heart-outline'
        | 'account-outline';

      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Plantões':
          iconName = 'clipboard-check-outline';
          break;
        case 'Favoritos':
          iconName = 'heart-outline';
          break;
        default:
          iconName = 'account-outline';
      }

      return (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      );
    },
    tabBarActiveTintColor: Colors.Primary[500],
    tabBarInactiveTintColor: Colors.Gray[600],
    headerTintColor: Colors.Utils.White,
    headerStyle: {
      backgroundColor: Colors.Primary[600],
    },
    headerTitleAlign: 'center',
    headerLeft: () => {
      return <HeaderBackButton tintColor={Colors.Utils.White} />;
    },
  } as const);
