import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding_Login from './Onboarding_Login';
import Onboarding_Description from './Onboarding_Description';
import SocialLoginModal from './SocialLoginModal';

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
      <Stack.Screen
        name="Onboarding_Description"
        component={Onboarding_Description}
        options={{headerShown}}
      />
    </Stack.Navigator>
  );
};
