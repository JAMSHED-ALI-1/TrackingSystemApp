import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.'
import Theme from '../../Theme/theme'
import speed_report_map from '../../Styles/ReportsNav/SpeedReport/SpeedMap.module'

const SpeedReportMap = ({ reportData }) => {

  return (
    <View style={history_map_styles.history_map_main_box}>
      <View style={speed_report_map.ignition_map_header}>
        <View style={history_map_styles.history_row_box}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Vehicle No.
          </Text>
        </View>

        {/* <View style={[history_map_styles.history_row_box, { width: '15%' }]}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Date
          </Text>
        </View> */}

        <View style={[history_map_styles.history_row_box]}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Top Speed
          </Text>
        </View>

        <View style={history_map_styles.history_row_box}>
          <Text style={history_map_styles.history_map_header_child_text}>
            Average Speed
          </Text>
        </View>

        <View
          style={[speed_report_map.ignition_rows_sr_box]}
        >
          <Text numberOfLines={2} style={history_map_styles.history_map_header_child_text}>
            Over{'\n'}Speed
          </Text>
        </View>
      </View>

      <ScrollView
        style={[
          history_map_styles.history_map_row_box,
          speed_report_map.ignition_rows_main_box,
        ]}
      >
        {reportData.map((item, index) => (
          <View key={index} style={speed_report_map.ignition_map_header}>
            <View style={history_map_styles.history_row_box}>
              <Text style={history_map_styles.history_row_ticket_id_text}>
                {item.reg_no}
              </Text>
            </View>

            {/* Assuming your date format is in 'DD MMM' */}
            {/* <View
              style={[history_map_styles.history_row_box, { width: '15%' }]}
            >
              <Text style={history_map_styles.history_row_time_date_text}>
                {item.date}
              </Text>
            </View> */}

            <View
              style={[history_map_styles.history_row_box]}
            >
              <Text style={[history_map_styles.history_row_time_date_text]}>
                {item.maxSpeed} KM/h
              </Text>
            </View>

            <View style={history_map_styles.history_row_box}>
              <Text style={history_map_styles.history_row_time_date_text}>
                {item.avgSpeed} KM/h
              </Text>
            </View>

            <View style={[speed_report_map.ignition_rows_sr_box]}>
              <Text style={speed_report_map.ignition_rows_sr_text}>
                {item.speedGreaterThan70}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SpeedReportMap;
