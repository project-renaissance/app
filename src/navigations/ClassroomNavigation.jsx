import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassroomCode from '../screens/classroom/ClassroomCode';
import ClassroomList from '../screens/classroom/ClassroomList';

const Stack = createNativeStackNavigator();

function ClassroomNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="ClassroomCode" component={ClassroomCode} />
        <Stack.Screen name="ClassroomList" component={ClassroomList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ClassroomNavigation;
