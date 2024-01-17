import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import style from '../style';

function NilamFab() {
  const rotationValue = useSharedValue(0);
  const qrValue = useSharedValue(0);
  const manualValue = useSharedValue(0);

  const toggleMenu = () => {
    const toValue = rotationValue.value === 0 ? 45 : 0;
    const qrButton = qrValue.value === 0 ? -65 : 0;
    const manualButton = manualValue.value === 0 ? -65 : 0;

    rotationValue.value = withTiming(toValue, {
      duration: 100,
      easing: Easing.ease,
    });

    qrValue.value = withTiming(qrButton, {
      duration: 300,
      easing: Easing.ease,
    });

    manualValue.value = withTiming(manualButton, {
      duration: 300,
      easing: Easing.ease,
    });
  };

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationValue.value}deg` }],
  }));

  const translateYStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: qrValue.value }],
  }));

  const translateXStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: manualValue.value }],
  }));

  return (
    <View className="relative">
      {/* Button Group */}
      <Animated.View
        style={[style.boxShadow, translateYStyle]}
        className="rounded-full bg-violet h-[50px] w-[50px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
      >
        <TouchableOpacity>
          <Ionicons color="white" size={20} name="qr-code-outline" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[style.boxShadow, translateXStyle]}
        className="rounded-full bg-violet h-[50px] w-[50px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
      >
        <TouchableOpacity>
          <MaterialCommunityIcons color="white" size={20} name="note-edit" />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        onPress={toggleMenu}
        style={style.boxShadow}
        className="rounded-full bg-violet h-[50px] w-[50px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
      >
        <Animated.View style={[rotateStyle]}>
          <Ionicons color="white" size={30} name="add" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

NilamFab.propTypes = {};

export default NilamFab;
