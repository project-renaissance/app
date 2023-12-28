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

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className=" bg-violet-light">
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-6 rounded-b-[20px] "
          colors={['#451952', '#662549']}
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
            className="w-full p-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Full Name"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Username"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Email"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Password"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Confirm Password"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Password"
          />
          <TextInput
            className="w-full p-4 mt-4 bg-white rounded-lg border-1 border-slate-700 focus:border focus:border-violet"
            placeholder="Confirm Password"
          />

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 my-4 rounded-lg"
            colors={['#451952', '#662549']}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
              <InabText alignText="center" transform="uppercase" weight="700">
                Register
              </InabText>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <InabText weight="700" alignText="center" fontColor="#475569">
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
