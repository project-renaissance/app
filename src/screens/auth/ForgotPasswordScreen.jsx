/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ForgotPasswordScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View className="relative h-full bg-yellow-50">
        <View className="p-6 bg-yellow-400 rounded-b-[20px] sticky top-0">
          <View className="flex flex-col items-center justify-center w-full">
            <Image
              className="w-[150px] h-[150px] rounded-full mb-8"
              source={require('../../../assets/logo.png')}
            />
            <Text className="text-xl font-semibold text-slate-700">Forgot Password</Text>
          </View>
        </View>
        <View className="p-[50px]">
          <Text className="font-semibold text-slate-700">
            Please enter the correct email address, so that we can reset your password.
          </Text>

          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Email"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="w-full py-3 my-5 bg-red-700 rounded-lg"
          >
            <Text className="text-center text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

ForgotPasswordScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ForgotPasswordScreen;
