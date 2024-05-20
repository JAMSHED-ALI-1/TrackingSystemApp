import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import vehicle_history_styles from '../../Styles/HostoryPage/VehicleHistory.module'
import DateSelector from '../../Component/DateSelector'
import VideoSlider from './HistorySlider'
// import RadioBtn from './VehicleRadio'
import VehicleSelector from '../VehicleSelector'
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HistorySlider from './HistorySlider'
const VehicleHistory = ({ vehiclesData,fromDate, setFromDate,toDate, setToDate }) => {
  const [checked, setChecked] = useState('current_day');


  useEffect(() => {
    if (checked === "current_day") {
      // console.log("checkedType : ", checked);
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate())
      const initialTime = new Date().toLocaleTimeString() // Get current time string in local timezone
      const timezoneOffset = yesterday.getTimezoneOffset()
      yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset)
      yesterday.setHours(0, 1, 0, 0) // Set time to 00:01:00 AM for adjusted timezone
      const today = new Date()
      today.setMinutes(today.getMinutes() - timezoneOffset)
      today.setHours(
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
        new Date().getMilliseconds(),
      )
      setFromDate(yesterday.toISOString());
      setToDate(today.toISOString());
      // fetchItinerary(locationData.imei, yesterday, today)
      console.log(
        'Selected from Date and Time: ',
        yesterday,
        yesterday.toLocaleString(),
      )
      console.log('Selected To Date and Time: ', today, today.toLocaleString())
    }
    else if (checked === "previous_day") {
      // console.log("checkedType : ", checked);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1); // Subtract one day
      const timezoneOffset = yesterday.getTimezoneOffset();
      yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset);
      yesterday.setHours(0, 1, 0, 0);
      const today = new Date();
      today.setDate(today.getDate() - 1); // Subtract one day
      today.setMinutes(today.getMinutes() - timezoneOffset);
      today.setHours(23, 59, 59, 999);
      setFromDate(yesterday.toISOString());
      setToDate(today.toISOString());
      // fetchItinerary(locationData.imei, yesterday, today)
      console.log(
        "Selected from Date and Time: ",
        yesterday,
        yesterday.toLocaleString()
      );
      console.log("Selected To Date and Time: ", today, today.toLocaleString());
    } else if (checked === "week") {
      // console.log("checkedType : ", checked);
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(startOfWeek.getDate() - today.getDay()); // Move to previous Sunday
      startOfWeek.setHours(0, 1, 0, 0);
      const timezoneOffset = today.getTimezoneOffset();
      today.setMinutes(today.getMinutes() - timezoneOffset);
      today.setHours(23, 59, 59, 999);
      setFromDate(() => startOfWeek.toISOString());
      setToDate(() => today.toISOString());
      // fetchItinerary(locationData.imei, startOfWeek, today)
      console.log(
        "Selected from Date and Time (Week): ",
        startOfWeek,
        startOfWeek.toLocaleString()
      );
      console.log("Selected To Date and Time (Week): ", today, today.toLocaleString());
    }
  }, [checked]);

  useEffect(() => {

    const fromDateObject = new Date(fromDate);
    const toDateObject = new Date(toDate);
    if (checked === "custom_date") {
      const customFromDate = new Date(); 
      const customToDate = new Date();   
      setFromDate(customFromDate.toISOString());
      setToDate(customToDate.toISOString());
  
      // fetchItinerary(locationData?.imei, fromDateObject, toDateObject);
    }
  }, [checked]);

  

  return (
    <View style={vehicle_history_styles.vehicle_history_main_box}>
      {/* <View style={{ width: '95%', alignContent: 'center', borderWidth: .5 }}> */}
      <View style={vehicle_history_styles.vehicle_select_box}>
        {/* <VehicleSelector /> */}
        {/* <HistorySlider/> */}
        <Text style={{ fontWeight: 700, fontSize: 20 }}>{vehiclesData.vehicleNumber}</Text>
      </View>
      <View style={{ borderWidth: 0, marginTop: 5 }}>

        < DateSelector
          checked={checked} setChecked={setChecked} setFromDate={setFromDate} setToDate={setToDate} fromDate={fromDate} toDate={toDate}
        />
      </View>
      <View style={vehicle_history_styles.vehicle_history_hr_box} />



      {/* <VideoSlider /> */}
      {/* </View> */}
    </View >
  )
}

export default VehicleHistory
