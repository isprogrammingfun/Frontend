import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import MainNavigator from './src/MainNavigator';
import {RootProvider} from './src/RootProvider';

const App = () => {
  const scheme = useColorScheme();

  return (
    <RootProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MainNavigator />
      </NavigationContainer>
    </RootProvider>
  );
};
export default App;
