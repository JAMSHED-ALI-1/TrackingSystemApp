import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const common_header_styles = StyleSheet.create({


    main_box:{
        flexDirection: 'row',
        gap:10,
        borderBottomWidth:.5,
        borderColor: Theme.secondary,
        height:50,
        // marginBottom:20,
        // justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:15
    },
    icon:{
        // backgroundColor: Theme.blue.primary
        marginLeft:15
    },
    heading_text:{
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.xbold,
        color : Theme.blue.primary,
    }

});

export default common_header_styles;
