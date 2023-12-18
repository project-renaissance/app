import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import NilamProgress from '../screens/nilam/NilamProgress';
import ClassroomList from '../screens/classroom/ClassroomList';
import BookList from '../screens/library/BookList';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

function MainBottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarInactiveTintColor: 'yellow',
        tabBarActiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'red' },
      })}
    >
      <Tab.Screen name="Classroom" component={ClassroomList} />
      <Tab.Screen name="Nilam" component={NilamProgress} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={BookList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MainBottomTabNavigation;
