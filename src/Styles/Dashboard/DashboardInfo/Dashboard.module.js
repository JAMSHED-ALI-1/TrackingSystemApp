import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const dashboard_styles = StyleSheet.create({
  vehicle_select_box: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
  },

  reminder_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
    marginBottom: 15,
  },
  reminder_vehicle_box: {
    marginLeft: 15,
    marginBottom: 15,
  },

  vehicle_report_graph_box: {
    borderWidth: 1,
    height: 370,
    marginBottom: 15,
    // marginTop:10,
    // width: '95%',
    alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    borderColor: '#F4F4F4',
    backgroundColor: Theme.white,
    // marginBottom:0,
    // paddingBottom:0,
  },
  vehicle_report_status_box: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  status_report_text: {
    color: Theme.lightBlack,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
  },
  status_all_veh_report_text: {
    color: Theme.sliderGrey,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
  },
  time_text:{
    color: Theme.sliderGrey,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,

  }
})

export default dashboard_styles
