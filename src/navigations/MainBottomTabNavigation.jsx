/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

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
      style={styles.tabStyle}
      screenOptions={() => ({
        headerShown: false,
        tabBarInactiveTintColor: '#AE445A',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#451952',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopWidth: 0,
          maxHeight: 100,
          minHeight: 70,
          margin: 0,
        },
        tabBarLabelStyle: {
          margin: 0,
          paddingBottom: 12,
        },
      })}
    >
      <Tab.Screen
        name="Classroom"
        component={ClassroomList}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="google-classroom"
              size={20}
              color={focused ? 'white' : '#AE445A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Nilam"
        component={NilamProgress}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="document-text-outline"
              size={20}
              color={focused ? 'white' : '#AE445A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home-outline" size={20} color={focused ? 'white' : '#AE445A'} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={BookList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="book-outline" size={20} color={focused ? 'white' : '#AE445A'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-outline" size={20} color={focused ? 'white' : '#AE445A'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    padding: '12px',
    paddingTop: '18px',
  },
});

export default MainBottomTabNavigation;
