import React, { useEffect, useState, useCallback } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Map from './MapComponent/Map'
import { fetchLocationData } from '../HelperFunction/api'
import Constants from 'expo-constants'
import {
  useKeepAwake,
  deactivateKeepAwake,
  activateKeepAwakeAsync,
} from 'expo-keep-awake'
import BottomSheet from '../Component/BottomSheet/BottomSheet'
import '../HelperFunction/globalVariables'
import NearBy from '../Component/SwipeableCards/NearBy'
import DevicesDetails from '../Component/SwipeableCards/DeviceDetails'
import Theme from '../Theme/theme'
import SingleVehicleinfo from './MapComponent/SingleVehicleinfo'
import map_styles from '../Styles/Map.module'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DetailsSvg from '../../assets/details_filled.svg'
import Parking from './MapComponent/Parking'
import { getParking } from '../HelperFunction/api'
// import RangeSliderComponent from './MapComponent/RangeSliderComponent'
// import { BottomSheetFooter } from "@gorhom/bottom-sheet";
// import ShareLocation from "../Component/SideDrawerPages/ShareLocation";
// import SvgIndivdualReport from "../../assets/individual_report.svg";
// import HistoryIcon from '../../assets/history_icon.svg';
// import SvgReport from "../../assets/report-box-outline.svg";
// import SvgAlertIcon from '../../assets/alert_icon.svg';
// import MapIcon from '../../assets/Map_Vector.svg';

