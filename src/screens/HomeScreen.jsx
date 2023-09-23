import React from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text>Open up HomeScreen.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default HomeScreen;
