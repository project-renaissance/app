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
import COLORS from '../../assets/colors';

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className=" bg-violet-light">
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-6 rounded-b-[20px] "
          colors={[COLORS.gradient_from, COLORS.gradient_to]}
        >
          <View className="flex flex-col items-center justify-center w-full">
            <Image
              className="w-[150px] h-[150px] rounded-full mb-8"
              // eslint-disable-next-line global-require
              source={require('../../../assets/logo.png')}
            />
            <InabText size={20} weight="700" fontColor="white">
              Register Account
            </InabText>
          </View>
        </LinearGradient>
        <View className="p-[50px]">
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Full Name"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Username"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Email"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Password"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Confirm Password"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Password"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Confirm Password"
          />

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 my-4 rounded-lg"
            colors={[COLORS.gradient_from, COLORS.gradient_to]}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
              <InabText alignText="center" transform="uppercase" weight="700">
                Register
              </InabText>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <InabText weight="700" alignText="center" fontColor={COLORS.gray_text}>
              Already got account? Login here!
            </InabText>
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
