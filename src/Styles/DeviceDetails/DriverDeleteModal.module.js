import { StyleSheet } from "react-native";

const modal_delete_driver_styles = StyleSheet.create({
  
    map_main_box: {
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'space-between',
      marginTop: 8,
    },
    map_driver_info: {
      fontSize: 14,
      color: '#7F7F7F',
      fontWeight: '500',
    },
    map_driver_info_text: {
      color: '#3E4546',
      fontWeight: '500',
      fontSize: 14,
    },
    map_driver_number: {
      color: '#3E4546',
      fontWeight: '500',
      fontSize: 14,
    },
    map_driver_delete_box: {
       justifyContent: 'center',
     alignItems: 'center' 
  },
  flex_box:{
    flexDirection:'row',
    gap:15,
    marginHorizontal:10
  }
  })

  export default modal_delete_driver_styles;