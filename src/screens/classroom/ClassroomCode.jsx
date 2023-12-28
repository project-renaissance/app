/* eslint-disable import/no-extraneous-dependencies */
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import InabText from '../../components/InabText';

function ClassroomCode({ navigation }) {
  return (
    <SafeAreaView className="flex h-full bg-tiger-lighter ">
      <View className="p-5 rounded-b-[20px] bg-violet-light" style={styles.boxShadow}>
        <View className="flex flex-col items-start justify-center">
          <View className="flex flex-row items-center justify-center gap-1 mb-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} />
            </TouchableOpacity>
            <Text className="text-xl font-bold ">Classroom Code</Text>
          </View>
          <TextInput
            className="w-full p-4 mb-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Email Address"
          />

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 my-4 rounded-lg"
            colors={['#451952', '#662549']}
          >
            <TouchableOpacity onPress={() => navigation.navigate('ClassroomDetail')}>
              <InabText alignText="center" transform="uppercase" weight="700">
                Submit
              </InabText>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}

ClassroomCode.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
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

export default ClassroomCode;
