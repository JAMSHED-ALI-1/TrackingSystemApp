import { StyleSheet, Dimensions } from 'react-native'
import Theme from '../../../Theme/theme'
const windowWidth = Dimensions.get('window').width

const all_vehicle_styles = StyleSheet.create({
  all_vehicle_main_box: {
    flexDirection: 'row',
    flexGrow: 1,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  linear_gradient_box: {
    width: windowWidth / 5,
    // borderWidth:1,
    // height: 90,
    borderRadius: 6,
    marginRight: 10,
  },
  total_box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 4,
  },
  total_text: {
    color: Theme.white,
    fontSize: 26,
    fontWeight: Theme.font.xbold,
  },
})

export default all_vehicle_styles
