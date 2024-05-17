import {createStackNavigator} from '@react-navigation/stack';
import {CreateScreen} from '@screens/create-screen';
import {HomeScreen} from '@screens/home-screen';
import {InfoScreen} from '@screens/info-screen';
import * as React from 'react';
import {TMainNavigatorParamsList} from '@shared/types';

const Main = createStackNavigator<TMainNavigatorParamsList>();

export function MainNavigator() {
  return (
    <Main.Navigator
      initialRouteName={'MAIN.HOME_SCREEN'}
      screenOptions={{headerShown: false}}>
      <Main.Screen name="MAIN.HOME_SCREEN" component={HomeScreen} />
      <Main.Screen name="MAIN.INFO_SCREEN" component={InfoScreen} />
      <Main.Screen name="MAIN.CREATE_SCREEN" component={CreateScreen} />
    </Main.Navigator>
  );
}
