import { StyleSheet } from 'react-native'
import Theme from '../../../../Theme/theme'

const gst_styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // borderWidth: 1,
    width: '95%',
    // margin:'auto'
    // alignItems:"center"
    alignSelf: 'center',
  },
  header_flex_box: {
    flexDirection: 'row',
    gap: 10,
    // borderWidth: 1,
    alignItems:'center',
    marginBottom:40,
    marginTop:20
    // alignItems: 'center',
  },

  gst_select_text:{
fontSize: 20,
fontWeight:Theme.font.xbold,
color: Theme.blue.primary,
marginBottom:15
  },


  gst_select_per_main: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // margin: 10,
    // borderWidth:1,
    height:50,
    gap:20,
    marginBottom:40,
    // alignItems:'center'

    // height:100
  },
  gst_select_per: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    textAlign: 'center',
    width:'20%',
    alignItems:"center",
    justifyContent: 'center',
    
  },


  title: {
    fontSize: 24,
    // marginBottom: 20,
    color: Theme.blue.primary,
    textAlign:'center',
    fontWeight: Theme.font.xbold,
  },
  inputContainer: {
    marginBottom: 20,
   
  },
  
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: Theme.font.xbold,
    color: Theme.blue.primary
  },
  input_flex_box:{
    borderWidth:1,
    flexDirection:'row',
    // justifyContent:"center",
    alignItems:'center',
    // height:45,
    borderRadius:4,
    borderColor:Theme.secondary,
    marginTop:5

  },
  vr_line:{

    height:28,
    // width:1, 
    borderWidth:.5,
    borderColor: Theme.greyLight,


  },
  input_per:{
    fontSize:20,
    fontWeight: Theme.font.xbold,
    color: Theme.black,
    marginLeft:20,
    // borderWidth:1
    // marginRight:20

  },
  input: {
    height: 45,
    width: '85%',
    borderColor: Theme.secondary,
    // borderWidth: 1,
    paddingLeft: 10,
    // borderRadius:4,
    //  flexDirection:'row'
  },

  total_selling_box:{

    height:35,
    backgroundColor: Theme.blue.primary,
    
    borderTopEndRadius:4,
    borderTopLeftRadius:4,
    justifyContent:"center",
    alignItems:'center',
    marginTop:15


  },

  selling_heading_text:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.white

  },
  output_box:{
    height: 150,
    // borderWidth:1,
    backgroundColor: Theme.white,
    borderBottomRightRadius:4,
    borderBottomLeftRadius:4
  },
  price_text:{

    fontSize:20,
    color: Theme.blue.primary,
    fontWeight: Theme.font.xxbold, 
    textAlign:'center',
    marginTop:15,
    marginBottom:15

  },
  total_gst_frofit_flex_box:{
flexDirection:'row',
// justifyContent
gap:25,
justifyContent:'center',
// alignItems:'center'
  },


  total_flex_child:{
    borderWidth:.3,
    width:'40%',
    justifyContent:'center',
    alignItems:"center",
    height:61,
    borderRadius:4,
    backgroundColor:'#FAFAFA'
  },
  profit_gst_heading_text:{
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.black,

  },
  profit_gst_text:{
    fontSize: 16,
    fontWeight: Theme.font.xbold,
    color: Theme.secondary,

  },


  calculateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  calculateButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 10,
  },
})

export default gst_styles
