import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Theme/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const scrollVehicleinfoStyle = StyleSheet.create({
  scrollcardContainer: {
    width: windowWidth,
    borderRadius: 10,
    backgroundColor: Theme.white,
    padding: 10,
    marginTop: 25,
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  rowOverRide: {
    top: -37,
  },
  vehicleInfo: {
    flexGrow: 1,
    alignItems: "flex-start",
    paddingRight: 10,
  },
  speedBoxCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Theme.white,
    shadowColor: Theme.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    top: -36,
  },
  speed: {
    color: Theme.lightBlack,
    fontSize: Theme.font.xlarge,
    marginTop: 10,
    fontWeight: Theme.font.xbold,
  },
  speed_km: {
    fontSize: 13,
    color: Theme.lightBlack,
    fontWeight: Theme.font.xbold,
    marginTop: -2,
  },
  speedImageWrapper: {
    position: "relative",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    top: -67,
    overflow: "hidden",
  },
  speedImage: {
    width: 88,
    height: 50,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: "center",
    position: "absolute",
    bottom: -22,
  },
  bottom_speed: {
    color: Theme.white,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    marginTop: 3,
  },
  odoMeterWrap: {
    flexGrow: 1,
    alignItems: "flex-end",
  },

  vehicleOdoText: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
    color: Theme.heading,
    marginBottom: 5,
  },

  vehiclePlate: {
    backgroundColor: "#FFBA47",
    borderWidth: 2,
    width: windowWidth / 3.33,
    borderColor: "#2C2C2C",
    borderRadius: 4,
    alignItems: "center",
    padding: 4,
  },
  text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
    color: "#2F1D00",
  },

  odoMeter: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#2C2C2C",
    borderRadius: 4,
    width: windowWidth / 3.33,
    justifyContent: "flex-end",
    // borderWidth:1,
  },
  reading: {
    fontSize: Theme.font.small,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: Theme.font.bold,
  },
  kmTextContainer: {
    backgroundColor: Theme.blue.primary,
    // borderRadius: 3,
    // borderLeftWidth: 2,
    // borderColor: "#113870",
    // borderWidth:2,
    // borderColor: Theme.blue.primary,
    overflow: 'hidden',
    marginHorizontal: -1,
    marginVertical: -1,
  },
  kmText: {
    color: Theme.white,
    padding: 4,
    fontSize: Theme.font.small,
  },

  scrolladdess_info_box: {
    flexDirection: "row",
    marginTop: 5,
    // paddingBottom: 5,
    paddingHorizontal: 3,
    // borderWidth: .5,
    height: 50,
    marginBottom: 7.5,

  },
  scrolladdess_info: {
    width: windowHeight / 10.9,
  },
  scrolladdess_info_text: {
    color: "#404040",
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    paddingRight: 5,
    lineHeight: 22,
  },
  scrolladdess_loc_text: {
    fontSize: 15,
    fontWeight: Theme.font.bold,
    color: "#181818",
    flexShrink: 1,
    lineHeight: 22,
  },
  scrolladdess_loc_box: {
    width: windowWidth / 1.2,
    borderRadius: 4,
    flexDirection: "row",
  },

  expandedBox_main: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 50,
    paddingBottom: 30,
  },
  expanded_details_box: {
    padding: 9,
    alignItems: "center",
    borderRadius: 6,
    flexBasis: 0,
    flexGrow: 1,
  },
  expanded_left_box1: {
    width: "22%",
    height: 50,
    backgroundColor: Theme.black,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },

  expanded_left_box: {
    width: "22%",
    height: windowHeight / 3.7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  expanded_text1: {
    color: "white",
    fontSize: 18,
  },
  expanded_text: {
    color: "#000",
    fontSize: 17,
  },
  expanded_info_box: {
    width: "22%",
    height: windowHeight / 2.5,
    backgroundColor: "#8E0E00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  expanded_icon: {
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  switchBoxContainer: {
    paddingTop: 8,
  },
  driverContainer: {
    height: 85,
    paddingTop: 10,
  },
  upadte_flex_container: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 2,
    marginTop: -8,
  },
  update_white_box: {
    backgroundColor: Theme.white,
    height: windowHeight / 13.9,
    borderRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    flexBasis: 0,
    flexGrow: 1,
  },
  update_white_box_child: {
    height: windowHeight / 26.9,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  update_white_text_box: {
    justifyContent: "center",
    alignItems: "center",
  },
  update_white_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: "#323232",
  },
  upadte_color_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.white,
  },
  switch_button: {
    top: 120,
    zIndex: 1,
    borderWidth: 1,
    borderColor: Theme.red,
  },
  driverinfo_scroll_view: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: -100,
  },
});

export default scrollVehicleinfoStyle;
