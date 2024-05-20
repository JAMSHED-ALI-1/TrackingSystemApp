// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { LinearGradient } from 'expo-linear-gradient';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Theme from '../Theme/theme';
// import time_date_styles from '../Styles/TimeDateSelector.module';
// import Calender from '../../assets/calender.svg'

// const DateTimeSelector = ({
//   value,
//   onChange,
//   showPicker,
//   disableFuture,
//   disablePast,
//   selectSameDayFuture,
// }) => {
//   const [showDatepicker, setShowDatepicker] = useState(showPicker || false);
//   const [showTimepicker, setShowTimepicker] = useState(showPicker || false);

//   const showDatepickerHandler = () => {
//     setShowDatepicker(true);
//     setShowTimepicker(false);
//   };

//   const showTimepickerHandler = () => {
//     setShowTimepicker(true);
//     setShowDatepicker(false);
//   };

//   const onDateChange = (event, selectedDate) => {
//     setShowDatepicker(Platform.OS === 'ios');
//     if (selectedDate || value) {
//       if (disableFuture && selectedDate > new Date()) {
//         return;
//       }
//       if (disablePast && selectedDate < new Date()) {
//         return;
//       }
//       if (selectSameDayFuture && selectedDate > new Date().setHours(23, 59, 59, 999)) {
//         return;
//       }
//       onChange(selectedDate || value);
//     }
//   };

//   const onTimeChange = (event, selectedTime) => {
//     const currentTime = new Date();

//     if (selectedTime > currentTime) {
//       selectedTime = currentTime;
//       onChange(currentTime);
//     } else {
//       onChange(selectedTime);
//     }

//     setShowTimepicker(Platform.OS === 'ios');
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={showDatepickerHandler}>
//         {/* <LinearGradient

//           colors={['#2A77E3', '#051C3E']}

//         > */}
//         <View style={time_date_styles.time_date_select_box}>
//           <Calender
//             height={15} width={15} fill={Theme.blue.primary}
//           />
//           <Text style={time_date_styles.date_time_text}>{value.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</Text>
//           {/* </LinearGradient> */}
//         </View>
//       </TouchableOpacity>

//       {/* <TouchableOpacity onPress={showTimepickerHandler} >
//         <LinearGradient style={time_date_styles.time_date_select_box} colors={['#2A77E3', '#051C3E']}>
//           <MaterialCommunityIcons
//             name="timer-cog-outline"
//             size={20}
//             color={Theme.white}
//           />
//           <Text style={time_date_styles.date_time_text}>
//             {value.toLocaleTimeString('en-IN', {
//               hour: '2-digit',
//               minute: '2-digit',
//             })}
//           </Text>
//         </LinearGradient>
//       </TouchableOpacity> */}

//       {showDatepicker && (
//         <DateTimePicker
//           value={value}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//           minimumDate={disablePast ? new Date() : new Date(2000, 0, 1)}
//           maximumDate={disableFuture ? new Date() : new Date(2100, 11, 31)}
//         />
//       )}
//       {showTimepicker && (
//         <DateTimePicker
//           value={value}
//           mode="time"
//           display="default"
//           onChange={onTimeChange}
//         />
//       )}

//     </View>
//   );
// };

// export default DateTimeSelector;



import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import vehicle_radio_btn_styles from '../Styles/HostoryPage/VehicleRadioBtn.module';
import Calendar from './Calender/Calender';

const capitalizations = {
  current_day: 'Today',
  previous_day: 'Yesterday',
  week: 'Week',
  custom_date: 'Custom'
};

const DateRangeSelector = ({ checked, setChecked, fromDate, setFromDate, toDate, setToDate }) => {
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

