import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const styles = StyleSheet.create({
    up_input_main_box: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      marginTop: 280,
    },
    up_doc_header:{
      marginBottom:20,
       width:'94%',
        alignSelf:'center'
      },
    input: {
      height: 40,
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: 10,
      paddingHorizontal: 8,
      borderColor:Theme.silver,
      color: Theme.silverDark,
      fontSize:Theme.font.medium,
      fontWeight: Theme.font.xthin
  
    },
    disabled_input: {
      backgroundColor: Theme.silverDark,
    
    },
  
    remarks_input: {
      height: 60,
      borderWidth: 1,
      borderColor: Theme.silver,
      borderRadius: 6,
      paddingHorizontal: 8,
      color: Theme.silverDark,
      // color:'red',
      fontSize:Theme.font.medium,
      fontWeight: Theme.font.xthin
    },
    cal_placeholder_box: {
      height: 78,
    },
    placeholder_box: {
      height: 90,
    },
    placeholder: {
      marginBottom: 8,
      fontSize: Theme.font.medium,
      fontWeight: Theme.font.xthin,
      color: Theme.silverDark,
  
    },
    
    imge_up_main_box:{
      flexDirection:'row',
      height:80, 
     justifyContent:'center',
      width:'100%',
     justifyContent:'space-evenly',
     height:125 ,
     marginTop:25
    },
  
    image_upload_container: {
      alignItems: 'center',
      borderWidth: 1, 
      borderStyle: 'dotted',
      borderColor: 'black',
      width:'100%',
      height:125,
      borderRadius:8,
     
  
    },
    first_img_up_box:{
      flexDirection:'column',
     width:"35%",gap:10,height:125 ,
     justifyContent:'center',
     alignItems:'center',
     alignSelf:'center',
  },
    image_upload_button: {
      height: 125,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      width: '85%',
      borderColor:'teal',
      justifyContent:"center",
      alignItems:'center',
      gap:10,
    },
    uploaded_image: {
      width: 100,
      height: 100,
      marginTop: 10,
    
    },
  
    button_text1:{
      color:Theme.silverDark,
      fontSize:Theme.font.medium,
      fontWeight: Theme.font.xthin,
      width:62,
      height: 38,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:"center",
  
    },
    img_font_text:{
     fontSize: Theme.font.medium,
     color:Theme.silverDark,
     fontWeight:Theme.font.xthin
    },
    Sub_button: {
      height: 40,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      marginTop: 40,
      width:'60%'
    },
    button_text: {
      color: 'white',
      fontSize: 16,
    },
  
  });
  export default styles;