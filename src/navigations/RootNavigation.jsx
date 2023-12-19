import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainBottomTabNavigation from './MainBottomTabNavigation';
import TestScreen from '../screens/TestScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ClassroomCode from '../screens/classroom/ClassroomCode';
import ClassroomDetail from '../screens/classroom/ClassroomDetail';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="ClassroomCode" component={ClassroomCode} />
          <Stack.Screen name="ClassroomDetail" component={ClassroomDetail} />
        </Stack.Group>
        <Stack.Screen name="Main" component={MainBottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
