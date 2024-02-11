import { StyleSheet } from 'react-native';
import COLORS from './assets/colors';

export default StyleSheet.create({
  // shadow design
  boxShadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  // bottom sheet design
  bottomSheetBackground: {
    backgroundColor: COLORS.violet_light,
    padding: 16,
    borderRadius: 24,
  },
  bottomSheetContainer: {
    padding: 16,
  },
  sheetTitle: {
    marginTop: 8,
    marginBottom: 16,
  },
});
