import { Text, View, StyleSheet } from 'react-native'
import distance_report_styles from '../../Styles/ReportsNav/DistanceTimeReport/DistanceReport.module'
import ignition_report_styles from '../../Styles/ReportsNav/IgnitionReport/IgnitionReport.module'
import modal_gps_styles from '../../Styles/DeviceDetails/GpsModal.module'
// import VehicleSelector from '../../Component/VehicleSelector'
// import DateRangeSelector from '../DateRangeSelector'
// import SpeedReportMap from '../SpeedReport/SpeedReportMap'
import StoppageReportHeader from './StoppageReportHeader'
import StoppageReportMap from './StoppageReportMap'
import Footer from "../Footer";
import Theme from "../../Theme/theme";
// import { useEffect } from 'react'

const StoppageReport = ({ navigation, route }) => {
  const reportData = route.params || {};

  // useEffect(() => { console.log(reportData) }, [reportData])
  return (
    <View style={{ flex: 1, }}>
      <View style={distance_report_styles.distance_main_box}>
        <StoppageReportHeader />
        {/* <View style={distance_report_styles.vehicle_select_box}>
          <VehicleSelector />
        </View>
        <DailyToggleButton /> */}

        <View style={ignition_report_styles.ignition_report_text_box}>
          <Text style={ignition_report_styles.ignition_report_text}>
            Stoppage Report
          </Text>
          <View style={modal_gps_styles.details_hr_line}></View>
          <StoppageReportMap data={reportData} />
        </View>
      </View>
      <View style={styles.footerBox}>
        <Footer download={() => console.log("download pressed.")} viewGraph={() => console.log("viewGraph pressed.")} />
      </View>

    </View>
  )
}
export default StoppageReport;

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
