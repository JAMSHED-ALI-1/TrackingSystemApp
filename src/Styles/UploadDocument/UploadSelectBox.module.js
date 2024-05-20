import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const upload_box_styles = StyleSheet.create({
    up_main_box: {
      flex: 1,
    },
    upload_opacity_box: {
      width: '93%',
      height: 40,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: Theme.silver,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
    },
    select_box_text: {
      fontSize: Theme.font.medium,
      color: Theme.silverDark,
      fontWeight: Theme.font.xthin,
    },
    up_modal_child: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -220,
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    up_modal_child1: {
      elevation: 5,
      height: 270,
      width: '93%',
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingTop: 10,
    },
    up_flat_box: {
      width: '100%',
      alignSelf: 'center',
      height: 32,
      justifyContent: 'center',
      borderColor: '#8e8e8e',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 35,
    marginRight:25
    },
    up_modal_text: {
      fontSize: Theme.font.medium,
      fontWeight: Theme.font.xthin,
      color: Theme.greyLight,
    },
  });
  
  export default upload_box_styles;