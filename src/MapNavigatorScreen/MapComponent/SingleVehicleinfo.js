import React, { useEffect, useState } from 'react';
import { View, Text, Linking, ScrollView, Alert } from 'react-native'
import LocationSvg from '../../../assets/vehicle_info_location.svg';
import LocationArrowSvg from '../../../assets/location_arrow.svg';
import single_vehicle_styles from '../../Styles/ScrollupCards/SingleVehicleinfo.module'
import Theme from '../../Theme/theme';
import ShareSvg from '../../../assets/share_filled.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Svgpoly from "../../../assets/polyline.svg";
import { CustomeModal } from '../../Component/Modal/Modal';
import ShareLocation from '../../Component/SideDrawerPages/ShareLocation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Svgpoly1 from "../../../assets/polyline1.svg";
// import { LinearGradient } from 'expo-linear-gradient';
import MapDriverInfo from '../../Component/ScrollupCards/MapDriverInfo';
// import DriverInfo from './DriverInfo';
import { fetchVehicleDriver } from '../../HelperFunction/api'
import HistoryIcon from '../../../assets/history_icon.svg'
const SingleVehicleinfo = ({ navigation,
  locData,
  vehiclesData,
  odometer,
  toggleBottomSheetVisibility,
  itineraryData,
  togglePoly
}) => {
  const curLoc = {
    latitude: locData?.location?.latitude,
    longitude: locData?.location?.longitude
  };
  const [modalVisible, setModalVisible] = useState(false),
    [driverModalVisible, setDriverModalVisible] = useState(false),
    [showAddressView, setShowAddressView] = useState(true);

    // console.log('singlevehicle.js locd =>>',locData.imei)
    // useEffect(()=>{
      const imei = locData?.imei;
    // },[locData])

  const toggleView = () => {
    setShowAddressView(!showAddressView);
  };
  const handlePress = (item) => {
    // Update the modal content based on the button press
    // Show the modal
    setModalVisible(true);
  };
  const handleModalClose = () => {
    // Hide the modal when it's closed
    setModalVisible(false);
  };
  const handleMarkerPress = () => {
    // console.log("Moved to map");
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${curLoc.latitude},${curLoc.longitude}`;
    Linking.openURL(googleMapsUrl);
  };

  const handleDriverModalClose = () => {
    // Hide the modal when it's closed
    setDriverModalVisible(false);
  };
  const handleDriverMarkerPress = () => {
    // console.log("Moved to map");
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${curLoc.latitude},${curLoc.longitude}`;
    Linking.openURL(googleMapsUrl);
  };

  // useEffect(() => {
  //   console.log("Loc Data : ", vehiclesData?.device_id[0]);
  // }, [vehiclesData])

  const handlePhonePress = async () => {
    try {
      if (vehiclesData?.device_id) {
        const driverData = await fetchVehicleDriver(vehiclesData?.device_id);

        if (driverData && driverData.length > 0) {
          const driverNumber = driverData[0].contact || null;

          if (driverData[0].contact) {
            const phoneUrl = `tel:${driverNumber}`;
            Linking.canOpenURL(phoneUrl)
              .then((supported) => {
                if (supported) {
                  return Linking.openURL(phoneUrl);
                } else {
                  console.warn("Cannot open phone dialer");
                }
              })
              .catch((error) =>
                console.error("Error opening phone dialer:", error)
              );
          }
        } else {
          // If no driver data found
          Alert.alert("No Contact found!");

        }
      }
    } catch (error) {
      // Log the error
      console.error("Error fetching driver data:", error.message);
    }
  };


  return (
    <View style={single_vehicle_styles.main_box}>
      <View style={single_vehicle_styles.flex_box}>

        <View style={single_vehicle_styles.child_flex_box}>
          <TouchableOpacity onPress={toggleBottomSheetVisibility()} style={single_vehicle_styles.button_box}>
            <LocationSvg height={24} width={24} fill={Theme.blue.primary} />
            <Text style={single_vehicle_styles.text}>Nearby</Text>
          </TouchableOpacity>
        </View>

        <View style={single_vehicle_styles.child_flex_box}>
          <TouchableOpacity onPress={() => {
          // { togglePoly() }
          if (locData?.location) {
            navigation.navigate('History', {
              vehiclesData,
              imei,
            })
          }
        }
          
        } style={single_vehicle_styles.button_box}>
            <HistoryIcon width={24} height={24} fill={Theme.blue.primary} />
            <Text style={single_vehicle_styles.text}>History</Text>
          </TouchableOpacity>
        </View>

        <View style={single_vehicle_styles.child_flex_box}>
          <TouchableOpacity onPress={() => handleMarkerPress()} style={single_vehicle_styles.button_box}>
            <LocationArrowSvg height={24} width={24} fill={Theme.blue.primary} />
            <Text style={single_vehicle_styles.text}>Navigate</Text>
          </TouchableOpacity>


        </View>

        <View style={single_vehicle_styles.child_flex_box}>
          <TouchableOpacity onPress={() => { setModalVisible(() => !modalVisible) }} style={single_vehicle_styles.button_box}>
            <ShareSvg width={24} height={24} fill={Theme.blue.primary} />
            <Text style={single_vehicle_styles.text}>Share</Text>
          </TouchableOpacity>

        </View>

        <View style={single_vehicle_styles.child_flex_box}>
          <TouchableOpacity onPress={() => handlePhonePress()} style={single_vehicle_styles.button_box}>
            <MaterialIcons name='call' size={24} color={Theme.blue.primary} />
            <Text style={single_vehicle_styles.text}>Driver</Text>
            {/* <DriverInfo driver={driver} /> */}
          </TouchableOpacity>

        </View>

      </View>

      <View style={single_vehicle_styles.hr_line}></View>

      {/* 2nd flex box */}

      <View style={{ height: '60%', marginTop: 0, borderWidth: 0 }}>
        {/* <ScrollView horizontal style={{ borderWidth: 0, marginBottom: 10 }} showsHorizontalScrollIndicator={false}> */}
        {/* {showAddressView ? ( */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 0 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

                <Text style={single_vehicle_styles.heading_text}>Address : </Text>
                {/* <TouchableOpacity onPress={toggleView} style={{ borderWidth: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , marginBottom:10}} >
                  <Text style={{ fontWeight: 600, color: Theme.blue.secondary }}>Overview</Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color={Theme.blue.secondary}
                  />
                </TouchableOpacity> */}
              </View>
              <Text>
                {locData?.location?.address || "No address available."}
              </Text>
            </View>
          </View>

        {/* ) : ( */}
          {/* <View style={{ borderWidth: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <Text style={single_vehicle_styles.heading_text}>Today Overview : </Text>
              <TouchableOpacity onPress={toggleView} style={{ borderWidth: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , marginBottom:10}}>
                <Text style={{ fontWeight: 600, color: Theme.blue.secondary }}>Address</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={Theme.blue.secondary}
                />
              </TouchableOpacity>
            </View>
            <View style={[single_vehicle_styles.flex_box, { justifyContent: 'space-between', }]}>
              <View style={single_vehicle_styles.child_sec_box}>
                <Text style={single_vehicle_styles.child_flex_box_text}>Distance</Text>
                <Text style={single_vehicle_styles.sec_value_text}>{locData?.itinerary?.distanceCovered ?? "No Data."}</Text>
              </View>
              <View style={single_vehicle_styles.child_sec_box}>
                <Text style={single_vehicle_styles.running_time_heading_text}>Running Time</Text>
                <Text style={single_vehicle_styles.sec_value_text}>{locData?.itinerary?.driveTime ?? "No Data."}</Text>
              </View>
              <View style={single_vehicle_styles.child_sec_box}>
                <Text style={single_vehicle_styles.stopped_time_heading_text}>Stopped Time</Text>
                <Text style={single_vehicle_styles.sec_value_text}>{locData?.itinerary?.stoppageTime ?? "No Data."}</Text>
              </View>
            </View>
          </View>
        )} */}
        {/* </ScrollView> */}
      </View>

      <View>
        <CustomeModal
          visible={modalVisible}
          onPressOverlay={handleModalClose}
          onRequestClose={handleModalClose}
          style={single_vehicle_styles.modal_box}
        // backgroundColor={{ backgroundColor: "white" }}
        >
          <ShareLocation locationData={locData} vehiclesData={vehiclesData} />
        </CustomeModal>
      </View>
      <CustomeModal
        visible={driverModalVisible}
        onPressOverlay={handleDriverModalClose}
        onRequestClose={handleDriverModalClose}
        // style={{ borderColor: "red", borderWidth: 5 }}
        // backgroundColor={{ backgroundColor: "white" }}
        style={{ backgroundColor: 'white', height: '20%', borderWidth: 1, backgroundColor: Theme.white }}
      // height={{'20%'}}
      // ma
      >
        <MapDriverInfo navigation={navigation} locDataId={vehiclesData} />
      </CustomeModal>
    </View >
  )
}

export default SingleVehicleinfo;