/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';

function InabText({ children, fontColor, size, weight, alignText, transform, cssStyle }) {
  const styles = StyleSheet.create({
    text: {
      color: fontColor,
      fontSize: size,
      fontWeight: weight,
      fontFamily: 'Poppins-Regular',
      textAlign: alignText,
      textTransform: transform,
    },
  });
  return (
    <Text className="leading-relaxed tracking-wide" style={[styles.text, cssStyle]}>
      {children}
    </Text>
  );
}

InabText.propTypes = {
  fontColor: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
  alignText: PropTypes.string,
  children: PropTypes.node.isRequired,
  transform: PropTypes.string,
  cssStyle: PropTypes.shape({
    root: PropTypes.string,
  }),
};

InabText.defaultProps = {
  fontColor: '#fff',
  size: 14,
  weight: '600',
  alignText: 'left',
  transform: 'none',
  cssStyle: {},
};

export default InabText;
