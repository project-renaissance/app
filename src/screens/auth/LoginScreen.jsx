/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Image, ImageBackground, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        className="relative flex flex-col flex-wrap h-full bg-slate-600"
        source={require('../../../assets/bg_two.jpeg')}
      >
        <View className="flex items-center justify-center p-[32px]">
          <Image
            className="w-[150px] h-[150px] rounded-full mb-10"
            source={require('../../../assets/logo.png')}
          />
          <Text className="text-2xl font-semibold text-center text-white">
            Hello there, welcome back!
          </Text>
          <Text className="mt-8 text-xl font-semibold text-center text-white">Login</Text>
        </View>

        <View className="flex flex-col items-center justify-center p-[58px] bg-yellow-400 rounded-t-[20px] w-full absolute bottom-0">
          <TextInput
            className="w-full p-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Email Address"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700"
            placeholder="Password"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            className="w-full pt-[24px]"
          >
            <Text className="font-semibold text-right text-slate-600">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Main', { screen: 'Home' })}
            className="w-full py-3 my-2 bg-red-700 rounded-lg"
          >
            <Text className="text-center text-white">Enter</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="font-semibold text-slate-600">No account yet? Register here!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
