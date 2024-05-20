import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DriverVehicleReportHeader from './DriverVehicleReportHeader';
import VehicleSelector from '../../Component/VehicleSelector';
import DateRangeSelector from '../DateRangeSelector';
import ignition_report_styles from '../../Styles/ReportsNav/IgnitionReport/IgnitionReport.module';
import modal_gps_styles from '../../Styles/DeviceDetails/GpsModal.module';
import DriverVehicleMap from './DriverVehicleMap';
import distance_report_styles from '../../Styles/ReportsNav/DistanceTimeReport/DistanceReport.module';
import Footer from "../Footer";
import Theme from "../../Theme/theme";

const DriverVehicleReport = ({ navigation, route }) => {
  const { reportData } = route.params || {};
  return (
    <View style={{ flex: 1, }}>
      <View style={distance_report_styles.distance_main_box}>
        <DriverVehicleReportHeader />
        {/* <View style={distance_report_styles.vehicle_select_box}>
          <VehicleSelector />
        </View>
        <DateRangeSelector /> */}

        <View style={ignition_report_styles.ignition_report_text_box}>
          <Text style={ignition_report_styles.ignition_report_text}>
            Driver Vehicle Report
          </Text>
          <View style={modal_gps_styles.details_hr_line}></View>
          <DriverVehicleMap />
        </View>
      </View>
      <View style={styles.footerBox}>
        <Footer download={() => console.log("download pressed.")} viewGraph={() => console.log("viewGraph pressed.")} />
      </View>

    </View>
  )
}

export default DriverVehicleReport;

const styles = StyleSheet.create({
  footerBox: {
    flex: 1,
    position: "absolute",
    bottom: 0, width: "100%",
    backgroundColor: Theme.offWhite,
    borderWidth: 0,
    paddingHorizontal: 10,
    elevation: 5,
  },
});