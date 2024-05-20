import { Dimensions, StyleSheet } from "react-native";
import Theme from "../../Theme/theme";
const windowWidth = Dimensions.get('window').width;

const vehicle_radio_btn_styles = StyleSheet.create({
  vehicle_radio_main_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: windowWidth / .95,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  vehicle_radio_check_box: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    width: '22%',

  },
  vehicle_radio_liner_box: {
    borderRadius: 5,
    height: 34,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicle_radio_check_text: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 34,
    width: '100%',
    color: Theme.historyBlue,
    borderColor: Theme.historyBorder,
    borderWidth: 1,
    textAlign: 'center',
    verticalAlign: 'middle'

  },
  calenderBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5

  },
  calender: {
    flex: 1,
    // borderWidth: .5,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default vehicle_radio_btn_styles;