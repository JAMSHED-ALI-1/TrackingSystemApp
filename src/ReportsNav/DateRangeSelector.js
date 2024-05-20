
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import vehicle_radio_btn_styles from '../Styles/HostoryPage/VehicleRadioBtn.module';
import Calendar from '../Component/Calender/Calender';

const capitalizations = {
  current_day: 'Today',
  previous_day: 'Yesterday',
  week: 'Week',
  custom_date: 'Custom'
};

const DateRangeSelector = ({ checked, setChecked, fromDate, setFromDate, toDate, setToDate }) => {
  // const [checked, setChecked] = useState('current_day');

  // useEffect(() => {
  //   // console.log("DailyToggleButton", checked);
  //   setSelectedType(checked); // Update parent component with selected type
  // }, [checked]);

  const toggleType = (type) => {
    setChecked(() => type); // Update the state with the selected type
  };

  const handleFromDateChange = (date) => {
    // Extract day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    // Format the date to YYYY-MM-DD
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setFromDate(() => formattedDate);
    console.log(formattedDate);
  };

  const handleToDateChange = (date) => {
    // Extract day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    // Format the date to YYYY-MM-DD
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setToDate(() => formattedDate);
    console.log(formattedDate);
  };

  return (
    <View>
      <View style={vehicle_radio_btn_styles.vehicle_radio_main_box}>
        {Object.keys(capitalizations).map((type) => (
          <TouchableOpacity
            onPress={() => toggleType(type)}
            key={type}
            style={vehicle_radio_btn_styles.vehicle_radio_check_box}
          >
            {checked === type ? (
              <LinearGradient
                colors={['#2A77E3', '#051C3E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={vehicle_radio_btn_styles.vehicle_radio_liner_box}
              >
                <Text style={{ color: 'white' }}>{capitalizations[type]}</Text>
              </LinearGradient>
            ) : (
              <Text style={[vehicle_radio_btn_styles.vehicle_radio_check_text, {}]}>
                {capitalizations[type]}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
      {checked === "custom_date" &&
        <View style={vehicle_radio_btn_styles.calenderBox}>
          <View style={vehicle_radio_btn_styles.calender}>
            <Calendar value={new Date(fromDate)}
              onChange={handleFromDateChange}
              disableFuture={true}
            />
          </View>
          <View style={vehicle_radio_btn_styles.calender}>
            <Calendar value={new Date(toDate)}
              onChange={handleToDateChange}
              disableFuture={true}
            />
          </View>
        </View>}
    </View>
  );
};

export default DateRangeSelector;

