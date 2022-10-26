import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/MainNavigator';
import {RootProvider} from './src/RootProvider';

const App = () => {
  return (
    <RootProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </RootProvider>
  );
};
export default App;
