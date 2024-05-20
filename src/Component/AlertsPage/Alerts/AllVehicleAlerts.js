import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import main_alerts_styles from '../../../Styles/AlertsPage/AllVehicleAlerts.module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../Theme/theme';
import { fetchNotifications } from '../../../HelperFunction/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alerts_styles from '../../../Styles/AlertsPage/Alerts.module';

const AllVehicleAlerts = ({ navigation, route }) => {
  const [notifications, setNotifications] = useState([])

  const fetchNotificationsData = async () => {
    try {
      // Retrieve userId from the AsyncStorage
      const userId = await AsyncStorage.getItem('user_id')
      if (userId) {
        const data = await fetchNotifications(JSON.parse(userId))
        setNotifications(data)
        // console.log('Notifications:', data); // console the data
      } else {
        console.log('no user id')
      }
    } catch (error) {
      console.error('Error retrieving user ID from AsyncStorage:', error);
    }
  }

  useEffect(() => {
    fetchNotificationsData()
  }, [])

  useEffect(() => {
    console.log(notifications?.data)
  }, [notifications])

  return (
    <View style={main_alerts_styles.main_box}>
      <View style={main_alerts_styles.header_box}>
        <TouchableOpacity
          onPress={
            () => navigation.navigate('MainPage')
          }
        >
          <MaterialIcons name="arrow-back" size={30} color={Theme.blue.primary} />
        </TouchableOpacity>
        <Text style={main_alerts_styles.notifaction_text}>Notifications</Text>
      </View>

      <ScrollView style={main_alerts_styles.scroll_view}>
        {notifications?.data &&
          notifications?.data.map((item, index) => (
            <View key={index} style={main_alerts_styles.card}>
              <View style={main_alerts_styles.flex_box}>
                <Text style={main_alerts_styles.vehicle_number_text}>
                  {item.vehicle_number}
                </Text>
                <View>
                  {item.ignition !== undefined && <Text style={[main_alerts_styles.ignition_text, { color: item.ignition === true ? Theme.green : Theme.red }]}>Ignition {item.ignition === true ? 'On' : 'Off'}</Text>}
                  {item.overspeed !== undefined && <Text style={[alerts_styles.text, { color: item.overspeed === true ? Theme.red : '' }]}>{item.overspeed === true ? "Overspeed" : ""}</Text>}
                  {item.geofence_entry !== undefined && <Text style={[alerts_styles.text, { color: item.geofence_entry === true ? Theme.green : Theme.red }]}>{item.geofence_entry === true ? "Geofence Entry" : ''}</Text>}
                  {item.geofence_exit !== undefined && <Text style={[alerts_styles.text, { color: item.geofence_exit === true ? Theme.green : Theme.red }]}>{item.geofence_exit === true ? "Geofence Exit" : ""}</Text>}
                  {item.sharp_turn !== undefined && <Text style={[alerts_styles.text, { color: item.sharp_turn === true ? Theme.green : Theme.red }]}>Sharp Turn {item.sharp_turn === true ? "On" : "Off"}</Text>}
                  {item.harsh_breaking !== undefined && <Text style={[alerts_styles.text, { color: item.harsh_breaking === true ? Theme.green : Theme.green }]}>Harsh Breaking {item.harsh_breaking === true ? "On" : "Off"}</Text>}
                  {item.relay !== undefined && <Text style={[alerts_styles.text, { color: item.color === true ? Theme.green : Theme.red }]} >Relay {item.relay === true ? "On" : "Off"}</Text>}
                  {item.actual_speed !== undefined && (
                    <Text style={[alerts_styles.text, { color: item.actual_speed > item.speed_limit ? Theme.red : '' }]}>
                      {item.actual_speed > item.speed_limit ? "Overspeed\n" : ""}
                      Speed: {item.actual_speed}KM/h{'\n'}
                      Limit: {item.speed_limit}KM/h
                    </Text>
                  )}
                </View>
              </View>
              <Text style={main_alerts_styles.time_text}>
                Time:{' '}
                {new Date(item.updatedAt).toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                })}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  )
}

export default AllVehicleAlerts
