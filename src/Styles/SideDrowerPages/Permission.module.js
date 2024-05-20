import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const perm_styles = StyleSheet.create({
    main_box:{
        marginBottom:70,
        width: '95%',
        alignSelf:'center',
        // borderWidth:1,

    },

    perm_heading_text:{
        color: Theme.blue.primary,
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.fat,
        marginBottom:15,
        marginLeft:8

    },
    name_text:{
        color: Theme.secondary,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        marginLeft:8

        // marginBottom:10
    },
    flex_box:{
        // marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        // borderWidth:1,
        // marginTop:30
        // marginLeft:8
        // 
    },
    switch_box:{
        height:35,
        justifyContent:'center',
    },
    save_change_box:{
        height: 40,
        // borderWidth:1,
        borderRadius:6,
        marginBottom:10,
        width: '95%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Theme.gray53
    },
    save_change_text:{
        fontSize: 16,
        color: Theme.mainBody,
        fontWeight: Theme.font.xthin,

    }

});

export default perm_styles;
