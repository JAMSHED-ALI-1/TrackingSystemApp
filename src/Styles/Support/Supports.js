import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const supports_styles = StyleSheet.create({
  supports_heading_text: {
    fontSize: Theme.font.large,
    color: Theme.supportText,
    fontWeight: Theme.font.bold,
    lineHeight: 22,
    marginTop: 12,
  },
  supports_info_text: {
    marginTop: 12,
    color: Theme.supportText,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    marginBottom: 15,
  },
  supports_main_box: {
    marginTop: 15,
    height: 60,
    // borderWidth:1,
    borderRadius: 12,
    backgroundColor: Theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 1,
  },
  supports_icon_box: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Theme.white,
    elevation: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },
  supports_icon_box2: {
    height: 40,
    width: 270,
    // borderWidth:1,
    justifyContent: 'center',
    // alignItems:'center',
  },
  supports_icon_box2_text: {
    color: Theme.supportText,
    fontSize: 16,
    fontWeight: Theme.font.fat,
    marginLeft: 10,
  },
  ticket_history_text:{
    fontSize : 16,
    fontWeight: Theme.font.bold,
    color : Theme.supportText,
    marginTop:10,
  }
})

export default supports_styles
