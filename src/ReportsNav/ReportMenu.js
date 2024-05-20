
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native';
import card_styles from '../Styles/Reports.module';
import CustomDownloadButton from '../CustomeButton';
import {
  fetchAllVehicleData,
  getDailyReports,
  getStoppageReport,
  getSpeedReport,
  getIgnitionReport,
  getRelayReport
} from '../HelperFunction/api';
// import { useFocusEffect } from "@react-navigation/native";
// import RNFS from 'react-native-fs'; // Import react-native-fs
import AsyncStorage from '@react-native-async-storage/async-storage';
import DailyReportHtml from '../htmlToPdf/DailyReport';
import StoppageReportHtml from '../htmlToPdf/StoppageReport';
import SpeedReportHtml from '../htmlToPdf/SpeedReport';
import DailyReportSvg from '../../assets/daily_report.svg';
import SpeedReportSvg from '../../assets/speed_report.svg'
import StoppageReportSvg from '../../assets/stoppage_report.svg'
import DistanceReportSvg from '../../assets/distance_report.svg'
import ParkingONOffSvg from '../../assets/parking_on_off.svg'
import EngineOnOffSvg from '../../assets/engine_on_off.svg'
import IgnationReport from '../../assets/ignation_report.svg'
import GeofenceEntryExitSvg from '../../assets/geofence_entry_exit.svg'
import LocationTimeReportSvg from '../../assets/location_time_report.svg'

