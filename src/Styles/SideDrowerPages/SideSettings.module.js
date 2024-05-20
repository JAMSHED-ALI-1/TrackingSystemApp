import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const side_settings_styles = StyleSheet.create({

    side_settings_main_box:{

        width : '90%',
        alignSelf:'center',
        marginTop:20

    },
    side_settings_text:{
        color : '#4F4F4F',
        fontSize :16 ,
        fontWeight: Theme.font.fat,
    },
    side_settings_hr_line:{
        marginTop:15,
        height:1,
        borderWidth:1,
        borderRadius:6,
        borderColor: Theme.hrLine,
        fontWeight: Theme.font.fat,
        marginBottom:15,

    },

    side_select_text:{
        fontSize: Theme.font.small,
        color: '#333322',
        fontWeight: Theme.font.xthin,
    },
    side_select_box:{
        height:40,
        marginTop:300,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
    },
    side_select_btn_text:{
        color:Theme.white,
        fontSize:16,
        fontWeight: Theme.font.fat,
    },
    setting_flex_box:{
        // borderWidth:1,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
   


});

export default side_settings_styles;