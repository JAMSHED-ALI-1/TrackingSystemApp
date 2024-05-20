import { StyleSheet } from "react-native";
import Theme from "../../../Theme/theme";

const route_filter_styles = StyleSheet.create({
    vehicle_radio_main_box: {
        flexDirection: 'row',
        // alignSelf: 'center',
        width: '95%',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // borderWidth:1,
        gap: 10,
      },
      vehicle_radio_check_box: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 120,
        // borderWidth:1,
        height: 74,
        marginHorizontal: 5,
      },
      vehicle_radio_liner_box: {
        borderRadius: 6,
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
        // borderWidth: 1,
      },
      vehicle_radio_check_text: {
        borderRadius: 6,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // borderColor: '#E6E6E6',
        borderWidth: 1,
        textAlign: 'center',
        overflow: 'hidden',
        borderColor:Theme.secondary
        // shadowColor: '#BDEAFF',
        // shadowOffset: { width: 0, height: 8 },
      },
      fliter_value_text: {
        fontSize: 20,
        color: Theme.blue.primary,
        fontWeight: Theme.font.xbold,
        textAlign: 'center',
        marginTop:-2,
        // borderWidth:1,
        // height: 25,
      },
      fliter_stopped_text:{
        fontSize: Theme.font.medium,
        fontWeight: Theme.font.fat,
        textAlign:'center',
    color: Theme.blue.primary,
    // borderWidth:1,
      },
      filter_name_text: {
        fontSize: Theme.font.xsmall,
        color: Theme.blue.primary,
        fontWeight: Theme.font.xthin,
        textAlign: 'center',
        // borderWidth:1,
        // height: 20,
      },
    
      filter_status_text:{
        fontSize: Theme.font.xsmall,
        color: Theme.blue.primary,
        fontWeight: Theme.font.xthin,
        textAlign: 'center',
      },
      fliter_flex_box: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5,
        // alignItems: 'center',
        gap: 5,
        // justifyContent: 'center',
    
      },
      fliter_flex_left_child: {
        width:'74%',
        // height: 40,
        // justifyContent: 'center',
        // marginTop: 2,
        // borderWidth:1,
        // justifyContent:'center'
      },

});

export default route_filter_styles;