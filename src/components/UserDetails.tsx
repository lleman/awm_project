import React, {useState} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import StarIcon from '@assets/icons/star.svg';
import {awm, strings} from '../utils/index';
import {CustomButton, CustomText} from './index';
import {DetailsProps} from '../types/types';

export const UserDetails = ({data}: DetailsProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const onChangeFollowing = () => {
    setIsFollowing(!isFollowing);
  };
  const onMessage = () => {
    Linking.openURL(`mailto:${data.mail}`);
  };
  return (
    <View style={{paddingHorizontal: 24}}>
      <View style={{alignItems: 'center'}}>
        <CustomText description={data.fullName} font={'SemiBold'} size={20} />
        <View style={styles.ratingBox}>
          <StarIcon />
          <CustomText
            description={data.rating}
            font={'SemiBold'}
            size={17}
            style={styles.rating}
          />
          <CustomText
            description={`(${data.reviews} ${strings.reviews})`}
            font={'SemiBold'}
            size={17}
            style={{
              textDecorationLine: 'underline',
            }}
          />
        </View>
        <View style={styles.followerBox}>
          <View style={styles.follower}>
            <CustomText
              description={data.followers}
              font={'SemiBold'}
              size={17}
              style={{
                paddingRight: awm.px(4),
              }}
            />
            <CustomText description={strings.followers} size={17} />
          </View>
          <View style={styles.following}>
            <CustomText
              description={data.following}
              font={'SemiBold'}
              size={17}
              style={{
                paddingRight: awm.px(4),
              }}
            />
            <CustomText description={strings.following} size={17} />
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          title={isFollowing ? strings.followed : strings.following}
          onPress={onChangeFollowing}
        />
        <CustomButton title={strings.message} onPress={onMessage} />
      </View>
      <View style={{paddingVertical: awm.px(24)}}>
        <CustomText description={data.bio} size={15} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: awm.px(16),
  },
  rating: {
    marginHorizontal: awm.px(8),
    textDecorationLine: 'underline',
  },
  followerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  follower: {flexDirection: 'row', alignItems: 'flex-end'},
  following: {
    flexDirection: 'row',
    marginLeft: awm.px(16),
    alignItems: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: awm.px(20),
  },
});
