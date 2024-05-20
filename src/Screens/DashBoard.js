import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text } from 'react-native';
import DashboardMain from '../Component/Dashboard/DashboardInfo/Dashboard'
import { fetchOperatorVehiclesData } from '../HelperFunction/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
// import ScrollVehicleinfo from "../Component/ScrollupCards/ScrollVehicleinfo";
// import BottomSheet from "../Component/BottomSheet/BottomSheet";


const Dashboard = ({ navigation }) => {
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
        <View >
            <DashboardMain runningStat={runningStat} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'dodgerblue',
        // borderWidth: 2,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});


export default Dashboard;
