/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import NilamProgress from '../screens/nilam/NilamProgress';
import BookList from '../screens/library/BookList';
import Profile from '../screens/profile/Profile';
import ClassroomNavigation from './ClassroomNavigation';
import ClassroomList from '../screens/classroom/ClassroomList';

const Tab = createBottomTabNavigator();

function MainBottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarInactiveTintColor: 'yellow',
        tabBarActiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'gray' },
        tabBarShowLabel: 'id',
      })}
    >
      <Tab.Screen
        name="Classroom"
        component={ClassroomList}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="google-classroom" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Nilam"
        component={NilamProgress}
        options={{
          tabBarIcon: () => <Ionicons name="document-text-outline" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home-outline" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={BookList}
        options={{
          tabBarIcon: () => <Ionicons name="book-outline" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Ionicons name="person-outline" size={20} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainBottomTabNavigation;
