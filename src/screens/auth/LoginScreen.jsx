/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { SlideInDown, SlideInUp, SlideOutDown } from 'react-native-reanimated';
import { State } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import InabLoadingIndicator from '../../components/InabLoadingIndicator';
import InabText from '../../components/InabText';
import COLORS from '../../assets/colors';

function LoginScreen({ navigation }) {
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleLoading, setToggleLoading] = useState(false);

  const onTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const openLoading = () => {
    setToggleLoading(true);

    setTimeout(() => {
      setToggleLoading(false);
      navigation.navigate('Main', { screen: 'Home' });
    }, 2000);
  };

  return (
    <SafeAreaView className="relative">
      <ImageBackground
        className="relative flex flex-col flex-wrap h-full bg-slate-600"
        source={require('../../../assets/bg_two.jpeg')}
      >
        <View className="flex flex-col items-center justify-center p-[32px] w-full">
          <Image
            className="w-[150px] h-[150px] mb-10 rounded-full"
            source={require('../../../assets/logo.png')}
          />
          <InabText
            size={20}
            weight="700"
            className="mt-8 text-xl font-semibold text-center text-white"
          >
            Login
          </InabText>
        </View>

        {/* Login Form */}
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown}
          className="flex flex-col items-center justify-center p-[58px] bg-violet-light rounded-t-[20px] w-full absolute bottom-0 "
        >
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Email Address"
          />
          <View className="relative w-full">
            <TextInput
              secureTextEntry={togglePassword}
              className="w-full p-4 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
              placeholder="Password"
            />
            <TouchableOpacity
              onPress={onTogglePassword}
              className="absolute bottom-[15px] right-[15px]"
            >
              <Ionicons name={togglePassword ? 'eye' : 'eye-off'} size={28} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            className="w-full pt-[24px]"
          >
            <InabText weight="700" alignText="right" fontColor={COLORS.gray_text}>
              Forgot Password?
            </InabText>
          </TouchableOpacity>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 mt-4 rounded-lg"
            colors={[COLORS.gradient_from, COLORS.gradient_to]}
          >
            <TouchableOpacity onPress={openLoading}>
              <InabText alignText="center" transform="uppercase" weight="700">
                Enter
              </InabText>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={() => navigation.navigate('Register')} className="mt-4">
            <InabText weight="700" fontColor={COLORS.gray_text}>
              No account yet? Register here!
            </InabText>
          </TouchableOpacity>
          {/* </View> */}
        </Animated.View>
      </ImageBackground>

      <InabLoadingIndicator
        isVisible={toggleLoading}
        onCloseLoading={() => setToggleLoading(false)}
      />
    </SafeAreaView>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
