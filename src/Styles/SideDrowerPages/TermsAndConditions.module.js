import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const terms_cond_styles = StyleSheet.create({
    terms_cond_heading_box:{

        flexDirection:'row',
        gap:10,
        alignItems:'center',

    },
    side_terms_text_child2:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.xthin,
        color: '#333322',
        marginTop:2.5
    }

});

export default terms_cond_styles;