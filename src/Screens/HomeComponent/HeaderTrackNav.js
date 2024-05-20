import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchComponent from "../../Component/SearchComponent";
import Theme from "../.././Theme/theme";
import SvgAlertIcon from '../../../assets/alert_icon.svg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const TrackHeader = ({ navigation,
    searchExpand, setSearchExpand, allVehicleData,
    setAllVehicleData, matchingDeviceIds, setMatchingDeviceIds,
    searchText, setSearchText, fetchData, fetchDataBySearchText }) => {

    const handleLeftButtonPress = () => {
        navigation.toggleDrawer();
        console.log("Left button pressed");
    },
        handleRightButtonPress = () => {
            // alert("Add button pressed!");
            const ids = allVehicleData?.flatMap((item) => item.device_id)
            if(ids.length>0){

                navigation.navigate("MainAlerts",{ 
                    'ids' : ids })
            }
            // console.log("Alert Button Pressed!", searchExpand);
            // console.log('ids' ,ids)
        },
        handleSearchFocus = () => {
            console.log("SearchBar focused");
            console.log(searchExpand);
        },
        handleSearchChange = (text) => {
            console.log("SearchBar text changed:", text);
            setSearchText(text);
        };

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


    useEffect(() => {
        // console.log("Clear Search Text:", searchText);
        if (searchText !== "") {
            setSearchText("");
            console.log("Clear Search Text:", searchText);
        }
    }, [searchExpand])

    // useEffect(()=>{
    //   // console.log('allvheicleData =>',allVehicleData)
    // })


    return (
        <View style={styles.container}>
            {!searchExpand && (
                <View style={styles.leftSection}>

                    {/* <TouchableOpacity onPress={handleLeftButtonPress}>
            <MaterialCommunityIcons name="menu" color={Theme.blue.primary} size={30} />
          </TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={handleLeftButtonPress}>
                        <Image
                            source={require("../../../assets/qiktrack-logo-icon.png")}
                            style={{ width: 35, height: 35 }}
                        />

                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("MainPage")}
                    >
                        <MaterialIcons name="keyboard-backspace" size={26} color={Theme.blue.primary} />
                    </TouchableOpacity>
                    <Text style={styles.logoText}>VehicleTracking</Text>
                </View>)
            }
            <View style={styles.rightSection}>
                {!searchExpand && (
                    <TouchableOpacity
                        onPress={handleRightButtonPress}
                        style={styles.iconButton}
                    >
                        <SvgAlertIcon width={30} height={30} fill={Theme.blue.primary} />
                    </TouchableOpacity>
                )}

                {allVehicleData && (
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => {
                            console.log("Search");
                        }}
                    >
                        <SearchComponent
                            onSearchFocus={handleSearchFocus}
                            onSearchChange={handleSearchChange}
                            setSearchExpand={setSearchExpand}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
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
        color: Theme.mykonos,
        borderWidth: 0,
    },
    rightSection: {
        height: "auto",
        flexDirection: "row",
        margin: 0,
    },
    iconButton: {
        marginRight: 10,
    },
    backButton: {
        // position: "absolute",
        // top: 55,
        // left: 10,
        // zIndex: 1,
        backgroundColor: Theme.opaque,
        padding: 3,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Theme.darkBlue,
        shadowColor: Theme.darkBlue,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
});

export default TrackHeader;
