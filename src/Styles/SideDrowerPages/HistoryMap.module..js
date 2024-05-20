import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const history_map_styles = StyleSheet.create({
  history_map_main_box: {
    marginTop: 20,
    // borderWidth: 1,
    height: '90%'
  },
  history_no_ticket_box: {
    width: '75%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,

  },
  history_no_ticket_text: {
    fontSize: 35,
    color: Theme.silver,
    fontWeight: Theme.font.fat,
    marginBottom: 0


  },
  history_no_ticket_text2: {
    fontSize: 60,
    color: Theme.silver,
    fontWeight: Theme.font.bold,
    // borderWidth:1,
    // marginBottom:0


  },
  history_map_header_box: {
    flexDirection: 'row',
    gap: 10,
  },
  history_map_header_child: {
    width: '19%',
  },
  history_map_header_child_text: {
    color: Theme.greyLight,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
  },
  history_map_row_box: {
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    height: 180,
    overflow: "hidden",

  },
  history_row_main_box: {
    flexDirection: 'row', gap: 10,
    justifyContent: 'center', overflow: 'hidden',
    marginBottom: 10,
    // borderWidth: 1
  },
  history_row_ticket_id_box: {
    width: '16%', marginLeft: 10, overflow: 'hidden'
  },
  history_row_ticket_id_text: {
    color: Theme.darkBlue,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,

  },
  history_row_box: {
    width: '23%',
    // borderWidth: 1,
    alignItems: 'center',
  },

  history_row_vehicle_num_text: {
    fontSize: 11,
    color: Theme.lightBlack,
    fontWeight: Theme.font.fat,
  },

  history_row_ticket_reason_text: {
    color: Theme.red,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
  history_row_time_date_text: {
    color: Theme.lightBlack,
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
  },
  history_row_ticket_status_text: {
    color: Theme.lightGreen,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },



})

export default history_map_styles
