/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Image, ImageBackground, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import InabText from '../../components/InabText';

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
          <InabText
            size={24}
            weight="700"
            className="text-2xl font-semibold text-center text-white"
          >
            Hello there, welcome back!
          </InabText>
          <InabText
            size={20}
            weight="700"
            className="mt-8 text-xl font-semibold text-center text-white"
          >
            Login
          </InabText>
        </View>

        <View className="flex flex-col items-center justify-center p-[58px] bg-violet-light rounded-t-[20px] w-full absolute bottom-0">
          <TextInput
            className="w-full p-4 transition-all bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Email Address"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Password"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            className="w-full pt-[24px]"
          >
            <InabText weight="700" alignText="right" fontColor="#475569">
              Forgot Password?
            </InabText>
          </TouchableOpacity>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 mt-4 rounded-lg"
            colors={['#451952', '#662549']}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
              <InabText alignText="center" transform="uppercase" weight="700">
                Enter
              </InabText>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={() => navigation.navigate('Register')} className="mt-4">
            <InabText weight="700" fontColor="#475569">
              No account yet? Register here!
            </InabText>
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
