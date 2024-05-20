import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const group_filter_btn = StyleSheet.create({
    first_box:{ alignItems:'center', flex:1, alignSelf:'center', },

    vehicle_radio_main_box: {
    //   flexDirection: 'row', // Ensure it's a row to enable horizontal scrolling
    //   borderWidth: 1,
    // // flexGrow:1,
    //   width: '100%',
    //   alignSelf:'center',
    //   alignItems:'center'
    // borderColor:'red',
    // marginTop:10,
    // marginBottom:10,
    // flex:1,
    // height:120
    },
    vehicle_radio_check_box: {
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent:"center",
    //   borderWidth: 1,
      width: 80,
      height: 40,
    },
    vehicle_radio_liner_box: {
      borderRadius: 6,
      width: '100%',
      height: '100%', // Adjust the height as needed
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // borderWidth:1,
    // width:''
    },
    vehicle_radio_check_text: {
      borderRadius: 6,
      width: '100%',
      height: '100%',
    borderWidth:1,
    borderColor:'#E6E6E6',
      textAlign: 'center',
      shadowColor: '#BDEAFF',
      shadowOffset: { width: 0, height: 8 },
    },
    fliter_value_text: {
      fontSize: Theme.font.small,
      color: Theme.blue.primary,
      fontWeight: Theme.font.xbold,
      textAlign: 'center',
    },
    filter_name_text: {
      fontSize: Theme.font.small,
      color: Theme.blue.primary,
      fontWeight: Theme.font.bold,
      textAlign: 'center',
    },
    create_group_box:{
        borderWidth: 1,
        width: 80,
        height:40,
        borderColor:'#E6E6E6',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:5,
        borderRadius:6,

    }
  });
  
  export default group_filter_btn;
  