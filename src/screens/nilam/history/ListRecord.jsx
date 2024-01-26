import React from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import InabText from '../../../components/InabText';
import COLORS from '../../../assets/colors';

function ListRecord({ children }) {
  return (
    <View style={{ flex: 1 }} className="px-[28px]">
      <View className="border-b border-b-[#a1a1aa] pb-[10px]">
        <InabText fontColor={COLORS.black}>Arnab dan Kura kura</InabText>
        <View className="flex flex-row items-center justify-between">
          <InabText size={12} fontColor={COLORS.gray_text_2}>
            Approved on 12th January 2023
          </InabText>
          <InabText size={12} fontColor={COLORS.gray_text_2}>
            Comic
          </InabText>
        </View>
      </View>
      <View className="border-b border-b-[#a1a1aa] py-[10px]">
        <InabText fontColor={COLORS.black}>Arnab dan Kura kura</InabText>
        <View className="flex flex-row items-center justify-between">
          <InabText size={12} fontColor={COLORS.gray_text_2}>
            Approved on 12th January 2023
          </InabText>
          <InabText size={12} fontColor={COLORS.gray_text_2}>
            Comic
          </InabText>
        </View>
      </View>
    </View>
  );
}

ListRecord.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListRecord;
