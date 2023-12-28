/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InabText from '../../components/InabText';

function ClassroomDetail({ navigation }) {
  return (
    <SafeAreaView className="h-full bg-slate-200">
      <View className="p-5 rounded-b-[20px] bg-yellow-400">
        <View className="flex flex-col items-start justify-center">
          <View className="flex flex-row items-center justify-center gap-1 mb-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={28} />
            </TouchableOpacity>
            <Text className="text-xl font-bold">Classroom Detail</Text>
          </View>
          <Text className="w-full my-3 text-3xl font-semibold text-center">5 Nilam</Text>
        </View>
      </View>

      <View className="m-[28px] rounded-lg p-5 bg-yellow-300 flex flex-col justify-center items-center">
        <InabText size={12}>Teacher's Classroom</InabText>
        <InabText size={18} weight="700">
          Pn. Samsul
        </InabText>
      </View>
      <View className="m-[28px] mt-0 rounded-lg p-5 bg-yellow-300 flex flex-col justify-center items-center">
        <InabText size={12}>Student List</InabText>
        <View className="w-full ">
          <View className="flex items-center justify-center py-3 my-2 bg-slate-200 rounded-xl">
            <InabText weight="700">Fana</InabText>
          </View>
          <View className="flex items-center justify-center py-3 my-2 bg-slate-200 rounded-xl">
            <InabText weight="700">Shameer</InabText>
          </View>
          <View className="flex items-center justify-center py-3 my-2 bg-slate-200 rounded-xl">
            <InabText weight="700">Bok</InabText>
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
