import { StyleSheet } from "react-native";

const modal_gps_styles = StyleSheet.create({
  gps_modal_main_box: {
    height: '100%',
    paddingHorizontal:10,
    width: '100%',
    // borderWidth:1
  },
  gps_modal_card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 5,
    height: 284,
  },
  gps_details_card: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
  },

  gps_details_text: {
    color: '#323232',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  details_hr_line: {
    height: 1,
    color: '#DEDEDE',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    backgroundColor:'#DEDEDE',
    marginBottom:10,
    marginTop:10
  },
  gps_info_main: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  details_info_text: {
    fontSize: 14,
    color: '#7F7F7F',
    fontWeight: '500',
  },
  gps_info_left_box: {
    width: 130,
    height: 18,
    marginTop: 10,
  },
  gps_info_right_box: {
    width: 130,
    height: 18,
    marginTop: 10,
    flexDirection: 'row',
    // marginBottom:10,
    flexWrap: 'wrap',
  },
  gps_info_right_text: {
    color: '#3E4546',
    fontWeight: '500',
    fontSize: 14,
  },
  gps_validity_box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },
  gps_validity_text_box: {
    marginTop: 20,
    height: 24,
    flexDirection: 'row',
    gap: 20,
  },
  gps_dot_text: {

    fontSize: 12,
    color: '#4F4F4F',
    fontWeight: '600',
  },
  gps_validity_rem_box: {

    borderWidth: 1,
    borderColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  gap_validity_rem_text: {

    fontSize: 12,
    color: '#4F4F4F',
    fontWeight: '600',
  },

  gps_add_validity_box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width:100,
    height: 24,
    borderRadius: 5,
    gap: 4,
    marginTop: 10,
    // width:'60%'
  },
  gps_remaining_box: {
    // borderWidth: 1,
    // borderColor: 'blue',
    // gap: 20,
    flexDirection: 'column',
    marginTop: 10
  },
  speed_limit_header_box:{
    // borderWidth:1,
    width:'100%',
    alignSelf:'center'
  }
});


export default modal_gps_styles;
