import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {awm, colors} from '../utils/index';
import {CustomText} from './index';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <CustomText
        description={title}
        font={'Medium'}
        size={17}
        style={{textTransform: 'capitalize'}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: awm.px(48),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: awm.px(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '47%',
  },
});
