import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from './HomeMain';
import Notice from './Notice';
import DiaryMain from './DiaryMain';

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="DiaryMain" component={DiaryMain} />
    </Stack.Navigator>
  );
}
