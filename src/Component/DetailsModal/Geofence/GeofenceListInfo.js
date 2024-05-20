import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import GeofenceHeader from './GeofenceHeader';
import { LinearGradient } from 'expo-linear-gradient';
import geo_list_info_styles from '../../../Styles/DeviceDetails/GeofenceListinfo.module';

const GeofenceListInfo = () => {
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <GeofenceHeader />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>List</Text>
          <View style={modal_gps_styles.details_hr_line}></View>

          <View style={geo_list_info_styles.geo_list_info_main}>
            <View>
              <View style={geo_list_info_styles.geo_list_info_child1}>
                <View style={geo_list_info_styles.geo_list_info_child1_box_a}>
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    1. Name:
                  </Text>
                </View>
                <View style={geo_list_info_styles.geo_list_info_child1_box_b}>
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    Gurugram Parking
                  </Text>
                </View>
                <View
                  style={[
                    geo_list_info_styles.geo_list_info_child1_box_c,
                    geo_list_info_styles.geo_list_info_child1_box1_circular,
                  ]}
                >
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    {' '}
                    Type :{' '}
                  </Text>
                  <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={geo_list_info_styles.geo_list_info_grad_box}
                  >
                    <Text style={geo_list_info_styles.geo_grad_text}>
                      Circular{' '}
                    </Text>
                  </LinearGradient>
                </View>
              </View>

              <View style={geo_list_info_styles.geo_list_info_child1_box2}>
                <View
                  style={geo_list_info_styles.geo_child1_box2_address}
                >
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    Address
                  </Text>
                </View>
                <View
                  style={geo_list_info_styles.geo_child1_box2_address_info}
                >
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    2/245 Lal baagh eyx road new delhi, 221020
                  </Text>
                </View>
              </View>

              <View
                style={geo_list_info_styles.geo_child1_box3_main}
              >
                <View
                  style={geo_list_info_styles.geo_child1_box3_child1}
                >
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    Enter Time:
                  </Text>

                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    11:01 PM
                  </Text>
                </View>
                <View
                  style={geo_list_info_styles.geo_child1_box3_child1}
                >
                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    Exit Time:
                  </Text>

                  <Text
                    style={geo_list_info_styles.geo_list_info_child1_box1_text}
                  >
                    06:00 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GeofenceListInfo
