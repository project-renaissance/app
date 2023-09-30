import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCreateTokenMutation } from '../services/api/inab';

function HomeScreen() {
  //   const [token] = useCreateTokenMutation();

  //   useEffect(() => {
  //     token({
  //       device_id: '098123',
  //       os_type: Platform.OS,
  //       device_name: 'iPhone',
  //       push_token: 'asdflkj1312',
  //     });
  //   }, [token]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
    >
      <Text>Open up HomeScreen.js to start working on your app!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default HomeScreen;
