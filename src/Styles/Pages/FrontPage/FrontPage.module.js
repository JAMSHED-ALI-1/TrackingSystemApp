import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const front_page_styles = StyleSheet.create({
    main_box: {
        // borderWidth:1,
        width: '95%',
        alignSelf: 'center',
    },
    gps_box: {
        // borderWidth:1,
        height: 160,
        borderRadius: 8,
        shadowColor: Theme.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingHorizontal: 20,
        borderColor: '',
        marginBottom: 15,
        backgroundColor: Theme.white,
        elevation: .5
        // borderWidth: 1
    },
    gps_heading_text: {
        fontSize: 16,
        fontWeight: Theme.font.xxbold,
        color: Theme.blue.primary,
        marginTop: 10,
        // borderWidth: .5
    },
    flex_box: {

        flexDirection: "row",
        justifyContent: 'space-between',
        // borderWidth:1,
        gap: 5,
        marginTop: 15
    },
    flex_box_child: {
        // borderWidth:1,
        width: '22%',
        // justifyContent:"center",
        alignItems: 'center',
        height: 92,
    },
    icon_box: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Theme.blue.primary,
        justifyContent: "center",
        alignItems: 'center'
    },
    gps_type_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.blue.primary,
        marginTop: 10,
        textAlign: "center"
    },
    carousel_box:{
        borderWidth:.5, 
        // height:104,
        borderRadius:8,
        borderColor: Theme.secondary,
        marginBottom:15,
        elevation:.5
    },
    sim_box: {
        // borderWidth:1,
        // height: 170,
        // paddingHorizontal:10
        // elevation:2

    },
    sim_icon_box:{
        height:50, 
        width:50,
        borderRadius:25,
        backgroundColor: Theme.blue.primary,
        justifyContent:"center",
        alignItems:'center',
       paddingHorizontal:10,
    //    borderWidth:1
    },

    useful_tools_box: {
        backgroundColor: Theme.white,
        // borderWidth:1,
        // height:,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingBottom: 20,
        // borderWidth:1,
        elevation:.5
    },
    tool_flex_box: {
        flexDirection: 'row',
        // justifyContent:'space-between',
        // borderWidth:1,
        height: 45,
        gap: 5,
        justifyContent: "center",
        alignItems: 'center',
        // marginTop:15
    },
    tool_flex_box_child: {
        borderRadius: 10,
        backgroundColor: Theme.blue.primary,
        // borderWidth:1,
        paddingHorizontal: 10,
        width: "50%",
        justifyContent: "center",
        alignItems: 'center'
    },
    tool_text: {
        color: Theme.white,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.xxbold
    }

});

export default front_page_styles;