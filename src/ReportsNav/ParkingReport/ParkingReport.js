import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ParkingReportHeader from './ParkingReportHeader';
import ignition_report_styles from '../../Styles/ReportsNav/IgnitionReport/IgnitionReport.module';
import daily_report_styles from '../../Styles/ReportsNav/DailyReport/DailyReports.module';
import modal_gps_styles from '../../Styles/DeviceDetails/GpsModal.module';
import DateRangeSelector from '../DateRangeSelector';
import VehicleSelector from '../../Component/VehicleSelector';
import ParkingReportMap from './ParkingReportMap';
import Footer from "../Footer";
import Theme from "../../Theme/theme";

const ParkingReport = ({ navigation, route }) => {
  const { reportData } = route.params || {};
  return (
    <View style={{ flex: 1, }}>
      <View style={ignition_report_styles.ignition_report_main_box}>
        <ParkingReportHeader />
        {/* <View style={daily_report_styles.vehicle_select_box}>
          <VehicleSelector />
        </View>
        <View style={daily_report_styles.toggle_btn_box}>
          <DailyToggleButton />
        </View> */}
        <View style={ignition_report_styles.ignition_report_text_box}>

          <Text style={ignition_report_styles.ignition_report_text}>Parking Report</Text>
          <View style={modal_gps_styles.details_hr_line}></View>
          <ParkingReportMap />

        </View>
      </View>

      <View style={styles.footerBox}>
        <Footer download={() => console.log("download pressed.")} viewGraph={() => console.log("viewGraph pressed.")} />
      </View>

    </View>
  )
}

export default ParkingReport;

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