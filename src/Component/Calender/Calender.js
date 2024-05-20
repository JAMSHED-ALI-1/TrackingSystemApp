import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import time_date_styles from '../../Styles/TimeDateSelector.module';
import Theme from '../../Theme/theme';
import CalendarSvg from '../../../assets/calender.svg';

const CalendarData = ({ value = new Date(), onChange, disableFuture, disablePast, showPicker }) => {
  const [showDatepicker, setShowDatepicker] = useState(showPicker || false);
  const showDatepickerHandler = () => {
    setShowDatepicker(true);
  }
  const onDateChange = (event, selectedDate) => {
    setShowDatepicker(Platform.OS === 'ios');
    if (selectedDate || value) {
      if ((disableFuture && selectedDate > new Date()) || (disablePast && selectedDate < new Date())) {
        // Do not update the date if future or past dates are disabled
        return;
      }
      onChange(selectedDate || value);
    }
  };


  return (
    <View style={{ borderWidth: 0, width: 85, borderRadius: 20, backgroundColor: Theme.transparent, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={showDatepickerHandler}>
        <View
          style={[time_date_styles.time_date_select_box, {
            color: Theme.blue.primary, marginBottom: 0, gap: 5, paddingHorizontal: 0, alignItems: 'center', backgroundColor: Theme.transparent
          }]}
        >
          <CalendarSvg height={15} width={15} fill={Theme.blue.primary} />
          <Text style={[time_date_styles.date_time_text, { color: Theme.blue.primary }]}>
            {value?.toLocaleDateString()}
          </Text>
        </View>
      </TouchableOpacity >

      {showDatepicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={onDateChange}
          minimumDate={disablePast ? new Date() : new Date(2000, 0, 1)}
          maximumDate={disableFuture ? new Date() : new Date(2100, 11, 31)}
        />
      )}
    </View >
  );
};

export default CalendarData;
