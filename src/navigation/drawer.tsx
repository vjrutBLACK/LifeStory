import React from 'react';
import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer';
import HomePage from '@screens/Home/screens/Home';
import RelationshipPage from '../screens/Home/screens/Relationship/index';
import SlidesPage from '@screens/Home/screens/Slides';
import NetworkPage from '@screens/Home/screens/Network';
import ControlsPage from '@screens/Home/screens/Controls';
import HelpPage from '@screens/Home/screens/HelpPage';
import DrawerContent from '../components/Drawer/DrawerContent';
import NewProfile from '@screens/Home/screens/Profile/NewProfile';
import ProfilePage from '@screens/Home/screens/Profile';
import {createStackNavigator, StackNavigationOptions, StackNavigationProp} from '@react-navigation/stack';
import MyProfile from '@screens/Home/screens/Profile/MyProfile';
import DetailMonth from '@screens/Home/screens/DetailMonth/DetailMonth';
import {Year, RelationShip, User} from '../shared/types';
import RelationshipMembers from '@screens/Home/screens/Relationship/RelationshipMembers';
import DetailMember from '@screens/Home/screens/Relationship/DetailMember';

const Drawer = createDrawerNavigator();

export type RootDrawerParamList = {
  HomeStackScreen: undefined;
  RelationshipStackScreen: undefined;
  SlidersPage: undefined;
  NetworkPage: undefined;
  ControlPage: undefined;
  HelpPage: undefined;
  ProfilePage: undefined;
  DetailMonth: {item: Year};
};
export type HomeStackScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'HomeStackScreen'>;
export type RelationshipStackScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'RelationshipStackScreen'>;
export type SlidersPageNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'SlidersPage'>;
export type NetworkPageNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'NetworkPage'>;
export type ControlPageNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'ControlPage'>;
export type HelpPageNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'HelpPage'>;
export type ProfilePageNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'ProfilePage'>;

const NoneHeaderOption: StackNavigationOptions = {
  headerShown: false,
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator initialRouteName={'ProfilePage'}>
    <ProfileStack.Screen options={NoneHeaderOption} name="ProfilePage" component={ProfilePage} />
    <ProfileStack.Screen options={NoneHeaderOption} name="NewProfile" component={NewProfile} />
    <ProfileStack.Screen options={NoneHeaderOption} name="MyProfile" component={MyProfile} />
  </ProfileStack.Navigator>
);

// Home stack
export type HomeStackParamList = {
  HomePage: undefined;
  DetailMonth: {data: Year};
};

export type HomePageNavigationProp = StackNavigationProp<HomeStackParamList, 'HomePage'>;
export type DetailMonthNavigationProp = StackNavigationProp<HomeStackParamList, 'DetailMonth'>;

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName={'HomePage'}>
    <HomeStack.Screen options={NoneHeaderOption} name="HomePage" component={HomePage} />
    <HomeStack.Screen options={NoneHeaderOption} name="DetailMonth" component={DetailMonth} />
  </HomeStack.Navigator>
);

// Relationship stack
export type RelationshipStackParamList = {
  RelationshipPage: undefined;
  RelationshipMembers: {data: RelationShip};
  DetailMember: {data: User};
};

export type RelationshipPageNavigationProp = StackNavigationProp<RelationshipStackParamList, 'RelationshipPage'>;
export type RelationshipMembersNavigationProp = StackNavigationProp<RelationshipStackParamList, 'RelationshipMembers'>;
export type DetailMemberNavigationProp = StackNavigationProp<RelationshipStackParamList, 'DetailMember'>;

const RelationShipStack = createStackNavigator();

const RelationshipStackScreen = () => (
  <RelationShipStack.Navigator initialRouteName={'RelationShipPage'}>
    <RelationShipStack.Screen options={NoneHeaderOption} name="RelationshipPage" component={RelationshipPage} />
    <RelationShipStack.Screen options={NoneHeaderOption} name="RelationshipMembers" component={RelationshipMembers} />
    <RelationShipStack.Screen options={NoneHeaderOption} name="DetailMember" component={DetailMember} />
  </RelationShipStack.Navigator>
);

function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="HomeStackScreen" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <Drawer.Screen name="RelationshipPage" component={RelationshipStackScreen} />
      <Drawer.Screen name="SlidersPage" component={SlidesPage} />
      <Drawer.Screen name="NetworkPage" component={NetworkPage} />
      <Drawer.Screen name="ControlPage" component={ControlsPage} />
      <Drawer.Screen name="HelpPage" component={HelpPage} />
      <Drawer.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerComponent;
