import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const balance_styles = StyleSheet.create({
  header_box: {
    // borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf:'center',
    marginBottom: 15,
    backgroundColor: Theme.white,
  },
  header_flex_box: {
    flexDirection: 'row',
    // borderWidth:1,
    gap: 10,
    paddingHorizontal: 15,
  },
  header_headig_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xbold,
    color: Theme.blue.primary,
  },
  search_box: {
    paddingRight: 15,
  },
  cont_main_box: {
    width: '93%',
    alignSelf: 'center',
    // borderWidth:1,
  },
  info_box: {
    // borderWidth: 1,
    height: 120,
    borderRadius:12,
    flexDirection:'row',
    justifyContent:"space-between",
    // alignSelf:"center",
    // justifyContent
  },
  balance_info_box:{
    // borderWidth:1,
    width:'48%',
    // padding:10,
    paddingHorizontal:20,
    paddingVertical:10

  },
  amount_box:{
    flexDirection:'row',
    gap:2,


  },
  amount_text:{

    fontSize: 32,
    fontWeight: Theme.font.xbold,
    color: Theme.white,

  },
  

  rupee_text:{
    fontSize: Theme.font.medium,
    color: Theme.white,
    marginTop:20
    

  },


  heading_Text:{

    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    color: Theme.white,

  },
  img_box:{
    // borderWidth:1,
     width:'45%',
    alignSelf:'center',
},

balance_box:{
  height:22,
  backgroundColor: Theme.white,
  width:106,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:12
},
add_balance_text:{
  fontSize:12,
  color: Theme.blue.primary,
  fontWeight: Theme.font.bold,

},

map_main_box:{
  borderWidth:.5,       
  marginTop:10,
  flexDirection:'row',
  borderColor: Theme.secondary,
  borderRadius:8,
  padding:10,
  gap:10,
  alignItems: 'center',
  backgroundColor: Theme.white,

},
balance_method_box:{
  width:'20%',
  // borderWidth:1

},
tracking_method_text:{
  fontSize: Theme.font.small,
  color: Theme.blue.primary,
  fontWeight: Theme.font.fat,
  textAlign: 'center'
},
hr_line:{borderWidth:.2,height:32, borderColor:'#595959'},
second_flex_box:{
  // borderWidth:1,
  width:'28%',
  alignContent:"center"
},
phone_no_text:{
  fontSize: Theme.font.medium,
  fontWeight: Theme.font.fat,
  color: Theme.black,
},
other_text:{
  fontSize: Theme.font.xsmall,
  fontWeight: Theme.font.xthin,
  color:'#888888'
},
last_flex_box:{
  // borderWidth:1,
  width:"45%",
  alignItems:'center',
},
price_text:{
  fontSize:Theme.font.medium,
  color: Theme.red,
  fontWeight: Theme.font.bold,

},
flex_box:{
  flexDirection:'row', gap:10
},
date_text:{
  fontSize:8,
}



})

export default balance_styles
