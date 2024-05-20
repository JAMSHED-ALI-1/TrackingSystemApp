import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const single_report_styels = StyleSheet.create({
  heading_box: {
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
    // borderWidth: .5,
    // width: '90%',
    // alignSelf:'center' ,
    // gap: 20,
    justifyContent: 'space-between',

  },
  heading_text: {
    fontSize: 25,
    color: Theme.black,
    fontWeight: Theme.font.bold,
  },
  vehicleNumer: {
    fontSize: 20,
    color: Theme.black,
    // fontWeight: Theme.font.bold,
  },

  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#f7f7f7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    paddingHorizontal: 20,
    // borderWidth: .5,
    width: "100%"
    // backgroundColor: Theme.numplate,
    // width:'94%',
    // marginTop: 10,
    // borderColor: '#f7f7f7',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  cal_box: {
    flexDirection: 'row',
    // borderWidth:1,
    // borderColor:'red',
    marginTop: 15,
    gap: 12,
    // justifyContent:'space-between'
  },

  cal_child_box: {
    width: '31%',
    // borderWidth:1,
  },
  cal_child_text: {
    color: Theme.secondary,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    marginBottom: 10,
  },

  cal_select_box: {
    borderWidth: 1,
    height: 30,
    borderRadius: 6,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    borderColor: '#EAEAEA',
    backgroundColor: Theme.white,
  },
  cal_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
  distance_box: {
    // borderWidth:1,
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
  },
  distance_box_child: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    height: 70,
    width: '100%',
    borderWidth: 0,
    padding: 8,
    // borderRadius: 6,
    // backgroundColor: Theme.white,
    // // borderColor: '#EAEAEA',
    // borderColor: '#f7f7f7',
    // borderRadius: 5,
    // shadowColor: '#f7f7f7',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 1,
    // borderWidth: 1,
    // borderWidthColor: 'red',
  },
  distance_box_child1: {
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    height: 136,
    width: '30%',
    // borderWidth: 0,
    // padding: 8,
    borderRadius: 6,
    backgroundColor: Theme.white,
    // borderColor: '#EAEAEA',
    // borderColor: '#f7f7f7',
    // borderRadius: 5,
    shadowColor: '#f7f7f7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    // borderWidth: 1,
  },
  day_text: {
    color: Theme.black,
    fontSize: Theme.font.large,
    fontWeight: Theme.font.xthin,
  },

  speed_heading_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary,
    height: 45

  },

  distance_flex_box: {
    flexDirection: 'row',
    // borderWidth: .5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    gap: 15,
    // justifyContent:'space-between'
    // width:'100%'
  },
  distance_flex_box2: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    // padding: 5,
    // gap: 15,
  },
  increase_text: {
    color: Theme.green,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
  },

  decrease_text: {
    color: Theme.red,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
  },

  distance_text: {
    color: Theme.secondary,
    fontSize: 20,
    fontWeight: Theme.font.bold,
  },

  duration_box: {
    flexDirection: 'row',
    height: 110,
    // borderWidth: 1,
    marginTop: 10,
    gap: 10,
  },
  duration_child_box: {
    // borderWidth: 1,

    width: '48%',
    padding: 5,
    borderRadius: 8,
    backgroundColor: Theme.white,
    borderColor: '#f7f7f7',
    borderRadius: 5,
    shadowColor: '#f7f7f7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },

  duration_text: {
    fontSize: Theme.font.large,
    fontWeight: Theme.font.fat,
    color: Theme.black,
    textAlign: 'center',
    // borderWidth:1,
    width: '70%',
  },

  running_duration_text: {
    fontSize: Theme.font.large,
    fontWeight: Theme.font.fat,
    color: Theme.green,
    textAlign: 'center',
    // borderWidth:1,
    width: '70%',

  },
  stop_duration_text: {
    fontSize: Theme.font.large,
    fontWeight: Theme.font.fat,
    color: Theme.red,
    textAlign: 'center',
    // borderWidth:1,
    width: '70%',

  },

  duration_per_box: {
    flexDirection: 'row',
    // borderWidth:1,
    width: '35%',
    gap: 5,
    borderRadius: 10,
    height: 20,
  },
  duration_time_text: {
    fontSize: 22,
    fontWeight: Theme.font.bold,
    color: Theme.blue.primary,
    color: Theme.secondary,
    marginTop: '5%',
    textAlign: 'center',
  },
  speed_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
    color: Theme.blue.primary,
    color: Theme.secondary,
    // height: 30,
    // borderWidth:1,
    // marginTop: '10%'
  },

  increase_speed_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    color: Theme.green,
  },
  decrease_speed_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    color: Theme.red,
  },

  horizontal_scroll_box: {
    // borderWidth: 1,
    height: 110,
    backgroundColor: Theme.white,
    marginTop: 10,
    borderRadius: 12,
    // borderColor: '#EAEAEA',
    // width:'80%'
    width: '48%',
    // marginLeft:15,
    // borderColor: '#f7f7f7',
    borderRadius: 5,
    shadowColor: '#f7f7f7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    paddingHorizontal: 10,
  },

  scroll_child_flex_box: {
    width: '75%',
    fontSize: Theme.font.large,
    fontWeight: Theme.font.xthin,
    color: Theme.blue.primary,
    // borderWidth:1,
    textAlign: 'center',
  },

  speed_count_text: {
    color: Theme.secondary,
    fontSize: 26,
    fontWeight: Theme.font.fat,
    textAlign: 'center',
  },

  increase_speed_count_text: {
    fontSize: 20,
    fontWeight: Theme.font.xthin,
    color: Theme.green,
  },
  decrease_speed_count_text: {
    fontSize: 20,
    fontWeight: Theme.font.xthin,
    color: Theme.red,
  },

  // odometer
  odometer_box: {
    flexDirection: 'row',
    height: 70,
    // borderWidth:1,
    gap: 20,
    marginTop: 15,
  },

  odometer_flex_box: {
    width: '45%',
    // padding:
    borderRadius: 6,
  },
  odometer_heading_text: {
    color: Theme.white,
    fontSize: Theme.small,
    fontWeight: Theme.font.fat,
    marginTop: 10,
    textAlign: 'center',
  },

  odometer_text: {
    fontSize: 17,
    fontWeight: Theme.font.bold,
    color: Theme.white,
    textAlign: 'center',
    marginTop: 5,
  },
  speed_info_box: {
    width: '100%',
    flexDirection: 'row',
    // gap: ,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  download_box:{
    alignItems:'center',
    // borderWidth:1,

  },
  download_text:{
    fontSize: Theme.font.medium,
    color: Theme.blue.primary,
    fontWeight: Theme.font.fat,
    textAlign:'center',
    marginTop:10,
    marginBottom:10
  }

})

export default single_report_styels
