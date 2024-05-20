import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import DriverDetailsHeading from './DriverDetailsHeading'
import VehicleSelector from '../../VehicleSelector'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module'
import modal_delete_driver_styles from '../../../Styles/DeviceDetails/DriverDeleteModal.module'
import Theme from '../../../Theme/theme';
import {useNavigation} from '@react-navigation/native';

// Import fetchVehicleDriversAllData function
import { addDriver, deleteDriver, fetchVehicleDriversAllData } from '../../../HelperFunction/api'

const DriverModal = ({ locationData, vehiclesData }) => {
  const [vehicleDriverData, setVehicleDriverData] = useState(null);
  const [showAddDriver, setShowAddDriver] = useState(false);
  const navigation = useNavigation()
  // const 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviceId = locationData?.vehiclesData.device_id[0]
        if (!deviceId) return
        const data = await fetchVehicleDriversAllData(deviceId)
        setVehicleDriverData(data)
        // Show add driver icon after a delay if no drivers found
        if (!data || data.length === 0) {
          setTimeout(() => {
            setShowAddDriver(true);
          }, 500); 
        }
      } catch (error) {
        console.error('Error fetching vehicle driver data:', error.message)
      }
    }

    fetchData()
  }, [locationData])

  // useEffect(() => {
  //   console.log( '===> ', locationData?.vehiclesData?.device_id)
  // }, [locationData?.vehiclesData?.device_id])


// const handleNagigate = () =>{
  const handleNagigate = () => {
    navigation.navigate('Add', {locationData});
  }
  

  

  // useEffect(()=>{
  //   console.log('vehicle useeffect =>',vehicleDriverData)

  //   // setVehicleDriverData(prevData => prevData.filter(driver => driver._id !== driverId));
  // },[vehicleDriverData])

  // const driverId = vehicleDriverData.filter((item)=>{
  //   // console.log(item._id,'id')
  //   // driverId: item._id
  // })

  const handleDeleteDriver = async (driverId) => {
   if(driverId){
    try {
      await deleteDriver(driverId); 
      setVehicleDriverData(prevData => prevData.filter(driver => driver._id !== driverId));

    } catch (error) {
      console.error('Error deleting driver:', error.message);
      // Handle error appropriately
    }
    console.log('driver id => ',driverId)

   }
   else{
    console.log('driver id => ',driverId)
   }
  };


  const handleEdit = (driverId) =>{
    navigation.navigate('UpdateDriver', {driverId,vehicleDriverData,})

  }


  const handleCall = (phoneNumber) => {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`); // Initiating the phone call
    }
  };


  
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <DriverDetailsHeading />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '5%', margin: 10, zIndex: 1, height: 42 }}>
          <VehicleSelector locationData={locationData} />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          {vehicleDriverData && vehicleDriverData.length > 0 ? (
            vehicleDriverData.map((item, index) => (
              <View key={index} style={modal_delete_driver_styles.map_main_box}>
                <View>
                  <Text style={modal_delete_driver_styles.map_driver_info_text}>
                    {item.name}
                  </Text>
                  <Text style={modal_delete_driver_styles.map_driver_number}>
                    {item.contact}
                  </Text>
                </View>
                <View style={modal_delete_driver_styles.flex_box}>
                  <TouchableOpacity style={driver_update_styles.driver_update}
                  onPress={()=> handleEdit(item._id)}
                  >
                    <MaterialIcons
                      name="edit"
                      size={24}
                      color={Theme.blue.primary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={driver_update_styles.driver_update}>
                    <MaterialIcons onPress={() => handleDeleteDriver(item._id)} name="delete" size={24} color={Theme.red} />
                  </TouchableOpacity>
                  <TouchableOpacity style={driver_update_styles.driver_update}>
                    <MaterialIcons onPress={() =>  handleCall(item.contact)} name="call" size={24} color={Theme.green} />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (  showAddDriver &&
           <View>
            <TouchableOpacity onPress={() => handleNagigate()} style={driver_update_styles.addButton}>
        <MaterialIcons name="add" size={24} color={Theme.white} />
      </TouchableOpacity>
           </View>
          )}
        </View>
      </View>
    </View>
  )
}

const driver_update_styles = StyleSheet.create({
  driver_update: {
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // Your container driver_update_styles
  },
  addButton: {
    backgroundColor: Theme.blue.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 30,
  },
  modalContainer: {
    backgroundColor: Theme.white,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginTop: 100,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Theme.gray,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addDriverButton: {
    backgroundColor: Theme.blue.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: Theme.white,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: Theme.red,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: Theme.white,
    fontWeight: 'bold',
  },
})

export default DriverModal
