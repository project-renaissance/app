import { Dimensions, Platform } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
// Platform.OS === 'ios'
//   ? Dimensions.get('window').height
//   : ExtraDimensions.getRealWindowHeight();

// console.log(Platform.OS, Dimensions.get('window').height)
export default { deviceHeight, deviceWidth };
