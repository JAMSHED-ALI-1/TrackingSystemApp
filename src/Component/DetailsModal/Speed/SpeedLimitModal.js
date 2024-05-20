
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VehicleSelector from '../../VehicleSelector';
import SpeedLimitHeader from './SpeedLimitHeader';
import speed_limit_edit_styles from '../../../Styles/DeviceDetails/SpeedLimitCkeck.module';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import odometer_edit_styles from '../../../Styles/DeviceDetails/OdometerEditModal.module';
import { fetchAllVehicleData, getSpeedLimit, setSpeedLimit } from '../../../HelperFunction/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SpeedLimitModal = ({ vehiclesData, locationData }) => {
  // const [editMode, setEditMode] = useState(false);
  const [allVehicleData, setAllVehicleData] = useState(null);
  const [speed, setSpeed] = useState();
  const [vehicleState, setVehicleState] = useState([]);
  const [vehicleId, setMapId] = useState(null);
  const navigation = useNavigation()

  useEffect(() => {
    if (vehicleState.length > 0 && locationData && locationData.locationData) {
      const matchedVehicle = vehicleState.find(vehicle => vehicle.vehicleId[0] === locationData.locationData._id);
      console.log('match id speed limit modal.js', matchedVehicle, '')
      if (matchedVehicle) {
        setMapId(matchedVehicle.Id);
        console.log(matchedVehicle.Id)
      }
    }
  }, [vehicleState, locationData]);
  

  const fetchData = async (operator) => {
    try {
      const data = await fetchAllVehicleData(operator);
      // console.log('data =>',data)
      setAllVehicleData(data);
      const extractedData = data.map(vehicle => ({
        vehicleId: vehicle.device_id,
        Id: vehicle._id,
        vehicleNumber: vehicle.reg_no
      }));
      setVehicleState(extractedData);
      // console.log('extracted data =>', extractedData);
    } catch (error) {
      console.error("Error fetching data from fetch data Search : ", error);
    }
  }

  const setLimit = async (speed, vehicleId) => {
    console.log('SetSpeedLimit from Modal : ', vehicleId)
    try {
      if (vehicleId !== null) {
        const response = await setSpeedLimit(speed, vehicleId);
        console.log("Speed set successfully:", response);
        // setEditMode(false);
      } else {
        console.log("Device ID is empty.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  
  useEffect(() => {
    AsyncStorage.getItem("operator_id").then((Operator) => {
      if (Operator) {
        fetchData(Operator);
      } else {
        console.log("No operator!");
      }
    });
  }, []);

  useEffect(() => {
    console.log('vehicleId useeffect=>', vehicleId);
  }, [vehicleId])



  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <View style={modal_gps_styles.speed_limit_header_box}>
        <SpeedLimitHeader />
      </View>
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '16%', marginBottom: 15 }}>
          <VehicleSelector locationData={locationData} />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          <View style={modal_gps_styles.details_hr_line}></View>

          <View style={odometer_edit_styles.odometer_edit_flex_box}>
            <View style={odometer_edit_styles.odometer_flex_box1}>
              <Text style={odometer_edit_styles.odometer_flex_box1_text}>
                Set Speed Limit
              </Text>
            </View>
            <Text>:</Text>
            <View style={odometer_edit_styles.odometer_flex_box2}>
              <View
                style={[
                  odometer_edit_styles.odometer_flex_box2_child1,
                  speed_limit_edit_styles.speed_limit_edit_child1,
                ]}
              >

                <TextInput
                  style={[odometer_edit_styles.odometer_flex_box2_child1_text, { width: '80%', borderWidth: 0, paddingHorizontal: 10 }]}
                  value={speed}
                  defaultValue='0'
                  placeholder='Enter Speed'
                  onChangeText={setSpeed}
                  keyboardType="numeric"
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
            <TouchableOpacity
              // onPress={() => {
              //   setEditMode(!editMode);
              //   if (vehicleId && parseFloat(speed > 0) ) {
              //     setLimit();
              //   }
              // }}
              onPress={() => {
                console.log("Pressed : ", vehicleId)
                // if (vehicleId && parseFloat(speed) > 0) {
                  navigation.navigate('Speed', {vehicleId})
                  // setLimit(speed, vehicleId);
                // }
              }}
              style={odometer_edit_styles.odometer_flex_box3}
            >
              <LinearGradient
                colors={['#2A77E3', '#051C3E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[speed_limit_edit_styles.linearGradient, { height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderWidth: 0, borderRadius: 4 }]}
              >
                <MaterialIcons
                  name={'edit'}
                  size={20}
                  color="#FFFFFF"
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpeedLimitModal;

