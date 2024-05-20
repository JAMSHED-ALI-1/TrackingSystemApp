import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import GeofenceHeader from './GeofenceHeader';
import geofence_add_styles from '../../../Styles/DeviceDetails/GeofenceAdd.module';

const GeofenceAddModal = () => {
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <GeofenceHeader />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>List</Text>
          <View style={modal_gps_styles.details_hr_line}></View>

          <View style={geofence_add_styles.geo_add_box}>
            <View style={geofence_add_styles.geo_add_box_child}>
              <Text style={geofence_add_styles.geofence_details_text}>
                Add Details{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GeofenceAddModal;