const Reports = ({ navigation, checked, operatorId, fromDate, toDate }) => {
  let deviceIdsArray;
  const [dailyData, setDailyData] = useState(null),
    [stoppageData, setStoppageData] = useState(null),
    [speedData, setSpeedData] = useState(null),
    [allVehicleData, setAllVehicleData] = useState(null),
    [deviceIds, setdeviceIds] = useState(null),
    [ignitionData, setIgnitionData] = useState(null), // State for ignition data
    [relayData, setRelayData] = useState(null),
    fetchData = async () => {
      try {
        const Operator = await AsyncStorage.getItem("operator_id");
        console.log("Operator:", Operator);
        if (Operator) {
          const data = await fetchAllVehicleData(Operator);
          return data?.flatMap((item) => item.device_id) || [];
        } else {
          console.log("No operator");
          return [];
        }
      } catch (error) {
        console.error("Error fetching operator vehicles data:", error);
        return [];
      }
    };

  const fetchDailyReports = async () => {
    try {
      console.log("Fetching daily reports...", operatorId, checked, fromDate, toDate);
      const data = await getDailyReports(operatorId, checked, fromDate, toDate);
      setDailyData(data);
      // showDownloadAlert('Daily Report', data);
      navigation.navigate('Daily', data);
    } catch (error) {
      console.error('Error fetching daily reports from ReportMenu:', error);
    }
  };

  const fetchStoppageReport = async () => {
    try {
      const deviceIdsArray = await fetchData();
      console.log("Fetching stoppage report...", deviceIdsArray, fromDate, toDate);
      if (deviceIdsArray && deviceIdsArray?.length > 0) {
        const data = await getStoppageReport(deviceIdsArray, fromDate, toDate);
        setStoppageData(data);
        showDownloadAlert('Stoppage Report', data);
        navigation.navigate('Stoppage', data)
      } else {
        console.log("No device Id");
      }
    } catch (error) {
      console.error('Error fetching stoppage report from ReportMenu:', error);
    }
  };

  const fetchSpeedReport = async () => {
    try {
      const deviceIdsArray = await fetchData();
      console.log("Fetching speed report...", deviceIdsArray?.length, fromDate, toDate);
      // console.log("Device Ids: " + deviceIdsArray)
      if (deviceIdsArray && deviceIdsArray.length > 0) {
        const data = await getSpeedReport(deviceIdsArray, fromDate, toDate);
        setSpeedData(data);
        showDownloadAlert('Speed Report', data);
        navigation.navigate('Speed', data)
      } else {
        console.log("No device Id");
      }
    } catch (error) {
      console.error('Error fetching speed report from ReportMenu:', error);
    }
  };


  const fetchIgnitionReport = async () => {
    try {
      const deviceIdsArray = await fetchData();
      console.log("Fetching ignition report...", deviceIdsArray?.length, fromDate, toDate);
      if (deviceIdsArray && deviceIdsArray.length > 0) {
        const data = await getIgnitionReport(deviceIdsArray, fromDate, toDate);
        setIgnitionData(data);
        showDownloadAlert('Ignition Report', data);
        navigation.navigate('Ignition', data)
      } else {
        console.log("No device Id");
      }
    } catch (error) {
      console.error('Error fetching ignition report from ReportMenu:', error);
    }
  };

  const fetchRelayReport = async () => {
    try {
      const deviceIdsArray = await fetchData();
      console.log("Fetching relay report...", deviceIdsArray?.length, fromDate, toDate);
      if (deviceIdsArray && deviceIdsArray.length > 0) {
        const data = await getRelayReport(deviceIdsArray, fromDate, toDate);
        setRelayData(data);
        showDownloadAlert('Relay Report', data);
        navigation.navigate('Relay', data)
      } else {
        console.log("No device Id");
      }
    } catch (error) {
      console.error('Error fetching relay report from ReportMenu:', error);
    }
  };

  const showDownloadAlert = (reportName, data) => {
    Alert.alert(
      'Download Reports',
      `Do you want to download the ${reportName}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log(`Download ${reportName}`, data?.length) }
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    console.log("Data : ", fromDate, toDate)
  }, [fromDate, toDate]);

  return (
    <SafeAreaView style={card_styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={card_styles.cardContainer}>
          <View style={card_styles.card}>
            <View style={card_styles.grid_box}>
              {/* Daily Report */}
              <Pressable onPress={() => { console.log("Daily Report Pressed : "); fetchDailyReports() }}>
                <View style={card_styles.box}>
                  <DailyReportSvg />

                  <Text style={card_styles.heading}>Daily Report</Text>
                </View>
              </Pressable>


              {/* Distance Report */}
              {/* <Pressable onPress={() => { console.log("Distance Pressed : "); }}>
                <View style={card_styles.box}>
                  <DistanceReportSvg />
                  <Text style={card_styles.heading}>Distance Report</Text>
                </View>
              </Pressable> */}

              {/* Speed Report */}
              <Pressable onPress={() => { fetchSpeedReport() }}>
                <View style={card_styles.box}>
                  <SpeedReportSvg />
                  <Text style={card_styles.heading}>Speed Report</Text>
                </View>
              </Pressable>

              {/*  Stoppage Report*/}
              <Pressable onPress={() => fetchStoppageReport()}>
                <View style={card_styles.box}>
                  <StoppageReportSvg />
                  <Text style={card_styles.heading}>Stoppage Report</Text>
                </View>
              </Pressable>

              {/* Ignition Report */}
              <Pressable onPress={() => { fetchIgnitionReport() }}>
                <View style={card_styles.box}>
                  <IgnationReport />
                  <Text style={card_styles.heading}>Ignition Report</Text>
                </View>
              </Pressable>

              {/* Parking Report */}
              {/* <Pressable onPress={() => { fetchRelayReport() }}>
                <View style={card_styles.box}>
                  <ParkingONOffSvg />
                  <Text style={card_styles.heading}>Parking ON/Off</Text>
                </View>
              </Pressable> */}

              {/* Engine On/Off */}
              {/* <Pressable onPress={() => navigation.navigate('Engine')}>
                <View style={card_styles.box}>
                  <EngineOnOffSvg />

                  <Text style={card_styles.heading}>Engine On/Off</Text>
                </View>
              </Pressable> */}



              {/* Geofence Entry/Exit */}
              {/* <Pressable
                onPress={() => navigation.navigate('GeofenceEntryExit')}
              >
                <View style={card_styles.box}>

                  <GeofenceEntryExitSvg />

                  <Text style={card_styles.heading}>Geofence Entry/Exit</Text>
                </View>
              </Pressable> */}

              {/*  Location/Time Report */}
              {/* <Pressable onPress={() => navigation.navigate('Location')}>
                <View style={card_styles.box}>

                  <LocationTimeReportSvg />

                  <Text style={card_styles.heading}>Location/Time Report</Text>
                </View>
              </Pressable> */}

            </View>
          </View>
        </View>
      </ScrollView>
      {/* {dailyData && (
        <View style={{ position: 'absolute', bottom: 100 }}>
          <CustomDownloadButton html={DailyReportHtml} jsonData={dailyData} />
        </View>
      )}
      {stoppageData && (
        <CustomDownloadButton html={StoppageReportHtml} jsonData={stoppageData} />
      )}
      {speedData && (
        <CustomDownloadButton html={SpeedReportHtml} jsonData={speedData} />
      )}
      {ignitionData && <CustomDownloadButton html={IgnitionReportHtml} jsonData={ignitionData} />}
      {relayData && <CustomDownloadButton html={RelayReportHtml} jsonData={relayData} />} */}
    </SafeAreaView>
  );
};

export default Reports;
