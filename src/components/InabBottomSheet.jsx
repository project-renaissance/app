import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import { Portal } from '@gorhom/portal';
import COLORS from '../assets/colors';
import globalStyle from '../globalStyle';

function InabBottomSheet({ children, snapPoint, bottomSheetRef, startIndex }) {
  const snapPoints = snapPoint;

  return (
    <Portal hostName="bottomSheet">
      <BottomSheetModal
        backgroundStyle={globalStyle.bottomSheetBackground}
        style={globalStyle.bottomSheetContainer}
        backdropComponent={BottomSheetBackdrop}
        ref={bottomSheetRef}
        index={startIndex}
        snapPoints={snapPoints}
      >
        {children}
      </BottomSheetModal>
    </Portal>
  );
}

InabBottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  snapPoint: PropTypes.arrayOf(PropTypes.string),
  startIndex: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  bottomSheetRef: PropTypes.object,
};

InabBottomSheet.defaultProps = {
  snapPoint: ['25%', '50%'],
  bottomSheetRef: {},
  startIndex: 1,
};

export default InabBottomSheet;
