import {Dimensions, PixelRatio, Platform} from 'react-native';

export const awm = {
  isIOS: Platform.OS === 'ios',
  font: type => {
    return `Outfit-${type}`;
  },
  px: pixel => {
    const scale = awm.screenWidth / 375;
    const newSize = pixel * scale;
    let result = Math.round(PixelRatio.roundToNearestPixel(newSize));
    result = awm.isIOS ? result : result - 2;
    return pixel > 0 && result <= 0 ? 1 : result;
  },
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
};
