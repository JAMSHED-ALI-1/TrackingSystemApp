import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import ignition_map_styles from '../../Styles/ReportsNav/IgnitionReport/ignitionMap.module';

const DriverVehicleMap = () => {
  const rows = [
    {
      over_speed: '08',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },

    {
      over_speed: '10',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: '18',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: '04',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: '05',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: '06',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },

    {
      over_speed: '07',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: '08',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: '09',
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
    {
      over_speed: 10,
      vehicle_no: 'HR 32 BBB 2345',
      date: '31 Dec ',
      driver1: 'Shashank Jaiswal',
      driver2: 'Pradeep Singh'
    },
  ]

  return (
    <View style={history_map_styles.history_map_main_box}>
      <View style={ignition_map_styles.ignition_map_header}>
        <View style={history_map_styles.history_row_box}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Vehicle No.
          </Text>
        </View>

        <View
          style={[
            history_map_styles.history_row_box,
            { width: '15%' },
          ]}
        >
          <Text style={history_map_styles.history_map_header_child_text}>
            Date
          </Text>
        </View>

        <View
          style={[
            history_map_styles.history_row_box,
            { width: '25%' },
          ]}
        >
          <Text style={history_map_styles.history_map_header_child_text}>
          Driver 1
          </Text>
        </View>

        <View style={[history_map_styles.history_row_box,{ width: '25%' },]}>
          <Text style={history_map_styles.history_map_header_child_text}>
          Driver 2
          </Text>
        </View>

        {/* <View style={[ignition_map_styles.ignition_rows_sr_box,{width:'13%',}]}>
          <Text style={history_map_styles.history_map_header_child_text}>
          Over Speed
          </Text>
        </View> */}
      </View>

      <ScrollView
        style={[
          history_map_styles.history_map_row_box,
          ignition_map_styles.ignition_rows_main_box,
        ]}
      >
        {rows.map((item, index) => (
          <View key={index} style={ignition_map_styles.ignition_map_rows}>
            <View style={history_map_styles.history_row_box}>
              <Text style={history_map_styles.history_row_ticket_id_text}>
                {item.vehicle_no}
              </Text>
            </View>

            <View style={[history_map_styles.history_row_box,{ width: '15%' },]}>
              <Text style={history_map_styles.history_row_time_date_text}>
                {item.date}
              </Text>
            </View>

            <View style={[history_map_styles.history_row_box,{ width: '25%' },]}>
              <Text
                style={[
                  history_map_styles.history_row_time_date_text,
                  
                ]}
              >
                {item.driver1}
              </Text>
              
            </View>

            <View style={[history_map_styles.history_row_box,{ width: '25%' }]}>
              <Text style={history_map_styles.history_row_time_date_text}>
              {item.driver2}
              </Text>
            </View>

            {/* <View style={[ignition_map_styles.ignition_rows_sr_box]}>
              <Text style={ignition_map_styles.ignition_rows_sr_text}>
                {item.over_speed}
              </Text>
            </View> */}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}



export default DriverVehicleMap
