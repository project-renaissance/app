import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SceneMap, TabView } from 'react-native-tab-view';
import * as Progress from 'react-native-progress';
import InabText from '../../components/InabText';
import NilamFab from '../../components/NilamFab';
import style from '../../style';
import ListRecord from './history/ListRecord';
import TabBar from '../../components/TabBar';

const renderScene = SceneMap({
  first: () => (
    <ListRecord>
      <InabText>Approved</InabText>
    </ListRecord>
  ),
  second: () => (
    <ListRecord>
      <InabText>Rejected</InabText>
    </ListRecord>
  ),
  third: () => (
    <ListRecord>
      <InabText>All</InabText>
    </ListRecord>
  ),
});

function NilamProgress({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Approved',
    },
    {
      key: 'second',
      title: 'Rejected',
    },
    {
      key: 'third',
      title: 'All',
    },
  ]);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <SafeAreaView className="relative h-full pt-3 bg-tiger-lighter">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="p-6 rounded-b-[20px] "
        colors={['#451952', '#662549']}
      >
        <View className="flex flex-col items-center justify-center w-full">
          <InabText size={20} weight="700" fontColor="white">
            NILAM Progress Test
          </InabText>
          <View className="flex flex-col items-center justify-center my-3">
            <InabText>Luqman Abd Latif</InabText>
            <InabText>Current Award</InabText>
            <View className="flex flex-row items-center justify-center mb-[8px]">
              <InabText weight="800">0</InabText>
              <Ionicons className="ms-[2px]" size={16} name="star" color="yellow" />
            </View>
            <InabText>Total Nilam Record</InabText>
            <InabText>2/10</InabText>
            <View className="mt-[8px]">
              <Progress.Bar color="white" progress={0.1} width={200} />
            </View>
          </View>
        </View>
      </LinearGradient>
      <View className="mt-[16px] p-[10px]">
        <InabText fontColor="black" weight="800" size={20} alignText="center">
          Nilam History
        </InabText>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={(props) => (
          <TabBar navigationState={{ index, routes }} onIndexChange={handleIndexChange} />
        )}
        onIndexChange={handleIndexChange}
        initialLayout={{ width: layout.width }}
      />

      <View className="absolute bottom-0 right-0">
        <NilamFab />
      </View>
    </SafeAreaView>
  );
}

NilamProgress.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NilamProgress;
