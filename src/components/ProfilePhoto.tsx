import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import VerifiedIcon from '@assets/icons/verified.svg';

interface PhotoProps {
  path?: any;
  verified: boolean;
}

export const ProfilePhoto = ({path, verified}: PhotoProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={path} />
      </View>
      {verified && (
        <View style={styles.icon}>
          <VerifiedIcon />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
  },
  icon: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    right: 0,
  },
});
