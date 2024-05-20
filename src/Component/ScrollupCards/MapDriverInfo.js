import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
// import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import DriverInfo from "./DriverInfo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../Styles/ScrollupCards/MapDriverInfo.module";
import { fetchVehicleDriver } from '../../HelperFunction/api';

const MapDriverInfo = ({ locDataId, navigation }) => {

  const [driverData, setDriverData] = useState([]);

  const fetchData = async (Id) => {
    try {
      console.log("IdData", Id);
      const data = await fetchVehicleDriver(Id);
      setDriverData(data);
      console.log(data, 'data')
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };


  useEffect(() => {

    console.log(locDataId, "locData");
    if (locDataId) {
      //eg:  "vehicle_id": "6596be4b08c8331e5ff13522",
      // fetchData('6596be4b08c8331e5ff13522');
      fetchData(locDataId.device_id[0]);
    }
  }, [locDataId]);


  return (
    <View style={styles.driver_container}>
      <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 18, marginBottom: 20, fontWeight: 700 }}>
        Driver's
      </Text>
      <View contentContainerStyle={styles.contentContainer}>
        {driverData.map((driver, index) => (
          <DriverInfo key={index} driver={driver} count={index + 1} length={driverData.length} />
        ))}

        {driverData.length <= 0 && (
          <TouchableOpacity onPress={() => navigation.navigate('AddDriver', { locDataId })} style={styles.add_driver_card}>
            <MaterialIcons name="add-box" size={20} color="#000" />
            <Text>Add Driver</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MapDriverInfo;
