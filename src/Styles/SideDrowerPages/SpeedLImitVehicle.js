import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const vehicle_limit_styles = StyleSheet.create({

    header_box: {

        height: 47,
        borderWidth: 1,
        marginTop: 20,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: Theme.blue.primary,
        flexDirection: 'row',
        gap: 15,
        // marginBottom:15

    },
    vehicle_number_box: {
        // borderWidth:1,
        borderColor: 'red',
        width: '50%',
        justifyContent: "center",
        alignItems: 'center'
    },
    speed_limit_box: {
        // borderWidth:1, 
        borderColor: 'teal',
        width: '27%',
        justifyContent: "center",
        alignItems: 'center'
    },
    speed_limit_edit_box: {
        width: "15%",
        // borderWidth:1,
        borderColor: 'pink',
        justifyContent: "center",
        alignItems: 'center'
    },

    header_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.white,

    },

    scroll_box: {
        borderWidth: 1,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        // paddingBottom:25,
        borderTopWidth: 0,
        borderColor: Theme.secondary,
        height: '66%',


    },
    flex_box: {
        flexDirection: "row",
        gap: 15,
        marginTop: 15,
        // marginBottom:15
    },
    vehicle_num_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.secondary,
    },
    speed_text: {
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
        color: Theme.mainBody
    }

});

export default vehicle_limit_styles;