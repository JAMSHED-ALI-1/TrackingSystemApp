import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap:10,
  
    },
    searchBox: {
      flexDirection:'row',
      flex: 1,
      borderWidth: 1,
      borderRadius: 26,
      borderColor: Theme.blue.primary,
      backgroundColor: '#F2F2F2',
      justifyContent:'space-around',
      alignItems: 'center',
    },
    input: {
      height: 32,
      paddingHorizontal: 8,
      color: '#B3B3B3',
      fontSize: Theme.font.small,
      fontWeight: Theme.font.fat,
    },
  });

  export default styles;