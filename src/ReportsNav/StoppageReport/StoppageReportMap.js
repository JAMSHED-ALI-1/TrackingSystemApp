import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import Theme from '../../Theme/theme';
import stoppage_report_map from '../../Styles/ReportsNav/StoppageReport/StoppageMap';

const StoppageReportMap = ({ data }) => {


  // data.map((item, index) => { console.log(item.data[index]?.from_time) });
  // console.log("data=>", data);
  // data
  //   .filter(entry => entry.data.length > 0) // Filter out entries with no data
  //   .map(entry => entry.data.map(dataEntry => console.log(dataEntry.from_time)));

  useEffect(() => {
    data
      .filter(entry => entry.data.length > 0) // Filter out entries with no data
      .forEach(entry => {
        entry.data.forEach(dataEntry => {
          const fromTime = new Date(dataEntry.from_time);
          console.log(fromTime.toLocaleString());
        });
      });
  }, [data]);



  return (
    <View style={history_map_styles.history_map_main_box}>
      <View style={stoppage_report_map.map_header_box}>
        <View style={stoppage_report_map.vehicle_no_box}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Vehicle No.
          </Text>
        </View>

        <View
          style={stoppage_report_map.time_box}
        >
          <Text style={history_map_styles.history_map_header_child_text}>
            Date
          </Text>
        </View>

        <View
          style={stoppage_report_map.stoppage_duration_box}
        >
          <Text style={history_map_styles.history_map_header_child_text}>
            Stoppage Duration
          </Text>
        </View>

        <View style={stoppage_report_map.stop_location}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Stoppage Location
          </Text>
        </View>

        {/* <View style={[stoppage_report_map.ignition_rows_sr_box,{width:'13%',}]}>
          <Text style={history_map_styles.history_map_header_child_text}>
          Over Speed
          </Text>
        </View> */}
      </View>

      <ScrollView
        style={[
          history_map_styles.history_map_row_box,
          stoppage_report_map.ignition_rows_main_box,
        ]}
      >
        {data.map((item, index) => (
          <View key={index} style={stoppage_report_map.map_header_box}>
            <View style={stoppage_report_map.vehicle_no_box}>
              <Text style={history_map_styles.history_row_ticket_id_text}>
                {item?.reg_no}
              </Text>
            </View>

            <View style={stoppage_report_map.time_box}>
              <Text style={history_map_styles.history_row_time_date_text}>
                {new Date(item.data[0]?.from_time).toLocaleDateString()}
              </Text>
            </View>

            <View style={stoppage_report_map.stoppage_duration_box}>
              <Text style={history_map_styles.history_row_time_date_text}>
                {item?.data[0]?.total_time}
              </Text>
            </View>

            <TouchableOpacity style={stoppage_report_map.stop_location}>
              <Text style={history_map_styles.history_row_ticket_id_text}>
                View on map
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const Stoppage_map_styles = StyleSheet.create({
  start_and_end_time_text: {
    fontSize: 8,
    color: '#888888',
    fontWeight: Theme.font.bold
  }
})

export default StoppageReportMap
