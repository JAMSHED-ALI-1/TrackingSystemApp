import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import DailyReportHeader from "./DailyReportHeader";
import VehicleSelector from "../../Component/VehicleSelector";
import daily_report_styles from "../../Styles/ReportsNav/DailyReport/DailyReports.module";
import DailyRangeSelector from "../DateRangeSelector";
import DailyReportMap from "./DailyReportMap";
import DailyReportChart from "./DailyReportChart";
import Footer from "../Footer";
import Theme from "../../Theme/theme";
import { getDailyReports } from '../../HelperFunction/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DailyReport = ({ navigation, route }) => {
  const reportData = route.params || {};
  // useEffect(() => {
  //   console.log(" from Daily Report => ", reportData);
  // }, [])

  return (
    <View style={styles.flexContainer}>
      <View style={styles.mainContainer}>
        <DailyReportHeader />
        {/* <View style={daily_report_styles.vehicle_select_box}>
          <VehicleSelector />
        </View> */}
        {/* <View style={[daily_report_styles.toggle_btn_box, { marginTop: 10 }]}>
          <DailyRangeSelector setSelectedType={setSelectedType} />
        </View> */}
        {/* <View style={{ height: 310, marginTop: 20 }}>
          <DailyReportChart />
        </View> */}

        <View style={{ marginTop: -20 }}>
          <DailyReportMap data={reportData} />
        </View>
      </View>

      <View style={styles.footerBox}>
        <Footer download={() => console.log("download pressed.")} viewGraph={() => console.log("viewGraph pressed.")} />
      </View>

    </View>
  )
}

export default DailyReport;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  mainContainer: {
    width: '98%',
    alignSelf: 'center',
    marginTop: 15,
    borderWidth: 1,
  },
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