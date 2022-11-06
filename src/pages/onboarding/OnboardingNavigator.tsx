import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding_Login from './Onboarding_Login';

export default () => {
  const Stack = createNativeStackNavigator();
  const headerShown = false;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding_Login"
        component={Onboarding_Login}
        options={{headerShown}}
      />
    </Stack.Navigator>
  );
};
