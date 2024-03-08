import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {awm} from '../utils/awm';
import {CustomText} from './index';

interface DetailProps {
  Icon: any;
  description?: string;
  link?: boolean;
  data?: any;
}

export const ProfileDetailItem = ({
  Icon,
  description,
  link,
  data,
}: DetailProps) => {
  const [displayAll, setDisplayAll] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (displayAll) {
      setAccounts(data);
    } else {
      setAccounts(data?.filter((item, index) => index < 3));
    }
  }, [displayAll]);

  const onSelectAccount = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };
  return (
    <View style={styles.container}>
      <Icon />
      {!link ? (
        <CustomText
          description={description}
          font={link ? 'Medium' : 'Regular'}
          size={15}
          style={{
            marginLeft: 12,
            textDecorationLine: link ? 'underline' : 'none',
          }}
        />
      ) : (
        <View style={styles.accountContainer}>
          {accounts.map((item, index) => (
            <TouchableOpacity
              key={item.platform}
              onPress={() => onSelectAccount(item.link)}
              style={{marginRight: awm.px(4)}}>
              <CustomText
                description={
                  accounts[index + 1] ? `${item.platform},` : item.platform
                }
                font={'Medium'}
                size={15}
                style={{textDecorationLine: link ? 'underline' : 'none'}}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDisplayAll(!displayAll)}>
            <CustomText
              description={
                displayAll ? '-' : `+${data.length - accounts.length}`
              }
              font={'Medium'}
              size={15}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: awm.px(12),
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: awm.px(12),
    flexWrap: 'wrap',
  },
  button: {
    paddingLeft: 4,
    paddingRight: 16,
  },
});
