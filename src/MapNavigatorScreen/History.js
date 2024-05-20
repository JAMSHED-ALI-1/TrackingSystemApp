//History.js
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import React, {
  useEffect,
  // useEffect,
  useRef,
  useState,
} from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  // SafeAreaView,
  // Text,
} from 'react-native'
import Constants from 'expo-constants'
import Theme from '../Theme/theme'
import VehicleHistory from '../Component/HistoryPage/VehicleHistory'
import Svglocate from '../../assets/locate.svg'
import Svgtraffic from '../../assets/traffic.svg'
import Svgtraffic1 from '../../assets/traffic1.svg'
import Svglayers from '../../assets/layers.svg'
import Svglayers1 from '../../assets/layers1.svg'
import Svgzoomin from '../../assets/zoomin.svg'
import Svgzoomout from '../../assets/zoomout.svg'
import Svgback from '../../assets/back.svg'
import { decodePolyline } from '../HelperFunction/Polyline'
import TruckTopSvg from '../../assets/Marker/truckTop.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import BottomSheet from "../Component/BottomSheet/BottomSheet";
// import { decodePolyline } from "../HelperFunction/Polyline";
import { fetchPathData } from '../HelperFunction/api'
import HistorySlider from '../Component/HistoryPage/HistorySlider'

// Global Const Values
const { width, height } = Dimensions.get('window'),
  ASPECT_RATIO = width / height,
  LATITUDE_DELTA = 0.5,
  LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO,
  INITIAL_POSITION = {
    latitude: 20.654816682334758,
    longitude: 78.96724013727072,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }

