//Map.js
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
} from 'react-native'
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from 'expo-constants'
import {
  useKeepAwake,
  deactivateKeepAwake,
  activateKeepAwakeAsync,
} from 'expo-keep-awake'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Theme from '../Theme/theme'
import Svglocate from '../../assets/locate.svg'
import Svgtraffic from '../../assets/traffic.svg'
import Svgtraffic1 from '../../assets/traffic1.svg'
import Svglayers from '../../assets/layers.svg'
import Svglayers1 from '../../assets/layers1.svg'
import Svgzoomin from '../../assets/zoomin.svg'
import Svgzoomout from '../../assets/zoomout.svg'
import Svgback from '../../assets/back.svg'
import { fetchAllVehicleData, fetchLocationData } from '../HelperFunction/api'
import BikeTopSvg from '../../assets/Marker/bikeTop.svg'
import CarTopSvg from '../../assets/Marker/carTop.svg'
import BusTopSvg from '../../assets/Marker/busTop.svg'
import TruchTopSvg from '../../assets/Marker/truckTop.svg'

// import { decodePolyline } from "../HelperFunction/Polyline";
// import { fetchPathData } from "../HelperFunction/api";

// Global Const Values
const { width, height } = Dimensions.get('window'),
  ASPECT_RATIO = width / height,
  LATITUDE_DELTA = 35.6745 - 6.7468, // Difference between maximum and minimum latitude
  LONGITUDE_DELTA = 97.3956 - 68.1624 // Difference between maximum and minimum longitude

