import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const engine_styles = StyleSheet.create({

  ignition_main_box:{
    // marginTop:15

  },

  ignition_map_header: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    gap:13,
    // borderWidth: 1,
    // borderColor:"red",
    // marginTop:15
    marginBottom:15
  },
  ignition_sr_box: {
    width: '10%',
    // borderWidth:1,
    justifyContent:"center",
    alignItems:'center'
  },
  ignition_ticket_status_box: {
    width: '12%',
    // borderWidth:1,
    alignItems: 'center',
    alignItems:'center',
    justifyContent:"center",
    borderColor:'red',
    marginLeft: -6
    // borderWidth:1

  },
  ignition_map_rows: {
    flexDirection: 'row',
    gap: 20,
    width: '95%',
    // alignSelf: 'center',
    marginBottom: 15,
  },
  ignition_rows_sr_box: {
    // width: '10%',
    marginLeft: 0,
    // borderWidth: 1,
    alignItems: 'center'
  },
  ignition_rows_sr_text: {
    color: Theme.greyLight,
  },
  
  ignition_rows_main_box: {
    height: 400,
  },
  ignition_location_box:{
    // borderWidth:1,
    width:'17%'
  },
  time_box:{
    // borderWidth:1,
    width:"22%",
    marginLeft:6
  },
  user_and_location_box:{
    // borderWidth:1,
    width:'25%',
    justifyContent:"center",
    alignItems:'center'
  },
  row_location_text:{
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.darkBlue,
    textAlign: 'center',
    // borderWidth:1
  

  },
  status_header_text:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.greyLight,
    // borderWidth:1
  },

  
})

export default engine_styles;
