import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import AuthNavigator from './pages/auth/AuthNavigator';
import HomeNavigator from './pages/home/HomeNavigator';
import ProfileNavigator from './pages/profile/ProfileNavigator';
import RetroNavigator from './pages/retrospect/RetroNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRootContext} from './RootProvider';

export default function MainNavigator() {
  const Tab = createBottomTabNavigator();
  const context = useRootContext();

  const scOpt = ({route}: {route: RouteProp<ParamListBase, string>}) => {
    return {
      headerShown: false,
      tabBarIcon: ({focused, size}: {focused: boolean; size: number}) => {
        const {name} = route;
        return (
          <Icon
            name={foo[name] + (focused ? '' : '-outline')}
            size={size + (focused ? 6 : 3)}
            color={focused ? '#F05A24' : '#151515'}
          />
        );
      },
      tabBarActiveTintColor: '#F05A24',
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
    };
  };
  // if (context.user.token === null || context.user.token === '')
  //   return <AuthNavigator />;
  return (
    <Tab.Navigator screenOptions={scOpt} initialRouteName={'HomeNavigator'}>
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="RetroNavigator" component={RetroNavigator} />
    </Tab.Navigator>
  );
}

interface Foo {
  [key: string]: string;
}

let foo: Foo = {
  ProfileNavigator: 'account',
  HomeNavigator: 'home',
  RetroNavigator: 'heart',
};
