import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import MapView, { Marker, Circle } from 'react-native-maps'
import Svgzoomin from '../../../../assets/zoomin.svg'
import Svgzoomout from '../../../../assets/zoomout.svg'
import Svgback from '../../../../assets/back.svg'
import Svglayers from '../../../../assets/layers.svg'
import Svglayers1 from '../../../../assets/layers1.svg'
import Theme from '../../../../src/Theme/theme'
import Constants from 'expo-constants'

const { width, height } = Dimensions.get('window')

const GeoFenceMap = ({ navigation, route }) => {
  const mapRef = useRef(null)
  const [currentMapType, setCurrentMapType] = useState('standard'),
    [buttonStates, setButtonStates] = useState({
      poly: global.getPolyline,
      pitch: global.is3D,
      traffic: false,
      mapType: false,
      // Add more buttons as needed
    })

  useEffect(() => {
    console.log('Data : ', route.params.item.center.coordinates);
    if (
      mapRef.current &&
      route.params &&
      route.params.item &&
      route.params.item.center
    ) {
      const { center, address, radius } = route.params.item
      const { coordinates } = center
      console.log(coordinates)
      mapRef.current.animateToRegion({
        latitude: coordinates[0],
        longitude: coordinates[1],
        latitudeDelta: 0.5,
        longitudeDelta: 0.05,
      })
    }
  }, [route])

  const toggleMapType = () => {
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

  const handleBackButtonPress = () => {
    console.log('Back Press')
    navigation.navigate('Geofence')
  }

  return (
    <View style={styles.container}>
      {route.params && route.params.item && (
        <MapView
          ref={mapRef}
          style={styles.map}
          mapType={currentMapType}
          initialRegion={{
            latitude: route.params.item.center.coordinates[0] || 28.7041,
            longitude: route.params.item.center.coordinates[1] || 77.1025,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          showDirections={true}
          showsBuildings={true}
          toolbarEnabled={true}
          rotateEnabled={false}
          loadingEnable={true}
        >
          <Marker
            coordinate={{
              latitude: route.params.item.center.coordinates[0] || 28.7041,
              longitude: route.params.item.center.coordinates[1] || 77.1025,
            }}
            title="Location"
          />
          <Circle
            center={{
              latitude: route.params.item.center.coordinates[0] || 28.7041,
              longitude: route.params.item.center.coordinates[1] || 77.1025,
            }}
            radius={route.params.item.radius}
            strokeColor="rgba(158, 158, 255, 1)"
            fillColor="rgba(158, 158, 255, 0.3)"
          />
        </MapView>
      )}
      {route.params && route.params.item && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            Name : {route.params.item.name}
          </Text>
          <Text style={styles.addressText}>
            Address : {route.params.item.address}
          </Text>
        </View>
      )}
      {route.params && route.params.item && (
        <View style={styles.bottomContainer}>
          <Text style={styles.addressText}>
            {' '}
            Radius : {route.params.item.radius} m
          </Text>
        </View>
      )}
      <View style={styles.locateMeContainer}>
        <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
          {buttonStates.mapType ? (
            <Svglayers1 width="30" height="30" />
          ) : (
            <Svglayers width="30" height="30" />
          )}
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

export default GeoFenceMap

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  addressContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
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
