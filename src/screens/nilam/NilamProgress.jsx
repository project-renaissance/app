import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SceneMap, TabView } from 'react-native-tab-view';
import { Portal } from '@gorhom/portal';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import * as Progress from 'react-native-progress';
import InabText from '../../components/InabText';
import InabFab from '../../components/InabFab';
import globalStyle from '../../globalStyle';
import ListRecord from './history/ListRecord';
import TabBar from '../../components/TabBar';
import COLORS from '../../assets/colors';
import InabButton from '../../components/InabButton';
import InabBottomSheet from '../../components/InabBottomSheet';

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

  // bottom sheet config
  const nilamSheet = useRef(null);
  const snapPoints = ['25%', '60%', '75%'];
  const handlePresentPress = () => nilamSheet.current.present();

  // tab array
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Approved' },
    { key: 'second', title: 'Rejected' },
    { key: 'third', title: 'All' },
  ]);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  // fab array
  const topButton = [{ id: 1, icon: 'qr-code-outline', route: null }];
  const sideButton = [
    { id: 1, icon: 'document-text-outline', route: null, onpress: handlePresentPress },
  ];
  const centerButton = { icon: 'add', isRotate: true };

  return (
    <SafeAreaView className="relative h-full pt-3 bg-tiger-lighter">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="p-6 rounded-b-[20px] "
        colors={[COLORS.gradient_from, COLORS.gradient_to]}
      >
        <View className="flex flex-col items-center justify-center w-full">
          <InabText size={20} weight="700" fontColor={COLORS.white}>
            NILAM Progress
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
              <Progress.Bar color={COLORS.white} progress={0.1} width={200} />
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
        <InabFab topListFab={topButton} sideListFab={sideButton} centerFab={centerButton} />
      </View>

      <InabBottomSheet bottomSheetRef={nilamSheet} snapPoint={snapPoints} startIndex={2}>
        <View>
          <InabText
            weight="700"
            size={20}
            fontColor="black"
            alignText="center"
            cssStyle={globalStyle.sheetTitle}
          >
            Add Nilam Progress
          </InabText>
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Book Title"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Author"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Genre"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Total Number of Pages"
            keyboardType="numeric"
          />
          <InabButton
            cssStyle={{ textTransform: 'uppercase', fontWeight: 700, textAlign: 'center' }}
          >
            Create
          </InabButton>
        </View>
      </InabBottomSheet>
    </SafeAreaView>
  );
}

NilamProgress.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NilamProgress;
