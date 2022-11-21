/* eslint-disable handle-callback-err */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import OnboardingNavigator from './pages/onboarding/OnboardingNavigator';
import HomeNavigator from './pages/home/HomeNavigator';
import ProfileNavigator from './pages/profile/ProfileNavigator';
import RetroNavigator from './pages/retrospect/RetroNavigator';
import {useRootContext} from './RootProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './components';
import {Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack_OnboardingStack = createNativeStackNavigator<{
    OnboardingNavigator: undefined;
  }>();

  const context = useRootContext();

  const scOpt = ({route}: {route: RouteProp<ParamListBase, string>}) => {
    return {
      headerShown: false,
      tabBarIcon: ({focused, size}: {focused: boolean; size: number}) => {
        const {name} = route;
        if (name === 'HomeNavigator') {
          return focused ? (
            <Image
              source={require('./assets/image/nanal_tab.png')}
              style={{width: 26, height: 34}}
            />
          ) : (
            <Image
              source={require('./assets/image/nanal_tab.png')}
              style={{width: 23, height: 30, tintColor: colors.UnavailableGray}}
            />
          );
        }
        return (
          <Ionicons
            name={foo[name] + (focused ? '' : '-outline')}
            size={size + (focused ? 8 : 4)}
            color={focused ? colors.primary : colors.UnavailableGray}
          />
        );
      },
      tabBarActiveTintColor: colors.primary,
      tabBarShowLabel: true,
    };
  };

  // useState(() => {
  //   AsyncStorage.getItem('accessToken', (err, Token) => {
  //     AsyncStorage.getItem('refreshToken', (err, refreshToken) => {
  //       context.api
  //         .get('http://15.165.88.145:8080/auth/reissue', {
  //           headers: {
  //             RefreshToken: refreshToken,
  //           },
  //         })
  //         .then(res => {
  //           AsyncStorage.setItem('accessToken', res.data.result.token);
  //           AsyncStorage.setItem('refreshToken', res.data.result.refreshToken);
  //           context.setUser(prev => {
  //             const next = JSON.parse(JSON.stringify(prev));
  //             next.token = Token;
  //             return next;
  //           });
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           Token: '';
  //           context.setUser(prev => {
  //             const next = JSON.parse(JSON.stringify(prev));
  //             next.token = '';
  //             return next;
  //           });
  //         });
  //     });
  //   });
  // }, []);

  if (context.user.token === null || context.user.token === '')
    return (
      <>
        <Stack_OnboardingStack.Navigator>
          <Stack_OnboardingStack.Screen
            name="OnboardingNavigator"
            component={OnboardingNavigator}
            options={{headerShown: false}}
          />
        </Stack_OnboardingStack.Navigator>
      </>
    );

  return (
    <Tab.Navigator screenOptions={scOpt} initialRouteName={'HomeNavigator'}>
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{tabBarLabel: '마이'}}
      />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={({route}) => ({
          tabBarLabel: '일기',
          // tabBarStyle: (route => {
          //   const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          //   if (routeName === 'Notice' || routeName === 'DiaryMain') {
          //     return {display: 'none'};
          //   }
          //   return;
          // })(route),
        })}
      />
      <Tab.Screen
        name="RetroNavigator"
        component={RetroNavigator}
        options={{tabBarLabel: '회고'}}
      />
    </Tab.Navigator>
  );
}

interface Foo {
  [key: string]: string;
}

let foo: Foo = {
  ProfileNavigator: 'person',
  HomeNavigator: 'home',
  RetroNavigator: 'create',
};
