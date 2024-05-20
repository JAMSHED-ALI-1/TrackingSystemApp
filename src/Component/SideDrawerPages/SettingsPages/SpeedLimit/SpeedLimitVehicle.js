import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import vehicle_limit_styles from '../../../../Styles/SideDrowerPages/SpeedLImitVehicle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../../Theme/theme';
import Checkbox from 'expo-checkbox';


const SpeedLimitVehicle = ({ allVehicle, deviceId, setDeviceId, speedData }) => {


  const toggleCheckbox = (deviceIds) => {
    if (deviceId.includes(deviceIds)) {
      setDeviceId(deviceId.filter(id => id !== deviceIds));
    } else {
      setDeviceId([...deviceId, deviceIds]);
    }
  };


  // useEffect(() => { console.log("all => :", allVehicle) }, [])






  // const toggleApplyForAll = () => {
  //   if (deviceId.length === allVehicle.length) {
  //     setDeviceId([]);
  //   } else {
  //     setDeviceId(allVehicle.map(vehicle => vehicle.deviceId));
  //   }
  // };

  // useEffect(() => {
  //   console.log("deviceId", speedData);
  // }, [speedData]);

  return (
    <View>
      <View style={vehicle_limit_styles.header_box}>
        <View style={vehicle_limit_styles.vehicle_number_box}>
          <Text style={vehicle_limit_styles.header_text}>Vehicle Number</Text>
        </View>
        <View style={vehicle_limit_styles.speed_limit_box}>
          <Text style={vehicle_limit_styles.header_text}>Speed Limit</Text>
        </View>
        <View style={vehicle_limit_styles.speed_limit_edit_box}>
          <Text style={vehicle_limit_styles.header_text}>Edit</Text>
        </View>
      </View>
      <ScrollView style={vehicle_limit_styles.scroll_box}>
        {allVehicle.map((item, index) => (
          <View key={index} style={vehicle_limit_styles.flex_box}>
            <View style={vehicle_limit_styles.vehicle_number_box}>
              <Text style={vehicle_limit_styles.vehicle_num_text}>{item?.vehicleNumber}</Text>
            </View>
            <View style={vehicle_limit_styles.speed_limit_box}>
              <Text style={vehicle_limit_styles.speed_text}>{speedData?.find((speedItem) => speedItem._id === item.deviceId)?.speedlimit ?? "N/A"}</Text>
            </View>
            <View style={vehicle_limit_styles.speed_limit_edit_box}>
              <TouchableOpacity onPress={() => toggleCheckbox(item.deviceId)}>
                <Checkbox
                  style={styles.checkbox}
                  value={deviceId.includes(item.deviceId)}
                  onValueChange={() => toggleCheckbox(item.deviceId)}
                  color={deviceId.includes(item.deviceId) ? '#4630EB' : undefined}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity style={styles.applyForAllButton} onPress={toggleApplyForAll}>
        <Text style={styles.applyForAllText}>Apply for all</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={() => setDeviceId(deviceId)}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
  },
  applyForAllButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  applyForAllText: {
    color: Theme.black,
    fontSize: 16,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: '#2A77E3',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 40,
    borderRadius: 6,
    width: '98%',
    alignSelf: 'center',
  },
  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default SpeedLimitVehicle;

