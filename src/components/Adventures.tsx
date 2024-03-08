import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {ActivityItem, CustomText} from '../components/index';
import {colors, strings, awm} from '../utils/index';

interface AdventuresProps {
  name: string;
  activities?: object;
}

export const Adventures = ({name, activities = {}}: AdventuresProps) => {
  const [selectedActivity, setSelectedActivity] = useState(0);

  return (
    <View>
      <View>
        <View style={styles.line} />
        <View style={styles.row}>
          <CustomText
            description={`${name}’s ${strings.adventures}`}
            font={'SemiBold'}
            size={20}
            style={{
              paddingVertical: 10,
            }}
          />
          <View style={styles.container}>
            {Object.keys(activities).map((type, index) => {
              return (
                <TouchableOpacity
                  key={type}
                  disabled={selectedActivity === index}
                  onPress={() => setSelectedActivity(index)}
                  style={{
                    justifyContent: 'space-between',
                  }}>
                  <CustomText
                    description={type}
                    font={'Medium'}
                    size={18}
                    color={
                      selectedActivity === index
                        ? colors.black
                        : colors.deactive
                    }
                    style={{
                      textTransform: 'capitalize',
                    }}
                  />
                  <View
                    style={[
                      styles.border,
                      {
                        height: selectedActivity === index ? 4 : 0,
                      },
                    ]}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.row}>
        {Object.values(activities)[selectedActivity].map(section => {
          return (
            <View key={section.title} style={{paddingVertical: 20}}>
              <CustomText description={section.title} font="Medium" size={22} />
              <View style={styles.box}>
                {section.data.map(item => {
                  return <ActivityItem key={item.id} item={item} />;
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  border: {
    backgroundColor: colors.black,
    marginTop: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  line: {
    height: 1,
    width: awm.screenWidth,
    backgroundColor: colors.border,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  row: {
    paddingHorizontal: 24,
  },
  box: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
