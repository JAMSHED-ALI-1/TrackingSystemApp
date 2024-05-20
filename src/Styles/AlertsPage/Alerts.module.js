import { Dimensions, StyleSheet } from 'react-native'
import Theme from '../../Theme/theme'
const windowWidth = Dimensions.get('window').width

const alerts_styles = StyleSheet.create({

  heading_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  heading_text: {
    fontSize: 22,
    color: Theme.secondary,
    fontWeight: Theme.font.bold,
  },

  alert_flex_box: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  vehicle_num_text: {
    fontSize: 18,
    color: Theme.blue.primary,
    fontWeight: Theme.font.bold,
  },

  scroll_box:{
    height:755, 
    // borderWidth:1,
    marginBottom:10

  },
  card:{
    // borderWidth:1,
    padding:15,
    marginTop:15,
    backgroundColor: Theme.white,
    width: '95%',
    alignSelf:'center',
    borderRadius:7,
    elevation:1,

  },

  flex_box: {
    flexDirection: 'row',
    gap: 10,
    // alignSelf: 'center',
    justifyContent:'space-between',
    marginBottom:3
  },
  vh_num_text:{
    fontSize: 18,
    color: Theme.blue.primary,
    fontWeight: Theme.font.bold
  },
  text:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold

  },
  speed:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.bold,
    color: Theme.blue.primary
  },
  time:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.gray31
  },
  no_data:{
    justifyContent:'center',
    alignItems: 'center',
  },
  no_data_text:{
    fontSize: 30,
    color: Theme.blue.primary,
    fontWeight: Theme.font.bold,
  }
})
export default alerts_styles
