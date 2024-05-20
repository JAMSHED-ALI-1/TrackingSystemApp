import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const notifaction_styles = StyleSheet.create({
    main_box:{
        width:'94%',
        alignSelf:'center',
        marginTop:10,
        // alignItems:'center'
    },
    heading_box:{
        flexDirection:'row',
        gap:12,
        alignItems:'center'

    },
    heading_text:{
        fontSize:25,
        fontWeight: Theme.font.fat,
        color: Theme.mainBody
    },
    hr_line:{
        // width: '95'
        height:1,
        borderWidth:1,
        borderColor:Theme.hrLine,
        marginBottom:15,
        marginTop:15,
        // width
    },
    flex_box:{
        // borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        // justifyContent:"center"
        alignItems:'center'
    },
    icon_flex_box:{
        flexDirection:'row',
        gap:5,
        // borderWidth:1,
        alignItems:'center',

    },
    enable_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.xthin,
        color: Theme.mainBody,
    },
    active_noti_text:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: Theme.mainBody,
    },
    hr_line2:{
        height:4,
        borderWidth:1,
        color: Theme.hrLine,
        borderColor:Theme.hrLine,
        backgroundColor: Theme.hrLine,
        borderRadius:6,
        marginTop:10

    },
    save_change_box:{
        height:40,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        marginTop:230,


    },
    save_change_text:{
        fontSize: 16,
        fontWeight: Theme.font.xthin,
        color: Theme.white
    }


});

export default notifaction_styles;
