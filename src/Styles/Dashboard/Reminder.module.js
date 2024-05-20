import { StyleSheet, Dimensions } from 'react-native'
import Theme from '../../Theme/theme'
const windowWidth = Dimensions.get('window').width

const reminder_styles = StyleSheet.create({
  reminder_main_box: {
    flexDirection: 'row',
    flexGrow: 1,
    height: 90,
    justifyContent: 'center',
    alignSelf: 'center',
    // borderWidth:1,
   
    // gap: 20,
    // width : windowWidth/1.5
  },

  reminder_main_box_child1: {
    width: windowWidth / 3,
    // borderWidth:1,
    // height: 90,
    borderRadius: 6,
    marginRight: 10,
    
  },

  over_soon_box: {
    flexDirection: 'row',
    // borderWidth: 1,
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // alignSelf: 'center',
    // gap: 30,
    
  },
  over_soon_box_child: {
    justifyContent: 'center',
    // borderWidth:1,
    width:"50%",
    // alignSelf:'center',
    alignItems: 'center',
  },
  name_text:{
    color: Theme.white,
    fontSize: Theme.font.small,
    fontWeight:Theme.font.bold,
    marginLeft:6,
    height:38,
    // borderWidth:1,

  },
  over_soon_box_velue_text:{
    color: Theme.white,
    fontSize:20,
    fontWeight: Theme.font.fat,
  },
  over_soon_box_text:{
    color: Theme.white,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  }
})

export default reminder_styles
