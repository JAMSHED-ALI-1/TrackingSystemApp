import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SpeedLimitVehicle from './SpeedLimitVehicle';
import modal_gps_styles from '../../../../Styles/DeviceDetails/GpsModal.module';
import geofence_styles from '../../../../Styles/SideDrowerPages/Geofence.module';
import odometer_edit_styles from '../../../../Styles/DeviceDetails/OdometerEditModal.module';
import speed_limit_edit_styles from '../../../../Styles/DeviceDetails/SpeedLimitCkeck.module';
import speed_limit_styles from '../../../../Styles/SideDrowerPages/SppedLimit.module';
import Theme from '../../../../Theme/theme';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SwitchBox from '../../SwitchBox';
import {
  fetchAllVehicleData,
  setSpeedLimit
} from '../../../../HelperFunction/api';
// import SpeedRadioButton from '../../../DetailsModal/Speed/SpeedRadioButton';
import { getSpeedLimit } from '../../../../HelperFunction/api';




const SpeedLimit = ({ navigation, route }) => {

  // console.log(route.params)
  // const {vehicleId} = route.params
  // console.log(vehicleId)
  const [allVehicleData, setAllVehicleData] = useState(null),
    [applyForAll, setApplyForAll] = useState(false),
    [speed, setSpeed] = useState('0'),
    [vehicleState, setVehicleState] = useState([]),
    [deviceId, setDeviceId] = useState([]);
  const [speedData, setSpeedData] = useState([]);

  const fetchData = async (operator) => {
    try {
      const data = await fetchAllVehicleData(operator);
      setAllVehicleData(data);
      // console.log('speedlime.js',data)
      // Extract deviceId and vehicleNumber and store them in state
      const extractedData = data.map(vehicle => ({
        deviceId: vehicle._id,
        vehicleNumber: vehicle.reg_no
      }));
      // console.log(extractedData);
      setVehicleState(extractedData);
    } catch (error) {
      console.error("Error fetching data from fetch data Search : ", error);
    }
  },
    toggleApplyForAll = () => {
      setApplyForAll((prevValue) => !prevValue);
      if (deviceId.length === vehicleState.length) {
        setDeviceId([]);
      } else {
        setDeviceId(vehicleState.map(vehicle => vehicle.deviceId));
      }
    };

  const fetchSpeedLimits = async () => {
    try {
      const vehicleIds = vehicleState.map(vehicle => vehicle.deviceId);
      if (vehicleIds?.length > 0) {
        const speedLimitData = await getSpeedLimit(vehicleIds);
        setSpeedData(speedLimitData);
      }
    } catch (error) {
      console.error('Error fetching speed limits:', error);
    }
  };
  const setLimit = async () => {
    try {
      // Check if deviceId is not empty and speed limit is greater than 0
      if (deviceId.length > 0 && parseFloat(speed) > 0) {
        for (const id of deviceId) {
          // console.log("Setting speed for device:", id);
          const response = await setSpeedLimit(speed, id);
          // console.log(`Response for device ${id}:`, response);
        }
        // console.log("All speeds set successfully");
        setSpeed('0');
        fetchSpeedLimits();
      } else {
        console.log("Device ID is empty or speed limit is not valid.");
      }
    } catch (err) {
      // Handle error here
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    if (deviceId.length === vehicleState.length) {
      setApplyForAll(true);
    } else {
      setApplyForAll(false);
    }
  }, [deviceId, applyForAll])

  useEffect(() => {
    // Fetch operator ID from AsyncStorage and fetch all vehicle data
    AsyncStorage.getItem("operator_id").then((Operator) => {
      if (Operator) {
        fetchData(Operator);
      } else {
        console.log("No operator!");
      }
    });
  }, []);

  useEffect(() => {


    fetchSpeedLimits();
  }, [vehicleState]);



  useEffect(() => {
    if (route.params?.vehicleId) {
      setDeviceId([route.params.vehicleId]);
    }
  }, [route.params]);


  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      {/* <SpeedLimitHeader /> */}
      <View style={speed_limit_styles.card}>
        {/* <View style={{ height: '5%', margin: 10 }}>
          <VehicleSelector />
        </View> */}

        <View style={modal_gps_styles.gps_details_card}>
          <View style={geofence_styles.heading_box}>
            <View style={geofence_styles.heading_left_box}>
              <TouchableOpacity onPress={() =>{ navigation.navigate('MainPage'), navigation.openDrawer()}}>
                <Ionicons name='arrow-back' size={29} color={Theme.black} />
              </TouchableOpacity>
              <Text>Set Speed Limit</Text>
            </View>


            <View style={geofence_styles.heading_left_box}>
              <Text>Apply for all</Text>
              <SwitchBox value={applyForAll} onValueChange={toggleApplyForAll} />
            </View>

          </View>
          <View style={modal_gps_styles.details_hr_line}></View>

          <View style={odometer_edit_styles.odometer_edit_flex_box}>
            <View style={odometer_edit_styles.odometer_flex_box1}>
              <Text style={odometer_edit_styles.odometer_flex_box1_text}>
              Speed Limit
              </Text>
            </View>
            {/* <Text>:</Text> */}
            <View style={odometer_edit_styles.odometer_flex_box2}>
              <View
                style={[
                  odometer_edit_styles.odometer_flex_box2_child1,
                  speed_limit_edit_styles.speed_limit_edit_child1,
                ]}
              >
                <TextInput
                  style={odometer_edit_styles.odometer_flex_box2_child1_text}
                  value={speed}
                  onChangeText={setSpeed} // Update speedLimit state when text changes
                  keyboardType="numeric" // Allow only numeric input
                />
                
              </View>
              <View
                style={[
                  odometer_edit_styles.odometer_flex_box2_child2,
                  { width: '35%' },
                ]}
              >
                <Text
                  style={odometer_edit_styles.odometer_flex_box2_child2_text1}
                >
                  Km/h
                </Text>
              </View>
            </View>
            {/* <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={odometer_edit_styles.odometer_flex_box3}
            >
              <MaterialIcons name="edit" size={20} color="#FFFFFF" />
            </LinearGradient> */}
          </View>
          {/* <View style={speed_limit_edit_styles.speed_edit_alarm}>
            <View style={odometer_edit_styles.odometer_flex_box1}>
              <Text style={odometer_edit_styles.odometer_flex_box1_text}>
                Alarm Type
              </Text>
            </View>
            <Text style={speed_limit_edit_styles.speed_edit_dot}>:</Text>
            <View style={speed_limit_edit_styles.speed_radio_btn}>
              <SpeedRadioButton />
            </View>
          </View> */}

        </View>
        <SpeedLimitVehicle allVehicle={vehicleState} deviceId={deviceId} setDeviceId={setDeviceId} speedData={speedData} />


        <TouchableOpacity onPress={() => { (deviceId.length > 0 && parseFloat(speed) > 0) && setLimit() }} style={[speed_limit_styles.save_box, { backgroundColor: !(deviceId.length > 0 && parseFloat(speed) > 0) ? Theme.transparent : Theme.blue.primary }]}>
          <Text style={[speed_limit_styles.save_text, { color: !(deviceId.length > 0 && parseFloat(speed) > 0) ? Theme.gray53 : Theme.white }]}>Save Changes</Text>
        </TouchableOpacity>

      </View >
    </View >
  )
}

export default SpeedLimit;