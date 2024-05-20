import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import trip_map_styles from '../../Styles/ReportsNav/TripReportMap.module'
import Theme from '../../Theme/theme'
import { ScrollView } from 'react-native-gesture-handler'

const TripReportMap = () => {
  const data = [
    {
      title: '08',
      name: 'Block 56 Jankipuram kirti nagar Lucknow, UP, 226010',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31-12-2024',
      time: '06:30 AM',
      end_date : '31-12-2024',
      end_time : '06:30 AM',
      total_distance: '100 kM',
      total_time: '12h 00 min',
      end_trip: 'Block 32 Tilak Nagar nagar Delhi, 202050',
      running: '10h 00min',
      ideal: '16h 00min',
      over_speed: '10',
      harsh_breaking: '06',
    },
    {
      title: '08',
      name: 'Block 56 Jankipuram kirti nagar Lucknow, UP, 226010',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31-12-2024',
      time: '06:30 AM', 
      end_date : '31-12-2024',
      end_time : '06:30 AM',
      total_distance: '100 kM',
      total_time: '12h 00 min',
      end_trip: 'Block 32 Tilak Nagar nagar Delhi, 202050',
      running: '10h 00min',
      ideal: '16h 00min',
      over_speed: '10',
      harsh_breaking: '06',
    },
    {
      title: '08',
      name: 'Block 56 Jankipuram kirti nagar Lucknow, UP, 226010',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31-12-2024',
      time: '06:30 AM',
      end_date : '31-12-2024',
      end_time : '06:30 AM',
      total_distance: '100 kM',
      total_time: '12h 00 min',
      end_trip: 'Block 32 Tilak Nagar nagar Delhi, 202050',
      running: '10h 00min',
      ideal: '16h 00min',
      over_speed: '10',
      harsh_breaking: '06',
    },
  ]

  return (
    <ScrollView style={trip_map_styles.scroll_view_box}>
      {data.map((item, index) => (
        <View key={index}>
        
          <Text style={trip_map_styles.trip_value}>{`Trip ${String(index + 1).padStart(2, '0',)}`}</Text>

          <View style={trip_map_styles.card}>
            <View style={trip_map_styles.trip_vehicle_info_box}>
              <View style={{ marginTop: 28 }}>
                <View style={trip_map_styles.admin_image_box}>
                  <MaterialIcons
                    name="arrow-drop-down"
                    color={Theme.white}
                    size={21}
                  />
                </View>
                <View style={trip_map_styles.admin_vh_line_box}></View>
                <View style={trip_map_styles.trip_push_box}>
                  <FontAwesome
                    name="stop"
                    color={Theme.white}
                    size={10}
                  />
                </View>
              </View>

              {/* start trip  */}

              <View style={trip_map_styles.trip_second_box}>
                <Text style={trip_map_styles.trip_vehicle_no_text}>
                  {item.vehicle_no}
                </Text>
                {/* start trip */}
                <View style={trip_map_styles.admin_details_user_info}>
                  <Text style={trip_map_styles.user_email_password_text}>
                    {item.date}
                  </Text>
                  <View style={trip_map_styles.admin_line}></View>
                  <Text style={trip_map_styles.user_email_password_text}>
                    {item.time}
                  </Text>
                </View>

                <View style={trip_map_styles.trip_vehicle_location_box}>
                  <Text style={trip_map_styles.trip_vehicle_location_text}>
                    {item.name}
                  </Text>
                </View>

                {/* end trip */}

                <View style={trip_map_styles.admin_details_user_info}>
                  <Text style={trip_map_styles.user_email_password_text}>
                    {item.end_date}
                  </Text>
                  <View style={trip_map_styles.admin_line}></View>
                  <Text style={trip_map_styles.user_email_password_text}>
                    {item.end_time}
                  </Text>
                </View>

                {/* end trip location  */}
                <View style={trip_map_styles.trip_vehicle_location_box}>
                  <Text style={trip_map_styles.trip_vehicle_location_text}>
                    {item.name}
                  </Text>
                </View>
              </View>

{/* 3rd box */}
              <View style={trip_map_styles.trip_duration_box}>
                <View style={trip_map_styles.vehicle_distance_duration_box}>
                  <Text style={trip_map_styles.trip_distance_duration_text}>
                    Total Distance
                  </Text>
                  <Text style={trip_map_styles.trip_distance_duration_text}>
                    Total Duration
                  </Text>
                </View>

                <View style={trip_map_styles.vehicle_distance_duration_map_box}>
                  <Text style={trip_map_styles.trip_distance_duration_map_text}>
                    {item.total_distance}
                  </Text>
                  <Text style={trip_map_styles.trip_distance_duration_map_text}>
                    {item.total_time}
                  </Text>
                </View>

                {/* running ideal */}

                <View style={trip_map_styles.vehicle_distance_duration_box}>
                  <Text style={trip_map_styles.trip_running_map_text}>
                    Running
                  </Text>
                  <Text style={trip_map_styles.trip_ideal_map_text}>
                    Ideal
                  </Text>
                </View>

                <View style={trip_map_styles.vehicle_distance_duration_map_box}>
                  <Text style={trip_map_styles.vehicle_distance_duration_text}>
                    {item.running}
                  </Text>
                  <Text style={trip_map_styles.vehicle_distance_duration_text}>
                    {item.ideal}
                  </Text>
                </View>

                {/* over speed */}
                <View style={trip_map_styles.vehicle_distance_duration_box}>
                  <Text style={trip_map_styles.trip_over_harsh_map_text}>
                    Over Speed
                  </Text>
                  <Text style={trip_map_styles.trip_over_harsh_map_text}>
                    Harsh Breaking
                  </Text>
                </View>

                <View style={trip_map_styles.vehicle_distance_duration_box}>
                  <Text style={trip_map_styles.vehicle_distance_duration_text}>
                    ( {item.over_speed} )
                  </Text>
                  <Text style={trip_map_styles.vehicle_distance_duration_text}>
                    ( {item.harsh_breaking} )
                  </Text>
                </View>

                <TouchableOpacity style={trip_map_styles.trip_map_view_box}>
                <MaterialIcons
                    name="remove-red-eye"
                    color={Theme.historyBlue}
                    size={18}
                  />
                    <Text style={trip_map_styles.trip_view_on_map_text}>View on map</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*  */}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default TripReportMap
