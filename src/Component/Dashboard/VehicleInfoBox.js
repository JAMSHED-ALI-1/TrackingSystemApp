import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import reminder_styles from '../../Styles/Dashboard/Reminder.module';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../Theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import vehicle_info_styles from '../../Styles/Dashboard/VehicleInfoBox.module';

const VehicleInfoBox = () => {
  const reminder_data = [
    {
      gradientColors: [
        Theme.blue.gradient.fuel_expense.start,
        Theme.blue.gradient.fuel_expense.end,
      ],
      name: 'Fuel Expense',
      over_due_value: '₹ 14000',
      
    },
    {
      gradientColors: [
        Theme.blue.gradient.vehicle_renewal.start,
        Theme.blue.gradient.vehicle_renewal.end,
      ],
      name: 'Distance Travelled',
      over_due_value: '15',
    },
    {
      gradientColors: [
        Theme.blue.gradient.documents_expiry.start,
        Theme.blue.gradient.documents_expiry.end,
      ],
      name: 'Total Trips ',
      sec_name:'(Auto Generated)',
      over_due_value: '10',
    },
    {
        gradientColors: [
          Theme.blue.gradient.idle.start,
          Theme.blue.gradient.idle.end,
        ],
        name: 'Fuel Consumption',
        over_due_value: '07',
        
      },
    
  ]
  return (
    <ScrollView horizontal>
      {reminder_data?.map((item, index) => (
        <TouchableOpacity style={vehicle_info_styles.vehicle_info_main_box} key={index}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={item.gradientColors}
            // locations={[-.1, -1]}
            style={vehicle_info_styles.vehicle_info_main_box_child}
          >
            <Text style={vehicle_info_styles.name_text}>{item.name}</Text>
            <Text style={vehicle_info_styles.sec_name_text}>{item.sec_name}</Text>

            <View style={reminder_styles.over_soon_box}>
              {/* <View style={reminder_styles.over_soon_box_child}> */}
                <Text style={vehicle_info_styles.value_text}>
                  {' '}
                  {item.over_due_value}
                </Text>
                {/* <Text style={reminder_styles.over_soon_box_text}>
                  {item.over_due}
                </Text> */}
              {/* </View> */}

              {/* <View style={reminder_styles.over_soon_box_child}>
                <Text style={reminder_styles.over_soon_box_velue_text}>
                  {' '}
                  {item.due_soon_value}
                </Text>
                <Text style={reminder_styles.over_soon_box_text}>
                  {' '}
                  {item.due_soon}
                </Text>
              </View> */}
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}



export default VehicleInfoBox;