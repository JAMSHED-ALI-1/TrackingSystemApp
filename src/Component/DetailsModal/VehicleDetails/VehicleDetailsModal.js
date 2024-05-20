import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import VehicleSelector from '../../VehicleSelector';
import VehicleDetailsHeader from './VehicleDetailsHeader';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
const VehicleDetailsModal = ({ locationData, vehiclesData }) => {
  return (
     <View style={modal_gps_styles.gps_modal_main_box}>
      <VehicleDetailsHeader/>
    <View style={modal_gps_styles.gps_modal_card}>
      <View style={{ height: '5%', margin: 10, zIndex: 1 }}>
        <VehicleSelector  vehiclesData={vehiclesData}/>
      </View>

      <View style={modal_gps_styles.gps_details_card}>
        <Text style={modal_gps_styles.gps_details_text}>Details</Text>
        <View style={modal_gps_styles.details_hr_line}></View>
        <View style={modal_gps_styles.gps_info_main}>
          <View style={modal_gps_styles.gps_info_left_box}>
            <Text style={modal_gps_styles.details_info_text}>Vehicle Category</Text>
          </View>
          <View style={vehicle_details_styles.vehicle_info_right_box}>
            <Text style={modal_gps_styles.dot}>: </Text>
            <Text style={modal_gps_styles.gps_info_right_text}> Truck</Text>
          </View>

          <View style={modal_gps_styles.gps_info_left_box}>
            <Text style={modal_gps_styles.details_info_text}>Chassis No.</Text>
          </View>
          <View style={vehicle_details_styles.vehicle_info_right_box}>
            <Text style={modal_gps_styles.dot}>: </Text>
            <Text style={modal_gps_styles.gps_info_right_text}> 67888898678888097550000</Text>
          </View>

          <View style={modal_gps_styles.gps_info_left_box}>
            <Text style={modal_gps_styles.details_info_text}>
              Engine No.
            </Text>
          </View>
          <View style={vehicle_details_styles.vehicle_info_right_box}>
            <Text style={modal_gps_styles.dot}>: </Text>
            <Text style={modal_gps_styles.gps_info_right_text}>
              {' '}
              67676767776676776777677
            </Text>
          </View>
        
        </View>
      </View>
    </View>
    </View>
  )
}

const vehicle_details_styles = StyleSheet.create({
  vehicle_info_right_box:{
    width:'60%',
    height: 18,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
  
})


export default VehicleDetailsModal;