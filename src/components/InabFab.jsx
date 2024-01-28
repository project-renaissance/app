import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyle from '../globalStyle';
import AxisYFab from './AxisYFab';
import AxisXFab from './AxisXFab';
import InabText from './InabText';

function InabFab({ topListFab, sideListFab, centerFab }) {
  const centerValue = useSharedValue(0);
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const toggleMenu = () => {
    const toValue = centerValue.value === 0 ? 45 : 0;

    centerValue.value = withTiming(toValue, {
      duration: 100,
      easing: Easing.ease,
    });

    setIsToggleMenu(!isToggleMenu);
  };

  const rotateStyle = useAnimatedStyle(() => ({
    transform: centerFab.isRotate ? [{ rotate: `${centerValue.value}deg` }] : [],
  }));

  const centerLabelStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: centerFab.label ? 4 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View className="relative">
      {/* Button Group */}
      {/* Top FAB */}
      {topListFab.map((fab, index) => (
        <AxisYFab
          from={0}
          to={(index + 1) * -65}
          icon={fab.icon}
          isToggleMenu={isToggleMenu}
          key={fab.id}
        />
      ))}

      {/* Side FAB */}
      {sideListFab.map((fab, index) => (
        <AxisXFab
          from={0}
          to={(index + 1) * -65}
          icon={fab.icon}
          isToggleMenu={isToggleMenu}
          key={fab.id}
        />
      ))}

      {/* Center FAB */}
      <TouchableOpacity
        onPress={toggleMenu}
        style={globalStyle.boxShadow}
        className={`rounded-full bg-violet h-[50px] ${
          centerFab.label ? 'px-5' : 'w-[50px]'
        } flex items-center justify-center absolute bottom-[100px] right-[20px]`}
      >
        <Animated.View style={[rotateStyle, centerLabelStyle]}>
          <Ionicons color="white" size={30} name={centerFab.icon} />
          <InabText color="white" weight="700" transform="uppercase">
            {centerFab.label || ''}
          </InabText>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

InabFab.propTypes = {
  topListFab: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      route: PropTypes.string,
    })
  ),
  sideListFab: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      route: PropTypes.string,
    })
  ),
  centerFab: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    route: PropTypes.string,
    isRotate: PropTypes.bool,
  }).isRequired,
};

InabFab.defaultProps = {
  topListFab: [],
  sideListFab: [],
};

export default InabFab;
