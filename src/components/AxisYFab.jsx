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

function AxisYFab({ from, to, icon, label, route, onPress, isToggleMenu }) {
  const axisYValue = useSharedValue(from);

  useEffect(() => {
    const xButton = axisYValue.value === from && isToggleMenu ? to : from;
    axisYValue.value = withTiming(xButton, {
      duration: 300,
      easing: Easing.ease,
    });
  }, [from, to, axisYValue, isToggleMenu]);

  const translateYStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: axisYValue.value }],
  }));

  return (
    <Animated.View
      style={[globalStyle.boxShadow, translateYStyle]}
      className="rounded-full bg-violet h-[50px] w-[50px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
    >
      <TouchableOpacity onPress={onPress}>
        <Ionicons color="white" size={20} name={icon} />
      </TouchableOpacity>
    </Animated.View>
  );
}

AxisYFab.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  onPress: PropTypes.func,
  route: PropTypes.string,
  isToggleMenu: PropTypes.bool.isRequired,
};

AxisYFab.defaultProps = {
  label: '',
  onPress: () => {},
  route: '',
};

export default AxisYFab;
