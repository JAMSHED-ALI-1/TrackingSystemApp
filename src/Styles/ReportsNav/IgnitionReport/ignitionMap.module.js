import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const ignition_map_styles = StyleSheet.create({

  ignition_main_box: {
    // marginTop:15

  },

  ignition_map_header: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    gap: 13,
    // borderWidth: 1,
    // borderColor:"red",
    marginTop: 15
  },
  ignition_sr_box: {
    width: '10%',
    // borderWidth:1,
    justifyContent: "center",
    alignItems: 'center'
  },
  ignition_ticket_status_box: {
    width: '12%',
    // borderWidth:1,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: "center",
    // borderColor:'red',
    marginLeft: -6
    // borderWidth:1

  },
  sr_number_header_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.greyLight,
    // borderWidth:1

  },
  ignition_rows_sr_box: {
    // width: '10%',
    marginLeft: 0,
    // borderWidth: 1,
    alignItems: 'center'
  },
  ignition_rows_sr_text: {
    color: Theme.greyLight,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin
  },

  ignition_rows_main_box: {
    height: 400,
  },
  ignition_location_box: {
    // borderWidth:1,
    width: '17%'
  },
  row_location_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.darkBlue,
    textAlign: 'center',


  },
  time_box: {
    // borderWidth:1,
    width: "22%",
  },
  vehicle_no_box: {
    // borderWidth:1,
    width: '27%'
  },
  status_header_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.greyLight
  },
  status_row_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
  },
  time_date_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.xthin,
  }

})

export default ignition_map_styles;
