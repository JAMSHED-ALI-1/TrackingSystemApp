import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Theme from "../Theme/theme";
import SvgLanguage from '../../assets/language.svg';
import SvgWallet from '../../assets/wallet-Solid.svg';
// import SearchComponent from "./SearchComponent";
// import SvgAlertIcon from '../../assets/alert_icon.svg';
// import { MaterialCommunityIcons } from "@expo/vector-icons";


const MainHeader = ({ navigation, allVehicleData,
  setAllVehicleData, matchingDeviceIds, setMatchingDeviceIds,
  searchText, setSearchText, fetchData, fetchDataBySearchText }) => {

  const handleLeftButtonPress = () => {
    navigation.toggleDrawer();
    console.log("Left button pressed");
  },
    handleRightButtonPress = () => {
      alert("Add button pressed!");
    }

  useEffect(() => {
    // Fetch operator ID from AsyncStorage and fetch all vehicle data
    AsyncStorage.getItem("operator_id").then((Operator) => {
      if (Operator) {
        fetchData(Operator);
      } else {
        console.log("No operator!");
      }
    });
  }, []);

  useEffect(() => {
    if (searchText.trim() !== "") {
      // Implement debouncing here
      const debounceTimer = setTimeout(() => {
        fetchDataBySearchText(searchText.trim());
      }, 1000);

      // Clear the previous timeout if the search text changes within 1 second
      return () => clearTimeout(debounceTimer);
    }
  }, [searchText]);




  // useEffect(()=>{
  //   // console.log('allvheicleData =>',allVehicleData)
  // })


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" showHideTransition='fade' backgroundColor={Theme.extraLightBlue} />

      <View style={styles.leftSection}>

        {/* <TouchableOpacity onPress={handleLeftButtonPress}>
            <MaterialCommunityIcons name="menu" color={Theme.blue.primary} size={30} />
          </TouchableOpacity> */}
        <TouchableOpacity onPress={handleLeftButtonPress}>
          <Image
            source={require("../../assets/qiktrack-logo-icon.png")}
            style={{ width: 35, height: 35 }}
          />

        </TouchableOpacity>
        < Text style={styles.logoText}>Track EG</Text>
      </View>
      <View style={styles.rightSection}>

        {/* <TouchableOpacity
          style={styles.iconButton}
          onPress={() => 
          //   {
          //   console.log("Wallet Pressed!");
          // }
          navigation.navigate("Wallet")
        }
        >
          <SvgWallet width={26} height={26} fill={Theme.blue.primary} />
          <Text style={{ color: Theme.blue.primary, fontWeight: 400 }}>100 Rs</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          onPress={handleRightButtonPress}
          style={styles.iconButton2}>
          <SvgLanguage width={26} height={26} fill={Theme.blue.primary} />
        </TouchableOpacity> */}

      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: Theme.extraLightBlue,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  leftSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    marginTop: 0,
    borderWidth: 0,
  },
  logoText: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
    color: Theme.blue.primary,
    borderWidth: 0,
  },
  rightSection: {
    height: "auto",
    flexDirection: "row",
    margin: 0,
  },
  iconButton: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .5,
    borderRadius: 5,
    borderColor: Theme.blue.primary,
    padding: 5
  },
  iconButton2: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: .5,
    borderRadius: 5,
    padding: 5
  }
});

export default MainHeader;
