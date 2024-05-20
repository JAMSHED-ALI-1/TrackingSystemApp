import { StyleSheet } from 'react-native'
import Theme from '../../../Theme/theme'

const verify_otp = StyleSheet.create({
 
  heading_text: {
    fontSize: 24,
    fontWeight: Theme.font.xbold,
    color: Theme.black,
    marginBottom: 15,
  },
  flex_box: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: Theme.font.xthin,
    color: Theme.black,
    lineHeight: 30,
  },
  otp_box: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  otp_input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginHorizontal: 5,
    width: 80,
    textAlign: 'center',
  },
  resent_otp_text:{
    fontSize: 16, 
    fontWeight: Theme.font.xbold,
    color: Theme.black,

  },
  time_text:{
    fontSize: 16,
    fontWeight: Theme.font.xbold,
    color: Theme.secondary
  },
  resent_btn:{
    fontSize: 16,
    fontWeight: Theme.font.xbold,
    color: Theme.secondary,
    // borderWidth:1,
    paddingVertical:10
  },
  submit_btn:{
    height:64,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.blue.primary,
    borderRadius:4,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 0,
    width:'95%',
    alignSelf: 'center',

  },
  submi_btn_text:{
    fontSize: 24,
    color: Theme.white,
    fontWeight: Theme.font.xbold,

  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 510,
    marginTop: 25,
    width: '93%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  flex_box1:{
    flexDirection:'row',
    gap:10,
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
  }
})

export default verify_otp
