import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const parking_styles = StyleSheet.create({
    apply: {
        // borderWidth: 1,
        width: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        // marginTop: 10,
        backgroundColor: Theme.blue.primary,
        height: 25,
      },
      parking_range_box: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      range_text: {
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.bold,
        color: Theme.blue.primary,
      },
      close_box: {
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginVertical: 10,
      },
      close_flex_box: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
      },
      parking_flex_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
      },
      delete_aprking_box: {
        // borderWidth:1,
        paddingHorizontal: 10,
        backgroundColor: Theme.red,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      delete_aprking_text: {
        color: Theme.white,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
      },
});

export default parking_styles