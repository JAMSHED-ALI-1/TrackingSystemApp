import { Dimensions, StyleSheet } from "react-native";
import Theme from "../../Theme/theme";
const windowWidth = Dimensions.get('window').width;

const vehicle_radio_btn_styles = StyleSheet.create({
    vehicle_radio_main_box: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: windowWidth / 1.05,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    vehicle_radio_check_box: {
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: '22%',
    },
    vehicle_radio_liner_box: {
      borderRadius: 6,
      height: 74,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    vehicle_radio_check_text: {
      borderRadius: 6,
      height: 74,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderColor: '#BDEAFF',
      borderWidth: 2,
      textAlign: 'center',
      shadowColor: '#BDEAFF',
      shadowOffset: { width: 0, height: 8 },
    },
    fliter_value_text: {
      fontSize: 20,
      color: Theme.blue.primary,
      fontWeight: Theme.font.xbold,
    },
    filter_name_text: {
      fontSize: Theme.font.xsmall,
      color: Theme.blue.primary,
      fontWeight: Theme.font.xthin,
    },
  });
  export default vehicle_radio_btn_styles;