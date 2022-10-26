import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from './HomeMain';

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="홈" component={HomeMain} />
    </Stack.Navigator>
  );
}
