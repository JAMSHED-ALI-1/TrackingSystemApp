import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import VehicleSelector from '../../VehicleSelector';
import alerts_styles from '../../../Styles/AlertsPage/Alerts.module'
import Theme from '../../../Theme/theme';
import ParkingHeader from './ParkingHeader';
import RadioBtn from '../../HistoryPage/VehicleRadio';
import IgnitionGeoHeader from './IgnitionGeoHeader';
import parking_alert_styles from '../../../Styles/AlertsPage/ParkingAlert.module';
import AlertGeofenceHeader from './AlertGeofenceHeader';

const GeofenceAlert = () => {
  const headers = [
    'S No.',
    'Status',
    'Vehicle Location',
    'Time &  Date ',
    'User & Location',
  ]
  const rows = [
    {
      // 'S No.': '1',
      id: 1,
      Status: 'on',
      locaton: 'View on map',
      time: '10:30 AM',
      date: '2024-01-08',
      user: 'Admin',
    },
    {
      // 'S No.': '2',
      id: 2,
      Status: 'off',
      locaton: 'view on map',
      time: '11:45 AM',
      date: '2024-01-08',
      user: 'Ram',
    },
    
  ]

  return (
    <ScrollView style={parking_alert_styles.scrollContainer}>
      <View style={parking_alert_styles.vehicle_report_main_box}>
      <AlertGeofenceHeader/>

        <View style={parking_alert_styles.parking_vehicle_select}>
          <VehicleSelector />
        </View>
        <View style={parking_alert_styles.alert_radio_btn}>
          <RadioBtn/>
        </View>

        <Text style={alerts_styles.alert_noti_history}>
          Alert / Notification History
        </Text>
        <View style={parking_alert_styles.vehicle_report_hr_line_box}></View>

        <View style={parking_alert_styles.tableContainer}>
   
          <View style={parking_alert_styles.table_row}>
            {headers.map((header, index) => (
              <Text key={index} style={parking_alert_styles.table_cell}>
                {header}
              </Text>
            ))}
          </View>

          <View style={parking_alert_styles.vehicle_report_hr_line_box}></View>

          {rows.map((item, index) => (
            <View key={index} style={parking_alert_styles.table_row}>
              <View style={parking_alert_styles.row_item}>
                <Text style={parking_alert_styles.table_cell_value}>
                  {item.id}
                </Text>
              </View>
              <View style={parking_alert_styles.row_item}>
                <Text
                  style={[
                    parking_alert_styles.table_cell_value,
                    { color: item.Status === 'on' ? '#0A8F47' : Theme.red },
                  ]}
                >
                  {item.Status}
                </Text>
              </View>
              <View style={parking_alert_styles.row_item}>
                <Text style={parking_alert_styles.parking_map_view_text}>
                  View on map
                </Text>
              </View>
              <View style={parking_alert_styles.row_item}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={parking_alert_styles.table_cell_value}>
                    {item.date}
                  </Text>
                  <Text style={parking_alert_styles.table_cell_value}>
                    {item.time}
                  </Text>
                </View>
              </View>
              <View style={parking_alert_styles.row_item}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={parking_alert_styles.table_cell_value}>
                    {item.user}
                  </Text>
                  <Text style={parking_alert_styles.parking_map_view_text}>
                    view on map
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}


export default GeofenceAlert;
