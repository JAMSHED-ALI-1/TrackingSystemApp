import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native'
import { fetchVehicleDriver } from '../../src/HelperFunction/api'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import card_styles from '../Styles/card.module'
import Theme from '../Theme/theme'
import { formatTimestamp } from '../HelperFunction/TimeAndDateParser'
import KmSvg from '../../assets/km.svg'
import Gps from '../../assets/gps.svg'
import Gps_1 from '../../assets/gps_1.svg'
import Battery from '../../assets/battery.svg'
import Battery_0 from '../../assets/battery_0.svg'
import Battery_1 from '../../assets/battery_1.svg'
import Battery_4 from '../../assets/battery_4.svg'
import Battery_6 from '../../assets/battery_6.svg'
import Charging from '../../assets/charging.svg'
import Charging_1 from '../../assets/charging_1.svg'
import Charging_0 from '../../assets/charging_0.svg'
import Ignition from '../../assets/ignition.svg'
import Ignition_1 from '../../assets/ignition_1.svg'
import Ignition_0 from '../../assets/ignition_0.svg'
import Location from '../../assets/gis_location-poi.svg'
import TimeFill from '../../assets/time-fill.svg'
import HistoryIcon from '../../assets/history_icon.svg'
import SvgReport from '../../assets/report-box-outline.svg'
import SvgAlertIcon from '../../assets/alert_icon.svg'
import SvgShareIcon from '../../assets/shareIcon.svg'
import SpeedMeterSvg from '../../assets/speed_meter_filled.svg'
import LiveLocation from './SwipeableCards/LiveLocation'
import Gps_0 from '../../assets/gps_0.svg'
// import Sim from '../../assets/sim.svg'
// import Sim_0 from '../../assets/sim_0.svg'
// import Sim_1 from '../../assets/sim_1.svg'
// import Sim_2 from '../../assets/sim_2.svg'
// import Sim_3 from '../../assets/sim_3.svg'
// import Sim_4 from '../../assets/sim_4.svg'
// import SvgCarN from '../../assets/Black_car.svg'
// import SvgCar from '../../assets/Car_yellow.svg'
// import SvgIndivdualReport from '../../assets/individual_report.svg'
// import Live from '../../assets/device-details.svg'
// import CarSvg from '../../assets/car_filled_svg.svg'
// import TruckSvg from '../../assets/truck_filled_svg.svg'

