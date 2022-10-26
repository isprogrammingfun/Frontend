import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './LoginPage';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}
