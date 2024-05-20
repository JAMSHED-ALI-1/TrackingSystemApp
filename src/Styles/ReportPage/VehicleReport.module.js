import { StyleSheet, Dimensions } from 'react-native'
import Theme from '../../Theme/theme';
const windowWidth = Dimensions.get('window').width;

const vehicle_report_styels = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // backgroundColor: '#ecf0f1', // Set the background color as needed
    // borderWidth: 2
    marginTop: 20
  },
  vehicle_report_main_box: {
    width: '95%',
    alignSelf: 'center',

    marginBottom: 90
  },

  vehicle_report_hr_line_box: {
    height: 2,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    borderColor: Theme.hrLine,
    shadowColor: Theme.black,
    elevation: 3,
  },
  vehicle_report_vehicle_select: {
    height: 30,
    marginTop: 10,
  },
  vehicle_report_total_distance: {
    height: 94,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: Theme.white,


  },
  vehicle_report_total_distance_child1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10

  },
  vehicle_report_total_distance_child1_left: {

    flexDirection: 'row',


  },
  vehicle_report_total_dis_text: {
    fontSize: Theme.font.medium,
    color: '#888888',
    fontWeight: Theme.font.fat,


  },

  vehicle_report_total_distance_child1_right: {
    borderWidth: 1,
    flexDirection: 'row',
    width: 47,
    borderColor: '#DFDFDF',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4
  },


  vehicle_report_total_distance_child1_km: {

    fontSize: Theme.font.small,
    fontWeight: Theme.font.bold,
    color: Theme.greyLight,
    paddingLeft: 5

  },
  vehicle_report_total_distance_child1_per: {

    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  vehicle_report_liner_per_text: {
    fontSize: Theme.font.small,
    color: Theme.white,
    fontWeight: Theme.font.bold

  },

  vehicle_report_total_distance_child2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  vehicle_report_dis_main_box: {
    justifyContent: 'flex-end',
    alignItems: 'center',

  },

  vehicle_report_total_distance_child2_text: {
    fontSize: 20,
    fontWeight: Theme.font.fat,


  },
  vehicle_report_day: {
    fontSize: Theme.font.small,
    color: '#888888'
  },
  vehicle_report_up_text: {
    fontSize: 20,
    fontWeight: Theme.font.xbold,
    color: '#0AC15E'
  },
  vehicle_report_down_text: {
    fontSize: 20,
    fontWeight: Theme.font.xbold,
    color: '#BF4545'
  },
  vehicle_report_box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  vehicle_report_filter_box_main:{
    height:122,
    marginTop:10,
    width: windowWidth/3.3,
    borderColor:'#F9F9F9',
    borderRadius:8,
    backgroundColor: Theme.white,
    justifyContent:'center',
    alignItems:'center',
 

  },
  vehicle_report_filter_boxs: {


    color : Theme.white,
    borderRadius:6,
    height:42,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    width:'100%',
    borderColor:'#F9F9F9',
    borderRadius:8,
    alignSelf:'center',
    // borderWidth:1,

  },
  vehicle_report_filter_boxs_text: {
    color: Theme.white,
    fontSize:13,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'

  },
  vehicle_report_filter_time: {
    fontSize: 19,
    fontWeight: Theme.font.fat,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  vehicle_report_top_avg_speed_box: {

    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    height: 122,
  },
  vehicle_report_top_avg_speed_box_child: {
   
    width:windowWidth/2.16,
    borderColor:'#F9F9F9',
    borderRadius:8,
    backgroundColor: Theme.white,
    // justifyContent:'center',
    alignItems:'center',


  },
  vehicle_report_start_end_box: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 77,
    // marginBottom:80
    // borderWidth:1

  }


});

export default vehicle_report_styels;