//  responseData is vehicle data
const OwnerCard = ({ responseData, lcData }) => {

  const [showShareView, setShowShareView] = useState(true)
  const navigation = useNavigation();
  const [vehiclesData, setVehiclesData] = useState([]),
    [locationData, setLocationData] = useState(null),
    [noinfo, setNoinfo] = useState(false),
    [iconName, setIconName] = useState(''),
    [dateAndTime, setDateAndTime] = useState(null)

  // console.log("locationData ignitionValue", ignitionValue);
  // useEffect(()=>{
  //   console.log('card.js=>', vehiclesData)
  // })

  // useEffect(() => {
  // console.log("vehiclesData : ", vehiclesData);
  // if (vehiclesData?.device_id) {
  //   fetchLocationFromApi(vehiclesData.device_id);

  //   const intervalId = setInterval(() => {
  //     fetchLocationFromApi(vehiclesData.device_id);
  //   }, 4000);
  //   return () => clearInterval(intervalId);
  // }

  // }, [vehiclesData]);

  //   const getDriverDetail = async (id) =>{
  //  if(id){
  //   try{
  // const data = await getDriverDetail(id);
  //  console.log(data);
  //   }catch(error){
  // console.log("Error getting driver detail from Card.js", error);
  //   }
  //  }
  //   }

  // useEffect(()=>{
  //   console.log(lcData.imei)
  // })

  const imei = lcData?.imei
  // console.log(imei)

  const handlePhonePress = async () => {
    try {
      if (vehiclesData?.device_id) {
        const driverData = await fetchVehicleDriver(vehiclesData?.device_id)

        // console.log(driverData, "driver data");

        if (driverData && driverData.length > 0) {
          const driverNumber = driverData[0].contact || null

          // console.log(driverNumber, "driver_number");

          if (driverData[0].contact) {
            const phoneUrl = `tel:${driverNumber}`
            Linking.canOpenURL(phoneUrl)
              .then((supported) => {
                if (supported) {
                  return Linking.openURL(phoneUrl)
                } else {
                  console.warn('Cannot open phone dialer')
                  // Alert.alert('jjhhj')
                }
              })
              .catch((error) =>
                console.error('Error opening phone dialer:', error),
              )
          }
        } else {
          // console.warn("No device ID found");
          Alert.alert('No Contact found!')
        }
      }
    } catch (error) {
      console.error('Error fetching driver data:', error.message)
    }
  }

  useEffect(() => {
    // console.log("receiving lcData");
    if (lcData) {
      setLocationData(lcData)
      // console.log("lcData : ", locationData);
    }
  }, [lcData])

  useEffect(() => {
    // console.log("getting location data from card list");
    if (locationData?.location?.timestamp) {
      setDateAndTime(formatTimestamp(locationData?.location?.timestamp))
      // console.log(dateAndTime);
      if (dateAndTime?.isOlderThan30Minutes) {
        setNoinfo(true)
      } else {
        setNoinfo(false)
      }
    }
  }, [locationData])

  // const fetchLocationFromApi = async (deviceId) => {
  //   try {
  //     const responseData = await fetchLocationData(deviceId); //fetch at api.js
  //     setLocationData(responseData.data[0]);
  //     // console.log("responseData : ", locationData);
  // console.log("lcData : ", lcData);
  //   } catch (error) {
  //     console.error("Error fetching location from API:", error);
  //   }
  // };

  useEffect(() => {
    if (responseData) {
      // console.log("getting vehicle data from card list ::");
      const firstVehicle = responseData,
        extractedData = {
          device_id: firstVehicle.device_id, // Get the first device_id from the array
          vehicleNumber: firstVehicle.reg_no,
          type: firstVehicle.type,
          odometer: firstVehicle.odometer,
        }
      setVehiclesData(() => extractedData)
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
  }, [responseData])

  const cardPress = () => {
    // if (global.updateCardList) {
    // console.log("cardPress for Maps");
    // global.updateCardList = false
    if (locationData?.location) {
      navigation.navigate('MapScreen', {
        vehiclesData,
        locationData,
      })
    }
    // }
  }


  let voltageValue = locationData?.heartbeat?.voltage,
    gpsValue = locationData?.heartbeat?.gps,
    ignitionValue = locationData?.heartbeat?.ignition,
    satellite = locationData?.location?.gps_satellite,
    chargingValue = locationData?.heartbeat?.charging,
    velocity = locationData?.location?.speed
    ; (runningText = ''),
      (gradientColor = [
        Theme.blue.gradient.expire.start,
        Theme.blue.gradient.expire.end,
      ])
  // imeiValue = locationData?.heartbeat?.imei,
  // gsmValue = locationData?.heartbeat?.gsm

  // let runningText = 'No info',
  //   statusText = 'Since',
  //   velocity = locationData?.location?.speed,
  //   gradientColor = [
  //     Theme.blue.gradient.expire.start,
  //     Theme.blue.gradient.expire.end,
  //   ]

  if (velocity > 0 && ignitionValue === true && noinfo === false) {
    // Running state
    ; (runningText = 'Running'),
      (gradientColor = [
        Theme.blue.gradient.running.start,
        Theme.blue.gradient.running.end,
      ])
  } else if (velocity == 0 && ignitionValue === false && noinfo === false) {
    // Stoped state
    ; (runningText = 'Stopped'),
      (gradientColor = [
        Theme.blue.gradient.stopped.start,
        Theme.blue.gradient.stopped.end,
      ])
  } else if (velocity == 0 && ignitionValue === true && noinfo === false) {
    // Idle state
    ; (runningText = 'Idle'),
      (gradientColor = [
        Theme.blue.gradient.idle.start,
        Theme.blue.gradient.idle.end,
      ])
  } else if (velocity > 0 && ignitionValue === false && noinfo === false) {
    // Wire cut state
    ; (runningText = 'Wire cut'),
      (gradientColor = [
        Theme.blue.gradient.all.start,
        Theme.blue.gradient.all.end,
      ])
  } else if (noinfo === true) {
    // No info state
    ; (runningText = 'No info'),
      (gradientColor = [
        Theme.blue.gradient.expire.start,
        Theme.blue.gradient.expire.end,
      ])
  }

  // if (locationData?.location?.speed != null && !noinfo) {
  //   velocity = locationData?.location?.speed
  //   if (velocity > 0) {
  //     runningText = 'Running'
  //     gradientColor = [
  //       Theme.blue.gradient.running.start,
  //       Theme.blue.gradient.running.end,
  //     ]
  //   } else {
  //     runningText = 'Stopped'
  //     gradientColor = [
  //       Theme.blue.gradient.stopped.start,
  //       Theme.blue.gradient.stopped.end,
  //     ]
  //   }
  // }

  const toggleView = () => {
    setShowShareView(() => !showShareView)
    // console.log('toggleView')
  }

  return (
    <TouchableNativeFeedback onPress={cardPress}>
      <View style={card_styles.card}>
        <View style={card_styles.cardHeader}>
          {/* <View style={card_styles.cardHeaderLeft}>
            <View style={[card_styles.truckIconContainer, {}]}> */}
          {/* <CarSvg height={60} width={60} /> */}
          {/* <Icon name={iconName} size={50} color={Theme.black} />
            </View> */}
          {/* <View style={card_styles.runningStatus}>
              <LinearGradient
                colors={gradientColor}
                style={card_styles.linearGradient}
              >
                <Text style={card_styles.runningStatusText}>{runningText}</Text>
              </LinearGradient>
            </View> */}
          {/* </View> */}

          <View style={card_styles.cardHeaderRight}>
            <View
              style={[
                card_styles.numberPlate,
                iconName !== 'truck' && card_styles.personal,
              ]}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <View style={{ alignItems: 'center' }}>
                  <SpeedMeterSvg
                    width="18"
                    height="18"
                    // style={card_styles.bottomImg}
                    fill={Theme.blue.primary}
                  />

                  <Text
                    style={{
                      fontSize: 8,
                      color: Theme.blue.primary,
                      fontWeight: '500',
                    }}
                  >
                    Speed
                  </Text>
                </View> */}
                {/* <View style={[card_styles.iconFrame, { height: 30, width: 30 }]}> */}

                {/* <View style={{ alignItems:'center', marginRight:5 }}>
                <Text style={card_styles.speedInfoText}>{velocity}</Text>
                <Text style={{fontSize:8, marginTop:-4, color:Theme.blue.primary}}>km/h</Text>
                </View> */}

                {/* </View> */}

                {/* <Icon
                name="dharmachakra"
                size={10}
                style={[card_styles.icon, card_styles.wheel]}
              /> */}

                {/* <View style={card_styles.indIcon}>
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
              </View> */}
                <Text style={card_styles.numberPlateText}>
                  {vehiclesData.vehicleNumber}
                </Text>
              </View>

              <View style={card_styles.runningStatus}>
                <LinearGradient
                  colors={gradientColor}
                  style={card_styles.linearGradient}
                >
                  <Text style={card_styles.runningStatusText}>
                    {runningText}
                  </Text>
                </LinearGradient>
              </View>
            </View>

            <View style={card_styles.address}>
              <View style={[card_styles.addressMarker]}>
                <Location width={20} height={20} fill={Theme.blue.primary} />
              </View>

              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={card_styles.addressText}
              >
                {locationData?.location?.address},
              </Text>
            </View>

            {/* <View style={card_styles.statusBox}>
              <TimeFill width="25" height="25" fill={Theme.blue.primary} />
              <Text numberOfLines={2} style={card_styles.statusText}>
                Updated At:
              </Text>
              <Text style={card_styles.updatedText}>
                {dateAndTime?.formattedDate} {dateAndTime?.formattedTime}
              </Text>
            </View> */}
          </View>
        </View>

        {/* <View style={{flexDirection:'row',marginBottom:10, justifyContent:'space-between', }}>

          <View>
          <Text style={{color:Theme.blue.primary}}>Speed</Text>
          <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>{velocity} Km/h</Text>
          </View>
          <View>
          <Text style={{color:Theme.blue.primary}}>Ignition</Text>
          <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>Off</Text>
          </View>

         <View>
         <Text style={{color:Theme.blue.primary}}>Distance</Text>
         <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>200 KM </Text>
         </View>
          <View>
          <Text style={{color:Theme.blue.primary}}>Running</Text>
          <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}> 3 H 40 min </Text>
          </View>
         
         <View>
         <Text style={{color:Theme.blue.primary}}>Stopped</Text>
         <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>12 H 20 min</Text>
         </View>


        </View> */}

        {showShareView ? (
          <View style={card_styles.bottomInfoContainer}>
            {/* <View style={card_styles.bottomTextContainer}>
    <TimeFill width="20" height="20" />
  </View>
  <Text style={card_styles.updatedText}>
    00
  </Text>
  <View style={card_styles.kmTextContainer}>
    <Text style={card_styles.kmText}>Km</Text>
  </View>
  <KmSvg width="30" height="40" style={card_styles.bottomImg} /> */}
            {/* <View style={card_styles.bottomTextContainer}>
  </View> */}

            {/* Speed */}
            {/* <View style={card_styles.speedInfoContainer}>
              <SpeedMeterSvg
                width="20"
                height="20"
                style={card_styles.bottomImg}
                fill={Theme.blue.primary}
              />
              <Text style={card_styles.speedInfoText}>{velocity} Km/h</Text>
            </View> */}

            {/*  last update  */}
            <View style={card_styles.statusBox}>
              <TimeFill width="20" height="20" fill={Theme.blue.primary} />
              <Text style={card_styles.updatedText}>
                {dateAndTime?.formattedDate} {dateAndTime?.formattedTime}
              </Text>
            </View>

            {/* <View style={card_styles.statusBox}>
    <Text numberOfLines={2} style={card_styles.statusText}>
      Updated At:
    </Text>
    <TimeFill width="20" height="20" fill={Theme.blue.primary} />
    <Text style={card_styles.updatedText}>
      {dateAndTime?.formattedTime}
    </Text>
  </View> */}

            <View style={card_styles.iconFrame}>
              {gpsValue === true && <Gps_1 width="21" height="21" />}
              {gpsValue === false && <Gps_0 width="21" height="21" />}
              {gpsValue === undefined && <Gps width="21" height="21" />}
              <Text style={card_styles.satellite}>{satellite}</Text>
            </View>

            {/* <View style={card_styles.iconFrame}>
    {gsmValue === 0 && <Sim_0 width="20" height="20" />}
    {gsmValue === 1 && <Sim_1 width="20" height="20" />}
    {gsmValue === 2 && <Sim_2 width="20" height="20" />}
    {gsmValue === 3 && <Sim_3 width="20" height="20" />}
    {gsmValue === 4 && <Sim_4 width="20" height="20" />}
    {gsmValue === undefined && <Sim width="20" height="20" />}
  </View> */}

            <View style={card_styles.iconFrame}>
              {ignitionValue === true && <Ignition_1 width="18" height="18" />}
              {ignitionValue === false && <Ignition_0 width="18" height="18" />}
              {ignitionValue === undefined && (
                <Ignition width="18" height="18" />
              )}
            </View>

            <View style={card_styles.iconFrame}>
              {chargingValue === true && <Charging_1 width="18" height="18" />}
              {chargingValue === false && <Charging_0 width="18" height="18" />}
              {chargingValue === undefined && (
                <Charging width="18" height="18" />
              )}
            </View>

            <View style={card_styles.iconFrame}>
              {voltageValue === 0 && <Battery_0 width="21" height="21" />}
              {voltageValue === 1 && <Battery_1 width="21" height="21" />}
              {voltageValue === 2 && <Battery_1 width="21" height="21" />}
              {voltageValue === 3 && <Battery_4 width="21" height="21" />}
              {voltageValue === 4 && <Battery_4 width="21" height="21" />}
              {voltageValue === 5 && <Battery_6 width="21" height="21" />}
              {voltageValue === 6 && <Battery_6 width="21" height="21" />}
              {voltageValue === undefined && <Battery width="21" height="21" />}
            </View>
            {/* <View style={card_styles.daysIconBox}>
    <Icon name="calendar-alt" size={10} style={[card_styles.icon]} />
    <Text style={card_styles.calanderDays}>360</Text>
    <View style={card_styles.kmTextContainer}>
      <Text style={card_styles.kmText}>Days</Text>
    </View>
  </View> */}

            {/* validity */}

            <View style={card_styles.daysIconBox}>
              <Icon name="calendar-alt" size={10} style={[card_styles.icon]} />
              <Text style={card_styles.calanderDays}>360</Text>
              <View style={card_styles.kmTextContainer}>
                <Text style={card_styles.kmText}>Days</Text>
              </View>
            </View>
          </View>
        ) : (
          <LiveLocation
            locationData={locationData}
            vehiclesData={vehiclesData}
          />
        )}

        {/* <View style={card_styles.hr_line}></View> */}
        <View style={card_styles.share_box}>
          {/* <TouchableOpacity
            onPress={() => console.log('Pressed:')}
            style={card_styles.bottom_icon_box}
          >
            <Live width={20} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Live</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                navigation.navigate('History', {
                  vehiclesData,
                  imei,
                })
              }
            }}
            style={card_styles.bottom_icon_box}
          >
            <HistoryIcon width={20} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                // console.log("vd",imei);
                navigation.navigate('Alerts', {
                  imei,
                  vehiclesData,
                })
              }
            }}
            style={card_styles.bottom_icon_box}
          >
            <SvgAlertIcon width={20} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Alerts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (locationData?.location) {
                navigation.navigate('Review', {
                  vehiclesData,
                  locationData,
                })
              }
            }}
            style={card_styles.bottom_icon_box}
          >
            <SvgReport width={25} height={20} fill={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Review</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePhonePress()}
            // onPress={ getDriverDetail()}
            // onPress={() => {
            //   if (locationData?.location) {
            //     navigation.navigate('Review', {
            //       vehiclesData,
            //       locationData,
            //     })
            //   }
            // }}
            style={card_styles.bottom_icon_box}
          >
            <MaterialIcons name="call" size={22} color={Theme.blue.primary} />
            <Text style={card_styles.bottom_icon_text}>Driver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   if (locationData?.location) {
            //     navigation.navigate('ShareLocation', {
            //       vehiclesData,
            //       locationData

            //     })
            //   }
            // }
            // }
            onPress={() => toggleView()}
            style={card_styles.bottom_icon_box}
          >
            {showShareView ? (
              <View>
                <SvgShareIcon
                  width={20}
                  height={20}
                  fill={Theme.blue.primary}
                />
                <Text style={card_styles.bottom_icon_text}>Share</Text>
              </View>
            ) : (
              <View>
                <MaterialIcons
                  name="close"
                  size={24}
                  color={Theme.blue.primary}
                />
                <Text style={card_styles.bottom_icon_text}>Close</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default OwnerCard
