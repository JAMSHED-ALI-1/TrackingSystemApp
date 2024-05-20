import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import modal_radio_styles from '../../Styles/DeviceDetails/RadioButton.module';

const RadioButton = () => {
  const [checked, setChecked] = useState('Repeat')

  return (
    <View style={modal_radio_styles.radio_main_box}>
      {['Repeat', 'Only Once'].map((check) => (
        <TouchableOpacity
          onPress={() => setChecked(check)}
          key={check}
          style={modal_radio_styles.radio_map_touch_box}
        >
          <View style={modal_radio_styles.outer_box}>
            <View
              style={[
                modal_radio_styles.inner_box,
                { backgroundColor: checked === check ? '#0A8F47' : '#BBBBBB' },
              ]}
            ></View>
          </View>
          <Text style={modal_radio_styles.radio_check_text}>{check}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}



export default RadioButton