export default function HistoryScreen({ route }) {
  // console.log(route.params.imei)
  const markerRef = useRef(null)
  const [fromDate, setFromDate] = useState('2024-01-01')
  const [toDate, setToDate] = useState('2024-01-02')
  const [isPlaying, setIsPlaying] = useState(false)
  const [markerRotation, setMarkerRotation] = useState(0)
  const [mapRegion, setMapRegion] = useState(INITIAL_POSITION),
    mapRef = useRef(null),
    navigation = useNavigation(),
    { vehiclesData, imei } = route.params || null,
    [pin, setPin] = useState({
      latitude: 20.654816682334758,
      longitude: 78.96724013727072,
    }),
    [mapReady, setMapReady] = useState(false),
    [currentMapType, setCurrentMapType] = useState('standard'),
    [showTraffic, setShowTraffic] = useState(false),
    [buttonStates, setButtonStates] = useState({
      poly: global.getPolyline,
      pitch: global.is3D,
      traffic: false,
      mapType: false,
      // Add more buttons as needed
    }),
    [polylineCoordinates, setPolylineCoordinates] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [markerPosition, setMarkerPosition] = useState({
    latitude: INITIAL_POSITION.latitude,
    longitude: INITIAL_POSITION.longitude,
  })

    ; (toggleTraffic = () => {
      setShowTraffic(!showTraffic)
    }),
      (toggleMapType = () => {
        setCurrentMapType((prevMapType) =>
          prevMapType === 'standard' ? 'hybrid' : 'standard',
        )
      }),
      (onRegionChange = async (region) => {
        // console.log(region);
        if (mapRef.current) {
          const camera = await mapRef.current.getCamera()
          // To move center of view
          camera.center = {
            latitude: pin.latitude,
            longitude: pin.longitude,
          }
          // console.log(camera);
          // setMarkerRotation(camera.heading || 0);
        }
      }),
      (zoomIn = async () => {
        if (mapReady && mapRef.current) {
          const camera = await mapRef.current.getCamera()
          if (camera && camera.center) {
            const newZoom = camera.zoom + 1,
              newRegion = {
                latitude: camera.center.latitude,
                longitude: camera.center.longitude,
                latitudeDelta: camera.center.latitudeDelta, //getting undefined value from camera.center.latitudeDelta
                longitudeDelta: camera.center.longitudeDelta, //getting undefined value from camera.center.longitudeDelta
              }
            mapRef.current.animateCamera({ center: newRegion, zoom: newZoom })
          }
        }
      }),
      (zoomOut = async () => {
        if (mapReady && mapRef.current) {
          mapRef.current.getCamera(async (camera) => { })
          const camera = await mapRef.current.getCamera()
          if (camera && camera.center) {
            const newZoom = camera.zoom - 1,
              newRegion = {
                latitude: camera.center.latitude,
                longitude: camera.center.longitude,
                latitudeDelta: camera.center.latitudeDelta, //getting undefined value from camera.center.latitudeDelta
                longitudeDelta: camera.center.longitudeDelta, //getting undefined value from camera.center.longitudeDelta
              }
            mapRef.current.animateCamera({ center: newRegion, zoom: newZoom })
          }
        }
      }),
      (handleBackButtonPress = () => {
        setCurrentMapType('standard')
        setShowTraffic(false)
        navigation.goBack()
        // console.log("Go, Back")
      }),
      (moveTo = async (position) => {
        const camera = await mapRef.current?.getCamera()
        if (camera) {
          setPin(position)
          camera.center = position
          camera.center = position
          mapRef.current?.animateCamera(camera, { duration: 1000 })
        }
      })

  const _handleLocateMeButtonPress = () => {
    if (mapRef.current && markerPosition) {
      // Update map region to focus on marker position
      mapRef.current.animateToRegion({
        latitude: markerPosition.latitude,
        longitude: markerPosition.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      })
    }
  }

  // for the date select query start

  useEffect(() => {
    const query = {
      startDate: fromDate,
      endDate: toDate,
    }
    fetchPolyLine(imei, query)
  }, [imei, fromDate, toDate])

  fetchPolyLine = async (imei, query) => {
    // console.log('fetch polyline called =>', imei)
    try {
      const data = await fetchPathData(imei, query) // coming Form api.js
      const decodedCoordinates = decodePolyline(data.encodedPolyline)
      setTimeout(() => {
        setPolylineCoordinates(decodedCoordinates)
      }, 1000)
    } catch (error) {
      //   setError('Unable to load. An error occurred.')
      console.error('Error fetching data: ', error)
    }
  }
  useEffect(() => {
    if (polylineCoordinates.length > 0 && mapRef.current) {
      // Extracting latitude and longitude from polylineCoordinates
      const coordinates = polylineCoordinates.map((coord) => ({
        latitude: coord.latitude,
        longitude: coord.longitude,
      }))

      // Fit the map to contain all the coordinates
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, // Adjust padding as needed
        animated: true, // Animate the map view change
      })
    }
  }, [polylineCoordinates])

  // useEffect(() => {
  //   console.log(polylineCoordinates)
  // }, [polylineCoordinates])

  // const updateMarkerPosition = () => {
  //   if (currentIndex < polylineCoordinates.length) {
  //     setCurrentIndex(prevIndex => prevIndex + 1);
  //     const { latitude, longitude } = polylineCoordinates[currentIndex];
  //     setMarkerPosition({ latitude, longitude });
  //     animateMarker(latitude, longitude);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updateMarkerPosition();
  //   }, 400); // Adjust interval as needed
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  // for the marker
  const calculateRotationAngle = (coord1, coord2) => {
    const deltaY = coord2.latitude - coord1.latitude
    const deltaX = coord2.longitude - coord1.longitude
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    return angle >= 0 ? angle : 360 + angle // Ensure the angle is within [0, 360) range
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < polylineCoordinates?.length - 1) {
        const currentCoord = polylineCoordinates[currentIndex]
        const nextCoord = polylineCoordinates[currentIndex + 1]
        const rotation = calculateRotationAngle(currentCoord, nextCoord)
        setMarkerRotation(rotation)
        setCurrentIndex((prevIndex) => prevIndex + 1)
        const { latitude, longitude } = nextCoord
        setMarkerPosition({ latitude, longitude })
        animateMarker(latitude, longitude)
      }
    }, 400) // Adjust interval as needed

    return () => clearInterval(interval)
  }, [currentIndex, polylineCoordinates])

  // animate the marker

  const animateMarker = (latitude, longitude) => {
    const newCoordinate = { latitude, longitude }
    if (Platform.OS === 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000)
      }
    } else {
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.backButton, styles.mapTypeButton]}
          onPress={handleBackButtonPress}
        >
          <Svgback width="30" height="30" />
        </TouchableOpacity>
        <MapView
          ref={(ref) => {
            mapRef.current = ref
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          showsUserLocation={true}
          followsUserLocation={true}
          onMapReady={() =>
            setMapReady(true) && console.log('mapReady:' + mapReady)
          } // Set the flag when the map is ready
          mapType={currentMapType}
          showsTraffic={showTraffic}
          onRegionChange={onRegionChange}
          showsMyLocationButton={true}
          showsCompass={true}
          showDirections={true}
          showsBuildings={true}
          toolbarEnabled={true}
          rotateEnabled={false}
          loadingEnable={true}
        >
          {/* {polylineCoordinates.length > 0 && (
            <Marker
              coordinate={markerPosition}
              ref={markerRef}
              flat={true}
              // title="Moving Marker"
              anchor={{ x: 0.5, y: 0.5 }}
              calloutAnchor={{ x: 0.5, y: -0.5 }}
            >
              <View style={{ transform: [{ rotate: `${markerRotation}deg` }] }}>
                <TruckTopSvg height={40} width={40} fill={Theme.yellow} />
              </View>
            </Marker>
          )} */}

          {polylineCoordinates[0] && <Marker coordinate={polylineCoordinates[0]}>
            <MaterialIcons name="location-on" size={24} color="green" />
          </Marker>}

          {polylineCoordinates[polylineCoordinates.length - 1] && <Marker
            coordinate={polylineCoordinates[polylineCoordinates.length - 1]}
          >
            <MaterialIcons name="location-on" size={24} color="red" />
          </Marker>}

          {polylineCoordinates.length > 0 && (
            // (buttonStates.poly === 1 || buttonStates.poly === 2) && (
            <Polyline
              coordinates={polylineCoordinates}
              strokeWidth={5}
              lineCap="round"
              lineJoin="round"
              strokeColor={'#3030ffb8'}
            />
          )}
        </MapView>

        <View style={styles.locateMeContainer}>
          {/* Traffic Light button */}
          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={toggleTraffic}
          >
            {buttonStates.traffic ? (
              <Svgtraffic1 width="30" height="30" />
            ) : (
              <Svgtraffic width="30" height="30" />
            )}
          </TouchableOpacity>

          {/* Satellite View Button container  */}
          <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={toggleMapType}
          >
            {buttonStates.mapType ? (
              <Svglayers1 width="30" height="30" />
            ) : (
              <Svglayers width="30" height="30" />
            )}
          </TouchableOpacity>

          {/* Locate Me button */}
          {/* <TouchableOpacity
            style={styles.mapTypeButton}
            onPress={_handleLocateMeButtonPress}
          >
            <Svglocate width="30" height="30" />
          </TouchableOpacity> */}

          {/* Zoomin button */}
          <TouchableOpacity style={styles.mapTypeButton} onPress={zoomIn}>
            <Svgzoomin width="30" height="30" />
          </TouchableOpacity>

          {/* Zoom out button */}
          <TouchableOpacity style={styles.mapTypeButton} onPress={zoomOut}>
            <Svgzoomout width="30" height="30" />
          </TouchableOpacity>
        </View>

        {/* <BottomSheet
                customSnapPoints={["15%", "38%"]}
                backgroundStyle={{
                    backgroundColor: Theme.offWhite,
                    borderRadius: 10,
                }}
                closeStyle={false}
                handleIndicatorStyle={{ height: 1 }}
                // footerComponent={renderFooter}
            > */}
        {/* </BottomSheet> */}

        <View style={{ borderWidth: 0, marginTop: '140%', width: '100%' }}>
          {/* <HistorySlider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setIsPlaying={setIsPlaying}
        polylineCoordinates={polylineCoordinates} // Pass polylineCoordinates
      /> */}
        </View>
      </View>
      <View
        style={{
          borderWidth: 0,
          height: '15%',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <VehicleHistory
          vehiclesData={vehiclesData}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          imei={imei}
        />
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
    // borderWidth: 2,
    // borderColor: 'red',
  },
  map: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    height: '100%',
    // marginTop: Constants.statusBarHeight,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 0,
    backgroundColor: Theme.transparent,
    shadowColor: Theme.white,
  },
  locateMeContainer: {
    position: 'absolute',
    top: Constants.statusBarHeight + 150,
    right: 10,
    alignItems: 'center',
    gap: 8,
  },
  mapTypeButton: {
    backgroundColor: Theme.white,
    padding: 3,
    borderRadius: 5,
    shadowColor: Theme.dark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
})
