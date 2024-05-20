import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import parking_alert_styles from '../../../Styles/AlertsPage/ParkingAlert.module';
import Theme from '../../../Theme/theme';
import history_map_styles from '../../../Styles/SideDrowerPages/HistoryMap.module.';


const HistoryMap = () => {

  const rows = [
  //   {
  //      ticket_id: 3333333,
  //     vehicle_no : 'HR 32 BBB 2345',
  //     ticket_reason : 'Wire Cut',
  //     date:'31/12/2023 ',
  //     time: '03:45 PM',
  //     ticket_status:'Resolved'
  //   },
    
  //   {
  //     ticket_id: 3333333,
  //    vehicle_no : 'HR 32 BBB 2345',
  //    ticket_reason : 'Wire Cut',
  //    date:'31/12/2023 ',
  //    time: '03:45 PM',
  //    ticket_status:'Resolved'
  //  },

    
  ]
  if (rows.length === 0) {
    return (
      <View style={history_map_styles.history_no_ticket_box}>
        <Text style={history_map_styles.history_no_ticket_text}>NO TICKET </Text>
        <Text style={history_map_styles.history_no_ticket_text}>GENERATED YET </Text>
        <Text style={history_map_styles.history_no_ticket_text2}>!</Text>
      </View>
    );
  }

  return (
    <View style={history_map_styles.history_map_main_box}
    
    >
   
          <View style={history_map_styles.history_map_header_box}>
                <View style={history_map_styles.history_map_header_child}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Ticket ID
                </Text>
              </View>
              <View style={history_map_styles.history_map_header_child}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Vehicle Number
                </Text>
              </View>
              <View style={history_map_styles.history_map_header_child}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Ticket Reason
                </Text>

              </View>
              <View style={history_map_styles.history_map_header_child}>
              <Text style={history_map_styles.history_map_header_child_text}>
              Time & Date
                </Text>
                </View>

                <View style={history_map_styles.history_map_header_child}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Ticket Status
                </Text>
                </View>
            
          </View>

          <View style={parking_alert_styles.vehicle_report_hr_line_box}></View>

          <ScrollView style={history_map_styles.history_map_row_box}>
          {rows.map((item, index) => (
               <View key={index} style={history_map_styles.history_row_main_box}>
                   <View style={history_map_styles.history_row_ticket_id_box}>
                   <Text style={history_map_styles.history_row_ticket_id_text}>
                   {item.ticket_id}
                   </Text>
                 </View>
                 <View style={history_map_styles.history_row_box}>
                   <Text style={history_map_styles.history_row_vehicle_num_text}>
                  {item.vehicle_no}
                   </Text>
                 </View>
                 <View style={history_map_styles.history_row_box}>
                   <Text style={history_map_styles.history_row_ticket_reason_text}>
                   {item.ticket_reason}
                   </Text>
   
                 </View>
                 <View style={history_map_styles.history_row_box}>
                 <Text style={history_map_styles.history_row_time_date_text}>
                 {item.date}
                   </Text>
                    <Text style={history_map_styles.history_row_time_date_text}>
                 {item.time}
                   </Text>
                   </View>
   
                   <View style={history_map_styles.history_row_box}>
                   <Text style={[history_map_styles.history_row_ticket_status_text, { color: item.ticket_status === 'Resolved' ? Theme.lightGreen : Theme.greyLight }]}>
                   {item.ticket_status}
                   </Text>
                   </View>
             </View>
   
              ))}
              </ScrollView>
      
      </View>
 
  )
}




export default HistoryMap;
