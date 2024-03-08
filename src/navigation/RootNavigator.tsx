import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen} from '../screens/index';
import {strings} from '../utils/index';

export type NavigatorProps = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<NavigatorProps>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={strings.HOME} component={HomeScreen} />
        <Screen name={strings.PROFILE} component={ProfileScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
