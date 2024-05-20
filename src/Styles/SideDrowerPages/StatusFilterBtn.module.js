import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const card_styles = StyleSheet.create({
    cardSection: {
      height: 80,
    },
    scrollViewContent: {
      gap: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    buttonContainer: {
      alignItems: 'center',
    },
    filter_btn_child: {
      // backgroundColor: Theme.white,
      alignItems: 'center',
      // borderRadius: 4,
      // borderWidth: 2,
      // alignSelf: "stretch",
      // color: Theme.white,
      margin: 4,
    },
  
    filter_btn_text: {
      color: Theme.white,
      fontSize: Theme.font.small,
      fontWeight: Theme.font.fat,
    },
  
    total_btn_text: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1,
      color: Theme.white,
      fontWeight: Theme.font.bold,
      // fontSize
    },
  
    selectedButtonContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 15,
    },
  
    selectedButtonText: {
      fontSize: 16,
      fontWeight: Theme.font.bold,
      color: Theme.heading,
    },
  });
  export default card_styles;