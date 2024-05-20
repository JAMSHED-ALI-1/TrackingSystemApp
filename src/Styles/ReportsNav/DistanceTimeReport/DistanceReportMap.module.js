import { StyleSheet } from 'react-native'

const distance_report_map_styles = StyleSheet.create({
  distance_row_box: {
    flexDirection: 'row',
    gap: 21,
    // borderWidth:1,
    marginBottom:15,
  },
  distance_row_main_box:{
    height:400,
    // borderWidth:1,
    // marginBottom:20,

  },

  distance_vehicle_box: {
    width: '20%',
    // borderWidth: 1,
    // justifyContent:'center',
    alignItems:'center'
  },
  distance_distance_travelled_box: {
    width: '18%',
    // borderWidth: 1,
    alignItems:'center'
  },
  distance_date_box: {
    width: '20%',
    // borderWidth: 1,
    // justifyContent:'center',
    alignItems:'center'
  },
  distance_report_odometer_box: {
    flexDirection: 'row',
    // gap:20,
    // borderWidth: 1,
    width: '25%',
    justifyContent: 'center',
    // alignItems:'center'
  },
})
export default distance_report_map_styles
