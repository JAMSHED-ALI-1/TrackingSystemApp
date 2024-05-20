import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const single_vehicle_styles = StyleSheet.create({
  main_box: {
    paddingTop: 5,
    paddingHorizontal: 10,
    borderWidth: 0,
    // marginBottom: 5
    // height: '22%'
  },

  flex_box: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: '100%'
    // justifyContent: 'space-between',
    // paddingHorizontal:10,
    // borderWidth: 1,
    // paddingBottom: 10,
  },

  child_flex_box: {
    width: '20%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:10,
    // paddingBottom:10
  },
  button_box: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '60%',
    // borderWidth: .5
  },
  text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.black,
    textAlign: 'center',
    // marginTop: 10,
  },
  hr_line: {
    height: 1,
    backgroundColor: Theme.hrLine,
    borderWidth: 1,
    borderColor: Theme.hrLine,
    marginVertical: 15
  },
  location_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: '#4D4D4D',
  },
  location_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: '#4D4D4D',
  },
  heading_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xbold,
    color: Theme.black,
    marginBottom: 5,
    // color: Theme.blue.secondary
  },

  child_sec_box: {
    width: '30%',
    // justifyContent:'center',
    // alignItems:'center',
    // marginLeft:-10
  },

  child_flex_box_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary,
  },
  running_time_heading_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.green,
  },
  stopped_time_heading_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.red,
  },

  sec_value_text: {
    fontSize: 16,
    fontWeight: Theme.font.bold,
    color: Theme.black,
    // textAlign:'center',
    marginTop: 10,
  },

  last_update_flex_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
  },
  last_update_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    marginRight: 10,
  },
  last_update_time: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    color: Theme.secondary,
  },
  linear_gradient: {
    height: 20,
    // borderWidth:1,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:'center'
    borderRadius: 4,
  },
  status_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.white,
  },
  modal_box: {
    height: '20%',
    backgroundColor: Theme.white,
    marginTop: '110%',
  },
})

export default single_vehicle_styles
