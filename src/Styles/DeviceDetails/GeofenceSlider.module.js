import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const geofence_search_styles = StyleSheet.create({
  header_box: {
    marginTop: 15,
    width: '95%',
    alignSelf: 'center'

  },
  geofence_ser_search_main_box: {
    height: "100%",
    flexDirection: 'row',
    // overflow: 'visible',
    // zIndex: 1,
    // margin: 10,
    // alignItems: 'center',x
    // elevation: 1,
    // borderRadius: 6,
    borderWidth: 2,
  },
  geofence_ser_search_box: {
    // flexDirection: 'row',
    // alignItems: 'center',
    flex: 1,
    // width: 100,
    height: '100%',
    padding: 5,
    backgroundColor: Theme.white,
    // borderRadius: 6,

  },
  selectedLocationText: {
    marginLeft: 10,
    width: '75%',
    // borderWidth: 1,
  },

  geofence_ser_select_radio: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    // borderWidth: 1,
    borderColor: Theme.lightGray,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    // height: 314,
  },
  geo_select_radio_text: {
    fontSize: Theme.font.medium,
    color: '#323232',
    fontWeight: Theme.font.fat,
  },
  selectedLocationContainer: {
    flexDirection: 'row',
    marginTop: 45
  },
  slider_box_view: {
    // flex: 1,
    // marginTop: 20,
    // borderWidth:1,
    // marginBottom:
    // height:100,
    marginBottom: 15
  },
  geofence_ser_geoname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    // borderWidth:1,
    // marginTop:65
  },
  geofence_ser_geoname_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: '#323232',
    lineHeight: Theme.font.medium
  },
  selectBox: {
    marginTop: 20,
  },
  geo_select_radio_text: {
    fontSize: Theme.font.medium,
    color: '#323232',
    fontWeight: Theme.font.xbold,

  },
  geo_search_input_box: {
    borderWidth: 1,
    height: 32,
    width: 193,
    borderRadius: 5,
    borderColor: '#2C2C2C',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  geo_search_input_text: {
    fontSize: Theme.font.medium,
    color: '#323232',
    fontWeight: Theme.font.bold
  },
  geo_ser_time_main_box: {
    flexDirection: 'row',
    gap: 10
  },
  geo_ser_time_box: {
    borderWidth: 1,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 4,
  },
  geo_time_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
    lineHeight: Theme.font.medium,
    color: '#535353'
  },
  geo_ser_edit_icon: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  am_pm_cntainer: {
    flexDirection: 'row',
    width: 60,
    // borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    height: 24,
  },
  option: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 22,
    borderRadius: 3,
    backgroundColor: Theme.white,
  },
  selectedOption: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 30,
    height: 22,
  },
  gradient_am_pm: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 22,
  },
  radio_white_text: {
    color: 'white',
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
    lineHeight: Theme.font.medium,
  },
  radio_text_gray: {
    color: Theme.greyLight,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
    lineHeight: Theme.font.medium,
  },
  submitButton: {
    borderWidth: 1,
    // height: 50,
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Theme.blue.primary,
    // borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,

    // width: '100%'
  },
  submitButtonText: {

    // borderWidth: 1,
    color: Theme.white,
    textAlign: 'center',
    fontWeight: Theme.font.bold,
  }
})

export default geofence_search_styles
