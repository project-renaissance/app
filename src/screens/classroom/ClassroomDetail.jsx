/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import InabText from '../../components/InabText';
import globalStyle from '../../globalStyle';
import COLORS from '../../assets/colors';

function ClassroomDetail({ navigation }) {
  return (
    <SafeAreaView className="h-full bg-tiger-lighter">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full p-5 rounded-b-[20px] h-[30%]"
        colors={[COLORS.gradient_from, COLORS.gradient_from]}
      >
        <View className="flex flex-col items-start justify-center">
          <View className="flex flex-row items-center justify-center gap-1 mb-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon color="white" name="arrow-back" size={28} />
            </TouchableOpacity>
            <InabText weight="bold" size={20}>
              Classroom Detail
            </InabText>
          </View>
          <View className="w-full my-3">
            <InabText weight="bold" size={30} alignText="center">
              5 Nilam
            </InabText>
          </View>
        </View>

        <View
          className="my-[28px] rounded-lg p-5 bg-violet-light flex flex-col justify-center items-center"
          style={globalStyle.boxShadow}
        >
          <InabText fontColor="black" size={12}>
            Teacher's Classroom
          </InabText>
          <InabText fontColor="black" size={18} weight="700">
            Pn. Samsul
          </InabText>
        </View>
      </LinearGradient>

      <View
        className="mx-[20px] mt-[40px] rounded-lg p-5 bg-violet-light flex flex-col justify-center items-center"
        style={globalStyle.boxShadow}
      >
        <InabText fontColor="black" size={12}>
          Student List
        </InabText>
        <View className="w-full ">
          <View className="flex items-center justify-center py-3 my-2 bg-violet rounded-xl">
            <InabText fontColor="white" weight="700">
              Fana
            </InabText>
          </View>
          <View className="flex items-center justify-center py-3 my-2 bg-violet rounded-xl">
            <InabText fontColor="white" weight="700">
              Shameer
            </InabText>
          </View>
          <View className="flex items-center justify-center py-3 my-2 bg-violet rounded-xl">
            <InabText fontColor="white" weight="700">
              Bok
            </InabText>
          </View>
        </View>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

ClassroomDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default ClassroomDetail;
