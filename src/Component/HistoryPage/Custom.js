import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import vehicle_history_styles from '../../Styles/HostoryPage/VehicleHistory.module';
import VehicleSelector from '../VehicleSelector';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VideoSlider from './HistorySlider';
import CustomToggelButton from './CustomToggelButton';
import custom_styles from '../../Styles/HostoryPage/Custom.module';
const Custom = () => {
  const [checked, setChecked] = useState('Overall')

  return (
    <View style={vehicle_history_styles.vehicle_history_main_box}>
      <View style={custom_styles.custom_main_box}>
        <View style={vehicle_history_styles.vehicle_select_box}>
          <VehicleSelector />
        </View>
        <CustomToggelButton/>
        <View style={vehicle_history_styles.vehicle_history_hr_box} />

        <View style={custom_styles.custom_select}>
          <View style={vehicle_history_styles.vehicle_radio_main_box}>
            {['Overall', 'Trip wise'].map((check) => (
              <TouchableOpacity
                onPress={() => setChecked(check)}
                key={check}
                style={vehicle_history_styles.vehicle_radio_check_box}
              >
                {checked === check ? (
                  <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={vehicle_history_styles.vehicle_radio_liner_box}
                  >
                    <Text style={{ color: 'white' }}>{check}</Text>
                  </LinearGradient>
                ) : (
                  <Text
                    style={[
                      vehicle_history_styles.vehicle_radio_check_text,
                      {},
                    ]}
                  >
                    {check}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <MaterialIcons name="notifications" color="#1B519E" size={30} />
        </View>
      <View style={custom_styles.history_slider}>
        <VideoSlider />
      </View>
      </View>
    </View>
  )
}

export default Custom ;
