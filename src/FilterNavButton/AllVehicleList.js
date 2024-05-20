import { useEffect, useState, useCallback } from "react";
import { Text, View } from "react-native";
import VehicleFilterButton from "../Component/VehicleFilterButton";
import { fetchOperatorVehiclesData } from '../HelperFunction/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
const AllvehicleList = ({ setMaxSnapPoints, navigation }) => {
  const [runningStat, setRunningStat] = useState(null);




  const fetchData = async () => {
    try {
      const Operator = await AsyncStorage.getItem("operator_id");
      if (Operator) {
        const data = await fetchOperatorVehiclesData(Operator);
        // console.log("All vehicle ListAPI call : ");
        setRunningStat(data);
      } else {
        console.log("No operator");
      }
    } catch (error) {
      console.error("Error fetching operator vehicles data:", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      // Fetch data initially
      fetchData();

      // Fetch data every 6 seconds
      const interval = setInterval(fetchData, 5000);

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <VehicleFilterButton navigation={navigation} runningStat={runningStat} />
    </View>
  );
};

export default AllvehicleList;
