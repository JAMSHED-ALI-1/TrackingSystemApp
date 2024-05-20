import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const send_otp_styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100, 
        marginTop:25,
        width:'90%',
        alignSelf:'center',
        marginBottom:420
      },
      heading_text:{
        fontSize:24,
        fontWeight: Theme.font.xbold,
        color: Theme.black,
        marginBottom:15
      },
      text:{
        fontSize:20,
        fontWeight: Theme.font.xthin,
        color:Theme.black,
        marginBottom:25
      },
      input: {
        flex: 1,
        height: 40,
        borderWidth:1
      },
      flex_box:{
        flexDirection:'row',
        gap:20,
        // borderWidth:1,
      },
      input_box:{
        borderBottomWidth:1,
        width:'60%',
        borderColor: '#A9A9A9',
        fontSize: 16,
        fontWeight: Theme.font.xthin,
        color: '#A9A9A9'


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
        left: 20,
        right: 20,
        width: '90%',
        alignSelf: 'center',
      },
      submi_btn_text: {
        fontSize: 24,
        color: Theme.white,
        fontWeight: Theme.font.xbold,
      },
});

export default send_otp_styles;
