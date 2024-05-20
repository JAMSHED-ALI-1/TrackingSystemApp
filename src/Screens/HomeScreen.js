import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import MainHeader from "../Component/MainHeader";
import CardListRenderer from "../Component/CardListRenderer";
import { fetchAllVehicleData, fetchLocationData } from "../HelperFunction/api";
import MainPage from "./HomeComponent/MainPage";
// import FrontPage from "../Pages/FrontPage/FrontPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import GpsFilter from "../Component/GpsFilter";
// import Geofence from "../Component/SideDrawerPages/Geofence";
// import SingleVehicleinfo from "../Component/ScrollupCards/SingleVehicleinfo";
// import Gps from "../Component/GPSFilter/Gps";
// import AdminContact from "./LoginComponent/AdminContact";
// import VehicleFilterButton from "../Component/VehicleFilterButton";
// import ScrollVehicleinfo from "../Component/ScrollupCards/ScrollVehicleinfo";
// import AllvehicleList from "../FilterNavButton/AllVehicleList";

function HomeScreen({ navigation }) {
  const [searchExpanded, setSearchExpanded] = useState(false),
    [allVehicleData, setAllVehicleData] = useState(null),
    [matchingDeviceIds, setMatchingDeviceIds] = useState([]),
    [searchText, setSearchText] = useState(""),
    [isLoading, setIsLoading] = useState(false),
    [locationData, setLocationData] = useState([]),
    fetchData = async (Operator) => {
      try {
        const data = await fetchAllVehicleData(Operator);
        setAllVehicleData(() => data);
        // console.log("All vehicle Search is ready!", allVehicleData);
      } catch (error) {
        console.error("Error fetching data from fetch data Search : ", error);
      }
    };
  const fetchDataBySearchText = async (searchText) => {
    try {
      const searchTextWithoutSpace = searchText.replace(/\s+/g, ''); // Remove whitespace from the search text
      const matchingIds = allVehicleData
        .filter(vehicle =>
          vehicle.reg_no.toLowerCase().replace(/\s+/g, '').includes(searchTextWithoutSpace.toLowerCase())
        )
        .flatMap(vehicle => vehicle.device_id) // Extract device IDs
      if (matchingIds?.length > 0) {
        // setMatchingDeviceIds(null);
        setMatchingDeviceIds(() => matchingIds);
        // console.log("Matching device IDs:", matchingIds?.length);
      } else {
        console.log("Vehicle not found.");
        setMatchingDeviceIds([]);
      }
    } catch (error) {
      console.error("Error fetching data by search text:", error);
    }
  };

  const fetchLocationDataForDevices = async (deviceId, pageNumber, page = 1) => {
    setIsLoading(true);
    if (deviceId) {
      try {
        console.log("DeviceId for Locations in home:  ", deviceId);
        // Clear the locationData state
        setLocationData(() => []);
        // console.log(locationData?.length);
        const responseData = await fetchLocationData(
          deviceId,
          pageNumber,
          page
        ); //fetch at api.js
        setLocationData([...responseData?.data]);
      } catch (error) {
        console.error("Error fetching location from API:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (matchingDeviceIds.length > 0) {
      console.log("matched devices : ", matchingDeviceIds.length)
      setIsLoading(true);
      fetchLocationDataForDevices(matchingDeviceIds);
    }
  }, [matchingDeviceIds]);

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

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <MainHeader
          navigation={navigation}
          searchExpand={searchExpanded}
          setSearchExpand={setSearchExpanded}
          allVehicleData={allVehicleData}
          setAllVehicleData={setAllVehicleData}
          matchingDeviceIds={matchingDeviceIds}
          setMatchingDeviceIds={setMatchingDeviceIds}
          searchText={searchText}
          setSearchText={setSearchText}
          fetchData={fetchData}
          fetchDataBySearchText={fetchDataBySearchText}
        />


      </View>

      {!searchExpanded &&
        // <GpsFilter navigation={navigation} />
        // <FrontPage navigation={navigation} allVehicleData={allVehicleData}/>
        <MainPage navigation={navigation} allVehicleData={allVehicleData} setSearchExpand={setSearchExpanded} />
      }

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        searchExpanded && locationData && <CardListRenderer locationData={locationData} allVehicleData={allVehicleData} />
        // console.log("Data sended from render:", locationData.length, allVehicleData?.length)
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    Width: 101,
    Height: 17,
  },
  user_text: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
    color: "#FFFFFF",
  },
  noDataView: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;
