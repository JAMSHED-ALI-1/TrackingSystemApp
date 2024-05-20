import { View, Text, TouchableOpacity, StyleSheet ,Dimensions} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import vehicle_radio_btn_styles from '../../Styles/HostoryPage/VehicleRadioBtn.module';

const RadioBtn = () => {
  const [checked, setChecked] = useState('Today')

  return (
    <View style={vehicle_radio_btn_styles.vehicle_radio_main_box}>
      {['Today', 'Yesterday', 'Last weak', 'Custom'].map((check) => (
        <TouchableOpacity
          onPress={() => setChecked(check)}
          key={check}
          style={vehicle_radio_btn_styles.vehicle_radio_check_box}
        >
          {checked === check ? (
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_radio_btn_styles.vehicle_radio_liner_box}
            >
              <Text style={{ color: 'white' }}>{check}</Text>
            </LinearGradient>
          ) : (
            <Text style={[vehicle_radio_btn_styles.vehicle_radio_check_text,{}]}>
              {check}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  )
}


export default RadioBtn
