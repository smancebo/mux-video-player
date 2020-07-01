import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeComponent from 'scenes/home';
import LiveComponent from 'scenes/live';
import PlaybackComponent from 'scenes/playback';
import { HomeScreenParams } from './screen-type-params';

const Stack = createStackNavigator<HomeScreenParams>();

const TabNav = createBottomTabNavigator<HomeScreenParams>();

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeComponent} />
    <Stack.Screen name="Playback" component={PlaybackComponent} />
  </Stack.Navigator>
);

const Live = () => (
  <Stack.Navigator >
    <Stack.Screen name="Live" component={LiveComponent} />
    <Stack.Screen name="Playback" component={PlaybackComponent} />
  </Stack.Navigator>
);

const MainTabbar = () => (
  <TabNav.Navigator>
    <TabNav.Screen name="Home" component={Home} />
    <TabNav.Screen name="Live" component={Live} />
  </TabNav.Navigator>
)


export default MainTabbar;
