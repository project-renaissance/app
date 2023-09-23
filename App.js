import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigation from './src/navigations/RootNavigation'

function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App
