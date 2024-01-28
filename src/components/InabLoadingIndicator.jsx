/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import InabText from './InabText';
import COLORS from '../assets/colors';
import { deviceHeight, deviceWidth } from '../assets/dimensionModal';

function InabLoadingIndicator({ label, isVisible, onCloseLoading }) {
  return (
    <Modal
      animationType="slide"
      isVisible={isVisible}
      onBackdropPress={() => {
        onCloseLoading(false);
      }}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      style={styles.loadingContainer}
    >
      <View style={styles.childrenLoading}>
        <ActivityIndicator size="large" color={COLORS.white} />
        <InabText fontColor={COLORS.white} cssStyle={styles.textLoading}>
          {label}
        </InabText>
      </View>
    </Modal>
  );
}

InabLoadingIndicator.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  onCloseLoading: PropTypes.func.isRequired,
};

InabLoadingIndicator.defaultProps = {
  label: 'Loading...',
};

const styles = StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  childrenLoading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    borderRadius: 24,
    backgroundColor: COLORS.violet,
    width: '50%',
  },

  textLoading: {
    marginTop: 16,
  },
});

export default InabLoadingIndicator;
