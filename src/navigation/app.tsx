import RegisterPage from '@screens/Auth/screens/Register';
import SplashPage from '@screens/Auth/screens/Splash';
import HomePage from '@screens/Home/screens/Relationship';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationOptions, StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {StatusBar} from 'react-native';
import LoginPage from '../screens/Auth/screens/Login/index';
import DrawerComponent, {ProfilePageNavigationProp} from './drawer';
import ProfilePage from '@screens/Home/screens/Profile';
import NewProfile from '@screens/Home/screens/Profile/NewProfile';

export type RootStackParamList = {
  HomePage: undefined;
  NewProfile: {data: ProfilePageNavigationProp};
};

export type HomePageNavigationProp = StackNavigationProp<RootStackParamList, 'HomePage'>;
export type NewProfileNavigationProp = StackNavigationProp<RootStackParamList, 'NewProfile'>;

const Stack = createStackNavigator();

const NoneHeaderOption: StackNavigationOptions = {
  headerShown: false,
};
export const AppNavigation = () => {
  React.useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, ['']);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashPage} options={NoneHeaderOption} />
        <Stack.Screen name="Login" component={LoginPage} options={NoneHeaderOption} />
        <Stack.Screen name="Register" component={RegisterPage} options={NoneHeaderOption} />
        <Stack.Screen name="MainScreen" component={DrawerComponent} options={NoneHeaderOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
