import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React, { useCallback, useMemo, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import InabText from '../../components/InabText';
import globalStyle from '../../globalStyle';
import InabFab from '../../components/InabFab';
import COLORS from '../../assets/colors';
import InabButton from '../../components/InabButton';
import InabBottomSheet from '../../components/InabBottomSheet';

function ClassroomList({ navigation }) {
  const classroomListSheet = useRef(null);
  const snapPoints = ['25%', '60%', '75%'];
  const handlePresentPress = () => classroomListSheet.current.present();

  const centerFab = { icon: 'add', route: '', label: 'Create Class', onPress: handlePresentPress };

  return (
    <SafeAreaView className="relative h-full pt-3 bg-tiger-lighter">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="p-6 rounded-b-[20px] "
        colors={[COLORS.gradient_from, COLORS.gradient_to]}
      >
        <View className="flex flex-col items-center justify-center w-full">
          <InabText size={20} weight="700" fontColor="white">
            Classroom List
          </InabText>
        </View>
      </LinearGradient>

      <View style={[styles.listClassroom, globalStyle.boxShadow]}>
        <TouchableOpacity
          className="w-full p-5 rounded-lg bg-violet-light"
          style={styles.listItem}
          onPress={handlePresentPress}
        >
          <View style={styles.classroomDetail}>
            <InabText size={18} weight="700" fontColor="black">
              5 Amanah
            </InabText>
            <InabText size={14} fontColor="black">
              Total Students: 20
            </InabText>
          </View>
          <Ionicons name="trash" color="red" size={20} />
        </TouchableOpacity>
      </View>

      <View className="absolute bottom-0 right-0">
        <InabFab centerFab={centerFab} />
      </View>

      <InabBottomSheet bottomSheetRef={classroomListSheet} snapPoint={snapPoints} startIndex={1}>
        <View>
          <InabText
            weight="700"
            size={20}
            fontColor="black"
            alignText="center"
            cssStyle={globalStyle.sheetTitle}
          >
            Create New Classroom
          </InabText>
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Classrooom Name"
          />
          <TextInput
            className="w-full p-4 mb-3 transition-all bg-white border rounded-lg border-violet border-1 focus:border-violet-dark"
            placeholder="Classroom Description"
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

ClassroomList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  listClassroom: {
    display: 'flex',
    gap: 16,
    width: '100%',
    padding: 20,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  classroomDetail: {
    gap: 8,
  },
});

export default ClassroomList;
