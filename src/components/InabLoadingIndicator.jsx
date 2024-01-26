import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import InabText from './InabText';
import COLORS from '../assets/colors';

function InabLoadingIndicator({ label }) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.violet} />
      <InabText fontColor={COLORS.white}>{{ label }}</InabText>
    </View>
  );
}

InabLoadingIndicator.propTypes = {
  label: PropTypes.string,
};

InabLoadingIndicator.defaultProps = {
  label: 'Loading...',
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: COLORS.backDropBlack,
  },
});

export default InabLoadingIndicator;
