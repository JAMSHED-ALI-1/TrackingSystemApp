import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import VehicleSelector from '../../VehicleSelector';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import odometer_edit_styles from '../../../Styles/DeviceDetails/OdometerEditModal.module';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SpeedLimitHeader from './SpeedLimitHeader';
import SpeedRadioButton from './SpeedRadioButton';
import speed_limit_edit_styles from '../../../Styles/DeviceDetails/SpeedLimitCkeck.module';

const SpeedLimitCheckModal = () => {
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <SpeedLimitHeader />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '5%', margin: 10 }}>
          <VehicleSelector />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>
          Set Speed Limit
          </Text>
          <View style={modal_gps_styles.details_hr_line}></View>

          <View style={odometer_edit_styles.odometer_edit_flex_box}>
            <View style={odometer_edit_styles.odometer_flex_box1}>
              <Text style={odometer_edit_styles.odometer_flex_box1_text}>
                Total Reading
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
                <Text
                  style={odometer_edit_styles.odometer_flex_box2_child1_text}
                >
                  00
                </Text>
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
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={odometer_edit_styles.odometer_flex_box3}
            >
              <MaterialIcons name="check" size={20} color="#FFFFFF" />
            </LinearGradient>
          </View>

          <View style={speed_limit_edit_styles.speed_edit_alarm}>
            <View style={odometer_edit_styles.odometer_flex_box1}>
              <Text style={odometer_edit_styles.odometer_flex_box1_text}>
                Alarm Type
              </Text>
            </View>
            <Text style={speed_limit_edit_styles.speed_edit_dot}>:</Text>
            <View style={speed_limit_edit_styles.speed_radio_btn}>
              <SpeedRadioButton />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SpeedLimitCheckModal;
