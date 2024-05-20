import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps'
import Theme from '../../../Theme/theme'
import { reverseGeocodeCoordinates } from '../../../HelperFunction/directions'
// import GeofenceSlider from './GeoSlider'
import RangeSliderComponent from '../../../MapNavigatorScreen/MapComponent/RangeSliderComponent';
import Constants from 'expo-constants';
import Svgzoomin from '../../../../assets/zoomin.svg';
import Svgzoomout from '../../../../assets/zoomout.svg';
import Svgback from '../../../../assets/back.svg';
import Svglayers from '../../../../assets/layers.svg';
import Svglayers1 from '../../../../assets/layers1.svg';
import Svglocate from '../../../../assets/locate.svg';
import * as Location from 'expo-location';

const GeoFenceMapSelector = ({
  navigation,
  toggleMap,
  sliderValue,
  setSliderValue,
  setCoordinates,
  selectedAddress,
}) => {
  const mapRef = useRef(null)
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    latitude: 28.7041, 
  longitude: 77.1025, 
  latitudeDelta: 0.0922, 
  longitudeDelta: 0.0421,
  })
  const [address, setAddress] = useState(''),
    [currentMapType, setCurrentMapType] = useState('standard'),
    [showTraffic, setShowTraffic] = useState(false),
    [buttonStates, setButtonStates] = useState({
      poly: global.getPolyline,
      pitch: global.is3D,
      traffic: false,
      mapType: false,
      // Add more buttons as needed
    })

  useEffect(() => {
    // Fetch address based on initial coordinates
    fetchAddress(selectedCoordinates.latitude, selectedCoordinates.longitude)
  }, [selectedCoordinates])

  const fetchAddress = async (latitude, longitude) => {
    const response = await reverseGeocodeCoordinates(latitude, longitude)
    if (response.status === 'success') {
      // console.log('geo fence map selector.js ===>: ', response)
      selectedAddress(response.address)
      setAddress(response.address)
    } else {
      setAddress('Address not found')
    }
  }

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate
    const location = {
      type: 'Point',
      coordinates: [latitude, longitude],
    }
    setCoordinates(location)
    setSelectedCoordinates({ latitude, longitude })
    fetchAddress(latitude, longitude)
  }

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate
    const location = {
      type: 'Point',
      coordinates: [latitude, longitude],
    }
    setCoordinates(location)
    setSelectedCoordinates({ latitude, longitude })
  }

  const handleLocationSelect = () => {
      toggleMap()
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
    //Toggle Map Type View
    toggleMapType = () => {
      setCurrentMapType((prevMapType) =>
        prevMapType === 'standard' ? 'satellite' : 'standard',
      )
    }

  const zoomIn = async () => {
      if (mapRef.current) {
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
    zoomOut = async () => {
      if (mapRef.current) {
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
    }

    
 const _handleLocateMeButtonPress = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      // Show custom alert indicating that location is required
      Alert.alert('Location Required', 'Please enable location services to proceed.');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // Update selected coordinates
    setSelectedCoordinates({ latitude, longitude });

    // Fetch address based on updated coordinates
    fetchAddress(latitude, longitude);
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  } 
  catch (error) {
    if (error.message === 'Location request failed due to unsatisfied device settings.') {
      // Show custom alert indicating that location is required
      Alert.alert('Location Required', 'Please enable location services to proceed.');
    } 
    else {
      console.error('Error getting current location:', error);
    }
  }
};


  const handleBackButtonPress = () => {
    console.log('Back Press')
    navigation.navigate('Geofence')
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        onPress={handleMapPress}
        mapType={currentMapType}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 20,
          longitudeDelta: 22,
        }}
      >
        {selectedCoordinates && (
          <Marker
            coordinate={selectedCoordinates}
            draggable
            onDragEnd={handleMarkerDragEnd}
            zIndex={10} // Ensure the marker is above other elements
            markerStyle={styles.customMarker}
          />
        )}

        {sliderValue > 0 && (
          <Circle
            center={selectedCoordinates}
            radius={sliderValue}
            fillColor="rgba(255, 0, 0, 0.1)"
            strokeColor="rgba(255, 0, 0, 0.5)"
          />
        )}
      </MapView>
      <View style={{ flex: 1, borderWidth: 0, borderColor: 'red' }}>
        <View>
          <RangeSliderComponent
            minValue={100}
            maxValue={2000}
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
          />
          {/* <GeofenceSlider sliderValue={sliderValue} setSliderValue={setSliderValue} /> */}
        </View>
        {selectedCoordinates && (
          <View style={styles.confirmButton}>
            <Text onPress={handleLocationSelect} style={styles.confirmText}>
              Confirm Location
            </Text>
          </View>
        )}

        <View style={styles.rangeTextBox}>
          <Text style={styles.confirmText}>Range : {sliderValue}</Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{address}</Text>
      </View>

      <View style={styles.locateMeContainer}>
        {/* Satellite View Button container  */}
        <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
          {buttonStates.mapType ? (
            <Svglayers1 width="30" height="30" />
          ) : (
            <Svglayers width="30" height="30" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mapTypeButton}
          onPress={_handleLocateMeButtonPress}
        >
          <Svglocate width="30" height="30" />
        </TouchableOpacity>

        {/* Zoomin button */}
        <TouchableOpacity style={styles.mapTypeButton} onPress={zoomIn}>
          <Svgzoomin width="30" height="30" />
        </TouchableOpacity>

        {/* Zoom out button */}
        <TouchableOpacity style={styles.mapTypeButton} onPress={zoomOut}>
          <Svgzoomout width="30" height="30" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mapTypeButton]}
          onPress={handleBackButtonPress}
        >
          <Svgback width="30" height="30" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    // flex: 1,
    height: '85%',
    width: '100%',
  },
  confirmButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Theme.blue.primary,
    padding: 10,
    borderRadius: 10,
  },
  rangeTextBox: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: Theme.blue.secondary,
    padding: 10,
    borderRadius: 10,
  },
  confirmText: {
    color: Theme.white,
  },
  addressContainer: {
    position: 'absolute',
    top: 20,
    // left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.3,
    justifyContent:'center',
    marginHorizontal:4.1
  },
  addressText: {
    color: Theme.black,
    fontSize: 16,
    // borderWidth: 1,
  },
  customMarker: {
    width: 68,
    height: 68,
    backgroundColor: 'blue',
    borderRadius: 34, // to make it round
    borderWidth: 2,
    borderColor: 'white',
  },
  locateMeContainer: {
    position: 'absolute',
    top: Constants.statusBarHeight + 250,
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

export default GeoFenceMapSelector
