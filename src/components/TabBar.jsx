import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import InabText from './InabText';

function TabBar({ navigationState, onIndexChange }) {
  const inputRange = navigationState.routes.map((x, i) => i);
  console.log(navigationState);

  return (
    <View style={styles.tabBar}>
      {navigationState.routes.map((route, i) => (
        <TouchableOpacity
          className={
            i === navigationState.index ? 'border-b-4 border-b-[#000]' : ' border-b border-b-[#000]'
          }
          style={styles.tabItem}
          onPress={() => onIndexChange(i)}
          key={route.key}
        >
          <InabText weight={i === navigationState.index ? '800' : '600'} fontColor="black">
            {route.title}
          </InabText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    padding: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    paddingBottom: 8,
    fontStyle: 'uppercase',
  },
});

TabBar.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onIndexChange: PropTypes.func.isRequired,
};

export default TabBar;
