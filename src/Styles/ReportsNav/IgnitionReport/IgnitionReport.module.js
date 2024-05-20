import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const ignition_report_styles = StyleSheet.create({
  ignition_report_main_box: {
    width: '98%',
    alignSelf: 'center',
    marginVertical: 15
  },
  ignition_report_text_box: {
    marginTop: 15,
  },
  ignition_report_text: {
    marginBottom: 15,
    color: Theme.supportText,
    fontSize: 16,
    fontWeight: Theme.font.bold,
    marginLeft: 8

  }
})

export default ignition_report_styles
