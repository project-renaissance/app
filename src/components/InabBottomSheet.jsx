import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import COLORS from '../assets/colors';

function InabBottomSheet({ children, snapPoint }) {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = snapPoint;
  const handlePresentPress = () => bottomSheetModalRef.current.present();

  return (
    <BottomSheetModal
      backgroundStyle={styles.bottomSheetBg}
      style={styles.sheetContainer}
      backdropComponent={BottomSheetBackdrop}
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      {children}
    </BottomSheetModal>
  );
}

InabBottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  snapPoint: PropTypes.arrayOf(PropTypes.string),
};

InabBottomSheet.defaultProps = {
  snapPoint: ['25%', '50%'],
};

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: COLORS['violet-light'],
    padding: 16,
    borderRadius: 24,
  },
  sheetContainer: {
    padding: 16,
  },
});

export default InabBottomSheet;
