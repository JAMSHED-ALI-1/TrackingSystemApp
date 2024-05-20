import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const trip_history_styles = StyleSheet.create({

    main_box:{
        // borderWidth:1, 
        width:'100%',
        alignSelf: 'center',
        // paddingBottom:80,
        // marginBottom:40
    },
    header_box:{
        flexDirection:'row',
        marginBottom:15,
        backgroundColor:Theme.white,
        height:50,
        alignItems:'center',
        paddingHorizontal:15,
        // borderWidth:1,
        justifyContent:"space-between",
        // marginRight:20,
        paddingRight:30,
        alignItems:'center',
    },
    header_flex_box:{
        flexDirection:'row',
        gap:10,
        // justifyContent:'space-between'
    },
    heading_text:{
        fontSize:Theme.font.medium,
        fontWeight: Theme.font.fat,
        color : Theme.blue.primary,
        marginBottom:15,
        width:'92%',
        alignSelf:'center'
    },
    header_text:{
        fontSize:18,
        fontWeight: Theme.font.xbold,
        color: Theme.blue.primary,

    },
    scroll_view_box:{
        height:'92%',
        width:'92%',
        alignSelf:'center'
    },
    card_box:{
        borderWidth:1,
        // marginTop:15,
        backgroundColor: Theme.white,
        borderRadius:8,
        paddingBottom:10,
        borderColor: Theme.secondary,
        elevation:1,
        marginBottom:15
    },
    flex_box:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },

    flex_box1:{
        flexDirection:'row',
        gap:3,
        alignItems:'center',
        backgroundColor:'#DEDEDE',
        borderTopLeftRadius:8,
        height:25,
        paddingLeft:10,
         paddingRight:10
    },
    text:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: Theme.black,
    },

    details_text:{
        fontSize: Theme.font.xsmall,
        color: Theme.blue.primary,
        fontWeight:Theme.font.fat,
        paddingRight:10
    },
    flex_box2:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:10
    },
    vehicle_no_text:{
        fontSize: 16,
        color: Theme.blue.primary,
        fontWeight:Theme.font.bold,
    },
    date_flex_box:{
        flexDirection: 'row',
        gap:5,
        // borderWidth:1,
        width:'42%'
    },
    date_heading_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.blue.primary
    },
    date_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.blue.secondary
    },
    sim_track:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.fat,
        color: Theme.blue.primary,

    }

});

export default trip_history_styles;