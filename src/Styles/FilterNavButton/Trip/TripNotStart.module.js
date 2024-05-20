import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const trip_not_start_styles = StyleSheet.create({
  trip_info_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // margin:10
    marginRight:15
  },
  trip_info_box_child1: {
    flexDirection: 'row',
    // borderWidth: 1,
    gap: 10,
    // elevation:1,
  },
  start_trip_info_box:{
    borderWidth:1,
    width: '40%',
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4,
    borderColor: '#EFEFEF',
    backgroundColor: Theme.white,
  },
  start_trip_info_text:{
    fontSize : Theme.font.small,
    fontWeight : Theme.font.fat,
    color : Theme.red,
  },
  update_trip_info_text:{
    fontSize : Theme.font.small,
    fontWeight : Theme.font.fat,
    color: '#4F4F4F'
  },
})

export default trip_not_start_styles
