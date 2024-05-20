import { StyleSheet } from 'react-native'
import Theme from '../../../../Theme/theme'

const emi_cal_styles = StyleSheet.create({
  main_box: {
    flex: 1,
    // borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
  },
  header_flex_box: {
    flexDirection: 'row',
    gap: 10,
    // borderWidth: 1,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
    // alignItems: 'center',
  },

  title: {
    fontSize: 24,
    // marginBottom: 20,
    color: Theme.blue.primary,
    textAlign: 'center',
    fontWeight: Theme.font.xbold,
  },

  input_main_box: {
    // borderWidth:1,
    height: 345,
    borderRadius: 8,
    backgroundColor: Theme.white,
  },

  emi_select_text: {
    fontSize: 20,
    fontWeight: Theme.font.xbold,
    color: Theme.blue.primary,
    marginBottom: 15,
  },

  emi_select_per_main: {
    flexDirection: 'row',
    // margin: 10,
    // borderWidth:1,
    height: 50,
    gap: 20,
    marginBottom: 40,
  },

  emi_select_per: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    textAlign: 'center',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input_container: {
    // marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    paddingTop: 20,
    // borderWidth:1,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: Theme.font.xbold,
    color: Theme.blue.primary,
  },
  input_flex_box: {
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent:"center",
    alignItems: 'center',
    // height:45,
    borderRadius: 4,
    borderColor: Theme.secondary,
    marginTop: 5,
    overflow: 'hidden',
  },
  vr_line: {
    height: 28,
    // width:1,
    borderWidth: 0.3,
    borderColor: Theme.greyLight,
    backgroundColor: Theme.greyLight
  },
  input_per: {
    fontSize: 20,
    fontWeight: Theme.font.xbold,
    color: Theme.black,
    marginLeft: 20,
    // borderWidth:1
    // marginRight:20
  },
  input: {
    height: 45,
    width: '85%',
    borderColor: Theme.secondary,
    // borderWidth: 1,
    paddingLeft: 10,
    fontSize:Theme.font.medium,
    color: Theme.sliderGrey,
    fontWeight: Theme.font.fat
  },

  total_selling_box: {
    height: 35,
    backgroundColor: Theme.blue.primary,
    borderTopEndRadius: 4,
    borderTopLeftRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  selling_heading_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xthin,
    color: Theme.white,
  },
  output_box: {
    height: 150,
    // borderWidth:1,
    backgroundColor: Theme.white,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  price_text: {
    fontSize: 20,
    color: Theme.blue.primary,
    fontWeight: Theme.font.xxbold,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  total_gst_frofit_flex_box: {
    flexDirection: 'row',
    // justifyContent
    gap: 25,
    justifyContent: 'center',
    // alignItems:'center'
  },

  total_flex_child: {
    borderWidth: .3,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 61,
    borderRadius: 4,
    backgroundColor:"#FAFAFA",
    // borderColor:'#FAFAFA'
  },
  interest_emi_heading_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.black,
  },
   interest_emi_text: {
    fontSize: 16,
    fontWeight: Theme.font.xbold,
    color: Theme.secondary,
  },
  input_loan_tenure:{
 height: 45,
    width: '73%',
    borderColor: Theme.secondary,
    // borderWidth: 1,
    paddingLeft: 10,
    fontSize:Theme.font.medium,
    color: Theme.sliderGrey,
    fontWeight: Theme.font.fat
    // justifyContent:'center', alignItems:'center'
  },
  
  year_box:{
    backgroundColor: '#E7F7FF',
    height:45, 
    width:'14%',
    justifyContent:"center", 
    alignItems:'center',
    textAlign:'center',
    // borderWidth:1
  },
  month_box:{
    height:45,
    width:'14%',
    justifyContent:"center", 
    alignItems:'center',
    textAlign:'center',
    
    // borderWidth:1

  },
})

export default emi_cal_styles;

// total_emi_intrest_flex_box
