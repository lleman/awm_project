import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import StarIcon from '@assets/icons/star.svg';
import NextIcon from '@assets/icons/next.svg';
import FavIcon from '@assets/icons/fav.svg';
import UnfavIcon from '@assets/icons/unfav.svg';
import {strings, colors, awm} from '../utils/index';
import {CustomText} from './index';
import {ActivityProps} from '../types/types';

interface ItemProps {
  item: ActivityProps;
}

export const ActivityItem = ({item}: ItemProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <View style={styles.inner}>
        {!!item.business && (
          <View style={styles.business}>
            <CustomText
              description={strings.business}
              font={'Medium'}
              size={12}
              color={colors.white}
              style={{textTransform: 'uppercase'}}
            />
          </View>
        )}
        <View style={styles.favorite}>
          {item.isFavorite ? <FavIcon /> : <UnfavIcon />}
        </View>
        <Image resizeMode="cover" source={item.photo} style={styles.image} />
      </View>

      <View style={styles.header}>
        <StarIcon width={12} height={12} />
        <CustomText
          description={item.new ? strings.new : item.rating}
          font="SemiBold"
          size={13}
          style={{
            paddingLeft: awm.px(4),
            textTransform: 'uppercase',
          }}
        />
        <CustomText
          description={item.new ? '' : `(${item.review})`}
          size={13}
          style={{
            paddingLeft: awm.px(4),
          }}
        />
        <CustomText
          description={item.duration}
          size={13}
          style={{
            marginLeft: awm.px(6),
          }}
        />
      </View>
      <CustomText description={item.title} font={'SemiBold'} size={15} />
      <View style={styles.placeContainer}>
        {item.places.map((place, i) => {
          return (
            <View key={place} style={styles.place}>
              <CustomText description={place} font={'Medium'} size={13} />
              {i !== item.places.length - 1 && (
                <View style={{marginHorizontal: awm.px(6)}}>
                  <NextIcon />
                </View>
              )}
            </View>
          );
        })}
      </View>
      <CustomText description={item.price} size={13} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: awm.screenWidth / 2.4,
    marginRight: awm.px(16),
  },
  inner: {
    width: awm.screenWidth / 2.4,
    overflow: 'hidden',
    borderRadius: awm.px(20),
  },
  business: {
    backgroundColor: colors.black,
    opacity: 0.6,
    position: 'absolute',
    zIndex: 1000,
    top: awm.px(10),
    left: awm.px(10),
    borderRadius: awm.px(20),
    paddingVertical: awm.px(2),
    paddingHorizontal: awm.px(12),
  },
  favorite: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
  },
  image: {
    width: awm.px(awm.screenWidth / 2.4),
    height: awm.px(awm.screenWidth / 1.9),
    borderRadius: awm.px(12),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: awm.px(12),
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: awm.px(8),
  },
  place: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
