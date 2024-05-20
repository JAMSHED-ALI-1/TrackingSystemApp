import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Theme from '../../Theme/theme';
import distance_report_map_styles from '../../Styles/ReportsNav/DistanceTimeReport/DistanceReportMap.module';
import daily_report_map_styles from '../../Styles/ReportsNav/DailyReport/DailyReportMap.module';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';

const DistanceReportMap = () => {

  const rows = [
   
       {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },

      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },

      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },

      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },

      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },

      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },

      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },
      {
        vehicle_no : 'HR 32 BBBB 2345',
        distance_travelled : '350 KM',
        date:'31 Dec',
        odometer_start:"70512 ",
        odometer_end : "70653"
      },




    
  ]
 

  return (
    <View style={history_map_styles.history_map_main_box}>
   
          <View style={[history_map_styles.history_row_main_box,
           daily_report_map_styles.daily_report_header_box
            ]}>
               
              <View style={distance_report_map_styles.distance_vehicle_box}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Vehicle No.
                </Text>
              </View>
              <View style={distance_report_map_styles.distance_distance_travelled_box}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Distance Travelled
                </Text>

              </View>
              <View style={[distance_report_map_styles.distance_date_box]}>
              <Text style={history_map_styles.history_map_header_child_text}>
               Date
                </Text>
                </View>

                <View style={distance_report_map_styles.distance_report_odometer_box}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Odometer Start / End
                </Text>
                </View>
            
          </View>
{/* 
          <View style={parking_alert_styles.vehicle_report_hr_line_box}></View> */}

          <ScrollView style={distance_report_map_styles.distance_row_main_box}>
          {rows.map((item, index) => (
               <View key={index} style={distance_report_map_styles.distance_row_box}>
                  
                 <View style={distance_report_map_styles.distance_vehicle_box}>
                   <Text style={history_map_styles.history_row_ticket_id_text}>
                  {item.vehicle_no}
                   </Text>
                 </View>
                 <View style={distance_report_map_styles.distance_distance_travelled_box}>
                   <Text style={[history_map_styles.history_row_ticket_reason_text,{color: Theme.green}]}>
                   {item.distance_travelled}
                   </Text>
   
                 </View>


                 <View style={distance_report_map_styles.distance_date_box}>
                   <Text style={[history_map_styles.history_row_time_date_text,  ]}>
                   {item.date}
                   </Text>
                   </View>

                 <View style={[ distance_report_map_styles.distance_report_odometer_box]}>
                 <Text style={history_map_styles.history_row_time_date_text}>
                 {item.odometer_start}
                   </Text>
                   <Text style={history_map_styles.history_row_time_date_text}> / </Text>
                   <Text style={history_map_styles.history_row_time_date_text}>{item.odometer_end}</Text>
                   
                   </View>
   
                   
             </View>
   
              ))}
              </ScrollView>
      
      </View>
 
  )
}




export default DistanceReportMap;
