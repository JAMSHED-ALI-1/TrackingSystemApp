import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const validity_styles = StyleSheet.create({
    validit_box: {
      flexDirection: 'row',
      width: '100%',
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
      marginBottom:20
    },
    validity_main_box: {
      width: '80%',
      height: 62,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    validity_per_child_box: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      backgroundColor: Theme.green,
    },
    validit_per_text: {
      color: Theme.white,
      fontSize: Theme.font.large,
      fontWeight: Theme.font.fat,
    },
    validity_rem_box: {
      justifyContent: 'flex-end',
      width: '100%',
      flexDirection: 'row',
      fontWeight: Theme.font.thin,
    },
    add_validity_box:{
      width: '35%',
      height: 32,
      alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      backgroundColor: Theme.blue.primary,
      flexDirection:'row',
      gap:10
    },
    add_validity_box_text: {
      color: Theme.white,
      fontSize: Theme.font.small,
      fontWeight: Theme.font.bold,
     
    },
  });
  export default validity_styles;