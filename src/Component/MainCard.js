import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MainCard_style from '../Styles/MainCard.module';
import { formatTimestamp } from '../HelperFunction/TimeAndDateParser'
import card_styles from '../Styles/card.module';
import Theme from '../Theme/theme';
import LocationSvg from '../../assets/gis_location-poi.svg';
import SpeedMeterSvg from '../../assets/speed_meter_filled.svg';
import SvgCar from '../../assets/Car_yellow.svg';
import HistoryIcon from '../../assets/history_icon.svg';
import SvgAlertIcon from '../../assets/alert_icon.svg';
import SvgReport from '../../assets/report-box-outline.svg';
import SvgShareIcon from '../../assets/shareIcon.svg';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ignition from '../../assets/ignition.svg'
import Ignition_1 from '../../assets/ignition_1.svg'
import Ignition_0 from '../../assets/ignition_0.svg'
// import Live from '../../assets/device-details.svg';

const MainCard = ({ responseData, lcData }) => {

  const navigation = useNavigation(),
    [vehiclesData, setVehiclesData] = useState([]),
    [locationData, setLocationData] = useState(null),
    [noinfo, setNoinfo] = useState(false),
    [iconName, setIconName] = useState(''),
    [dateAndTime, setDateAndTime] = useState(null)
  // console.log("locationData ignitionValue", ignitionValue);

  useEffect(() => {
    // console.log("receiving lcData");
    if (lcData) {
      setLocationData(lcData)
      // console.log("lcData : ", locationData?.itinerary);
    }
  }, [lcData])

  useEffect(() => {
    // console.log("getting location data from card list");
    if (locationData?.location?.timestamp) {
      setDateAndTime(formatTimestamp(locationData?.location?.timestamp))
      // console.log(dateAndTime);
      if (!dateAndTime?.formattedTime && dateAndTime?.formattedDate) {
        setNoinfo(true)
      } else {
        setNoinfo(false)
      }
    }
  }, [locationData])

  useEffect(() => {
    if (responseData) {
      const firstVehicle = responseData,
        extractedData = {
          device_id: firstVehicle.device_id, // Get the first device_id from the array
          vehicleNumber: firstVehicle.reg_no,
          type: firstVehicle.type,
          odometer: firstVehicle.odometer,
        }
      setVehiclesData(extractedData)
      let iconName
      if (extractedData.type === 'Car') {
        iconName = 'car-side'
      } else if (extractedData.type === 'Bike') {
        iconName = 'motorcycle'
      } else {
        iconName = 'truck'
      }
      setIconName(iconName)
    }
  }, [responseData]);

  const cardPress = () => {
    global.updateCardList = false
    if (locationData?.location) {
      navigation.navigate('MapScreen', {
        vehiclesData,
      })
    }
  }

  const gsmValue = locationData?.heartbeat?.gsm,
    voltageValue = locationData?.heartbeat?.voltage,
    gpsValue = locationData?.heartbeat?.gps,
    ignitionValue = locationData?.heartbeat?.ignition,
    satellite = locationData?.location?.gps_satellite,
    chargingValue = locationData?.heartbeat?.charging,
    imeiValue = locationData?.heartbeat?.imei

  let runningText = 'No info',
    statusText = 'Since',
    velocity = 0,
    gradientColor = [
      Theme.blue.gradient.expire.start,
      Theme.blue.gradient.expire.end,
    ]

  if (locationData?.location?.speed != null && !noinfo) {
    velocity = locationData?.location?.speed
    if (velocity > 0) {
      runningText = 'Running'
      gradientColor = [
        Theme.blue.gradient.running.start,
        Theme.blue.gradient.running.end,
      ]
    } else {
      runningText = 'Stopped'
      gradientColor = [
        Theme.blue.gradient.stopped.start,
        Theme.blue.gradient.stopped.end,
      ]
    }
  }

  return (
    <TouchableNativeFeedback onPress={cardPress}>
      <View style={MainCard_style.main_box}>
        <View style={MainCard_style.card_fist_child}>
          <View style={[MainCard_style.flex_box, { justifyContent: 'space-between', }]}>
            {/* left */}
            <View style={MainCard_style.flex_box_child}>
              <View style={{ borderWidth: 0, padding: 0 }}>
                <SvgCar width="65" height="65" style={{}} />
                <View style={MainCard_style.status_info_box}>
                  {/* <View style={{borderWidth:1, width:'%'}}> 
              <SpeedMeterSvg height={10} width={10} fill={Theme.blue.primary} /> 
              <Text style={MainCard_style.last_status_text}>Status</Text> */}
                  <LinearGradient
                    colors={gradientColor}
                    style={MainCard_style.linear_gradient_box}
                  >
                    <Text
                      numberOfLines={2}
                      style={MainCard_style.vehicle_status_text}
                    >
                      {runningText}
                    </Text>
                  </LinearGradient>
                  {/* </View> */}
                </View>
              </View>
              {/* chlid left box */}
              <View style={MainCard_style.child_left_flex_box}>
                {/* <Text style={MainCard_style.number_plate_text}>
                  {vehiclesData.vehicleNumber}
                </Text> */}
                <View
                  style={[
                    card_styles.numberPlate,
                    iconName !== 'truck' && card_styles.personal,
                  ]}
                >
                  <View style={card_styles.indIcon}>
                    <Icon
                      name="dharmachakra"
                      size={10}
                      style={[card_styles.icon, card_styles.wheel]}
                    />
                    <Text
                      style={[
                        card_styles.indText,
                        iconName !== 'truck' && card_styles.indText2,
                      ]}
                    >
                      IND
                    </Text>
                  </View>
                  <Text style={card_styles.numberPlateText}>
                    {vehiclesData.vehicleNumber}
                  </Text>
                </View>

                <View style={[MainCard_style.flex_box, { alignItems: 'center' }]}>
                  <Text style={MainCard_style.distance_text}>
                    Today Distance:{' '}
                  </Text>
                  <Text style={MainCard_style.distance_value_text}>
                    {locationData?.itinerary?.distanceCovered ?? '0 Km'}
                  </Text>
                </View>
                <View style={MainCard_style.flex_box}>
                  <Text style={MainCard_style.update_text}>
                    Last Updated :
                  </Text>
                  <Text style={MainCard_style.update_text}>
                    {dateAndTime?.formattedDate} {dateAndTime?.formattedTime}
                  </Text>
                </View>
              </View>
            </View>

            {/* right  */}
            <View style={MainCard_style.right_box}>
              <Text style={MainCard_style.ignition_text}>Ignition</Text>
              <View style={MainCard_style.flex_box_right_box}>
                {/* <View style={MainCard_style.on_box}></View> */}
                <View style={card_styles.iconFrame}>
                  {ignitionValue === true && <Ignition_1 width="12" height="12" />}
                  {ignitionValue === false && <Ignition_0 width="12" height="12" />}
                  {ignitionValue === undefined && <Ignition width="12" height="12" />}
                </View>
                <Text style={MainCard_style.ignition_on_text}>{ignitionValue ? "On" : "Off"}</Text>
              </View>
            </View>
          </View>

          <View style={MainCard_style.flex_box}>
            <LocationSvg
              height={24}
              width={24}
              fill={Theme.blue.primary}
              style={{ marginTop: 5, marginBottom: 5 }}
            />
            <View style={MainCard_style.info_box}>
              <Text numberOfLines={2} style={MainCard_style.info_text}>
                {locationData?.location?.address ?? "No Data Available"}
              </Text>
            </View>
          </View>

          {/* last flex box */}
          <View style={MainCard_style.last_flex_box}>

            <View style={MainCard_style.last_flex_speed_box}>
              <View style={MainCard_style.last_flex_box}>
                <SpeedMeterSvg height={15} width={15} fill={Theme.blue.primary} />
                <Text style={MainCard_style.status_text}>Speed</Text>
              </View>
              <Text style={MainCard_style.status_info_text}>{velocity ?? 0} Km/h</Text>
            </View>

            <View style={MainCard_style.last_flex_box_child}>
              <Text style={MainCard_style.running_status_text}>
                Running Time
              </Text>
              <Text style={MainCard_style.status_info_text}>{locationData?.itinerary?.driveTime}</Text>
            </View>

            <View style={MainCard_style.last_flex_box_child}>
              <Text style={MainCard_style.stopped_status_text}>
                Stopped Time
              </Text>
              <Text style={MainCard_style.status_info_text}>{locationData?.itinerary?.stoppageTime}</Text>
            </View>

          </View>
        </View>

        <View style={card_styles.share_box}>
          
          {/* <TouchableOpacity
          onPress={() => console.log('Pressed:')}
          style={card_styles.bottom_icon_box}
        >
          <Live width={20} height={20} fill={Theme.blue.primary} />
          <Location width={20} height={20} fill={Theme.blue.primary} />

          <Text style={card_styles.bottom_icon_text}>Live</Text>
        </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                navigation.navigate('History', {
                  vehiclesData,
                })
              }
            }
            }
            style={card_styles.bottom_icon_box}
          >
            <HistoryIcon width={20} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                navigation.navigate('Alerts', {
                  vehiclesData,
                })
              }
            }
            }
            style={card_styles.bottom_icon_box}
          >
            <SvgAlertIcon width={20} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Alerts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                navigation.navigate('Reports', {
                  vehiclesData,
                })
              }
            }
            }
            style={card_styles.bottom_icon_box}
          >
            <SvgReport width={25} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                navigation.navigate('ShareLocation', {
                  vehiclesData,
                })
              }
            }
            }
            style={card_styles.bottom_icon_box}
          >
            <SvgShareIcon width={20} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default MainCard;
