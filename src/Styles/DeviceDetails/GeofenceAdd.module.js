import { StyleSheet } from "react-native";

const geofence_add_styles = StyleSheet.create({
    geo_add_box: {
      height: 80,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    geo_add_box_child: {
      height: 32,
      width: 85,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#D7D7D7',
      borderRadius: 5,
    },
    geofence_details_text: {
      fontSize: 12,
      fontWeight: '600',
      color: '#484848',
    },
  });

  export default geofence_add_styles;
