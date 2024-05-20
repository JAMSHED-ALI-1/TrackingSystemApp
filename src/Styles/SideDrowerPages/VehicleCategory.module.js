import { StyleSheet } from "react-native";
import Theme from "../../Theme/theme";

const vehicle_category_styles = StyleSheet.create({
  table_header: {
    height: 50,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
    // borderWidth:1,
    backgroundColor: Theme.blue.primary,
  },

  header_main_box: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_main_box_text: {
    fontSize: Theme.font.medium,
    color: Theme.white,
    fontWeight: Theme.font.bold,
  },
  table_row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 10,
    // borderWidth:1,     
    height:50,
    borderRadius:12,
    // borderColor:
    width:'95%',
    alignSelf:'center',
    backgroundColor: Theme.white,

  },

  vehicle_sr_num: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicle_no_box: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicle_category_box: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rows_box: {
    height: 340,
    // borderWidth: 1,
    // borderColor: Theme.secondary,
    // borderBottomRightRadius: 8,
    // borderBottomLeftRadius: 8,
  },
  rows_sr_text: {
    color: Theme.secondary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
  rows_vehicle_num_text: {
    fontSize: Theme.font.medium,
    color: Theme.blue.primary,
    fontWeight: Theme.font.fat,
  },
  rows_type_text: {
    color: Theme.secondary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
  details_text: {
    color: Theme.blue.primary,
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
  },
});
export default vehicle_category_styles;
