import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const group_styles = StyleSheet.create({
    header_box: {
        // borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignSelf:'center',
        marginBottom: 15,
        backgroundColor: Theme.white,
      },
      header_flex_box: {
        flexDirection: 'row',
        // borderWidth:1,
        gap: 5,
        paddingHorizontal: 15,
      },
      header_headig_text: {
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.xbold,
        color: Theme.blue.primary,
      },
      search_box: {
        paddingRight: 25,
      },
      route_info_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth:1,
        marginTop: 15,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 15,
      },
      route_info_flex_box: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
      },
      route_info_text: {
        fontSize: 16,
        color: Theme.blue.primary,
        fontWeight: Theme.font.bold,
      },
      details_text: {
        fontSize: Theme.font.small,
        color: Theme.blue.primary,
        fontWeight: Theme.font.xthin,
      },

});

export default group_styles;