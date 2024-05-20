import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import VehicleSelector from '../VehicleSelector'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DeviceDetailsModal from './DeviceDetailsModal'
import modal_gps_styles from '../../Styles/DeviceDetails/GpsModal.module'
const GpsDetails = ({ locationData, vehiclesData } ) => {
  useEffect(()=>{
    console.log('gpsDetails.js', locationData?.locationData?.imei)

  },[locationData])
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <DeviceDetailsModal />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '15%', margin: 10, zIndex: 1,  }}>
          <VehicleSelector locationData={locationData} />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          {/* <Text style={modal_gps_styles.gps_details_text}>Details</Text> */}
          <View style={modal_gps_styles.details_hr_line}></View>
          <View style={modal_gps_styles.gps_info_main}>
            <View style={modal_gps_styles.gps_info_left_box}>
              <Text style={modal_gps_styles.details_info_text}>IMEI No.</Text>
            </View>
            <View style={modal_gps_styles.gps_info_right_box}>
              <Text>: </Text>
              <Text style={modal_gps_styles.gps_info_right_text}>
              {locationData?.locationData?.imei ?? '--'}
              </Text>
            </View>

            {/* <View style={modal_gps_styles.gps_info_left_box}>
              <Text style={modal_gps_styles.details_info_text}>SIM No.</Text>
            </View>
            <View style={modal_gps_styles.gps_info_right_box}>
              <Text>: </Text>
              <Text style={modal_gps_styles.gps_info_right_text}>
                {' '}
                67888888888
              </Text>
            </View> */}

            {/* <View style={modal_gps_styles.gps_info_left_box}>
              <Text style={modal_gps_styles.details_info_text}>
                Installation Date
              </Text>
            </View> */}
            {/* <View style={modal_gps_styles.gps_info_right_box}>
              <Text>: </Text>
              <Text style={modal_gps_styles.gps_info_right_text}>
                {' '}
                31 jan 2023
              </Text>
            </View> */}

            {/* <View style={modal_gps_styles.gps_info_left_box}>
              <Text style={modal_gps_styles.details_info_text}>Validity</Text>
            </View> */}

            {/*  */}
            <View style={[modal_gps_styles.gps_remaining_box, {borderWidth:0,marginTop:0, marginLeft:0,paddingLeft:0}]}>
              {/* <View style={modal_gps_styles.gps_validity_box}>
                <View style={modal_gps_styles.gps_validity_text_box}>
                  <Text
                    style={modal_gps_styles.gps_dot_text}
                  >
                    :
                  </Text>
                  <View
                    style={[modal_gps_styles.gps_validity_rem_box, {borderWidth:1,}]}
                  >
                    <Text
                      style={modal_gps_styles.gap_validity_rem_text}
                    >
                      {' '}
                      340 Days remaining
                    </Text>
                  </View>
                </View> */}
                {/* <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={modal_gps_styles.gps_add_validity_box}
                >
                  <Icon name="add-box" size={20} color="#FFFFFF" />
                  <Text style={{ color: '#FFFFFF' }}>  Add Validity    </Text>
                </LinearGradient> */}
              {/* </View> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GpsDetails


