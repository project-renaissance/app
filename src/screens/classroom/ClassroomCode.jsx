/* eslint-disable import/no-extraneous-dependencies */
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ClassroomCode({ navigation }) {
  return (
    <SafeAreaView>
      <View className="p-5 rounded-b-[20px] bg-yellow-400">
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ClassroomDetail')}
            className="w-full py-3 my-2 bg-red-700 rounded-lg "
          >
            <Text className="text-center text-white">Submit</Text>
          </TouchableOpacity>
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

export default ClassroomCode;
