import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const vehicle_history_styles = StyleSheet.create({

  vehicle_history_main_box: {
    width: '97%',
    // paddingHorizontal: '1.5%',

    // backgroundColor: Theme.white,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    // borderWidth: .5,
    // alignContent: 'center',
    // alignItems: 'center',å
    // justifyContent: 'center',

  },
  vehicle_select_box: {
    height: 40,
    borderWidth: 0,
    width: '100%',
    alignItems: 'center',
    alignItems: 'center',
    // textAlign: 'center',



  },
  vehicle_history_hr_box: {
    height: 1,
    backgroundColor: Theme.hrLine,
    fontSize: Theme.font.large,
    marginTop: 5,
    marginBottom: 5,
    // borderWidth: .5
  },

  vehicle_radio_main_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    // width: windowWidth/.95, 
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: -50,
    gap: 5,
  },
  vehicle_radio_check_box: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    width: '32.5%',

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

});

export default vehicle_history_styles;