import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modal_radio_styles from '../../../Styles/DeviceDetails/RadioButton.module';

const ReminderRadioButton = () => {
  const [checked, setChecked] = useState('Service Reminder');

  return (
    <View style={{ flexDirection: 'column' , gap:10}}>
      <TouchableOpacity
        onPress={() => setChecked('Service Reminder')}
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      >
        <View style={modal_radio_styles.outer_box}>
          <View
            style={[
              modal_radio_styles.inner_box,
              { backgroundColor: checked === 'Service Reminder' ? '#0A8F47' : '#BBBBBB' },
            ]}
          ></View>
        </View>
        <Text style={modal_radio_styles.radio_check_text}>Service Reminder</Text>
      </TouchableOpacity>

      <View style={{ flexDirection:'row', gap:10 }}>
      <TouchableOpacity
        onPress={() => setChecked('Other')}
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      >
        <View style={modal_radio_styles.outer_box}>
          <View
            style={[
              modal_radio_styles.inner_box,
              { backgroundColor: checked === 'Other' ? '#0A8F47' : '#BBBBBB' },
            ]}
          ></View>
        </View>
        <Text style={modal_radio_styles.radio_check_text}>Other</Text>

      </TouchableOpacity>
   
          </View>

    </View>
  );
};

export default ReminderRadioButton;
