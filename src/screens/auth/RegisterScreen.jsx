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

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="relative bg-yellow-50">
        <View className="p-6 bg-yellow-400 rounded-b-[20px] sticky top-0">
          <View className="flex flex-col items-center justify-center w-full">
            <Image
              className="w-[150px] h-[150px] rounded-full mb-8"
              // eslint-disable-next-line global-require
              source={require('../../../assets/logo.png')}
            />
            <Text className="text-xl font-semibold text-slate-700">Register Account</Text>
          </View>
        </View>
        <View className="p-[50px]">
          <TextInput
            className="w-full p-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Full Name"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Username"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Email"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Password"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Confirm Password"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Password"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Confirm Password"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Main', { screen: 'Home' })}
            className="w-full py-3 my-5 bg-red-700 rounded-lg"
          >
            <Text className="text-center text-white">Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-semibold text-center text-slate-600">
              Already got account? Login here!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

RegisterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegisterScreen;
