import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Theme/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const live_location_styles = StyleSheet.create({
  // live_loc_heading_box: {
  //   marginBottom: 30,
  //   width: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 25,
  //   // borderWidth: 1,
  //   // overflow: "hidden",
  // },
  // live_heading_text: {
  //   fontSize: 20,
  //   fontWeight: Theme.font.bold,
  //   color: Theme.greyDark,
  //   // borderWidth: 1
  // },
  // live_main_container: {
  //   backgroundColor: Theme.white,
  //   flex: 1,
  //   alignItems: "center",
  //   flexDirection: "column",
  // },
  // live_location_col: {
  //   flexDirection: "row",
  //   height: 50,
  //   borderRadius: 4,
  //   borderColor: Theme.silver,
  //   backgroundColor: Theme.white,
  //   alignItems: "center",
  //   borderColor: Theme.red,
  //   // borderWidth: 1,
  //   justifyContent: "center",
  // },
  // rowContainer: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   alignItems: "center",
  //   gap: 5,
  //   justifyContent: "center",
  //   // borderWidth: 1
  //   // marginTop:80
  // },
  // image: {
  //   width: windowWidth / 9.8,
  //   height: "75%",
  // },
  // live_text_box: {
  //   flex: 1,
  //   justifyContent: "center",
  //   paddingHorizontal: 10,
  // },
  // live_loc_text: {
  //   fontSize: 14,
  //   fontWeight: Theme.font.fat,
  //   color: Theme.text,
  // },
  main_box:{
    width:'95%',
    alignSelf:'center',
    marginTop:10,
    // borderWidth:1

  },
  share_location_box:{
    flexDirection:'row',
    gap:20,
    // justifyContent:"center",
    alignItems:"center",
    // borderWidth:1,
    marginBottom:15
  },
  share_location_heading_text:{

    fontSize: 22,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary


  },

  vehicle_no_text:{
    color: Theme.secondary,
    fontSize: 18,
    fontWeight: Theme.font.fat,

  },
  vehicle_radio_main_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    // width: windowWidth / 1.05,
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
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicle_radio_check_text: {
    borderRadius: 6,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: Theme.blue.primary,
    borderWidth: 1,
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
    fontSize: Theme.font.medium,
    color: Theme.blue.primary,
    fontWeight: Theme.font.xthin,
  },

  share_driver_box:{
    marginTop:5,
    flexDirection: 'row',
    alignItems:'center'

  },

  share_Box:{
    alignItems:'flex-end',
    // flexDirection:'row',
    marginRight:20,
    marginTop:10,
    // borderWidth:1,
    // width:'10%'
  },
  share_text:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary
  }

});

export default live_location_styles;
