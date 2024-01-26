import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import globalStyle from '../globalStyle';

function AxisXFab({ from, to, icon, label, isToggleMenu }) {
  const axisXValue = useSharedValue(from);

  useEffect(() => {
    const xButton = axisXValue.value === from && isToggleMenu ? to : from;
    axisXValue.value = withTiming(xButton, {
      duration: 300,
      easing: Easing.ease,
    });
  }, [from, to, axisXValue, isToggleMenu]);

  const translateXStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: axisXValue.value }],
  }));

  return (
    <Animated.View
      style={[globalStyle.boxShadow, translateXStyle]}
      className="rounded-full bg-violet h-[50px] w-[50px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
    >
      <TouchableOpacity>
        <Ionicons color="white" size={20} name={icon} />
      </TouchableOpacity>
    </Animated.View>
  );
}

AxisXFab.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  isToggleMenu: PropTypes.bool.isRequired,
};

AxisXFab.defaultProps = {
  label: '',
};

export default AxisXFab;
