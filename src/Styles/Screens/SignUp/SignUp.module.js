import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const sign_styles = StyleSheet.create({
  main_box: {
    marginTop: 25,
    // borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  main_heading: {
    fontSize: 28,
    color: Theme.secondary,
    marginBottom: 25,
  },
  lable_text: {
    fontSize: 16,
    fontWeight: Theme.font.fat,
    color: Theme.gray53,
    marginBottom: 10,
    color: Theme.blue.primary,
    marginLeft: 5,
  },
  input_box: {
    // borderWidth: 1,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#7C7C7C1A',
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: '#7C7C7C80',
  },
  input_state_box: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#7C7C7C1A',
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: '#7C7C7C80',
    // borderWidth:1,
  },
  select_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: '#7C7C7C80',
  },
  submit_btn: {
    height: 64,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.blue.primary,
    borderRadius: 4,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 0,
    width: '95%',
    alignSelf: 'center',
  },
  submi_btn_text: {
    fontSize: 24,
    color: Theme.white,
    fontWeight: Theme.font.xbold,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 350, // Adjust this value based on the height of the submit button
  },
  flex_box1:{
    flexDirection:'row',
    gap:10,
    // marginTop:
    // alignItems:'center', 

  },
  img:{
    height:40,
    width:40,
    borderRadius:20,
    marginBottom:30
  },
  logo_text:{
    fontSize: 21,
    color: Theme.blue.primary,
    fontWeight: Theme.font.xbold,
    alignItems: "center",
    marginTop:5
  },
  error_text:{
    color: Theme.red,
    fontSize: Theme.font.small,
    marginTop:-10,
    // borderWidth:1, 
    marginBottom:20
  }
})

export default sign_styles
