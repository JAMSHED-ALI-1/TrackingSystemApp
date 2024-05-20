import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../Theme/theme';
import Report from './ReportMenu';
import ReportHeader from '../Component/ReportPage/ReportHeader';
import DateRangeSelector from './DateRangeSelector';
import DashboardIcon from '../../assets/dashboard_icon.svg';



const ReportScreen = ({ navigation }) => {
    const [selectedType, setSelectedType] = useState('Yesterday');
    // const MainNav = navigation.getParent("MainTabNav");
    const [operatorId, setOperatorId] = useState('');
    const [checked, setChecked] = useState('current_day');
    const [fromDate, setFromDate] = useState('2024-01-01');
    const [toDate, setToDate] = useState('2024-01-02');
    // useEffect(() => {
    //     // console.log("State:", index);
    //     console.log('navigation : ', MainNav?.getId());
    //     // drawerNavigation?.toggleDrawer();
    //     // navigation.navigate("AdminPage");
    // }, [])

    useEffect(() => {
        // const today = new Date();
        // setSelectedDate(today);
        AsyncStorage.getItem('operator_id').then((token) => {
            if (token) {
                setOperatorId(() => token);
                // console.log(operatorId);
            } else {
                // navigation.navigate('LoginScreen');
                console.log('No operator');
            }
        });
    }, [])

    useEffect(() => {
        console.log("Report Screen date: =>", checked, operatorId, fromDate, toDate);
    }, [fromDate, toDate, checked])


    useEffect(() => {
        switch (checked) {
            case 'current_day':
                setFromDate(getFormattedDate(new Date()));
                setToDate(getFormattedDate(new Date()));
                break;
            case 'previous_day':
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                setFromDate(getFormattedDate(yesterday));
                setToDate(getFormattedDate(yesterday));
                break;
            case 'week':
                const today = new Date();
                const firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()); // Start of the current week (Sunday)
                setFromDate(getFormattedDate(firstDayOfWeek));
                setToDate(getFormattedDate(new Date())); // Current date
                break;
            default:
                break;
        }
    }, [checked]);


    // Function to format date as YYYY-MM-DD
    const getFormattedDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const Page = () => (
        <View style={{ flex: 1, borderWidth: 0 }}>
            {/* <View style={{ width: "100%", height: 40 }}>
                <VehicleSelector />
                <Text>{ }</Text>
            </View> */}
            <View style={{ marginTop: 10 }}>
                <DateRangeSelector setSelectedType={setSelectedType} checked={checked} setChecked={setChecked} setFromDate={setFromDate} setToDate={setToDate} fromDate={fromDate} toDate={toDate} />
            </View>
            <Report checked={checked}
                operatorId={operatorId}
                fromDate={fromDate}
                toDate={toDate}
                navigation={navigation} />
        </View>
    );



    return (
        <View style={{ flex: 1, borderWidth: 0 }}>
            {/* <ReportNavigator /> */}
            <View style={{ flex: 1, marginVertical: 15, width: '97%', alignSelf: 'center', borderWidth: 0 }}>
                <ReportHeader />

                <View style={{ flex: 1 }}>
                    <Page />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        position: "absolute",
        bottom: -5,
        left: 4.5,
        right: 4.5,
        borderRadius: 40,
        borderWidth: 0,
        zIndex: 1,
        flexDirection: 'row',
        backgroundColor: Theme.white,
        elevation: 10
    },
    labelText: {
        fontSize: 9,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        color: Theme.blue.primary,
    },
    inActivelabelText: {
        fontSize: 9,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        color: Theme.greyDark,
    },
});

export default ReportScreen;