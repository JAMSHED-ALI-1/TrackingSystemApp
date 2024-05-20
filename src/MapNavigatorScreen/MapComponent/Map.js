//Map.js
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  AnimatedRegion,
  Callout,
  Circle,
} from 'react-native-maps'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  // Text,
  Linking,
  Platform,
  Text,
} from 'react-native'
import { decodePolyline } from '../../HelperFunction/Polyline'
import { fetchPathData } from '../../HelperFunction/api'
import { fetchRawPathData } from '../../HelperFunction/api'
import Theme from '../../Theme/theme'
import '../../HelperFunction/globalVariables'
import Svgtraffic from '../../../assets/traffic.svg'
import Svgtraffic1 from '../../../assets/traffic1.svg'
import Svglayers from '../../../assets/layers.svg'
import Svglayers1 from '../../../assets/layers1.svg'
import Svgzoomin from '../../../assets/zoomin.svg'
import Svgzoomout from '../../../assets/zoomout.svg'
import Svglocate from '../../../assets/locate.svg'
import SvgParking from '../../../assets/parking_filled.svg'
import SvgEngineOnOff from '../../../assets/engine.svg'
import Svgback from '../../../assets/back.svg'
import ConfirmationAlert from './ConfirmationAlert'
import { sendRelayCommand } from '../../HelperFunction/api'
import map_styles from '../../Styles/Map.module'
import { formatTimestamp } from '../../HelperFunction/TimeAndDateParser'
import SvgBus from '../../../assets/Marker/Bus-Top-View.svg'
import SvgTruck from '../../../assets/Marker/Truck-Top-View.svg'
import SvgCar from '../../../assets/Marker/Car-Top-View.svg'
import SvgPickup from '../../../assets/Marker/PickUP-top-view.svg'
// import SvgTruck from "../../../assets/polyline1.svg";
// Global Const Values
// const { width, height } = Dimensions.get("window");
// DEFAULT_ZOOM = 19,
// ASPECT_RATIO = width / height;
// LATITUDE_DELTA = 0.7;
// edgePadding = 150,
// LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import BikeTopSvg from '../../../assets/Marker/bikeTop.svg'
import CarTopSvg from '../../../assets/Marker/carTop.svg'
import BusTopSvg from '../../../assets/Marker/busTop.svg'
import TruchTopSvg from '../../../assets/Marker/truckTop.svg'

