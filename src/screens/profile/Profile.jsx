/* eslint-disable global-require */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import InabText from '../../components/InabText';
import style from '../../style';

function Profile({ navigation }) {
  return (
    <SafeAreaView className="h-full bg-tiger-lighter">
      <ScrollView className="mt-8">
        <View
          className="flex items-center justify-center p-5 mx-auto bg-[#fff] rounded-2xl"
          style={style.boxShadow}
        >
          <Image
            source={require('../../../assets/default_pic.png')}
            style={{
              height: 80,
              width: 80,
            }}
          />
        </View>

        <View className="bg-violet-light p-7 m-[28px] mb-0 rounded-xl" style={style.boxShadow}>
          <View className="mb-4 border-b-2 border-violet">
            <InabText fontColor="black" size={15}>
              Personal Information
            </InabText>
          </View>
          <View className="mb-3">
            <InabText fontColor="black" size={12}>
              Name
            </InabText>
            <InabText fontColor="black" weight="700" size={16}>
              Auni bin Yakoob
            </InabText>
          </View>
          <View className="">
            <InabText fontColor="black" size={12}>
              Email Address
            </InabText>
            <InabText fontColor="black" weight="700" size={16}>
              auni812@gmail.com
            </InabText>
          </View>
        </View>

        <View className="bg-violet-light p-8 m-[28px] rounded-xl" style={style.boxShadow}>
          <View className="mb-4 border-b-2 border-violet">
            <InabText fontColor="black" size={15}>
              Classroom Information
            </InabText>
          </View>
          <View className="mb-3">
            <InabText fontColor="black" size={12}>
              Classroom Name
            </InabText>
            <InabText fontColor="black" weight="700" size={16}>
              4 Ixora
            </InabText>
          </View>
          <View className="">
            <InabText fontColor="black" size={12}>
              Teacher Classroom
            </InabText>
            <InabText fontColor="black" weight="700" size={16}>
              Ustazah Suzuki
            </InabText>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className="p-4 uppercase m-[28px] mt-0 bg-maroon flex flex-row items-center justify-center rounded-xl mb-[90px]"
          style={style.boxShadow}
        >
          <MaterialIcons name="logout" color="white" size={20} style={{ marginEnd: 8 }} />
          <InabText fontColor="white" weight="700">
            LOGOUT
          </InabText>
        </TouchableOpacity>

        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
