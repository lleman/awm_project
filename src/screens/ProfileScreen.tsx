import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '@assets/icons/arrow_left.svg';
import MoreIcon from '@assets/icons/more.svg';
import TimeIcon from '@assets/icons/time.svg';
import LanguageIcon from '@assets/icons/language.svg';
import PhoneIcon from '@assets/icons/phone.svg';
import MailIcon from '@assets/icons/email.svg';
import LinkIcon from '@assets/icons/account.svg';
import {
  ProfileDetailItem,
  UserDetails,
  ProfilePhoto,
  Adventures,
} from '../components/index';
import {awm, colors, strings} from '../utils/index';
import user from '../db/user';

export const ProfileScreen = ({navigation}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const {info, languages, accounts, activities} = data;

  useEffect(() => {
    setData(user);
    setLoading(false);
  }, []);

  const splitArray = (arr: any) => {
    const content = arr.reduce((acc, current) => {
      const text = acc ? `${acc}, ${current}` : `${current}`;
      return text;
    }, '');
    return `${strings.languageDesc} ${content}`;
  };

  const renderContent = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <ProfilePhoto
            path={info.photo}
            verified={info.validNumber || info.validEmail}
          />
          <TouchableOpacity>
            <MoreIcon />
          </TouchableOpacity>
        </View>
        <UserDetails data={info} />

        <View style={styles.list}>
          <View style={styles.border} />
          <ProfileDetailItem
            Icon={TimeIcon}
            description={`${strings.hostDesc} ${info.hostYear}`}
          />
          <ProfileDetailItem
            Icon={LanguageIcon}
            description={splitArray(languages)}
          />
          {info.validNumber && (
            <ProfileDetailItem
              Icon={PhoneIcon}
              description={strings.phoneDesc}
            />
          )}
          {info.validEmail && (
            <ProfileDetailItem Icon={MailIcon} description={strings.mailDesc} />
          )}

          <ProfileDetailItem Icon={LinkIcon} data={accounts} link />
        </View>
        <Adventures name={info.name} activities={activities} />
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color={colors.black} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          {awm.isIOS ? (
            <View
              style={{
                height: getStatusBarHeight(),
                backgroundColor: colors.gradient,
              }}
            />
          ) : (
            <StatusBar
              backgroundColor={colors.gradient}
              barStyle="light-content"
            />
          )}
          <LinearGradient
            style={{
              flex: 1,
            }}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.3}}
            colors={[colors.gradient, colors.white]}>
            {renderContent()}
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 22,
    paddingHorizontal: 24,
  },
  border: {
    height: 1,
    width: awm.screenWidth - 48,
    backgroundColor: colors.border,
    position: 'absolute',
    top: 0,
    left: 24,
  },
});
