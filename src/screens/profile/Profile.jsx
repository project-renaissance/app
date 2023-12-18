import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Profile({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
    >
      <Text>Profile</Text>

      <StatusBar />
    </SafeAreaView>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
