//CarList.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import OwnerCard from "./Card";
import Theme from "../Theme/theme";
import { fetchLocationData } from "../HelperFunction/api";
import "../HelperFunction/globalVariables";
import { FlatList } from "react-native-gesture-handler";
// import { BottomSheetFlatList, RefreshControl } from "@gorhom/bottom-sheet";
// import { fetchAllVehicleData } from "../HelperFunction/api";
// import { formatTimestamp } from '../HelperFunction/TimeAndDateParser'
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import MainCard from "./MainCard";

const CardList = ({ allVehicleData, navigation, filterData }) => {

  const list = useRef(null),
    [isLoading, setIsLoading] = useState(true),
    [moreLoading, setMoreLoading] = useState(false),
    [error, setError] = useState(null),
    [lcData, setlcData] = useState([]),
    [currentPage, setCurrentPage] = useState(1),
    [pageSize, setPageSize] = useState(200),
    [deviceIds, setdeviceIds] = useState(null),
    [viewPortDevice, setPortDevice] = useState(null),
    [visibleItemId, setVisibleItemId] = useState(null),
    // [allVehicleData, setAllVehicleData] = useState(null),
    onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
      // const viewDeviceIdsArray = viewableItems.flatMap(item => item.item.device_id);
      // const deviceIdsArray = changed.flatMap(item => item.item.device_id);
      const viewDeviceIdsArray = viewableItems.flatMap(item => item?.item?._id);
      const deviceIdsArray = changed.flatMap(item => item?.item?._id);
      setPortDevice(viewDeviceIdsArray);
      fetchLocationFromApi(viewPortDevice, viewDeviceIdsArray?.length);
    }, []),
    _viewabilityConfig = {
      itemVisiblePercentThreshold: 20
    },
    // =================================================================>
    fetchLocationFromApi = async (deviceId, pageNumber, page = 1) => {
      if (deviceId?.length > 0) {
        try {
          // console.log(deviceId.length);
          const responseData = await fetchLocationData(
            deviceId,
            pageNumber,
            page
          ); //fetch at api.js
          if (lcData && responseData?.data) {
            // console.log("location fetched called.", deviceId,
            //   pageNumber,
            //   page);
            responseData?.data?.forEach((newItem) => {
              const existingItemIndex = lcData.findIndex((item) => item._id === newItem._id);
              if (existingItemIndex !== -1) {
                // Update existing entry
                lcData[existingItemIndex] = newItem;
              } else {
                // Add new entry
                lcData.push(newItem);
              }
            });
            setlcData([...lcData]);
            setMoreLoading(false);
          } else {
            setlcData([...responseData?.data]);
            setMoreLoading(false);
          }
        } catch (error) {
          console.error("Error fetching location from API in CardList.js:", error);
        }
      }
    },

    // =========================================================================>
    // renderItem = ({ item }) => {
    //   const matchingLcData = lcData?.find(data => data._id === item._id);
    //   if (matchingLcData) {
    //     // Find the corresponding vehicle data using the device_id
    //     const correspondingVehicleData = allVehicleData.find(vehicle => vehicle.device_id.includes(matchingLcData._id));
    //     return (
    //       <OwnerCard key={item._id} responseData={correspondingVehicleData} lcData={matchingLcData} />
    //       // <MainCard key={item._id} responseData={correspondingVehicleData} lcData={matchingLcData} />
    //     );
    //   } else {
    //     return null;
    //   }
    // },
    renderItem = ({ item }) => {
      if (!filterData) {
        // Render complete data if filterData is null or empty
        const matchingLcData = lcData.find(data => data._id === item._id);
        if (matchingLcData) {
          const correspondingVehicleData = allVehicleData.find(vehicle => vehicle.device_id.includes(matchingLcData._id));
          return (
            <OwnerCard key={item._id} responseData={correspondingVehicleData} lcData={matchingLcData} />
          );
        } else {
          return null;
        }
      } else {
        // Render data only for devices present in filterData
        if (filterData.includes(item._id)) {
          const matchingLcData = lcData.find(data => data._id === item._id);
          if (matchingLcData) {
            const correspondingVehicleData = allVehicleData.find(vehicle => vehicle.device_id.includes(matchingLcData._id));
            return (
              <OwnerCard key={item._id} responseData={correspondingVehicleData} navigation={navigation} lcData={matchingLcData} />
            );
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    },
    loadMoreItem = () => {
      setMoreLoading(true);
      console.log('Infinite Scroll is called form loadMoreItem : ', currentPage);
      const maxSize = Math.floor(deviceIds.length / pageSize);
      if (currentPage <= maxSize) {
        let cP = currentPage + 1;
        setCurrentPage(cP);
        fetchLocationFromApi(deviceIds, pageSize, currentPage);
        // console.log("load Should work as Expected if this is Printed :");
      } else {
        setMoreLoading(false);
        setCurrentPage(currentPage);
        // console.log("no more pages to load :")
      }
      // fetchLocationFromApi(deviceIds, pageSize, currentPage);
    };

  // loadMoreItem = () => {
  //   setMoreLoading(true);
  //   // console.log('Infinite Scroll is called form loadMoreItem : ', currentPage);
  //   const maxSize = Math.floor(deviceIds.length / pageSize);
  //   if (currentPage <= maxSize) {
  //     let nextPageDeviceIds = deviceIds.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  //     setCurrentPage(currentPage + 1);
  //     fetchLocationFromApi(nextPageDeviceIds, pageSize, currentPage);
  //   } else {
  //     setMoreLoading(false);
  //     setCurrentPage(currentPage);
  //   }
  // };

  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);



  useFocusEffect(
    useCallback(() => {
      // setAllVehicleData(data);
      // console.log("All data from CardList", allVehicleData);
      setdeviceIds(() => allVehicleData?.flatMap((item) => item.device_id));
    }, [allVehicleData]));


  useFocusEffect(
    useCallback(() => {
      // console.log("useEffect change for current Page called.");
      fetchLocationFromApi(deviceIds, pageSize, currentPage);
    }, [currentPage]));

  // ================================================================>
  // instead of using  useEffect
  useFocusEffect(
    useCallback(() => {
      if (deviceIds && viewPortDevice) {
        const fetchDataAndSetInterval = async () => {
          await fetchLocationFromApi(viewPortDevice, viewPortDevice.length);
        };
        // Initial fetch after a 30-second delay
        // =====================================================================>
        fetchDataAndSetInterval();
        const intervalId = setInterval(fetchDataAndSetInterval, 5000);
        // Cleanup function to clear the interval and timeout when the component unmounts or when deviceIds change
        return () => {
          clearInterval(intervalId);
          // console.log("cleared interval  for fetchDataAndSetInterval: 5000ms");
        };
        // =====================================================================>      
      } else {
        fetchLocationFromApi(deviceIds, pageSize, currentPage);
      }
    }, [deviceIds, viewPortDevice])
  );

  // useEffect(() => { console.log("Filtered Data : ", filterData) }, [filterData]);


  return (
    <View style={{ flex: 1 }}>

      {isLoading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color={Theme.red}
        />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          {!filterData || filterData?.length > 0 ? (
            <FlatList
              ref={list}
              style={styles.container}
              nestedScrollEnabled={true}
              initialNumToRender={6}
              data={lcData} // Render items based on lcData
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              onEndReachedThreshold={1} // How close to the end (in fractional form) the user must be before onEndReached is called
              onEndReached={loadMoreItem}  // Triggered when the end of the list is reached
              ListFooterComponent={() => moreLoading && <ActivityIndicator style={{ marginBottom: 20 }} size="large" color={Theme.blue.primary} />} // Loading indicator at the bottom
              viewabilityConfig={_viewabilityConfig}
              onViewableItemsChanged={onViewableItemsChanged}
              maxToRenderPerBatch={15}
              scrollEnabled={true}
            />
          ) : (
            <View style={{ flex: 1, alignItems: "center", marginTop: '10%' }}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>No vehicle !</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.transparent,
    marginTop: 10,
    marginBottom: 53
  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: Theme.red,
    fontSize: Theme.font.medium,
  },
  contentContainer: {
    backgroundColor: Theme.red,
  },
});

export default CardList;
