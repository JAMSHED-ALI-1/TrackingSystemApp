import { StyleSheet } from "react-native";

const modal_radio_styles = StyleSheet.create({
    radio_main_box: {
      flexDirection: 'row',
      gap: 15,
    },
    outer_box: {
      height: 20,
      width: 20,
      borderWidth:1,
      borderColor: '#BBBBBB',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      // elevation: 1,
      // shadowColor: '#000',
    },
    inner_box: {
      width: 10,
      height: 10,
      borderRadius: 10,
      
    },
    radio_check_text: {
      fontSize: 12,
      color: '#323232',
      fontWeight: '500',
    },
    radio_map_touch_box: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: 10,
    },
  })

  export default  modal_radio_styles;