INITIAL_POSITION = {
  latitude: 21.654816682334758,
  longitude: 78.96724013727072,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export default function LocationScreen({ navigation }) {
  useKeepAwake()
  const mapRef = useRef(null),
    // navigation = useNavigation(),
    [pin, setPin] = useState({
      latitude: 20.654816682334758,
      longitude: 78.96724013727072,
    }),
    [mapReady, setMapReady] = useState(false),
    [allVehicleData, setAllVehicleData] = useState(null),
    [lcData, setlcData] = useState([]),
    [deviceIds, setdeviceIds] = useState(),
    [currentMapType, setCurrentMapType] = useState('standard'),
    [showTraffic, setShowTraffic] = useState(false),
    [buttonStates, setButtonStates] = useState({
      poly: global.getPolyline,
      pitch: global.is3D,
      traffic: false,
      mapType: false,
      // Add more buttons as needed
    }),
    // [markerRotation, setMarkerRotation] = useState(0),
    // [polylineCoordinates, setPolylineCoordinates] = useState([]),
    // Toggle Traffic State View
    toggleTraffic = () => {
      setShowTraffic(!showTraffic)
    },
    //Toggle Map Type View
    toggleMapType = () => {
      setCurrentMapType((prevMapType) =>
        prevMapType === 'standard' ? 'satellite' : 'standard',
      )
    },
    // On region change register event change of view on map.
    onRegionChange = async (region) => {
      if (mapRef.current) {
        const camera = await mapRef.current.getCamera()
        // To move center of view
        camera.center = {
          latitude: pin.latitude,
          longitude: pin.longitude,
        }
      }
    },
    // Method for zooming in the View.
    zoomIn = async () => {
      if (mapReady && mapRef.current) {
        const camera = await mapRef.current.getCamera()
        if (camera && camera.center) {
          const newZoom = camera.zoom + 1,
            newRegion = {
              latitude: camera.center.latitude,
              longitude: camera.center.longitude,
              latitudeDelta: camera.center.latitudeDelta,
              longitudeDelta: camera.center.longitudeDelta,
            }
          mapRef.current.animateCamera({ center: newRegion, zoom: newZoom })
        }
      }
    },
    // Method for Zooming out in Map.
    zoomOut = async () => {
      if (mapReady && mapRef.current) {
        mapRef.current.getCamera(async (camera) => {})
        const camera = await mapRef.current.getCamera()
        if (camera && camera.center) {
          const newZoom = camera.zoom - 1,
            newRegion = {
              latitude: camera.center.latitude,
              longitude: camera.center.longitude,
              latitudeDelta: camera.center.latitudeDelta,
              longitudeDelta: camera.center.longitudeDelta,
            }
          mapRef.current.animateCamera({ center: newRegion, zoom: newZoom })
        }
      }
    },
    // Go back to the previous screen
    handleBackButtonPress = () => {
      setCurrentMapType('standard')
      setShowTraffic(false)
      navigation.navigate('Home')
      // console.log("Go, Back");
    },
    moveTo = async (position) => {
      const camera = await mapRef.current?.getCamera()
      if (camera) {
        setPin(position)
        camera.center = position
        camera.center = position
        mapRef.current?.animateCamera(camera, { duration: 1000 })
      }
    },
    // Function to fetch locations from the API
    fetchLocations = async (deviceIds) => {
      try {
        let page = 1
        let status = true
        const pageSize = 5

        const totalDevices = deviceIds.length
        const maxPage = Math.ceil(totalDevices / pageSize)

        while (page <= maxPage && status) {
          // Loop through deviceIds in chunks of 5
          for (let i = 0; i < deviceIds.length; i += pageSize) {
            const chunk = deviceIds.slice(i, i + pageSize)
            await fetchLocationFromApi(chunk, pageSize, page)
          }

          // Check if the status is false, then stop the loop
          if (!status) {
            break
          }

          // Increment page number for the next iteration
          page++
        }
      } catch (error) {
        console.error('Error fetching locations from API:', error)
      }
    },
    fetchLocationFromApi = async (deviceId, pageNumber, page = 1) => {
      if (deviceId) {
        try {
          // console.log("Data Recieved : ", deviceId, pageNumber, page);
          const responseData = await fetchLocationData(
            deviceId,
            pageNumber,
            page,
          )
          if (lcData) {
            responseData?.data?.forEach((newItem) => {
              const existingItemIndex = lcData.findIndex(
                (item) => item._id === newItem._id,
              )
              if (existingItemIndex !== -1) {
                lcData[existingItemIndex] = newItem
              } else {
                lcData.push(newItem)
              }
            })
            setlcData([...lcData])
          } else {
            setlcData([...responseData?.data])
          }
        } catch (error) {
          console.error(
            'Error fetching location from fetchLocationFromApi :',
            error,
          )
        }
        // console.log(lcData);
      }
    }
  // Function to extract operator ID from AsyncStorage
  ;(getOperatorId = async () => {
    try {
      const operatorId = await AsyncStorage.getItem('operator_id')
      return operatorId
    } catch (error) {
      console.error('Error fetching operator ID:', error)
      return null
    }
  }),
    // Function to fetch all vehicle data
    (fetchAllData = async (operatorId) => {
      try {
        const data = await fetchAllVehicleData(operatorId)
        return data
      } catch (error) {
        console.error('Error fetching all vehicle data:', error)
        return null
      }
    }),
    (fetchData = async () => {
      const operatorId = await getOperatorId()
      if (operatorId) {
        const data = await fetchAllData(operatorId)
        setAllVehicleData(data)
        const ids = data.flatMap((item) => item.device_id)
        setdeviceIds(ids)
        // console.log("Device IDs:", deviceIds.length);
      }
    }),
    // Function to handle location button press events
    (_handleLocateMeButtonPress = () => {
      // Calculate bounding box for all markers
      const coordinates = lcData
        .filter(
          (location) =>
            location.location &&
            location.location.latitude &&
            location.location.longitude,
        )
        .map((location) => ({
          latitude: location.location.latitude,
          longitude: location.location.longitude,
        }))
      if (coordinates.length > 0) {
        let minX = Infinity
        let maxX = -Infinity
        let minY = Infinity
        let maxY = -Infinity

        coordinates.forEach((coordinate) => {
          minX = Math.min(minX, coordinate.longitude)
          maxX = Math.max(maxX, coordinate.longitude)
          minY = Math.min(minY, coordinate.latitude)
          maxY = Math.max(maxY, coordinate.latitude)
        })

        const padding = 20 // Padding around the bounding box

        // Set map's region based on bounding box and padding
        mapRef.current.fitToCoordinates(
          [
            { latitude: minY, longitude: minX },
            { latitude: maxY, longitude: maxX },
          ],
          {
            edgePadding: {
              top: padding,
              right: padding,
              bottom: padding,
              left: padding,
            },
            animated: true,
          },
        )
      }
    })

  useFocusEffect(
    useCallback(() => {
      const enableKeepAwake = async () => {
        await activateKeepAwakeAsync()
      }
      enableKeepAwake()
      console.log('Enable keepAwake called on locations:')
      return () => {
        // Deactivate keep awake when the component loses focus
        console.log(`deactivate cleared : in location`)
        deactivateKeepAwake()
        // deactivateKeepAwakeAsync();
      }
    }, []),
  )

  // instead of using  useEffect
  useFocusEffect(
    useCallback(() => {
      if (deviceIds?.length > 0) {
        //   const fetchDataAndSetInterval = async () => {
        //     await fetchLocations(deviceIds, deviceIds?.length);
        //   };
        //   fetchDataAndSetInterval();
        //   const intervalId = setInterval(fetchDataAndSetInterval, 6000);
        //   return () => {
        //     console.log("clearing interval :");
        //     clearInterval(intervalId);
        //     console.log("cleared interval  for fetchDataAndSetInterval: 6000ms");
        //   };
        // console.log("fetches");
        // console.log(deviceIds.length)
        fetchLocations(deviceIds)
      }
    }, [deviceIds]),
  )

  // useEffect(() => {
  //   const keepScreenAwake = async () => {
  //     try {
  //       await keepAwakeAsync();
  //       console.log('Screen will stay awake');
  //     } catch (error) {
  //       console.error('Error occurred while trying to keep screen awake:', error);
  //     }
  //   };

  //   keepScreenAwake();

  //   return () => {
  //     // Clean up function to deactivate keep awake when the component unmounts
  //     console.log('cleared Keep awake :');
  //     deactivateKeepAwakeAsync();
  //   };
  // }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, []),
  )

  // useEffect(() => {
  //   // console.log("lcData :", lcData);
  //   const extractedData = lcData.map(data => {
  //     if (data.location && data.location.latitude && data.location.longitude) {
  //       // return {
  //       //   latitude: data.location.latitude,
  //       //   longitude: data.location.longitude
  //       // };
  //       return data;
  //     } else {
  //       return null; // or handle missing data accordingly
  //     }
  //   });
  //   _handleLocateMeButtonPress();
  //   // Filter out null values (objects without latitude and longitude)
  //   // const validData = extractedData.filter(data => data !== null);
  //   // Now validData contains an array of objects with latitude and longitude
  //   // console.log("validData : ", validData);
  // }, [lcData])

  useEffect(() => {
    // console.log('location.js =>', lcData);
  }, [lcData]);
  
const [noinfo, setNoinfo] = useState(false);

  const renderMarkerIcon = (type, ignitionValue, velocity, noinfo) => {
    let fill = Theme.red; // Default fill color
    // console.log(velocity, ignitionValue)
  
    if (velocity > 0 && ignitionValue === true && !noinfo) {
      // Running state
      runningText = 'Running';
      fill = Theme.green;
    } else if (velocity === 0 && ignitionValue === false && !noinfo) {
      // Stopped state
      runningText = 'Stopped';
      fill = Theme.red;
    } else if (velocity === 0 && ignitionValue === true && !noinfo) {
      // Idle state
      runningText = 'Idle';
      fill = Theme.blue.gradient.idle.start;
    } else if (velocity > 0 && ignitionValue === false && !noinfo) {
      // Wire cut state
      runningText = 'Wire cut';
      fill = Theme.blue.gradient.all.start;
    } else if (noinfo) {
      // No info state
      runningText = 'No info';
      fill = Theme.blue.gradient.expire.start;
    }
  
    // Render SVG based on type with the determined fill color
    switch (type) {
      case 'Truck':
        return <TruchTopSvg width={43} height={45} fill={fill} />;
      case 'Bike':
        return <BikeTopSvg width={60} height={55} fill={fill} />;
      case 'Car':
        return <CarTopSvg width={40} height={40} fill={fill} />;
      case 'Bus':
        return <BusTopSvg width={40} height={40} fill={fill} />;
      default:
        return <BusTopSvg width={40} height={40} fill={fill} />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.mapTypeButton, styles.backButton]}
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
        onMapReady={() =>
          setMapReady(true) && console.log('mapReady:' + mapReady)
        } // Set the flag when the map is ready
        mapType={currentMapType}
        showsTraffic={showTraffic}
        onRegionChange={onRegionChange}
        // showsUserLocation={true}
        // followsUserLocation={true}
        // showsMyLocationButton={true}
        showsCompass={true}
        showDirections={true}
        showsBuildings={true}
        toolbarEnabled={true}
        rotateEnabled={false}
        loadingEnable={true}
      >
{lcData && lcData.map((location, index) => {
  // console.log('Location Type:', location); // Log location type
  return location?.location &&
    location?.location?.latitude &&
    location?.location?.longitude ? (
    // Find the matching vehicle in allVehicleData
    (() => {
      const matchingVehicle = allVehicleData.find(vehicle => vehicle.reg_no === location.vehicle_reg_no);

      // console.log('Matching Vehicle:', matchingVehicle); // Log matching vehicle
      // If a matching vehicle is found, render its marker
      if (matchingVehicle) {
        // console.log('Matching Vehicle Type:', location); // Log matching vehicle type
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: location.location.latitude,
              longitude: location.location.longitude,
            }}
            title={`${location.vehicle_reg_no}`}
          >
            {/* Add Image component within the Marker */}
            {/* <Text>{location?.vehicle_reg_no}</Text> */}
            {/* <Image
              source={require("../../assets/car.png")}
              style={{ width: 30, height: 30 }} // Adjust dimensions as needed
            /> */}

            <View
              style={
                {
                  // borderWidth: 0,
                  // transform: [{ rotate: `${Math.floor(mapRotation)}deg` }],
                }
              }
            >

              {renderMarkerIcon(matchingVehicle.type, location.heartbeat.ignition, location.location.speed, noinfo)}
            </View>

          </Marker>
        );
      } else {
        return null;
      }
    })()
  ) : null
})}

      </MapView>

      <View style={styles.locateMeContainer}>
        {/* Traffic Light button */}
        <TouchableOpacity style={styles.mapTypeButton} onPress={toggleTraffic}>
          {buttonStates.traffic ? (
            <Svgtraffic1 width="30" height="30" />
          ) : (
            <Svgtraffic width="30" height="30" />
          )}
        </TouchableOpacity>

        {/* Satellite View Button container  */}
        <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // marginTop: Constants.statusBarHeight,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 10,
    zIndex: 1,
  },
  locateMeContainer: {
    position: 'absolute',
    top: '20%',
    right: 10,
    alignItems: 'center',
    gap: 8,
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
})
