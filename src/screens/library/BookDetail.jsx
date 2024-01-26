/* eslint-disable react/no-unescaped-entities */
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SceneMap, TabView } from 'react-native-tab-view';
import globalStyle from '../../globalStyle';
import InabText from '../../components/InabText';
import TabBar from '../../components/TabBar';
import COLORS from '../../assets/colors';

const renderScene = SceneMap({
  first: () => (
    <View className="p-3">
      <View style={styles.details}>
        <InabText fontColor="black">Publisher:</InabText>
        <InabText fontColor="gray">J.K. Rowling</InabText>
      </View>
      <View style={styles.details}>
        <InabText fontColor="black">Pages:</InabText>
        <InabText fontColor="gray">153 pages</InabText>
      </View>
      <View style={styles.details}>
        <InabText fontColor="black">Genres:</InabText>
        <InabText fontColor="gray">Fantasy, Fiction, Young Adult, Magic</InabText>
      </View>
    </View>
  ),
  second: () => (
    <View className="p-3">
      <InabText fontColor="black">
        The Harry Potter prequel is an 800-word story written by J. K. Rowling, and was published
        online on 11 June 2008. Set about three years before the birth of Harry Potter, the story
        recounts an adventure experienced by Sirius Black and James Potter. At the bottom of the
        card, JKR wrote: "From the prequel I am NOT working on - but that was fun!"
      </InabText>
    </View>
  ),
});

function BookDetail({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Details',
    },
    {
      key: 'second',
      title: 'Summary',
    },
  ]);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <SafeAreaView className="relative flex items-center h-full pt-3 bg-tiger-lighter">
      <View className="rounded-b-full w-[120%] h-[30%] bg-violet relative">
        {/* Book Detail */}
        <View style={styles.container} className="rounded-lg">
          <Image
            style={styles.bookImage}
            source={{
              uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
            }}
          />

          <View className="mt-4">
            <InabText size={18} fontColor="black" weight="700">
              Harry Potter: The Prequel
            </InabText>
            <InabText alignText="center" size={14} fontColor="gray">
              By J.K. Rowling
            </InabText>
          </View>
        </View>
      </View>
      <View className="mt-[30%]">
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="w-full p-3 mt-4 rounded-lg"
          colors={[COLORS.gradient_from, COLORS.gradient_from]}
        >
          <InabText alignText="center">Borrow Book</InabText>
        </LinearGradient>
      </View>
      <TabView
        className="w-full"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={(props) => (
          <TabBar navigationState={{ index, routes }} onIndexChange={handleIndexChange} />
        )}
        onIndexChange={handleIndexChange}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}

BookDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  bookImage: {
    height: 200,
    width: 135,
    marginBottom: 8,
    borderRadius: 8,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});

export default BookDetail;
