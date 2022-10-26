import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RetroMain from './RetroMain';

export default function RetroNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="회고" component={RetroMain} />
    </Stack.Navigator>
  );
}
