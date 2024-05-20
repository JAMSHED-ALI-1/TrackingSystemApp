import { StyleSheet } from 'react-native'
import Theme from '../../../../Theme/theme'

const more_info_styles = StyleSheet.create({
  header_box: {
    // borderWidth:1,
    backgroundColor: Theme.blue.primary,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_text: {
    fontSize: 16,
    fontWeight: Theme.font.xbold,
    color: Theme.white,
  },
  header_flex_child_box: {
    flexDirection: 'row',
    // alignItems: 'center',
    // borderWidth:1,
    // borderColor: 'red',
    gap: 5,
    // borderWidth:1,
    width:'95%'
    // justifyContent:'center'
  },
  language_box:{
    marginRight:15
  },
  content_box:{
    // borderWidth:1,
    width:'95%',
    alignSelf:'center',
    marginTop:15,
  },
  heading1_text:{
    fontSize:20,
    color:Theme.blue.primary,
    fontWeight: Theme.font.bold,
    // borderWidth:1,
  },
  cont_text:{
    fontSize:Theme.font.medium,
    fontWeight: Theme.font.fat,
    color:Theme.black,
    marginTop:5,
    marginBottom:20,
    // borderWidth:1,
    width:'94%',
    alignSelf:'center'
  },
  order_list:{
    flexDirection:"row",
    // borderWidth:1,
    paddingLeft:3,
    width:'97%',alignSelf:'center',
  }

})
export default more_info_styles
