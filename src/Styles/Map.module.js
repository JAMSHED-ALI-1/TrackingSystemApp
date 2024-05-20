import { StyleSheet } from 'react-native'
import Theme from '../Theme/theme'

const map_styles = StyleSheet.create({
  header_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: "center",
    backgroundColor: Theme.extraLightBlue,
    paddingHorizontal: 20
    // borderWidth: 1,
    // borderColor: 'red',
    // marginBottom:10,
    // gap:20,
    // justifyContent:'center'
    // marginTop:8
    // paddingBottom:10
  },
  vehicle_no_text: {
    fontSize: 20,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary,
    marginLeft: -20
  },
  details_box: {
    justifyContent: "center",
    alignItems: "center"
    // borderWidth:1,
    // width:'20%',
  },
  ignition_box: {
    // borderWidth: .5,
    justifyContent: 'center',
    alignItems: "center",
  },
  ignitionText: {
    fontSize: 10
  },
  ignition_status_box: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    // justifyContent: 'space-between'
    // justifyContent:"center",
  },
  on_text: {
    fontSize: Theme.font.small,
  },
  ignition_on: {
    height: 10,
    width: 10,
    backgroundColor: Theme.green,
    borderRadius: 5,
  },
  ignition_off: {
    height: 10,
    width: 10,
    backgroundColor: Theme.red,
    borderRadius: 5,
  }
})

export default map_styles
