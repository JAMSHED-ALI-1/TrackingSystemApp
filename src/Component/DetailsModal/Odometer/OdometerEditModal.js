import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import VehicleSelector from '../../VehicleSelector';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import OdometerHeader from './OdometerHeader';
import odometer_edit_styles from '../../../Styles/DeviceDetails/OdometerEditModal.module';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RadioButton from '../RadioButton';

const OdometerEditModal = ({ locationData, vehiclesData }) => {
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <OdometerHeader />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '5%', margin: 10 }}>
          <VehicleSelector vehiclesData={vehiclesData} />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>
            Odometer Details
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
              <View style={odometer_edit_styles.odometer_flex_box2_child1}>
                <Text
                  style={odometer_edit_styles.odometer_flex_box2_child1_text}
                >
                  564999.8
                </Text>
              </View>
              <View style={odometer_edit_styles.odometer_flex_box2_child2}>
                <Text
                  style={odometer_edit_styles.odometer_flex_box2_child2_text1}
                >
                  Km
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={odometer_edit_styles.odometer_flex_box3}
            >
              <MaterialIcons name="edit" size={20} color="#FFFFFF" />
            </LinearGradient>
          </View>

          <View style={odometer_edit_styles.odometer_edit_flex_box}>
            <View style={odometer_edit_styles.odometer_flex_box1}>
              <Text style={odometer_edit_styles.odometer_flex_box1_text}>
                Set Alarm
              </Text>
            </View>
            <Text>:</Text>
            <View style={odometer_edit_styles.odometer_flex_box2}>
              <View style={odometer_edit_styles.odometer_flex_box2_child1}>
                <Text
                  style={odometer_edit_styles.odometer_flex_box2_child1_text}
                >
                  000000
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={odometer_edit_styles.odometer_flex_box3}
            >
              <MaterialIcons name="edit" size={20} color="#FFFFFF" />
            </LinearGradient>
          </View>

          <View
            style={odometer_edit_styles.radio_type_main_box}
          >
           <View style={odometer_edit_styles.radio_type_box_child}>
           <Text style={odometer_edit_styles.radio_type_text}> Type</Text>
           </View>
            <RadioButton  />
          </View>
        </View>
      </View>
    </View>
  )
}

export default OdometerEditModal;