export default function Map({
  locData,
  vehiclesData,
  setOdometer,
  bottomSheetVisible,
  toggleBottomSheetVisibility,
  setBottomSheetVisible,
  buttonStates,
  setButtonStates,
  navigation,
  toggleParkingSel,
  parkingData,
}) {
  const [engineState, setEngineState] = useState()
  const mapRef = useRef(null),
    markerRef = useRef(),
    [dateAndTime, setDateAndTime] = useState(null),
    // navigation = useNavigation(),
    // [pin, setPin] = useState(null),
    [pitch, setPitch] = useState(0),
    [prevLocation, setPrevLocation] = useState(null),
    [firstLoad, setFirstLoad] = useState(null),
    [mapReady, setMapReady] = useState(false),
    [currentMapType, setCurrentMapType] = useState('standard'),
    [showTraffic, setShowTraffic] = useState(false),
    [markerRotation, setMarkerRotation] = useState(0),
    [mapRotation, setMapRotation] = useState(0),
    [polylineRawRouteCoordinates, setPolylineRawRouteCoordinates] = useState(
      [],
    ),
    [polylineCoordinates, setPolylineCoordinates] = useState([]),
    INITIAL_POSITION = {
      latitude: locData?.location?.latitude || 20.5937,
      longitude: locData?.location?.longitude || 78.9629,
      latitudeDelta: 0.00001,
      longitudeDelta: 0.016,
    },

    [state, setState] = useState({
      curLoc: {
        latitude: locData?.location?.latitude,
        longitude: locData?.location?.longitude,
      },
      destinationCoords: {},
      isLoading: false,
      coordinate: new AnimatedRegion({
        latitude: locData?.location?.latitude,
        longitude: locData?.location?.longitude,
        latitudeDelta: 0.00001,
        longitudeDelta: 0.016,
      }),
    }),
    [noinfo, setNoinfo] = useState(false),
    { curLoc, destinationCoords, isLoading, coordinate } = state

  const [calloutAnchor, setCalloutAnchor] = useState({ x: 0.5, y: 0 });

  const animate = (latitude, longitude) => {
    const newCoordinate = { latitude, longitude }
    if (Platform.OS == 'android') {
      if (markerRef?.current) {
        markerRef?.current.animateMarkerToCoordinate(newCoordinate, 5000)
      }
    } else {
      // iOS: Use built-in animation
      // coordinate.timing(newCoordinate).start();
    }
  },
    togglePitch = () => {
      if (!buttonStates.pitch) {
        setPitch(65)
      } else {
        setPitch(0)
      }
      setButtonStates((prevStates) => ({
        ...prevStates,
        ['pitch']: !prevStates['pitch'],
      }))
      if (!buttonStates.pitch) {
        global.is3D = true
      } else {
        global.is3D = false
      }
    },
    changePitch = async () => {
      const camera = await mapRef.current?.getCamera()
      if (camera) {
        const streetViewCamera = {
          pitch: pitch,
        }
        mapRef.current?.animateCamera(streetViewCamera)
      }
    },
    onCenterView = async () => {
      const camera = await mapRef.current?.getCamera()
      let bearing
      if (locData?.location.speed > 0) {
        bearing = Math.floor(mapRotation)
      }
      if (camera) {
        const streetViewCamera = {
          center: {
            latitude: curLoc.latitude,
            longitude: curLoc.longitude,
          },
          zoom: 17,
          heading: bearing,
        }
        mapRef.current?.animateCamera(streetViewCamera, {
          duration: 500,
          useNativeDriver: true,
        })
      }
    },
    fetchPolyLine = async (imei) => {
      try {
        const data = await fetchPathData(imei) // coming Form api.js
        const decodedCoordinates = decodePolyline(data.encodedPolyline)
        setTimeout(() => {
          setPolylineCoordinates(decodedCoordinates)
        }, 5000)
      } catch (error) {
        setError('Unable to load. An error occurred.')
        console.error('Error fetching data: ', error)
      }
    },
    fetchRawPolyLine = async (imei) => {
      try {
        const data = await fetchRawPathData(imei) // coming Form api.js
        const decodedCoordinates = decodePolyline(data.encodedPolyline)
        setTimeout(() => {
          setPolylineRawRouteCoordinates(decodedCoordinates)
        }, 5000)
      } catch (error) {
        setError('Unable to load. An error occurred.')
        console.error('Error fetching data: ', error)
      }
    },
    // Toggle Traffic State View
    toggleTraffic = () => {
      setShowTraffic(!showTraffic)
      setButtonStates((prevStates) => ({
        ...prevStates,
        ['traffic']: !prevStates['traffic'],
      }))
    },
    //Toggle Map Type View
    toggleMapType = () => {
      setCurrentMapType((prevMapType) =>
        prevMapType === 'standard' ? 'hybrid' : 'standard',
      )
      setButtonStates((prevStates) => ({
        ...prevStates,
        ['mapType']: !prevStates['mapType'],
      }))
    },
    // Method for zooming in the View.
    zoomIn = async () => {
      if (mapReady && mapRef?.current) {
        const camera = await mapRef?.current?.getCamera()
        if (camera && camera.center) {
          let newZoom = camera.zoom + 1
          const newRegion = {
            latitude: camera?.center.latitude,
            longitude: camera?.center.longitude,
            latitudeDelta: camera?.center.latitudeDelta,
            longitudeDelta: camera?.center.longitudeDelta,
          }
          if (newZoom > 18) {
            newZoom = 18
          }
          mapRef.current.animateCamera({
            center: newRegion,
            zoom: newZoom,
            duration: 500,
            useNativeDriver: true,
          })
        }
      }
    },
    // Method for Zooming out in Map.
    zoomOut = async () => {
      if (mapReady && mapRef.current) {
        mapRef.current?.getCamera(async (camera) => { })
        const camera = await mapRef.current?.getCamera()
        if (camera && camera.center) {
          const newZoom = camera.zoom - 1,
            newRegion = {
              latitude: camera.center.latitude,
              longitude: camera.center.longitude,
              latitudeDelta: camera.center.latitudeDelta,
              longitudeDelta: camera.center.longitudeDelta,
            }
          mapRef.current.animateCamera({
            center: newRegion,
            zoom: newZoom,
            duration: 500,
            useNativeDriver: true,
          })
        }
      }
    },
    moveTo = async (position) => {
      const camera = await mapRef.current?.getCamera()
      let bearing,
        duration = 1500
      if (locData?.location.speed > 0) {
        bearing = Math.floor(mapRotation)
      }
      if (camera) {
        if (firstLoad === true) {
          setFirstLoad(false)
          camera.zoom = 15
          duration = 10
        }
        const { latitude, longitude } = position,
          streetViewCamera = {
            center: { latitude, longitude },
            zoom: camera.zoom || DEFAULT_ZOOM,
          }
        streetViewCamera.heading = bearing
        mapRef.current?.animateCamera(streetViewCamera, {
          duration: duration,
          useNativeDriver: true,
        })
        if (mapRotation != 0) {
          setMarkerRotation(mapRotation)
        }
      }
    }

  // useEffect(() => {
  //   // console.log('map.js =>', locData?.heartbeat)
  // }, [locData])

  useEffect(() => {
    // Example logic to adjust the callout anchor based on rotation
    if (mapRotation >= 45 && mapRotation < 135) {
      setCalloutAnchor({ x: 1, y: 0.5 }); // Right of marker
    } else if (mapRotation >= 135 && mapRotation < 225) {
      setCalloutAnchor({ x: 0.5, y: 1 }); // Below marker
    } else if (mapRotation >= 225 && mapRotation < 315) {
      setCalloutAnchor({ x: 0, y: 0.5 }); // Left of marker
    } else {
      setCalloutAnchor({ x: 0.5, y: 0 }); // Above marker
    }
    console.log("Rotation and Anchor :", mapRotation, calloutAnchor);
  }, [mapRotation]);


  let voltageValue = locData?.heartbeat?.voltage,
    gpsValue = locData?.heartbeat?.gps,
    ignitionValue = locData?.heartbeat?.ignition,
    satellite = locData?.location?.gps_satellite,
    chargingValue = locData?.heartbeat?.charging,
    velocity = locData?.location?.speed
    ; (runningText = ''),
      fill = Theme.red
  // (gradientColor = [
  //   Theme.blue.gradient.expire.start,
  //   Theme.blue.gradient.expire.end,
  // ])
  // imeiValue = locData?.heartbeat?.imei,
  // gsmValue = locData?.heartbeat?.gsm

  // let runningText = 'No info',
  //   statusText = 'Since',
  //   velocity = locData?.location?.speed,
  //   gradientColor = [
  //     Theme.blue.gradient.expire.start,
  //     Theme.blue.gradient.expire.end,
  //   ]

  if (velocity > 0 && ignitionValue === true && noinfo === false) {
    // Running state
    ; (runningText = 'Running'),
      fill = Theme.green
  } else if (velocity == 0 && ignitionValue === false && noinfo === false) {
    // Stoped state
    ; (runningText = 'Stopped'),
      fill = Theme.red

  } else if (velocity == 0 && ignitionValue === true && noinfo === false) {
    // Idle state
    ; (runningText = 'Idle'),
      fill = Theme.blue.gradient.idle.start
  } else if (velocity > 0 && ignitionValue === false && noinfo === false) {
    // Wire cut state
    ; (runningText = 'Wire cut'),
      // (gradientColor = [
      fill = Theme.blue.gradient.all.start
    //  fill = Theme.red
    // Theme.blue.gradient.all.end,
    // ])
  } else if (noinfo === true) {
    // No info state
    ; (runningText = 'No info'),
      // (gradientColor = [
      fill = Theme.blue.gradient.expire.start
    // fill = Theme.red
    // ])
  }
  // Function to render SVG based on type
  const renderMarkerIcon = (type) => {
    // console.log('map.js=>', type)
    switch (type) {
      case 'Truck':
        return <TruchTopSvg width={40} height={40} fill={fill} />
      case 'Bike':
        return <BikeTopSvg width={60} height={55} fill={fill} /> // Use appropriate SVG component for Bike
      case 'Car':
        return <CarTopSvg width={40} height={40} fill={fill} /> // Use appropriate SVG component for Car
      case 'Bus':
        return <BusTopSvg width={40} height={40} fill={fill} />
      default:
        return <BusTopSvg width={40} height={40} fill={fill} /> // Return null or default SVG component for unknown types
    }
  }

  function calculateSpeedAngleDistance(lat1, lon1, time1, lat2, lon2, time2) {
    const earthRadius = 6371000, // Earth radius in meters
      degreesToRadians = (degrees) => {
        return degrees * (Math.PI / 180)
      },
      calculateDistance = () => {
        const dLat = degreesToRadians(lat2 - lat1),
          dLon = degreesToRadians(lon2 - lon1),
          a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degreesToRadians(lat1)) *
            Math.cos(degreesToRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2),
          c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
          distance = earthRadius * c // Distance in meters
        return distance
      },
      calculateSpeed = () => {
        const distance = calculateDistance(),
          timeDiff =
            Math.abs(new Date(time2).getTime() - new Date(time1).getTime()) /
            1000 // Convert milliseconds to seconds
        if (timeDiff === 0) {
          return 0 // Avoid division by zero
        }
        const speed = (distance / timeDiff) * 3.6 // Speed in km/h
        return speed
      },
      calculateAngle = () => {
        const dLon = degreesToRadians(lon2 - lon1),
          y = Math.sin(dLon) * Math.cos(degreesToRadians(lat2)),
          x =
            Math.cos(degreesToRadians(lat1)) *
            Math.sin(degreesToRadians(lat2)) -
            Math.sin(degreesToRadians(lat1)) *
            Math.cos(degreesToRadians(lat2)) *
            Math.cos(dLon),
          angle = Math.atan2(y, x),
          angleInDegrees = (angle * 180) / Math.PI
        return (angleInDegrees + 360) % 360 // Normalize to a range between 0 and 360 degrees
      },
      distance = calculateDistance(),
      // speed = calculateSpeed(),
      speed = 0,
      angle = calculateAngle()
    return { speed, angle, distance }
  }

  const sendEngineStatus = async (terminalId, command) => {
    try {
      const response = await sendRelayCommand(terminalId, command)
      console.log('Command sent successfully:', response)
      return response
    } catch (error) {
      console.error('Error sending engine status:', error)
      throw error
    }
  }

  // const handleEngineToggle = () => {
  //   const newRelayStatus = !locData?.heartbeat?.relay
  //   console.log('map.js => handleEngineToggle',newRelayStatus)
  //   ConfirmationAlert(
  //     'Warning! Do Not use this if vehicle is Running. \n Are you sure you want to change engine status?',
  //     () => {
  //       sendEngineStatus(locData?.imei, newRelayStatus)
  //     },
  //     () => {},
  //   ) // Pass originalEngineState to revertEngineState
  // }

  const handleEngineToggle = () => {
    const newRelayStatus = !locData?.heartbeat?.relay;
    const buttonText = newRelayStatus ? 'Off' : 'On';
    const alertMessage = newRelayStatus
      ? 'Warning! Are you sure you want to turn "OFF" the engine? \n Are you sure you want to change engine status?'
      : 'Warning! Are you sure you want to turn "On" the engine? \nn Are you sure you want to change engine status?';

    ConfirmationAlert(
      alertMessage,
      // 'Warning! Do Not use this if vehicle is Running. \n Are you sure you want to change engine status?',
      () => {
        sendEngineStatus(locData?.imei, newRelayStatus);
      },
      () => {

      }
    );

    console.log('Button Text:', buttonText);
  };

  useEffect(() => {
    if (locData?.location?.timestamp) {
      setDateAndTime(formatTimestamp(locData?.location?.timestamp))
      // console.log("Updtated date and time : ", dateAndTime, locData?.location?.speed);
    }
  }, [locData])

  // useEffect to utlize data coming fetchLocationFromApi on component mount
  useEffect(() => {
    if (locData?.location) {
      if (
        locData.location.latitude !== undefined &&
        locData.location.longitude !== undefined
      ) {
        const longitude = locData?.location.longitude,
          latitude = locData?.location.latitude,
          time = locData?.location.timestamp,
          updatedLocation = {
            latitude,
            longitude,
            time,
          }
        if (locData?.location?.speed > 0) {
          animate(latitude, longitude)
        }
        setState({
          ...state,
          curLoc: { latitude, longitude },
          coordinate: new AnimatedRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }),
        })
        setPrevLocation(updatedLocation)
        if (prevLocation) {
          const response = calculateSpeedAngleDistance(
            prevLocation.latitude,
            prevLocation.longitude,
            prevLocation.time,
            latitude,
            longitude,
            time,
          )
          if (response.angle != 0) {
            setMapRotation(response.angle)
          }
          setOdometer({ speed: response.speed, distance: response.distance })
        }

        moveTo(updatedLocation)
        if (global.getPolyline) {
          fetchPolyLine(locData?.imei)
          fetchRawPolyLine(locData?.imei)
        }
      }
    }
  }, [locData])

  useEffect(() => {
    changePitch()
  }, [pitch])

  useEffect(() => {
    setFirstLoad(true)
    setMarkerRotation(locData?.location?.course)
    setMapRotation(0)
    const longitude = locData?.location?.longitude,
      latitude = locData?.location?.latitude,
      time = locData?.location?.timestamp,
      updatedLocation = {
        latitude,
        longitude,
        time,
      }
    setTimeout(() => {
      if (global.is3D) {
        setPitch(60)
      }
      moveTo(updatedLocation)
      fetchPolyLine(locData?.imei)
      fetchRawPolyLine(locData?.imei)
    }, 50)
  }, [])

  useEffect(() => {
    markerRef?.current?.showCallout()
  }, [mapReady, locData])

  // useEffect(() => {
  //   console.log('On Map.js Parking Data:', parkingData)
  // }, [parkingData])

  // useEffect(()=>{
  //   console.log('On Map.js ==>', locData?.imei)
  // },[locData])

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          ref={(ref) => {
            mapRef.current = ref
          }}
          maxZoomLevel={19}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          edgePadding={{ top: 50, bottom: 350 }}
          onMapReady={() => {
            setMapReady(true) && console.log('mapReady:' + mapReady)
            markerRef?.current?.showCallout()
          }}
          mapType={currentMapType}
          showsTraffic={showTraffic}
          showsCompass={true}
          showDirections={true}
          showsBuildings={true}
          // toolbarEnabled={false}
          rotateEnabled={true}
        // loadingEnable={true}
        // showsMyLocationButton={true}
        // showsUserLocation={true}
        // followsUserLocation={true}
        // onRegionChange={onRegionChange}
        // onRegionChangeComplete={handleMapReady}
        // onRegionChangeComplete={onRegionChange}
        >
          {locData?.location && (
            <Marker.Animated
              ref={markerRef}
              flat={true}
              coordinate={coordinate}
              anchor={{ x: 0.5, y: 1 }}
              calloutAnchor={calloutAnchor}
            >
              {/* <Text>{vehiclesData.type}</Text> */}
              {/* <Image
                source={require("../../../assets/car.png")}
                style={{
                  width: 40,
                  height: 40,
                  transform: [
                    { rotate: `${Math.floor(mapRotation)}deg` },
                  ],
                }}
                resizeMode="contain"
              /> */}
              <View
                style={{
                  borderWidth: 0,
                  transform: [{ rotate: `${Math.floor(mapRotation)}deg` }],
                }}
              >
                {renderMarkerIcon(vehiclesData.type)}
              </View>

              <Callout
                // anchor={{ x: .5, y: .5 }}
                // width={500}
                style={{ width: 130, borderWidth: 0, }}
              >
                <View style={styles.calloutContainer}>
                  <View style={{ flexDirection: 'row', borderWidth: 0 }}>
                    <Text
                      style={[
                        styles.speed_title,
                        { color: Theme.blue.primary, fontSize: 12 },
                      ]}
                    >
                      Speed :
                    </Text>
                    <Text style={styles.descriptionText}>
                      {' '}
                      {locData?.location?.speed ?? '--'} KM/h
                    </Text>
                    {/* <Text style={styles.descriptionText}>{runningText}</Text> */}
                  </View>

                  <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.speed_title}>Updated At :</Text>
                    <Text
                      style={[
                        styles.descriptionText,
                        { color: Theme.gray53, fontSize: Theme.font.xsmall },
                      ]}
                    >
                      {' '}
                      {dateAndTime?.formattedDate} {dateAndTime?.formattedTime}
                    </Text>
                  </View>

                  {/* {locData?.heartbeat?.relay && ( */}
                  <View style={map_styles.ignition_status_box}>
                    <Text style={styles.title}>Engine : </Text>
                    <View
                      style={
                        !locData?.heartbeat?.relay
                          ? map_styles.ignition_on
                          : map_styles.ignition_off
                      }
                    ></View>
                    <Text style={map_styles.on_text}>
                      {!locData?.heartbeat?.relay ? 'On' : 'Off'}
                    </Text>
                  </View>
                  {/* )} */}

                  {/* {locData?.heartbeat?.relay && ( */}
                  {/* <View style={map_styles.ignition_status_box}>
                      <Text style={styles.title}>Parking : </Text>
                      <View
                        style={
                          !locData?.heartbeat?.relay
                            ? map_styles.ignition_on
                            : map_styles.ignition_off
                        }
                      ></View>
                      <Text style={map_styles.on_text}>
                        {!locData?.heartbeat?.relay ? 'On' : 'Off'}
                      </Text>
                    </View> */}
                  {/* )} */}
                </View>
              </Callout>
            </Marker.Animated>
          )}
          {parkingData?.length > 0 && (
            <Circle
              center={{
                latitude: parkingData[0].center.coordinates[0],
                longitude: parkingData[0].center.coordinates[1],
              }}
              radius={parkingData[0].radius}
              strokeColor="rgba(158, 158, 255, 1)"
              fillColor="rgba(158, 158, 255, 0.3)"
            />
          )}

          {polylineRawRouteCoordinates.length > 0 &&
            (buttonStates.poly === 0 || buttonStates.poly === 1) && (
              <Polyline
                coordinates={polylineRawRouteCoordinates}
                strokeWidth={3}
                lineCap="round"
                lineJoin="round"
                strokeColor={'#ff00e3ed'}
              />
            )}
          {polylineCoordinates.length > 0 &&
            (buttonStates.poly === 1 || buttonStates.poly === 2) && (
              <Polyline
                coordinates={polylineCoordinates}
                strokeWidth={5}
                lineCap="round"
                lineJoin="round"
                strokeColor={'#3030ffb8'}
              />
            )}
          {polylineCoordinates.length > 0 &&
            (buttonStates.poly === 1 || buttonStates.poly === 2) && (
              <Polyline
                coordinates={polylineCoordinates}
                strokeWidth={3}
                lineCap="round"
                lineJoin="round"
                strokeColor={'#3030ffb8'}
              />
            )}
        </MapView>

        {/* Map Controls */}
        <View style={styles.mapControls}>
          {/* Engine Off */}
          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={() => {
              handleEngineToggle()
            }}
          >
            <SvgEngineOnOff width="30" height="30" fill={Theme.black} />
            <Text
              style={styles.icone_name_text}
            >
              Engine
            </Text>
          </TouchableOpacity>

          {/* Parking */}
          {/* <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={() => {
              toggleParkingSel()
            }}
          >
            <SvgParking width="30" height="30" fill={Theme.black} />
            <Text
              style={styles.icone_name_text}
            >
              Parking
            </Text>
          </TouchableOpacity> */}

          {/* Traffic icon */}
          <TouchableOpacity
            style={[
              styles.mapTypeButton,
              buttonStates.traffic && styles.toggledButton,
            ]}
            onPress={toggleTraffic}
          >
            {buttonStates.traffic ? (
              <Svgtraffic1 width="30" height="30" />
            ) : (
              <Svgtraffic width="30" height="30" />
            )}
            <Text
              style={styles.icone_name_text}
            >
              Traffic
            </Text>
          </TouchableOpacity>

          {/*Map type icon */}
          <TouchableOpacity
            style={[
              styles.mapTypeButton,
              buttonStates.mapType && styles.toggledButton,
            ]}
            onPress={toggleMapType}
          >
            {buttonStates.mapType ? (
              <Svglayers1 width="30" height="30" />
            ) : (
              <Svglayers width="30" height="30" />
            )}
            <Text
              style={styles.icone_name_text}
            >
              Layer
            </Text>
          </TouchableOpacity>

          {/* Zoom in icon */}
          <TouchableOpacity style={styles.mapTypeButton} onPress={zoomIn}>
            <Svgzoomin width="30" height="30" />
            <Text
              style={styles.icone_name_text}
            >
              Zoom In
            </Text>
          </TouchableOpacity>

          {/* Zoom out icon */}
          <TouchableOpacity style={styles.mapTypeButton} onPress={zoomOut}>
            <Svgzoomout width="30" height="30" />
            <Text
              style={styles.icone_name_text}
            >
              Zoom Out
            </Text>
          </TouchableOpacity>

          {/* Guide to Vehicle icon */}
          {/* <TouchableOpacity
          onPress={handleMarkerPress}
          style={styles.mapTypeButton}
        >
          <Svgnavigate width="30" height="30" />
        </TouchableOpacity> */}

          {/* Locate vehicle icon */}
          <TouchableOpacity style={styles.mapTypeButton} onPress={onCenterView}>
            <Svglocate width="30" height="30" />
            <Text
              style={styles.icone_name_text}
            >
              Location
            </Text>
          </TouchableOpacity>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={() => {
              navigation.navigate('Tracking')
            }}
          >
            <Svgback width="30" height="30" fill={Theme.black} />
            <Text style={styles.icone_name_text}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.extraLightBlue,
  },
  map: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    height: '100%',
  },
  mapControls: {
    position: 'absolute',
    // bottom: '5%',
    right: 10,
    gap: 8,
    // marginTop:80
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggledButton: {
    backgroundColor: Theme.white,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 10,
    zIndex: 1,
    // borderWidth:1,
  },
  calloutContainer: {
    // opacity: .5,
    // alignItems: "spa",
    // borderWidth: 1,
    // width: "100%",
  },
  title: {
    fontWeight: Theme.font.xbold,
    fontSize: Theme.font.xsmall,
    textAlign: 'center',
  },
  speed_title: {
    fontWeight: Theme.font.xbold,
    fontSize: Theme.font.xsmall,
    // textAlign: "center",
    color: Theme.gray53,
    // width: '40%',
    // borderWidth:1,
  },
  descriptionText: {
    fontWeight: Theme.font.xbold,
    fontSize: Theme.font.small,
    textAlign: 'center',
    color: Theme.blue.secondary,
  },
  icone_name_text: {
    fontSize: 8,
    textAlign: 'center',
    color: Theme.blue.primary,
    fontWeight: Theme.font.xbold
  },
})
