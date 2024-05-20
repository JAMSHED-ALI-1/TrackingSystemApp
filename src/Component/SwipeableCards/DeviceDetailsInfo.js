import React from 'react';
import { View, StyleSheet, Image, Dimensions, Platform, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const data = [
  { id: 'col1', image: require('../../../assets/day.jpeg'), connection: 'Connected', name: 'GPS' },
  { id: 'col2', image: require('../../../assets/day.jpeg'), connection: 'Connected', name: 'SIM' },
  { id: 'col3', image: require('../../../assets/day.jpeg'), connection: 'ON', name: 'Ignition' },
  { id: 'col4', image: require('../../../assets/day.jpeg'), connection: 'ON', name: 'Charging' },
  { id: 'col5', image: require('../../../assets/day.jpeg'), connection: '85%', name: 'Battery' },
];

const DeviceDetailsInfo = () => {
  const renderDeviceInfoBox = (item, index) => (
    <View key={item.id} style={styles.device_info_box}>
      <View style={styles.device_info_img_box}>
        <Image source={item.image} style={styles.device_info_img} />
      </View>
      <Text style={styles.connection}>{item.connection}</Text>
      <Text style={styles.connection_name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {data.map(renderDeviceInfoBox)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.07,
    height: 108,
    borderWidth: 0.95,
    borderRadius: 4,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 6,
    gap: 1,
  },
  device_info_box: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  device_info_img_box: {
    padding: 2,
    borderRadius: 8,
    borderColor: '#F7F7F7',
    backgroundColor: '#FFFFFF',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    width: windowWidth / 7.5,
    shadowColor: '#F7F7F7',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  device_info_img: {
    width: windowWidth / 9.9,
    height: 36,
  },
  connection: {
    marginTop: 8,
    fontSize: 9,
    fontWeight: '300',
    color: '#1E1E1E',
  },
  connection_name: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#1E1E1E',

  }
});

export default DeviceDetailsInfo;
