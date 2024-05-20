import { View, Text } from 'react-native';
import React from 'react';
import Theme from '../../Theme/theme';
import all_vehicle_styles from '../../Styles/Dashboard/DashboardInfo/DashboardAllVehicle.module';
import { LinearGradient } from 'expo-linear-gradient';
import reminder_styles from '../../Styles/Dashboard/Reminder.module';
import { ScrollView } from 'react-native-gesture-handler';
import alert_notification_styles from '../../Styles/Dashboard/AlertNotifaction.module';

const AlertNotifaction = () => {
    const reminder_data =[
        {
          
          name: 'Parking',
          total: "99",
          borderColor: Theme.blue.gradient.all.start,
        },
        {
          
          name: 'Relay On/Off',
          total: "50",
          borderColor: Theme.blue.gradient.running.start,
        },
        {
          
          name: 'Geofence',
          total: "32",
          borderColor: Theme.blue.gradient.stopped.start,
        },
        {
         
          name: 'Ignition',
          total: "68",
          borderColor: Theme.blue.gradient.idle.start, 
        },
        {
        
          name: 'Over speed',
          total: "45",
          borderColor: Theme.blue.gradient.park.start,
        },
        {
         
          name: 'Harsh Breaking',
          total: "32",
          borderColor: Theme.blue.gradient.nodata.start,  
        },
        {
          
          name: 'Sharp Turn',
          total: "11",
          borderColor: Theme.blue.gradient.expire.start,
        },
        {
            
            name: 'POI Entry/Exit',
            total: "19",
            borderColor: Theme.blue.gradient.nodata.start,  
          },

          {
           
            name: 'Device Inactive',
            total: "39",
            borderColor: Theme.blue.gradient.expire.start,
          },

          
         
      ]

  return (
    <ScrollView horizontal>
    {reminder_data?.map((item,index)=>(
          <View style={all_vehicle_styles.all_vehicle_main_box} key={index}>
          <LinearGradient 
            start={{ x: 0, y:0}}
            end={{ x: 1, y: 1 }}
            colors={[Theme.blue.gradient.service.start, Theme.blue.gradient.service.end]}
            // locations={[-.1, -1]}
            style={all_vehicle_styles.linear_gradient_box}
          >
           <View style={all_vehicle_styles.total_box}>
           <Text style={alert_notification_styles.alert_total_text}>{item.total}</Text>
           </View>
            <View style={reminder_styles.over_soon_box}>

            <Text style={reminder_styles.over_soon_box_text}>{item.name}</Text>

            </View>

          </LinearGradient>
          </View>
    ))}
    </ScrollView>
  );
};

export default AlertNotifaction;