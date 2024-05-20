import { StyleSheet } from "react-native";
import Theme from "../../../../Theme/theme";

const bar1_styles = StyleSheet.create({

    main_box:{
        // borderWidth:1,
        borderRadius:8,
        // borderColor: Theme.secondary,
        // paddingHorizontal:10,
        // paddingTop:2,
        backgroundColor: Theme.white
    },

    main_container: {
        // Add any common styles for the image container here
        paddingTop: 0,
        // borderWidth: 2,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        overflow: 'hidden',
        marginBottom:10,
        flexDirection:"row",
        gap:5,
        justifyContent:'center',
        
        // width:"10%"
        // justifyContent:'space-between'
        
        // marginHorizontal: 15
    },
    left_box:{
        // borderWidth:1,
        // marginLeft:15,
        marginTop:15,
        // borderWidth:1,
        width:'62%'
    },
    right_box:{
        width:'28%',
        justifyContent:'center',
        paddingRight:10
        // alignItems:'center',
    },
    heading_text:{
        fontSize:16,
        fontWeight: Theme.font.xbold,
        color: Theme.blue.primary,

    },
    cont1_text:{
        fontSize:Theme.font.xsmall,
        fontWeight: Theme.font.fat,
        color: Theme.black,
        marginTop:2
    },
    cont2_text:{
        fontSize:Theme.font.small,
        fontWeight: Theme.font.xbold,
        color: Theme.black,
        marginTop:2 

    },

    btn_box:{
        // borderWidth:1,
        marginTop:8,
        width:'40%',
        height:21,
        borderRadius:24,
        backgroundColor: Theme.blue.primary,
        justifyContent:'center',
        alignItems: 'center',
    },
    btn_text:{
        color: Theme.white,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,

    },
    indicatorView: {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    dotIndicator: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    dotIndicatorActive: {
        backgroundColor: Theme.blue.primary,
    },
    dotIndicatorInactive: {
        backgroundColor: Theme.grey,
    },


});

export default bar1_styles;