import { StyleSheet } from 'react-native'
import Theme from '../../Theme/theme';

const active_all_styles = StyleSheet.create({
  active_main_box: {
    // borderWidth: 1,
    flexDirection: 'row',
    width: '94%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 15,
    marginTop:10
  },
  geo_toggle_container: {
    flexDirection: 'row',
    gap:10,
    // height: 25,
    // width: '90%',
    // borderWidth: 1,
    // borderColor: Theme.blue.primary,
    // borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    // marginTop:10
    marginBottom:15
  },
  
  
  time_def: {
    width: 74,
    // borderWidth:1,
    height:19,
    borderRadius:8,
    backgroundColor:Theme.blue.primary,
    justifyContent:"center",
    alignItems:'center',

  },
  time_sel: {
    width: 74,
    justifyContent: 'center',
    height: 19,
    alignItems: 'center',
    borderWidth:.5,
    borderRadius:8,
    borderColor: Theme.secondary
  },
  gradient_toggle_btn: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 19,
    backgroundColor:Theme.blue.primary
  },
  geo_toggle_white_text: {
    color: 'white',
    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold
  },
  radio_text_gray: {
    // color: '#133F7D',
    fontSize: Theme.font.small,
    color: Theme.blue.primary,
    fontWeight: Theme.font.bold
  },
  active_text:{

fontSize: Theme.font.medium,
fontWeight: Theme.font.bold,
color: Theme.blue.primary,
  },

  active_box:{
    width:'28%',
    marginRight:-10,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row', 
    gap:10,
    borderWidth:1,
    // borderRadius:20,
    marginLeft:-45
  },

  calendar_box:{
    // borderWidth:1,
    width:'28%',
    marginRight:45,
    borderRadius:20,
    justifyContent:'center',
    flexDirection:'row', marginLeft:25
  }
});

export default  active_all_styles;
