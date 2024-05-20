import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const speed_limit_styles = StyleSheet.create({
    card: {
        borderWidth: 0,
        padding: 12,
        //    
    },
    save_box: {
        height: 40,
        // borderWidth:1,
        marginTop: 15,
        borderRadius: 6,
        backgroundColor: '#DDDDDD',
        width: '95%',
        alignSelf: "center",
        justifyContent: 'center',
        justifyContent: 'center',
    },
    save_text: {
        color: Theme.gray53,
        fontSize: 16,
        fontWeight: Theme.font.fat,
        textAlign: 'center',
    }

});

export default speed_limit_styles;