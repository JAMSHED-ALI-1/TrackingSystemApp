import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'

const admin_cont_styles = StyleSheet.create({
  admin_main_box: {
    width: '80%',
    alignSelf: 'center',
    // borderWidth: 1,
    // marginTop: 20,
    borderRadius: 10,
    backgroundColor: Theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  admin_heading_text: {
    color: Theme.lightBlack,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    marginBottom: 20,
  },

  reset_box: {
    width: '58%',
    // borderWidth: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    // marginBottom: 15,
  },

  icon_box: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 13,
  },
  text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    textAlign: 'center',
    // marginBottom:10
  },
  linear_gradient_box: {
    width: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    borderRadius: 6,
    // width:100
  },
  linear_gradient_text: {
    color: Theme.white,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
})

export default admin_cont_styles
