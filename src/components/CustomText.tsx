import React from 'react';
import {View, Text} from 'react-native';
import {TextProps} from '../types/types';
import {awm, colors} from '../utils/index';

export const CustomText = ({
  description,
  style,
  font = 'Regular',
  size = 15,
  color = colors.black,
}: TextProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: awm.font(font),
          fontSize: awm.px(size),
          color: color,
          ...style,
        }}>
        {description}
      </Text>
    </View>
  );
};
