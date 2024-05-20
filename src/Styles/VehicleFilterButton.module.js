import Theme from "../Theme/theme";
import { StyleSheet } from "react-native";

export const card_styles = StyleSheet.create({
    cardSection: {
        height: 75,
    },
    scrollViewContent: {
        gap: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonContainer: {
        alignItems: "center",
    },
    filter_btn_child: {
        backgroundColor: Theme.white,
        alignItems: "center",
        borderRadius: 4,
        alignSelf: "stretch",
        margin: 2,
    },
    filter_btn_text: {
        color: Theme.white,
        fontSize: Theme.font.small,
        fontWeight: Theme.font.fat,
    },
    total_btn_text: {
        flexDirection: "row",
        flexGrow: 1,
        flexShrink: 1,
        color: Theme.white,
        fontWeight: Theme.font.bold,
    },
    selectedButtonContainer: {
        backgroundColor: "transparent",
        marginLeft: 10,
        marginRight: 10,
    },
    selectedButtonText: {
        fontSize: 16,
        fontWeight: Theme.font.bold,
        color: Theme.heading,
    },
}); // This can be further moved here if you have more styles to export
