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
import { LinearGradient } from 'expo-linear-gradient';
import InabText from '../../components/InabText';

function ForgotPasswordScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View className="relative h-full bg-violet-light">
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-6 rounded-b-[20px] "
          colors={['#451952', '#662549']}
        >
          <View className="flex flex-col items-center justify-center w-full">
            <Image
              className="w-[150px] h-[150px] rounded-full mb-8"
              source={require('../../../assets/logo.png')}
            />
            <InabText weight="700" size={20} fontColor="white">
              Forgot Password
            </InabText>
          </View>
        </LinearGradient>
        <View className="p-[50px]">
          <InabText weight="700" fontColor="#475569" className="font-semibold text-slate-700">
            Please enter the correct email address, so that we can reset your password.
          </InabText>

          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Email"
          />

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 my-4 rounded-lg"
            colors={['#451952', '#662549']}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <InabText alignText="center" transform="uppercase" weight="700">
                Submit
              </InabText>
            </TouchableOpacity>
          </LinearGradient>
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
