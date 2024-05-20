import React from 'react';
import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import Theme from '../../Theme/theme';
import location_report_map from '../../Styles/ReportsNav/LocationReport/LocationMap.module';

const LocationTimeMap = () => {
  const rows = [
   
    {
      over_speed: '10',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: '18',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: '04',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: '05',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: '06',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },

    {
      over_speed: '07',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: '08',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: '09',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
    {
      over_speed: 10,
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      time: '06:30 AM',
    },
  ]

  return (
    <View style={location_report_map.main_box}>
      <View style={location_report_map.ignition_map_header}>
        <View style={location_report_map.vehicle_no_box}>
          <Text 
          style={history_map_styles.history_map_header_child_text}
          >
            Vehicle No.
          </Text>
        </View>

        <View style={location_report_map.time_box }>
          <Text style={history_map_styles.history_map_header_child_text}>
            Date
          </Text>
        </View>

        <View
          style={location_report_map.stoppage_duration_box}
        >
          <Text style={history_map_styles.history_map_header_child_text}>
          Stoppage Duration
          </Text>
        </View>

        <View style={location_report_map.user_and_location_box}>
          <Text style={history_map_styles.history_map_header_child_text}>
          Stoppage Location
          </Text>
        </View>

        {/* <View style={[location_report_map.ignition_rows_sr_box,{width:'13%',}]}>
          <Text style={history_map_styles.history_map_header_child_text}>
          Over Speed
          </Text>
        </View> */}
      </View>

      <ScrollView
        style={[
          history_map_styles.history_map_row_box,
          location_report_map.ignition_rows_main_box,
        ]}
      >
        {rows.map((item, index) => (
          <View key={index} style={location_report_map.ignition_map_header}>
            <View style={location_report_map.vehicle_no_box}>
              <Text style={history_map_styles.history_row_ticket_id_text}>
                {item.vehicle_no}
              </Text>
            </View>

            <View style={[location_report_map.time_box]}>
              <Text style={history_map_styles.history_row_time_date_text}>
                {item.date}
              </Text>
            </View>

            <View style={[location_report_map.stoppage_duration_box]}>
              <Text
                style={[
                  history_map_styles.history_row_time_date_text,
                  
                ]}
              >
                {item.time}
              </Text>
              
            </View>

            <TouchableOpacity style={location_report_map.user_and_location_box}>
              <Text style={history_map_styles.history_row_ticket_id_text}>
               View on map
              </Text>
            </TouchableOpacity>

            {/* <View style={[location_report_map.ignition_rows_sr_box]}>
              <Text style={location_report_map.ignition_rows_sr_text}>
                {item.over_speed}
              </Text>
            </View> */}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const Stoppage_map_styles = StyleSheet.create({
    start_and_end_time_text:{fontSize:8,color:'#888888', fontWeight:Theme.font.bold}
})

export default LocationTimeMap
