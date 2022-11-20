import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RetroMain from './RetroMain';
import RetroAllStep from './RetroAllStep';

export default function RetroNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="회고" component={RetroMain} />
      <Stack.Screen name="RetroAllStep" component={RetroAllStep} />
    </Stack.Navigator>
  );
}
