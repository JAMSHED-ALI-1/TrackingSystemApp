import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import Theme from '../../Theme/theme';
// import geofenc_styles from '../../Styles/ReportsNav/IgnitionReport/ignitionMap.module';
import geofenc_styles from '../../Styles/ReportsNav/GeofenceReport/GeofenceMap.module';


const GeofenceEntryexitMap = () => {

  const rows = [
    {
       id: 1,
      vehicle_no : 'HR 32 BBB 2345',
      date:'31/12/2023 ',
      time: '03:45 PM',
      status:'Entry',
      geofence_name:"Geofence 1"
    },

    {
        id: 2,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Entry',
       geofence_name:"Geofence 2"
     },
     {
        id: 3,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Exit',
       geofence_name:"Geofence 3"
     },
     {
        id: 4,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Exit',
       geofence_name:"Geofence 1"
     },
     {
        id: 5,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Entry',
       geofence_name:"Geofence 2"
     },
     {
        id: 6,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Exit',
       geofence_name:"Geofence 3"
     },

     {
        id: 7,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Entry',
       geofence_name:"Geofence 1"
     },
     {
        id: 8,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Exit',
       geofence_name:"Geofence 2"
     },
     {
        id: 9,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Exit',
       geofence_name:"Geofence 3"
     },
     {
        id: 10,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Exit',
       geofence_name:"Geofence 1"
     },
    
 
    
  ]
  
  return (
    <View style={history_map_styles.history_map_main_box} >
   
          <View style={geofenc_styles.ignition_map_header}>
                {/* <View style={[geofenc_styles.ignition_rows_sr_box]}>
                <Text style={history_map_styles.history_map_header_child_text}>
                S No.
                </Text>
              </View> */}
               <View style={geofenc_styles.geofence_vehicle_no_box}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Vehicle No.
                </Text>
                </View>
             
              <View style={[ geofenc_styles.ignition_ticket_status_box]}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Status
                </Text>
              </View>

             

              <View style={geofenc_styles.geofence_vehicle_no_box}>
              <Text style={history_map_styles.history_map_header_child_text}>
              Time & Date
                </Text>
                </View> 

                <View style={history_map_styles.history_row_box}>
                <Text style={history_map_styles.history_map_header_child_text}>
                Geofence Name
                </Text>
              </View>
            
          </View>

          <ScrollView style={[history_map_styles.history_map_row_box,geofenc_styles.ignition_rows_main_box]}>
          {rows.map((item, index) => (
               <View key={index} style={geofenc_styles.ignition_map_header}>
                   {/* <View style={[ geofenc_styles.ignition_rows_sr_box]}>
                   <Text style={geofenc_styles.ignition_rows_sr_text}>
                   {item.id}.
                   </Text>
                 </View>     */}
                 <View style={geofenc_styles.geofence_vehicle_no_box}>
                   <Text style={history_map_styles.history_row_ticket_id_text}>
                   {item.vehicle_no}
                   </Text>
   
                 </View>
                
                   <View style={[geofenc_styles.ignition_ticket_status_box]}>
                   <Text style={[ geofenc_styles.status_text, { color: item.status === 'Entry' ? Theme.lightGreen : Theme.red }]}>
                   {item.status}
                   </Text>
                   </View>

                   

                   <View style={geofenc_styles.geofence_vehicle_no_box}>
                 <Text style={history_map_styles.history_row_time_date_text}>
                 {item.date}
                   </Text>
                    <Text style={history_map_styles.history_row_time_date_text}>
                 {item.time}
                   </Text>
                   </View>
   
                   <View style={history_map_styles.history_row_box}>
                   <Text style={history_map_styles.history_row_ticket_id_text}>
                  {item.geofence_name}
                   </Text>
                  
                 </View>
             </View>
   
              ))}
              </ScrollView>
      
      </View>
 
  )
}

// const geofence_styles = StyleSheet.create({


// });




export default GeofenceEntryexitMap;
