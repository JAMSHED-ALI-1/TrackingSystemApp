import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/native'
import alerts_styles from '../../../Styles/AlertsPage/Alerts.module'
import Theme from '../../../Theme/theme'
import DateRangeSelector from '../../DateSelector'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Parking from '../../../../assets/parking_filled.svg'
import EngineSetting from '../../../../assets/engine_settings.svg'
import Ignition from '../../../../assets/ignition.svg'
import SpeedMeter from '../../../../assets/speedometer.svg'
import CarCrash from '../../../../assets/car-crash.svg'
import GeofenceEnterExitSvg from '../../../../assets/geofence_filled_enter.svg'
import single_report_styels from '../../../Styles/ReportPage/Review.module'
const windowWidth = Dimensions.get('window').width
import { useNavigation } from '@react-navigation/native'
// import { ScrollView } from 'react-native-gesture-handler'
// import { LinearGradient } from 'expo-linear-gradient'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import RadioBtn from '../../HistoryPage/VehicleRadio'
// import Location from '../../../../assets/gis_location-poi.svg'
// import Engine from '../../../../assets/engie_relay.svg'
// import OverSpeed from '../../../../assets/over_speed.svg'
// import HarshBreaking from '../../../../assets/harsh_breaking'
// import SharpTurn from '../../../../assets/sharp_turn.svg'
// import PoiSvg from '../../../../assets/poi_enter_filled.svg'
// import GeofenceSvg from '../../../../assets/geofence_filled_on_off.svg'
// import TurnRightSvg from '../../../../assets/turn-right.svg'
// import DateTimeSelector from '../../DateTimeSelector'
import {
  fetchItineraryData,
  getRelayReport,
  fetctAlertsReport,
  fetchAlerts,
} from '../../../HelperFunction/api'

const Alerts = ({ imei, vehiclesData }) => {
  const [alerts, setAlerts] = useState([])
  const navigation = useNavigation()

  const fetchNotificationsData = async () => {
    try {
      // Retrieve userId from the AsyncStorage
      // const userId = await AsyncStorage.getItem('user_id')

      if (imei) {
        const data = await fetchAlerts(imei)
        setAlerts(data)
        // console.log('Notifications:', data); // console the data
      } else {
        console.log('no user id')
      }
    } catch (error) {
      console.error('Error retrieving user ID from AsyncStorage:', error)
    }
  }

  useEffect(() => {
    fetchNotificationsData()
  })

  useEffect(() => {
    console.log('alerts.js ==>', alerts?.data)
  }, [])

  return (
    <View style={alerts_styles.scrollContainer}>
      <View style={alerts_styles.vehicle_report_main_box}>
        {/* <AlertHeader /> */}
        <View style={alerts_styles.heading_box}>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('MainPage')
            }
          >
            <MaterialIcons name="arrow-back" size={28} color={Theme.blue.primary} />
          </TouchableOpacity>
          <Text style={alerts_styles.heading_text}>Vehicle Alerts</Text>
          <Text style={alerts_styles.vehicle_num_text}>
            {vehiclesData?.vehicleNumber ?? '--'}
          </Text>
        </View>
        <ScrollView style={alerts_styles.scroll_box}>
          {alerts?.data && alerts?.data.length > 0 ? (
            alerts.data.map((item, index) => (
              <View key={index} style={alerts_styles.card}>
                <View style={alerts_styles.flex_box}>
                  <Text style={alerts_styles.vh_num_text}>{item.vehicle_number}</Text>
                  <View>
                  {item.ignition !== undefined && <Text style={[alerts_styles.text, {color: item.ignition === true ? Theme.green : Theme.red}]}>Ignition {item.ignition === true ? "On" : "Off"}</Text>}
                  {item.overspeed !== undefined && <Text style={[alerts_styles.text,{color: item.overspeed === true ? Theme.red : '' }]}>{item.overspeed === true ? "Overspeed": ""}</Text>}
                  {item.geofence_entry !== undefined && <Text style={[alerts_styles.text, {color: item.geofence_entry === true ? Theme.green : Theme.red}]}>{item.geofence_entry === true ? "Geofence Entry" : '' }</Text>}
                  {item.geofence_exit !== undefined && <Text style={[alerts_styles.text,{color: item.geofence_exit === true ? Theme.green : Theme.red}] }>{item.geofence_exit === true ? "Geofence Exit" : ""}</Text>}
                  {item.sharp_turn !== undefined && <Text style={[alerts_styles.text, {color: item.sharp_turn === true ? Theme.green : Theme.red}]}>Sharp Turn {item.sharp_turn === true ? "On": "Off"}</Text>}
                  {item.harsh_breaking !== undefined && <Text style={[alerts_styles.text, {color: item.harsh_breaking === true ? Theme.green : Theme.green}]}>Harsh Breaking {item.harsh_breaking === true ? "On" :"Off"}</Text>}
                  {item.relay !== undefined && <Text style={[alerts_styles.text,{color: item.color === true ? Theme.green : Theme.red}]} >Relay {item.relay === true ? "On" : "Off"}</Text>}
                </View>
                </View>
               <View style={alerts_styles.flex_box}>
               {item.actual_speed  !== undefined && (<Text style={alerts_styles.speed}>Actual Speed: {item.actual_speed}</Text> )}
                  {item.speed_limit !== undefined && <Text style={alerts_styles.speed}>Speed Limit: {item.speed_limit}</Text>}
               </View>
                <Text style={alerts_styles.time}>Time {' '}
                {new Date(item.updatedAt).toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                })} </Text>
              </View>
            ))
          ) : (
           <View style={alerts_styles.no_data}>
             <Text style={alerts_styles.no_data_text}>No data found !!</Text>
           </View>
          )}
        </ScrollView>
      </View>
    </View>
  )
}

export default Alerts
