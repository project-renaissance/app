/* eslint-disable import/no-extraneous-dependencies */
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Circle } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import InabText from '../components/InabText';
import style from '../style';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="w-full h-full bg-tiger-lighter">
      <ScrollView>
        {/* Classroom Content */}
        <View className="p-5 mx-[28px] rounded-lg bg-violet-light" style={style.boxShadow}>
          <InabText fontColor="#000">You have not join any classroom yet.</InabText>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 mt-4 rounded-lg"
            colors={['#451952', '#662549']}
          >
            <TouchableOpacity onPress={() => navigation.navigate('ClassroomCode')}>
              <InabText alignText="center">Join Classroom</InabText>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* NILAM Content */}
        <View
          className="p-5 mx-[28px] mt-[20px] rounded-lg bg-violet-light"
          style={style.boxShadow}
        >
          <View className="flex flex-col items-center justify-center">
            <InabText fontColor="#000">Your current NILAM count</InabText>
            <AnimatedCircularProgress
              size={200}
              width={15}
              backgroundWidth={10}
              fill={70}
              tintColor="#00ff00"
              tintColorSecondary="#ff0000"
              backgroundColor="#3d5875"
              arcSweepAngle={240}
              rotation={240}
              lineCap="round"
              style={{
                marginTop: 18,
              }}
            >
              {(fill) => (
                <View className="flex flex-row items-baseline justify-center">
                  <InabText fontColor="#000" size={36} weight="700">
                    120
                  </InabText>
                  <InabText fontColor="#000" size={15} weight="700">
                    /200
                  </InabText>
                </View>
              )}
            </AnimatedCircularProgress>
            <InabText fontColor="#000" size={12} alignText="center">
              Keep it up! 80 more NILAM records and you will receive 2 stars!
            </InabText>
          </View>

          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full py-3 mt-4 rounded-lg"
            colors={['#451952', '#662549']}
          >
            <InabText alignText="center">Add Nilam Record</InabText>
          </LinearGradient>
        </View>

        {/* Borrow Book Content */}
        <View
          className="p-5 mx-[28px] mb-[90px] mt-[20px] rounded-lg bg-violet-light"
          style={style.boxShadow}
        >
          <InabText fontColor="#000">Current Borrow Book:</InabText>
          <View className="flex flex-row items-center w-full gap-5 mt-0">
            <Image
              style={{
                height: 90,
                width: 60,
              }}
              source={{
                uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667708346i/43641.jpg',
              }}
            />
            <View className="flex flex-col items-start justify-between" style={{ flex: 1 }}>
              <InabText fontColor="#000" size={18} weight="700">
                Water for Elephants: Deez Nuts
              </InabText>
              <View className="flex flex-row gap-[16px]">
                <View className="">
                  <InabText fontColor="#000" size={12}>
                    Borrow Date:
                  </InabText>
                  <InabText fontColor="#000">19/12/2023</InabText>
                </View>
                <View className="">
                  <InabText fontColor="#000" size={12}>
                    Return Date:
                  </InabText>
                  <InabText fontColor="#000">30/12/2023</InabText>
                </View>
              </View>
            </View>
          </View>
        </View>
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