function MapScreen({ route }) {
  const { vehiclesData, goBack, locationData } = route.params || {},
    navigation = useNavigation(),
    [locData, setLocationData] = useState(null),
    [bottomSheetVisible, setBottomSheetVisible] = useState(false),
    [nearBy, setNearBy] = useState(false),
    [currentSnapIndex, setCurrentSnapIndex] = useState(0),
    [odometer, setOdometer] = useState({ distance: 0, speed: 0 }),
    [itineraryData, setItineraryData] = useState([]),
    [parkingSel, setParkingSel] = useState(false),
    [parkingRange, setParkingRange] = useState(0),
    [parkingData, setParkingData] = useState(null),
    // [showDetails, setShowDetails] = useState(true),
    [curLoc, setCurLoc] = useState({
      latitude: locData?.location?.latitude,
      longitude: locData?.location?.longitude,
    }),
    [buttonStates, setButtonStates] = useState({
      poly: global.getPolyline,
      pitch: global.is3D,
      traffic: false,
      mapType: false,
      // Add more buttons as needed
    }),
    CustomHandle = () => {
      return <View style={styles.handle} />
    }

  const fetchParkingData = async () => {
    const deviceId = vehiclesData.device_id[0]
    try {
      setParkingData(null)
      const res = await getParking(deviceId)
      if (res.length > 0) {
        setParkingData(res)
        // console.log("Parking Data From MapScreen : ", res);
      } else {
        console.log('No Parking Data.', res)
        setParkingData(null)
      }
    } catch (error) {
      console.error('Error fetching parking data:', error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      // console.log("useFocusEffect called from mapScreen : ")
      if (vehiclesData?.device_id) {
        fetchLocationFromApi(vehiclesData.device_id)
        const intervalId = setInterval(() => {
          // console.log("Fetching location for individual vehical :", vehiclesData?.device_id);
          fetchLocationFromApi(vehiclesData?.device_id)
        }, 6000) // 12 seconds interval
        return () => {
          // console.log("Interval cleared for Individual vehical :", vehiclesData?.device_id);
          clearInterval(intervalId)
        }
      }
    }, [vehiclesData]),
  )

  useFocusEffect(
    useCallback(() => {
      if (vehiclesData?.device_id) {
        fetchParkingData()
        // fetchLocationFromApi(vehiclesData.device_id);
        const intervalId = setInterval(() => {
          // fetchLocationFromApi(vehiclesData?.device_id);
        }, 30000) // 12 seconds interval
        return () => {
          clearInterval(intervalId)
        }
      }
    }, [vehiclesData]),
  )

  useFocusEffect(
    useCallback(() => {
      if (locData) {
        setItineraryData(locData?.itinerary)
      }
    }, [locData]),
  )

  useFocusEffect(
    useCallback(() => {
      setNearBy(false)
      setBottomSheetVisible(false)
      const enableKeepAwake = async () => {
        await activateKeepAwakeAsync()
      }
      enableKeepAwake()
      // console.log('Enable keepAwake called on MapScreen:');
      return () => {
        // Deactivate keep awake when the component loses focus
        // console.log(`deactivate cleared : in MapScreen`);
        deactivateKeepAwake()
        // deactivateKeepAwakeAsync();
      }
    }, []),
  )

  const fetchLocationFromApi = async (deviceId) => {
    try {
      const responseData = await fetchLocationData(deviceId, 1, 1) //fetch at api.js
      // getAddressFromApi(responseData);
      setLocationFromApi(responseData)
      // console.log("LcData Fetched in MapScreen: ");
      // setLocationData(responseData);
    } catch (error) {
      console.error('Error fetching location from API:', error)
    }
  },
    toggleBottomSheetVisibility = () => {
      console.log('Toggle bottom sheet visibility')
      // toggleBottomTabBar();
      // setBottomSheetVisible(!bottomSheetVisible);
      setNearBy(!nearBy)
      setNearBy(!nearBy)
      setButtonStates((prevStates) => ({
        ...prevStates,
        ['nearby']: !prevStates['nearby'],
      }))
    },
    setLocationFromApi = async (responseData) => {
      try {
        setLocationData(responseData.data[0])
      } catch (error) {
        console.error(
          'Error fetching location from API mapscreen setLocationFromApi:',
          error,
        )
      }
    },
    handleShowDetails = () => {
      setBottomSheetVisible((prevVisible) => !prevVisible)
    },
    toggleShowDetails = () => {
      setBottomSheetVisible(() => !bottomSheetVisible)
    },
    togglePoly = () => {
      setButtonStates((prevStates) => {
        const newPolyState = (prevStates.poly + 1) % 4 // Cycle through 0, 1, 2, 3
        // Set global.getPolyline based on the updated buttonStates
        global.getPolyline = newPolyState
        return {
          ...prevStates,
          poly: newPolyState,
        }
      })
    },
    toggleParkingSel = () => {
      setParkingSel((prev) => !prev)
      // setParkingSel((prev) => !prev);
      // setParkingSel((prev) => !prev);
    }

  useEffect(() => {
    setCurLoc({
      latitude: locData?.location?.latitude,
      longitude: locData?.location?.longitude,
    })
    // console.log(locData)
  }, [locData])
  // Use useFocusEffect to clear state when the screen is focused
  useFocusEffect(
    useCallback(() => {
      // console.log("useFocusEffect");
      setLocationData(null)
    }, []),
  )

  useEffect(() => {
    console.log('On Mapscreen :', parkingRange)
  }, [parkingRange])

  // useEffect(() => {
  //   console.log("On Mapscreen Parking Data:", parkingData);
  // }, [parkingData]);

  // useEffect(() => {
  //   console.log("On Mapscreen :", locData?.heartbeat);
  // }, [locData]);

  // useEffect(() => {
  //   // console.log("goBack Button Pressed is called. :=>", isVehicleReportVisible, goBack, bottomSheetVisible);
  //   setVehicleReportVisible(false);
  //   setBottomSheetVisible(false);
  //   setBottomSheetVisible(true);
  //   // console.log("goBack Button Pressed is End with:=>", isVehicleReportVisible, goBack, bottomSheetVisible);
  // }, [goBack]);

  return (
    useKeepAwake(),
    (
      <View style={styles.container}>
        {locData !== null && (
          <>
            <View style={styles.container}>
              <View style={map_styles.header_box}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.navigate('MainTabNav')}
                >
                  <MaterialIcons
                    name="keyboard-backspace"
                    size={26}
                    color={Theme.blue.primary}
                  />
                </TouchableOpacity>
                <Text style={map_styles.vehicle_no_text}>
                  {vehiclesData?.vehicleNumber ?? '--'}
                </Text>

                <View style={map_styles.ignition_box}>
                  <Text style={map_styles.ignitionText}>Ignition</Text>
                  <View style={map_styles.ignition_status_box}>
                    <View
                      style={
                        locData?.heartbeat?.ignition
                          ? map_styles.ignition_on
                          : map_styles.ignition_off
                      }
                    ></View>
                    <Text style={map_styles.on_text}>
                      {locData?.heartbeat?.ignition ? 'On' : 'Off'}
                    </Text>
                  </View>
                </View>
                {/* <View style={map_styles.ignition_box}>
                <Text style={map_styles.ignitionText}>Engine</Text>
                <View style={map_styles.ignition_status_box}>
                  <View style={!locData?.heartbeat?.relay ? map_styles.ignition_on : map_styles.ignition_off}></View>
                  <Text style={map_styles.on_text}>{!locData?.heartbeat?.relay ? "On" : "Off"}</Text>
                </View>
              </View> */}
                <TouchableOpacity
                  onPress={() =>
                    setBottomSheetVisible(() => !bottomSheetVisible)
                  }
                  style={map_styles.details_box}
                >
                  <DetailsSvg
                    height={24}
                    width={24}
                    fill={Theme.blue.primary}
                  />
                  <Text style={{ fontSize: 12 }}>Details</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  borderWidth: 0,
                  marginBottom: 3,
                  borderColor: 'red',
                }}
              >
                <Map
                  locData={locData}
                  vehiclesData={vehiclesData}
                  bottomSheetVisible={bottomSheetVisible}
                  setBottomSheetVisible={setBottomSheetVisible}
                  toggleBottomSheetVisibility={() =>
                    toggleBottomSheetVisibility()
                  }
                  setOdometer={setOdometer}
                  onPressDetails={() => handleShowDetails()}
                  setButtonStates={setButtonStates}
                  buttonStates={buttonStates}
                  navigation={navigation}
                  toggleParkingSel={toggleParkingSel}
                  parkingData={parkingData}
                />
              </View>

              <View style={{ borderWidth: 0, height: '25%' }}>
                {!parkingSel && (
                  <SingleVehicleinfo
                    navigation={navigation}
                    locData={locData}
                    odometer={odometer}
                    vehiclesData={vehiclesData}
                    itineraryData={itineraryData}
                    toggleBottomSheetVisibility={() =>
                      toggleBottomSheetVisibility
                    }
                    togglePoly={togglePoly}
                  />
                )}

                {parkingSel && (
                  <View style={{ flex: 1 }}>
                    <Parking
                      parkingRange={parkingRange}
                      setParkingRange={setParkingRange}
                      toggleParkingSel={toggleParkingSel}
                      vehiclesData={vehiclesData}
                      locData={[
                        locData?.location?.latitude,
                        locData?.location?.longitude,
                      ]}
                      fetchParkingData={fetchParkingData}
                    />
                  </View>
                )}
              </View>

              {bottomSheetVisible && (
                <BottomSheet
                  customSnapPoints={['25%']}
                  backgroundStyle={{
                    backgroundColor: Theme.white,
                  }}
                  animateOnMount={true}
                  closeStyle={true}
                  zIndex={0}
                  snapToIndex={currentSnapIndex}
                  customHandleComponent={null}
                // footerComponent={renderFooter}
                >
                  <DevicesDetails
                    setCurrentSnapIndex={setCurrentSnapIndex}
                    vehiclesData={vehiclesData}
                    toggleShowDetails={toggleShowDetails}
                    locationData={locData}
                  />
                </BottomSheet>
              )}
              {nearBy && (
                <BottomSheet
                  customSnapPoints={['55%', '47%']}
                  backgroundStyle={{ backgroundColor: Theme.white }}
                  closeStyle={true}
                >
                  <View style={{ flex: 1 }}>
                    <NearBy
                      pin={curLoc}
                      setNearBy={() => toggleBottomSheetVisibility}
                    />
                  </View>
                </BottomSheet>
              )}
            </View>
          </>
        )}
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 8,
    // zIndex: 1,
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dragCardContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Ensure it appears above the map
    borderColor: 'red',
  },
  bottomSheetButton: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    right: 10,
    zIndex: 1, // Ensure it appears above the map
    marginBottom: 10,
    backgroundColor: '#ffff',
    padding: 5,
  },
  handle: {
    height: 0,
    backgroundColor: 'transparent',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: Theme.offWhite,
    borderWidth: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Theme.blue.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  mapTypeButton: {
    backgroundColor: Theme.opaque,
    padding: 3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Theme.darkBlue,
    shadowColor: Theme.darkBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  backButton: {
    // position: "absolute",
    // top: 55,
    // left: 10,
    // zIndex: 1,
    backgroundColor: Theme.opaque,
    padding: 3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Theme.darkBlue,
    shadowColor: Theme.darkBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  apply: {
    borderWidth: 1,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: Theme.blue.primary,
  },
})

export default MapScreen
