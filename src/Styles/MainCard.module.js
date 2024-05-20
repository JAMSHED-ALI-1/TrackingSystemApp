import { StyleSheet } from "react-native";
import Theme from "../Theme/theme";

const update_card_styles = StyleSheet.create({

    main_box: {
        backgroundColor: Theme.white,
        // borderWidth: .5,
        // paddingBottom: 7,
        borderRadius: 10,
        marginTop: 2,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: Theme.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        width: '95%',
    },
    card_fist_child: {
        paddingTop: 10,
        paddingHorizontal: 10
    },
    flex_box: {
        flexDirection: 'row',
        gap: 10,
    },
    flex_box_child: {
        flexDirection: 'row',
        gap: 10,
        // borderWidth: .5,
        width: '78%',
        alignSelf: "center",
    },
    child_left_flex_box: {
        justifyContent: "center"
    },
    number_plate_text: {
        fontSize: 20,
        fontWeight: Theme.font.xbold,
        color: Theme.mainBody,
        // fontFamily:'Montserrat'

    },
    update_text: {
        marginTop: 7,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.sliderGrey,
        marginBottom: 5,


    },
    distance_text: {
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.xthin,
        color: Theme.blue.primary,
        // marginTop: 8
    },
    distance_value_text: {
        fontSize: 16,
        fontWeight: Theme.font.fat,
        color: Theme.black,
        // marginTop: 8
    },

    // right box 

    right_box: {
        // marginLeft: 10,
        // borderWidth: .5

    },
    ignition_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.black
    },
    flex_box_right_box: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginTop: 2,
        // justifyContent:'center'
    },
    on_box: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: Theme.green,
    },
    ignition_on_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.sliderGrey

    },
    info_box: {
        width: '90%',
        marginTop: 5,
        marginBottom: 5

        // borderWidth:1,
    },

    info_text: {
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.fat,
        color: Theme.black,
        // marginTop:10

    },
    last_flex_box: {

        flexDirection: 'row',
        alignItems: "center",
        gap: 4,
        width: '100%',
        justifyContent: 'space-between',
        // marginTop:10
        // marginBottom:8,
        // borderWidth: 1
        // borderColor:'red'
    },

    status_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.blue.primary,
        // textAlign:'center',
        // borderWidth:1,
    },
    running_status_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.green,
        // textAlign:'center',
        // borderWidth:1,
    },
    stopped_status_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.red,
        // textAlign:'center',
        // borderWidth:1,
    },
    last_flex_speed_box: {
        width: '19%',
        // borderWidth:1,
        // fle 

    },
    last_flex_box_child: {
        width: '29%',
        // marginRight:11
        // borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center'

    },
    running_flex_box: {
        flexDirection: 'row',
        gap: 5,
        // borderWidth:1,
        // width:'120%',

    },
    status_info_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.xthin,
        color: Theme.black,
        textAlign: 'center',
    },

    linear_gradient_box: {
        width: '100%',
        // borderWidth:1,
        height: 22,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 5
    },
    last_status_text: {
        // width:'75%',
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.blue.primary,
        textAlign: 'center',
        marginTop: 5
        // marginBottom:10


    },
    vehicle_status_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.white,
        textAlign: 'center'
    },
    status_info_box: {
        width: '100%',
        // borderWidth:1,
    }


});

export default update_card_styles;