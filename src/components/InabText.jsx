/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';

function InabText({ children, fontColor, size, weight, alignText }) {
  const styles = StyleSheet.create({
    text: {
      color: fontColor,
      fontSize: size,
      fontWeight: weight,
      fontFamily: 'Poppins-Regular',
      textAlign: alignText,
    },
  });
  return (
    <View>
      <Text className="leading-relaxed tracking-wide" style={styles.text}>
        {children}
      </Text>
    </View>
  );
}

InabText.propTypes = {
  fontColor: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
  alignText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InabText.defaultProps = {
  fontColor: '#fff',
  size: 14,
  weight: '600',
  alignText: 'left',
};

export default InabText;
