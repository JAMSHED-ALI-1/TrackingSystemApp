import React from 'react';
import { View, Text,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import history_map_styles from '../../Styles/SideDrowerPages/HistoryMap.module.';
import Theme from '../../Theme/theme';
import engine_styles from '../../Styles/ReportsNav/EngineReport/EngineReportMap.module';
// import engine_styles from '../../Styles/ReportsNav/IgnitionReport/ignitionMap.module';


const EngineReportMap = () => {

  const rows = [
    {
       id: 1,
      vehicle_no : 'HR 32 BBB 2345',
      date:'31/12/2023 ',
      time: '03:45 PM',
      status:'Off',
      user_type:"Admin"
    },

    {
        id: 2,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Off',
       user_type:"Admin"
     },
     {
        id: 3,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'On',
       user_type:"Admin"
     },
     {
        id: 4,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'On',
       user_type:"Admin"
     },
     {
        id: 5,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Off',
       user_type:"Admin"
     },
     {
        id: 6,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'On',
       user_type:"Admin"
     },

     {
        id: 7,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'Off',
       user_type:"Admin"
     },
     {
        id: 8,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'On',
       user_type:"Admin"
     },
     {
        id: 9,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'On',
       user_type:"Admin"
     },
     {
        id: 10,
       vehicle_no : 'HR 32 BBB 2345',
       date:'31/12/2023 ',
       time: '03:45 PM',
       status:'On',
       user_type:"Admin"
     },
    
 
    
  ]
  
  return (
    <View style={history_map_styles.history_map_main_box} >
   
          <View style={engine_styles.ignition_map_header}>
                <View style={[engine_styles.ignition_sr_box]}>
                <Text style={engine_styles.status_header_text}>
                S No.
                </Text>
              </View>
             
              <View style={[ engine_styles.ignition_ticket_status_box]}>
                <Text style={engine_styles.status_header_text}>
                Status
                </Text>
              </View>

              <View style={engine_styles.ignition_location_box}>
                <Text style={engine_styles.status_header_text}>
                Vehicle Location
                </Text>
                </View>

              <View style={engine_styles.time_box}>
              <Text style={engine_styles.status_header_text}>
              Time & Date
                </Text>
                </View> 

                <View style={engine_styles.user_and_location_box}>
                <Text style={engine_styles.status_header_text}>
                User & Location
                </Text>
              </View>
            
          </View>

          <ScrollView style={[history_map_styles.history_map_row_box,engine_styles.ignition_rows_main_box]}>
          {rows.map((item, index) => (
               <View key={index} style={engine_styles.ignition_map_header}>
                   <View style={[ engine_styles.ignition_sr_box]}>
                   <Text style={engine_styles.ignition_rows_sr_text}>
                   {item.id}.
                   </Text>
                 </View>    
                
                   <View style={[engine_styles.ignition_ticket_status_box]}>
                   <Text style={[history_map_styles.history_row_ticket_status_text, { color: item.status === 'On' ? Theme.lightGreen : Theme.red }]}>
                   {item.status}
                   </Text>
                   </View>

                   <View style={engine_styles.ignition_location_box}>
                   <Text style={engine_styles.row_location_text}>
                   View on map
                   </Text>
   
                 </View>

                   <View style={engine_styles.time_box}>
                 <Text style={history_map_styles.history_row_time_date_text}>
                 {item.date}
                   </Text>
                    <Text style={history_map_styles.history_row_time_date_text}>
                 {item.time}
                   </Text>
                   </View>
   
                   <View style={engine_styles.user_and_location_box}>
                   <Text style={engine_styles.user_and_location_box.history_row_time_date_text}>
                  {item.user_type}
                   </Text>
                   <Text style={engine_styles.row_location_text}>
                  View on map
                   </Text>
                 </View>
             </View>
   
              ))}
              </ScrollView>
      
      </View>
 
  )
}




export default EngineReportMap;
