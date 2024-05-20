import { Dimensions, StyleSheet } from "react-native";
import Theme from "../../Theme/theme";
const windowWidth = Dimensions.get('window').width

const vehicle_info_styles = StyleSheet.create({

    vehicle_info_main_box: {
        flexDirection: 'row',
        flexGrow: 1,
        height: 80,
        justifyContent: 'center',
        alignSelf: 'center',
        // borderWidth:1,
       
        // gap: 20,
        // width : windowWidth/1.5
      },
    
      vehicle_info_main_box_child: {
        width: windowWidth / 3.5,
        // borderWidth:1,
        // height: 90,
        borderRadius: 6,
        marginRight: 10,
        
      },

      name_text:{
        fontSize: Theme.font.small,
        fontWeight: Theme.font.bold,
        color: Theme.white,
        marginLeft:8,
        // marginRight:9

      },
      sec_name_text:{
        fontSize: Theme.font.xsmall,
        fontWeight: Theme.font.fat,
        color: Theme.white,
        marginLeft:8,
        marginBottom:1,
        
      },
      value_text:{
        color: Theme.white,
        fontSize: 20,
        fontWeight: Theme.font.fat,
      }

});

export default vehicle_info_styles;
