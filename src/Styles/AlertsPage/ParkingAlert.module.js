import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const parking_alert_styles = StyleSheet.create({

    tableContainer: {
      //   marginTop: 20,
  
    },
    scrollContainer: {
      flex: 1,
      marginTop: 20,
    },
    alert_radio_btn:{
      marginTop:15
  
    },
    vehicle_report_main_box: {
      width: '95%',
      alignSelf: 'center',
      marginBottom: 10,
    },
    parking_vehicle_select: {
      marginTop: 15,
    },
  
    vehicle_report_hr_line_box: {
      height: 2,
      borderWidth: 1,
      marginTop: 15,
      borderRadius: 20,
      borderColor: Theme.hrLine,
      shadowColor: Theme.black,
      elevation: 3,
    },
  
    table_row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 10,
    },
  
    row_item: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    parking_map_view_text: {
      color: Theme.darkBlue,
      fontSize: Theme.font.small,
      fontWeight: Theme.font.fat,
    },
  
    table_cell: {
      flex: 1,
      justifyContent: 'center',
      color: Theme.supportText,
      fontWeight: Theme.font.xthin,
    },
  
    table_cell_value: {
      color: Theme.supportText,
      fontSize: Theme.font.small,
      fontWeight: Theme.font.fat,
    },
  });

  export default parking_alert_styles;