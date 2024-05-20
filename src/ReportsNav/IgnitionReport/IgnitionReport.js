import { Text, View, StyleSheet } from "react-native";
import daily_report_styles from "../../Styles/ReportsNav/DailyReport/DailyReports.module";
import VehicleSelector from "../../Component/VehicleSelector";
import IgnitionReportHeader from "./IgnitionReportHeader";
import DateRangeSelector from "../DateRangeSelector";
import IgnitionMap from "./IgnitionMap";
import modal_gps_styles from "../../Styles/DeviceDetails/GpsModal.module";
import ignition_report_styles from "../../Styles/ReportsNav/IgnitionReport/IgnitionReport.module";
import Theme from "../../Theme/theme";
import Footer from "../Footer";
import { useEffect } from "react";

// import { useNavigation } from '@react-navigation/native';
const IgnitionReport = ({ navigation, route }) => {
    const reportData = route.params || {};
    // const navigation =  useNavigation();
    // useEffect(() => {
    //     console.log("rd", reportData);
    // }, [reportData])
    return (
        <View style={{ flex: 1, }}>
            <View style={ignition_report_styles.ignition_report_main_box}>
                <IgnitionReportHeader />
                {/* <View style={daily_report_styles.vehicle_select_box}>
                    <VehicleSelector />
                </View>
                <View style={[daily_report_styles.toggle_btn_box, { marginTop: 0 }]}>
                    <DailyToggleButton />
                </View> */}
                <View style={ignition_report_styles.ignition_report_text_box}>

                    <Text style={ignition_report_styles.ignition_report_text}>Ignition Report</Text>
                    <View style={modal_gps_styles.details_hr_line}></View>

                    <IgnitionMap data={reportData} />
                </View>
            </View>

            <View style={styles.footerBox}>
                <Footer download={() => console.log("download pressed.")} viewGraph={() => console.log("viewGraph pressed.")} />
            </View>
        </View>
    )
}
export default IgnitionReport;

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