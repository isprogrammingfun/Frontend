import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileMain from './ProfileMain';

export default function ProfileNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="프로필" component={ProfileMain} />
    </Stack.Navigator>
  );
}
