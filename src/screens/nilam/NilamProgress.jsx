import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import InabText from '../../components/InabText';
import style from '../../style';

function NilamProgress({ navigation }) {
  const rotationValue = useSharedValue(0);
  const qrValue = useSharedValue(0);
  const manualValue = useSharedValue(0);

  const toggleMenu = () => {
    const toValue = rotationValue.value === 0 ? 45 : 0;
    const qrButton = qrValue.value === 0 ? -95 : 0;
    const manualButton = manualValue.value === 0 ? -95 : 0;

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
    <SafeAreaView className="relative h-full">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="p-6 rounded-b-[20px] "
        colors={['#451952', '#662549']}
      >
        <View className="flex flex-col items-center justify-center w-full">
          <InabText size={20} weight="700" fontColor="white">
            NILAM Progress Test
          </InabText>
          <InabText>Luqman Abd Latif</InabText>
        </View>
      </LinearGradient>

      {/* Button Group */}
      <Animated.View
        style={[style.boxShadow, translateYStyle]}
        className="rounded-full bg-violet h-[70px] w-[70px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
      >
        <TouchableOpacity>
          <Ionicons color="white" size={30} name="qr-code-outline" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[style.boxShadow, translateXStyle]}
        className="rounded-full bg-violet h-[70px] w-[70px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
      >
        <TouchableOpacity>
          <MaterialCommunityIcons color="white" size={30} name="note-edit" />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        onPress={toggleMenu}
        style={style.boxShadow}
        className="rounded-full bg-violet h-[70px] w-[70px] flex items-center justify-center absolute bottom-[100px] right-[20px]"
      >
        <Animated.View style={[rotateStyle]}>
          <Ionicons color="white" size={50} name="add" />
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

NilamProgress.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NilamProgress;
