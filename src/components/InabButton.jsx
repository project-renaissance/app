import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import COLORS from '../assets/colors';
import InabText from './InabText';

function InabButton({ children, cssStyle }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="w-full py-3 mt-4 rounded-lg"
      colors={[COLORS.gradient_from, COLORS.gradient_to]}
    >
      <TouchableOpacity>
        <InabText cssStyle={cssStyle}>{children}</InabText>
      </TouchableOpacity>
    </LinearGradient>
  );
}

InabButton.propTypes = {
  children: PropTypes.string.isRequired,
  cssStyle: PropTypes.shape({
    root: PropTypes.string,
  }),
};

InabButton.defaultProps = {
  cssStyle: {},
};

export default InabButton;
