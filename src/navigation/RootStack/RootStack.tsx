import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../container/Splash/SplashScreen';
// import {AppContext} from '../../utils/context/contextProvider';

// Mics Methods
import {
  type RootStackParamList,
  RootStackScreens,
} from './RootNavigation.types';
import NavigationStack from '../NavigationStack/NavigationStack';

// Variables
const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigationStack = () => {
  return (
    <>
      <RootStack.Navigator
        initialRouteName={RootStackScreens.Splash}
        screenOptions={{
          headerShown: false,
        }}>
        <>
          <RootStack.Screen
            name={RootStackScreens.Splash}
            component={SplashScreen}
          />

          <RootStack.Screen
            name={RootStackScreens.NavStack}
            component={NavigationStack}
          />
        </>
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigationStack;
