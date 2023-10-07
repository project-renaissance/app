import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

function MainBottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarInactiveTintColor: '#4d4d4d',
        tabBarActiveTintColor: 'white',
        tabBarStyle: { backgroundColor: '#111111' },
        headerShown: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
      <Tab.Screen name="User Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainBottomTabNavigation;
