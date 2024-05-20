import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import reminder_styles from '../../../Styles/Dashboard/Reminder.module';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../../Theme/theme';
import all_vehicle_styles from '../../../Styles/Dashboard/DashboardInfo/DashboardAllVehicle.module';

const DashboardAllVehicle = ({ runningStat }) => {
  const reminder_data = [
    {
      gradientColors: [
        Theme.blue.gradient.all.start,
        Theme.blue.gradient.all.end,
      ],
      name: Theme.vehiclefilter.all,
      total: runningStat?.totalCount ?? "--",
      borderColor: Theme.blue.gradient.all.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.running.start,
        Theme.blue.gradient.running.end,
      ],
      name: Theme.vehiclefilter.running,
      total: runningStat?.running?.count ?? "--",
      borderColor: Theme.blue.gradient.running.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.stopped.start,
        Theme.blue.gradient.stopped.end,
      ],
      name: Theme.vehiclefilter.stopped,
      total: runningStat?.stopped?.count ?? "--",
      borderColor: Theme.blue.gradient.stopped.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.nodata.start,
        Theme.blue.gradient.nodata.end,
      ],
      name: Theme.vehiclefilter.nodata,
      total: runningStat?.noInfo?.count ?? "--",
      borderColor: Theme.blue.gradient.nodata.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.idle.start,
        Theme.blue.gradient.idle.end,
      ],
      name: Theme.vehiclefilter.idle,
      total: runningStat?.idle?.count ?? "--",
      borderColor: Theme.blue.gradient.idle.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.expire.start,
        Theme.blue.gradient.expire.end,
      ],
      name: Theme.vehiclefilter.expire,
      total: runningStat?.expiry?.count ?? "--",
      borderColor: Theme.blue.gradient.expire.start,
    }
  ]

  return (
    <ScrollView horizontal>
      {reminder_data?.map((item, index) => (
        <View style={all_vehicle_styles.all_vehicle_main_box} key={index}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={item.gradientColors}
            // locations={[-.1, -1]}
            style={all_vehicle_styles.linear_gradient_box}
          >
            <View style={all_vehicle_styles.total_box}>
              <Text style={all_vehicle_styles.total_text}> {item.total} </Text>
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

export default DashboardAllVehicle;
