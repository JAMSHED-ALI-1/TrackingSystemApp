import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modal_radio_styles from '../../../Styles/DeviceDetails/RadioButton.module';

const GeoRadioButton = () => {
  const [checked, setChecked] = useState('Notification Only');

  return (
    <View style={{ flexDirection: 'column' , gap:10}}>
      <TouchableOpacity
        onPress={() => setChecked('Notification Only')}
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      >
        <View style={modal_radio_styles.outer_box}>
          <View
            style={[
              modal_radio_styles.inner_box,
              { backgroundColor: checked === 'Notification Only' ? '#0A8F47' : '#BBBBBB' },
            ]}
          ></View>
        </View>
        <Text style={modal_radio_styles.radio_check_text}>Notification Only</Text>
      </TouchableOpacity>

      <View style={{ flexDirection:'row', gap:10 }}>
      <TouchableOpacity
        onPress={() => setChecked('Notification + Engine Off')}
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      >
        <View style={modal_radio_styles.outer_box}>
          <View
            style={[
              modal_radio_styles.inner_box,
              { backgroundColor: checked === 'Notification + Engine Off' ? '#0A8F47' : '#BBBBBB' },
            ]}
          ></View>
        </View>
        <Text style={modal_radio_styles.radio_check_text}>Notification + Engine Off</Text>

      </TouchableOpacity>
   
          </View>

    </View>
  );
};

export default GeoRadioButton;
