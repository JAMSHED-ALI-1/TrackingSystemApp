import { StyleSheet } from "react-native";

const document_modal_styles = StyleSheet.create({
    document_grid_main_box: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf:'center',
      width: '100%',
      padding: 5,
      gap:12, 
    },
    document_grid_child_box: {
      flexBasis: '22%',
      flexGrow: 0, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    document_grid_child_box1:{
      width:60,
      height:46,
      borderRadius:8,
      backgroundColor:'#D9D9D9',
      justifyContent:'center',
      alignItems:'center',
    },
    document_grid_child_box1_text:{
      fontSize:12,
      fontWeight: '500',
      color:'#323232',
    },
  });
  export default document_modal_styles;