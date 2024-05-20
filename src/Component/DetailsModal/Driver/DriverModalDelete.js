import { View, Text, StyleSheet } from "react-native";
import React from "react";
import DriverDetailsHeading from "./DriverDetailsHeading";
import VehicleSelector from "../../VehicleSelector";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import modal_gps_styles from "../../../Styles/DeviceDetails/GpsModal.module";
import modal_delete_driver_styles from "../../../Styles/DeviceDetails/DriverDeleteModal.module";
const DriverModalDelete = () => {
  const driver = [
    {
      id: 1,
      driver_info: "driver 1",
      name: "ravi Kumar",
      phone_number: "1234567890",
    },
    {
      id: 2,
      driver_info: "driver 1",
      name: "ravi",
      phone_number: "1234567890",
    },
  ];
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <DriverDetailsHeading />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: "5%", margin: 10, zIndex: 1 }}>
          <VehicleSelector />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>Details</Text>
          <View style={modal_gps_styles.details_hr_line}></View>
          {/* <View> */}
          {driver.map((item) => (
            <View key={item.id} style={modal_delete_driver_styles.map_main_box}>
              <View>
                <Text style={modal_delete_driver_styles.map_driver_info}>
                  {item.driver_info}
                </Text>
                <Text style={modal_delete_driver_styles.map_driver_info_text}>
                  {item.name}
                </Text>
                <Text style={modal_delete_driver_styles.map_driver_number}>
                  {item.phone_number}
                </Text>
              </View>
              <View style={modal_delete_driver_styles.map_driver_delete_box}>
                <MaterialCommunityIcons name="delete" size={30} color="#000" />
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DriverModalDelete;
