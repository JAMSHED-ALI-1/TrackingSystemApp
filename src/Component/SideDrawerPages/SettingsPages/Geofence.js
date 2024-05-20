import { View, Text, Pressable, Alert } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import geofence_styles from '../../../Styles/SideDrowerPages/Geofence.module'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Theme from '../../../Theme/theme'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import SwitchBox from '../SwitchBox'
import { deleteGeofences, getAllGeofences, } from '../../../HelperFunction/api';
import { reverseGeocodeCoordinates } from '../../../HelperFunction/directions'
import AsyncStorage from "@react-native-async-storage/async-storage";


const Geofence = ({ navigation }) => {
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     id: 1,
  //     name: 'Gurugram Parking',
  //     type: 'Circular',
  //     address: '2/245 Lal bhagh eyx road new delhi, 221020',
  //     entry_time: '11 : 01 PM',
  //     exit_time: '06 : 00 PM',
  //   },
  // ]
  const [enableAll, setEnableAll] = useState(false)
  const [notificationStates, setNotificationStates] = useState({
    cardGeofence: false,
    // ignitionOn: false,
    // ignitionOff: false,
    // overSpeed: false,
    // harshBreaking: false,
    // sharpTurn: false,
    // geofenceEntry: false,
    // geofenceExit: false,
  })

  const handleEnableAllToggle = () => {
    const newEnableAllState = !enableAll
    setEnableAll(newEnableAllState)

    setNotificationStates((prevState) => {
      const updatedStates = {}
      Object.keys(prevState).forEach((key) => {
        updatedStates[key] = newEnableAllState
      })
      return updatedStates
    })
  }

  const handleSwitchBoxToggle = (notificationType) => {

    setNotificationStates((prevState) => ({
      ...prevState,
      [notificationType]: !prevState[notificationType],
    }))
  }


  // Function to fetch data from API
  // Inside fetchData function
  const fetchData = async (operatorId) => {
    try {
      let response = await getAllGeofences(operatorId);
      // console.log("API Response:", response); // Log the API response
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (item) => {
    console.log("Delete item : ", item._id, item);

    // Show confirmation dialog
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              let res = await deleteGeofences([item._id])
              console.log("Delete Response", res)
              alert(res.message);
              AsyncStorage.getItem("operator_id").then((Operator) => {
                console.log("Operator ID:", Operator); // Log the operator id
                if (Operator) {
                  fetchData(Operator);
                } else {
                  console.log("No operator!");
                }
              });
            } catch (err) {
              console.log("Error deleting item from Geofence.js : ", err);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    const response = await reverseGeocodeCoordinates(latitude, longitude);
    if (response.status === 'success') {
      return response.address;
    } else {
      console.error("Error getting address:", response.message);
      return "Address not found";
    }
  };

  // Inside useEffect
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("operator_id").then((Operator) => {
        console.log("Operator ID:", Operator); // Log the operator id
        if (Operator) {
          fetchData(Operator);
        } else {
          console.log("No operator!");
        }
      });
    }, [])
  );

  // useEffect(() => {
  //   console.log("Data from useEffect : ", data);
  // }, [data])

  // useEffect(() => {
  //   console.log("Data from useEffect : ", data);

  //   // Call getAddressFromCoordinates for each data item if address is not present
  //   data.forEach(async (item, index) => {
  //     // Check if the address is not already present
  //     if (!item.address) {
  //       const address = await getAddressFromCoordinates(item.center.coordinates[1], item.center.coordinates[0]);
  //       setData(prevData => {
  //         const newData = [...prevData];
  //         newData[index] = { ...newData[index], address };
  //         return newData;
  //       });
  //     }
  //   });

  // }, [data]);

  return (
    <View >
      <View style={geofence_styles.heading_box}>
        <View style={geofence_styles.heading_left_box}>
          <TouchableOpacity onPress={() =>{
            // navigation.openDrawer()
            navigation.navigate('MainPage')
          }}>
            <Ionicons name="arrow-back" size={24} color={Theme.black} />
          </TouchableOpacity>
          <Text style={geofence_styles.heading_text}>Geofence</Text>
        </View>

        {/* <View style={geofence_styles.heading_left_box}>
          <Text>Apply for all</Text>
          <SwitchBox value={enableAll} onValueChange={handleEnableAllToggle} />
        </View> */}
      </View>
      <ScrollView style={geofence_styles.main_box}>

        <View style={geofence_styles.hr_line}></View>
        {data?.length > 0 &&
          data.map((item, index) => (
            <View key={index} style={geofence_styles.geo_card}>
              <View style={geofence_styles.flex_box}>
                <Text style={geofence_styles.nameText}>
                  {index + 1}.  {item?.name}
                </Text>
                {/* <View style={{ padding: 0 }}>
                  <SwitchBox
                    value={notificationStates[`cardGeofence_${index}`]}
                    onValueChange={() => handleSwitchBoxToggle(`cardGeofence_${index}`)}
                  />

                </View> */}
              </View>
              <View style={geofence_styles.type_flex_box}>
                <Text style={geofence_styles.text}>Address : </Text>
                <View style={geofence_styles.address_box}>
                  <Text style={geofence_styles.addressText}>
                    {item?.address || 'Loading...'}
                  </Text>
                </View>
              </View>

              {/* <View style={geofence_styles.flex_box}>
                <Text style={geofence_styles.text}>
                  Entry Time : {item.entry_time}
                </Text>
                <Text style={geofence_styles.text}>
                  Exit Time : {item.exit_time}
                </Text>
              </View> */}

              <View style={geofence_styles.option_box}>
                <View style={geofence_styles.flex_box1}>
                  <TouchableOpacity onPress={() => {
                    // console.log("data send : ", item);
                    navigation.navigate("GeoFenceMap", { item })
                  }
                  } style={geofence_styles.flex_box}>
                    {/* <MaterialIcons
                      name="edit"
                      size={15}
                      color={Theme.secondary}
                    /> */}
                    <Text style={geofence_styles.option_text}>View On Map</Text>
                  </TouchableOpacity>

                  <TouchableOpacity

                    onPress={() => handleDelete(item)}
                    style={[geofence_styles.flex_box, { alignItems: 'center', gap: 5 }]}
                  >
                    <MaterialIcons
                      name="delete"
                      size={18}
                      color={Theme.secondary}
                    />
                    <Text style={geofence_styles.option_text}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      <View style={{position:'absolute', bottom:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('GeofenceCreate')} style={geofence_styles.create_box}>
        <MaterialIcons name='add-box' size={24} color={Theme.white} />
      </TouchableOpacity>
    </View>
    <View style={geofence_styles.geo_box}>
    <Text style={geofence_styles.geo_text}>Add Geofence</Text>

    </View>
     </View>
  )
}

export default Geofence
