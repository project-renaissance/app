import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-slate-200">
      <View className="p-5 mx-[28px] rounded-lg bg-slate-400" style={styles.boxShadow}>
        <Text>You have not join any classroom yet.</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('ClassroomCode')}
          className="w-full py-3 mt-4 bg-red-700 rounded-lg"
        >
          <Text className="text-center text-white">Join Classroom</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default HomeScreen;
