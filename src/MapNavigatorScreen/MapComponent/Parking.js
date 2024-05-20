import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Theme from '../../Theme/theme'
import RangeSliderComponent from './RangeSliderComponent'
import { addParking, deleteParking } from '../../HelperFunction/api'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import parking_styles from '../../Styles/MapNavigatorScreen/MapComponent/Praking.module'

const Parking = ({
  parkingRange,
  setParkingRange,
  toggleParkingSel,
  vehiclesData,
  locData,
  fetchParkingData,
}) => {
  const [initialParkingRange, setInitialParkingRange] = useState(100)
  // useEffect(() => {
  //     console.log("Vehicle Data : ", vehiclesData.device_id[0]);
  // }, [vehiclesData]);

  // useEffect(() => {
  //     console.log("Loc Data : ", locData);
  // }, [locData]);

  useEffect(() => {
    console.log('Parking.js fetchparking  =>', fetchParkingData())
  }, [])

  const handleAddParking = async () => {
    const deviceId = vehiclesData.device_id[0]
    const coordinate = locData // Replace with actual coordinate from locData if available
    try {
      await addParking(deviceId, coordinate, parkingRange)
      fetchParkingData()
      // toggleParkingSel()
      console.log('Parking added successfully.')
    } catch (error) {
      console.error('Error adding parking:', error)
    }
  }

  const handleDeleteParking = async () => {
    const deviceId = vehiclesData.device_id[0]
    try {
      const res = await deleteParking(deviceId)
      console.log('Parking deleted successfully.')
      setParkingRange(initialParkingRange)
      fetchParkingData()
      toggleParkingSel()
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Status is 404 - Parking area not found for the provided device.
        console.log('No Parking area to delete with this device.')
        // Show alert here
        return
      } else {
        console.error('Error deleting parking:', error)
      }
    }
  }

  const [tempParkingRange, setTempParkingRange] = useState(parkingRange)

  const handleApply = () => {
    setInitialParkingRange(tempParkingRange)
    setParkingRange(tempParkingRange)
    handleAddParking()
  }

  useEffect(() => {
    setParkingRange(tempParkingRange)
  }, [tempParkingRange])

  return (
    <View style={{ borderWidth: 0, flex: 1 }}>
      <View style={parking_styles.close_box}>
        <TouchableOpacity
          onPress={() => toggleParkingSel()}
          style={parking_styles.close_flex_box}
        >
          <Text>Close</Text>
          <MaterialIcons name="close" size={20} color={Theme.red} />
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 0 }}>
        <View style={parking_styles.parking_range_box}>
          <Text style={parking_styles.range_text}>
            {' '}
            Parking Range : {tempParkingRange} Mt.
          </Text>
        </View>
        <RangeSliderComponent
          minValue={100}
          maxValue={1000}
          value={tempParkingRange}
          onValueChange={(value) => setTempParkingRange(value)}
        />

        <View style={parking_styles.parking_flex_box}>
          <TouchableOpacity
            onPress={handleDeleteParking}
            style={parking_styles.delete_aprking_box}
          >
            <Text style={parking_styles.delete_aprking_text}>Delete Parking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={parking_styles.apply} onPress={handleApply}>
            <Text style={{ color: Theme.white, fontSize: Theme.font.small }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Parking


