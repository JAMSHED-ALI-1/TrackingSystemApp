import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const all_trip_styles = StyleSheet.create({
  vr_line_box: { height: 16, borderWidth: 1, borderColor: '#D9D9D96E' },
  view_info_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '16.5%',
  },
  view_info_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    color: '#878787',
  },
  consignor_main_box:{
    flexDirection:'row',
    borderWidth:1,
    height:50,
    marginTop:15,
  }
})

export default all_trip_styles
