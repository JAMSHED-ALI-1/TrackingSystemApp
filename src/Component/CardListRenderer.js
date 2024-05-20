import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
// import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import Card from "./Card";
import { fetchLocationData } from "../HelperFunction/api";
import Theme from "../Theme/theme";



const CardListRenderer = ({ locationData, allVehicleData }) => {
    const [lcData, setLcData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log("cardList Rendrer Mounted.", locationData?.length, allVehicleData?.length);
    }, [locationData])

    // useEffect(() => {
    //     fetchLocationDebounced(deviceIds);
    // }, [deviceIds]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetchLocationDebounced(deviceIds);
    //     }, 6000);

    //     return () => clearInterval(interval);
    // }, [deviceIds]);

    // const fetchLocationFromApi = async (deviceIds) => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const responseData = await Promise.all(deviceIds.map(deviceId =>
    //             fetchLocationData(deviceId, 100, 1)
    //         ));
    //         const newLcData = responseData.flatMap(response => response.data);
    //         setLcData(newLcData);
    //     } catch (error) {
    //         setError("Unable to load. An error occurred.");
    //         console.error("Error fetching location from API:", error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const renderItem = ({ item }) => {
        // Find the corresponding vehicle data using the device_id
        const correspondingVehicleData = allVehicleData.find(vehicle => vehicle.device_id.includes(item._id));
        if (correspondingVehicleData) {
            return <Card key={item._id} responseData={correspondingVehicleData} lcData={item} />;
        } else {
            return null;
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={locationData}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.transparent,
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
    flatList: {
        flex: 1,
        // paddingBottom: 50,
        marginBottom: 60
    },
});

export default CardListRenderer;
