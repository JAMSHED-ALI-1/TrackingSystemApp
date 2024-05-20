// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
// import parking_alert_styles from '../../Styles/AlertsPage/ParkingAlert.module';
// import Theme from '../../Theme/theme';
// import daily_report_map_styles from '../../Styles/ReportsNav/DailyReport/DailyReportMap.module';

// const DailyReportMap = ({ data }) => {

//   const rows = [
//     {
//       vehicle_no: 'HR 32 BBB 2345',

//       distance_travelled: '350 KM',
//       date: '31/12/2023 ',
//     },
//   ]


//   return (
//     <View style={history_map_styles.history_map_main_box}>

//       <View style={[history_map_styles.history_row_main_box,
//       daily_report_map_styles.daily_report_header_box
//       ]}>

//         <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
//           <Text style={history_map_styles.history_map_header_child_text}>
//             Vehicle No.
//           </Text>
//         </View>
//         <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
//           <Text style={history_map_styles.history_map_header_child_text}>
//             Distance Travelled
//           </Text>

//         </View>
//         <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
//           <Text style={history_map_styles.history_map_header_child_text}>
//             Vehicle History
//           </Text>
//         </View>

//         <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
//           <Text style={history_map_styles.history_map_header_child_text}>
//             Date
//           </Text>
//         </View>

//       </View>
//       {/* 
//           <View style={parking_alert_styles.vehicle_report_hr_line_box}></View> */}

//       <ScrollView style={history_map_styles.history_map_row_box}>
//         {rows.map((item, index) => (
//           <View key={index} style={[history_map_styles.history_row_main_box, { width: '98%', }]}>

//             <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
//               <Text style={history_map_styles.history_row_ticket_id_text}>
//                 {item.vehicle_no}
//               </Text>
//             </View>
//             <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
//               <Text style={[history_map_styles.history_row_ticket_reason_text, { color: Theme.green }]}>
//                 {item.distance_travelled}
//               </Text>

//             </View>
//             <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
//               <Text style={history_map_styles.history_row_ticket_id_text}>
//                 View on map
//               </Text>

//             </View>

//             <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
//               <Text style={[history_map_styles.history_row_time_date_text]}>
//                 {item.date}
//               </Text>
//             </View>
//           </View>

//         ))}
//       </ScrollView>

//     </View>

//   )
// }




// export default DailyReportMap;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import daily_report_map_styles from '../../Styles/ReportsNav/DailyReport/DailyReportMap.module';
import Theme from '../../Theme/theme';

const DailyReportMap = ({ data }) => {
  return (
    <View style={history_map_styles.history_map_main_box}>
      <View style={[history_map_styles.history_row_main_box, daily_report_map_styles.daily_report_header_box]}>
        <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
          <Text style={history_map_styles.history_map_header_child_text}>Vehicle No.</Text>
        </View>
        <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
          <Text style={history_map_styles.history_map_header_child_text}>Distance Travelled</Text>
        </View>
        <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
          <Text style={history_map_styles.history_map_header_child_text}>Vehicle History</Text>
        </View>
        <View style={[history_map_styles.history_map_header_child, daily_report_map_styles.daily_report_header_child]}>
          <Text style={history_map_styles.history_map_header_child_text}>Date</Text>
        </View>
      </View>

      <ScrollView style={history_map_styles.history_map_row_box}>
        {data.devicesArr.map((item, index) => (
          <View key={index} style={[history_map_styles.history_row_main_box, { width: '98%' }]}>
            <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
              <Text style={history_map_styles.history_row_ticket_id_text}>{item.reg_no}</Text>
            </View>
            <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
              <Text style={[history_map_styles.history_row_ticket_reason_text, { color: Theme.green }]}>
                {item.total_distance_sum.toFixed(2)} KM
              </Text>
            </View>
            <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
              <Text style={history_map_styles.history_row_ticket_id_text}>View on map</Text>
            </View>
            <View style={[history_map_styles.history_row_box, daily_report_map_styles.daily_report_rows_child]}>
              <Text style={[history_map_styles.history_row_time_date_text]}>{item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default DailyReportMap;
