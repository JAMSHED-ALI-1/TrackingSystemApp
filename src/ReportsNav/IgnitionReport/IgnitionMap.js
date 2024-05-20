import React from 'react';
import { View, Text, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import Theme from '../../Theme/theme';
import ignition_map_styles from '../../Styles/ReportsNav/IgnitionReport/ignitionMap.module';


// const IgnitionMap = ({ data }) => {

//   const rows = [
//     {
//       id: 1,
//       vehicle_no: 'HR 32 BBB 2345',
//       date: '31/12/2023 ',
//       time: '03:45 PM',
//       status: 'On'
//     },

//     {
//       id: 2,
//       vehicle_no: 'HR 32 BBB 2345',
//       date: '31/12/2023 ',
//       time: '03:45 PM',
//       status: 'Off'
//     },

//     {
//       id: 3,
//       vehicle_no: 'HR 32 BBB 2345',
//       date: '31/12/2023 ',
//       time: '03:45 PM',
//       status: 'On'
//     },

//     {
//       id: 4,
//       vehicle_no: 'HR 32 BBB 2345',
//       date: '31/12/2023 ',
//       time: '03:45 PM',
//       status: 'Off'
//     },
//     {
//       id: 5,
//       vehicle_no: 'HR 32 BBB 2345',
//       date: '31/12/2023 ',
//       time: '03:45 PM',
//       status: 'On'
//     },

//   ]

//   return (
//     <View style={ignition_map_styles.ignition_main_box} >

//       <View style={[ignition_map_styles.ignition_map_header]}>
//         <View style={[ignition_map_styles.ignition_sr_box]}>
//           <Text
//             style={ignition_map_styles.sr_number_header_text}
//           >
//             S No.
//           </Text>
//         </View>

//         <View style={[ignition_map_styles.ignition_ticket_status_box]}>
//           <Text style={ignition_map_styles.status_header_text}>
//             Status
//           </Text>
//         </View>

//         <View style={ignition_map_styles.ignition_location_box}>
//           <Text style={ignition_map_styles.status_header_text}>
//             Vehicle Location
//           </Text>
//         </View>

//         <View style={ignition_map_styles.time_box}>
//           <Text style={ignition_map_styles.status_header_text}>
//             Time & Date
//           </Text>
//         </View>

//         <View style={ignition_map_styles.vehicle_no_box}>
//           <Text style={ignition_map_styles.status_header_text}>
//             Vehicle No.
//           </Text>
//         </View>

//       </View>

//       <ScrollView style={{}}>
//         {rows.map((item, index) => (
//           <View key={index} style={ignition_map_styles.ignition_map_header}>
//             <View style={[ignition_map_styles.ignition_sr_box]}>
//               <Text style={[ignition_map_styles.ignition_rows_sr_text]}>
//                 {item.id}.
//               </Text>
//             </View>

//             <View style={[ignition_map_styles.ignition_ticket_status_box]}>
//               <Text style={[ignition_map_styles.status_row_text, { color: item.status === 'On' ? Theme.lightGreen : Theme.red }]}>
//                 {item.status}
//               </Text>
//             </View>

//             <View style={ignition_map_styles.ignition_location_box}>
//               <Text
//                 style={ignition_map_styles.row_location_text}
//               >
//                 View on map
//               </Text>

//             </View>

//             <View style={ignition_map_styles.time_box}>
//               <Text style={history_map_styles.history_row_time_date_text}>
//                 {item.date}
//               </Text>
//               <Text style={history_map_styles.history_row_time_date_text}>
//                 {item.time}
//               </Text>
//             </View>

//             <View style={ignition_map_styles.vehicle_no_box}>
//               <Text style={ignition_map_styles.row_location_text}>
//                 {item.vehicle_no}
//               </Text>
//             </View>
//           </View>

//         ))}
//       </ScrollView>

//     </View>

//   )
// }




// export default IgnitionMap;


const IgnitionMap = ({ data }) => {

  return (
    <View style={ignition_map_styles.ignition_main_box} >

      <View style={[ignition_map_styles.ignition_map_header]}>
        <View style={[ignition_map_styles.ignition_sr_box]}>
          <Text style={ignition_map_styles.sr_number_header_text}>
            S No.
          </Text>
        </View>

        <View style={[ignition_map_styles.ignition_ticket_status_box]}>
          <Text style={ignition_map_styles.status_header_text}>
            Status
          </Text>
        </View>

        <View style={ignition_map_styles.ignition_location_box}>
          <Text style={ignition_map_styles.status_header_text}>
            Vehicle Location
          </Text>
        </View>

        <View style={ignition_map_styles.time_box}>
          <Text style={ignition_map_styles.status_header_text}>
            Date &
            Time
          </Text>
        </View>

        <View style={ignition_map_styles.vehicle_no_box}>
          <Text style={ignition_map_styles.status_header_text}>
            Vehicle No.
          </Text>
        </View>
      </View>

      <ScrollView style={{ marginBottom: 20, borderWidth: 0 }}>
        {data.map((item, index) => (
          <View key={index} style={ignition_map_styles?.ignition_map_header}>
            <View style={[ignition_map_styles?.ignition_sr_box]}>
              <Text style={[ignition_map_styles?.ignition_rows_sr_text]}>
                {index + 1}.
              </Text>
            </View>

            <View style={[ignition_map_styles.ignition_ticket_status_box]}>
              <Text style={[ignition_map_styles.status_row_text, { color: item.data[item.data.length - 1]?.ignition ? Theme.lightGreen : Theme.red }]}>
                {item.data[item.data.length - 1]?.ignition ? 'On' : 'Off'}
              </Text>
            </View>

            <View style={ignition_map_styles.ignition_location_box}>
              <Text style={ignition_map_styles.row_location_text}>
                View on map
              </Text>
            </View>

            <View style={ignition_map_styles.time_box}>
              <Text style={ignition_map_styles.time_date_text}>
                {new Date(item.data[item.data.length - 1]?.timestamp).toLocaleDateString()}
              </Text>
              <Text style={ignition_map_styles.time_date_text}>
                {new Date(item.data[item.data.length - 1]?.timestamp).toLocaleTimeString()}
              </Text>
            </View>

            <View style={ignition_map_styles.vehicle_no_box}>
              <Text style={ignition_map_styles.row_location_text}>
                {item?.reg_no}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}

export default IgnitionMap;
