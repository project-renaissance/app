import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function BookList({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
    >
      <Text>BookList</Text>

      <StatusBar />
    </SafeAreaView>
  );
}

BookList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BookList;
