import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const barchart_styles = StyleSheet.create({
  barchart_main_view: {
    backgroundColor: Theme.white,
    borderRadius: 20,
    // borderWidth: 1,
    overflow: 'hidden',
    width: '80%',
    alignSelf: 'center',
  },
  barchart_status_box: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15
  },
  barchart_running_text: {
    color: Theme.supportText,
    fontSize: 16,
    fontWeight: Theme.font.fat,
  },
  barchart_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    // borderWidth:1,
    // overflow:'hidden',
  },
})
export default barchart_styles
