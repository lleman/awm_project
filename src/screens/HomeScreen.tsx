import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {CustomText} from '../components/CustomText';
import {awm, colors, strings} from '../utils/index';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(strings.PROFILE)}
        style={styles.button}>
        <CustomText
          description={strings.visitProfile}
          font={'Bold'}
          size={20}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.purple,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: awm.px(20),
    borderRadius: awm.px(10),
  },
});
