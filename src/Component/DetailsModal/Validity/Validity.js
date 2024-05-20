import { View, Text } from 'react-native'
import React from 'react'
import VehicleSelector from '../../VehicleSelector'
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module'
import odometer_edit_styles from '../../../Styles/DeviceDetails/OdometerEditModal.module'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ValidityHeader from './ValidityHeader'
import { LinearGradient } from 'expo-linear-gradient'
import validity_styles from '../../../Styles/DeviceDetails/Validity.module'

const Validity = ({ locationData, vehiclesData }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <ValidityHeader />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '5%', margin: 10 }}>
          <VehicleSelector vehiclesData={vehiclesData} />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>Details</Text>
          <View style={modal_gps_styles.details_hr_line}></View>

          <View style={validity_styles.validit_box}>
            <Text style={odometer_edit_styles.odometer_flex_box1_text}>
              Validity :
            </Text>
            <View style={validity_styles.validity_main_box}>
              <View style={validity_styles.validity_per_child_box}>
                <Text style={validity_styles.validit_per_text}> 72.45 %</Text>
              </View>

              <View style={validity_styles.validity_rem_box}>
                <Text>250 days Remaining </Text>
              </View>
            </View>
          </View>
          {/* <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#2A77E3', '#051C3E']}
            style={validity_styles.add_validity_box}
          >
            <MaterialIcons name="add-box" size={20} color="#fff" />
            <Text style={validity_styles.add_validity_box_text}>
              {' '}
              Add Validity
            </Text>
          </LinearGradient> */}
        </View>
      </View>
    </View>
  )
}

export default Validity
