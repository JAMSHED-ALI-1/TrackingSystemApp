import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import reminder_styles from '../../Styles/Dashboard/Reminder.module';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../Theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Reminder = () => {
  const reminder_data = [
    {
      gradientColors: [
        Theme.blue.gradient.service.start,
        Theme.blue.gradient.service.end,
      ],
      name: Theme.reminder.service_reminder,
      over_due_value: '10',
      over_due: 'Over due',
      due_soon_value: '07',
      due_soon: 'Due Soon',
    },
    {
      gradientColors: [
        Theme.blue.gradient.vehicle_renewal.start,
        Theme.blue.gradient.vehicle_renewal.end,
      ],
      name: Theme.reminder.vehicle_renewal_reminder,
      over_due_value: '10',
      over_due: 'Over due',
      due_soon_value: '07',
      due_soon: 'Due Soon',
    },
    {
      gradientColors: [
        Theme.blue.gradient.documents_expiry.start,
        Theme.blue.gradient.documents_expiry.end,
      ],
      name: Theme.reminder.documents_expiry_reminder,
      over_due_value: '10',
      over_due: 'Over due',
      due_soon_value: '07',
      due_soon: 'Due Soon',
    },
  ]
  return (
    <ScrollView horizontal>
      {reminder_data?.map((item, index) => (
        <TouchableOpacity style={reminder_styles.reminder_main_box} key={index}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={item.gradientColors}
            // locations={[-.1, -1]}
            style={reminder_styles.reminder_main_box_child1}
          >
            <Text style={reminder_styles.name_text}>{item.name} </Text>

            <View style={reminder_styles.over_soon_box}>
              <View style={reminder_styles.over_soon_box_child}>
                <Text style={reminder_styles.over_soon_box_velue_text}>
                  {' '}
                  {item.over_due_value}
                </Text>
                <Text style={reminder_styles.over_soon_box_text}>
                  {item.over_due}
                </Text>
              </View>

              <View style={reminder_styles.over_soon_box_child}>
                <Text style={reminder_styles.over_soon_box_velue_text}>
                  {' '}
                  {item.due_soon_value}
                </Text>
                <Text style={reminder_styles.over_soon_box_text}>
                  {' '}
                  {item.due_soon}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Reminder;
