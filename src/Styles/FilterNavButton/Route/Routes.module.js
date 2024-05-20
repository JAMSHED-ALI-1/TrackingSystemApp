import { StyleSheet, Dimensions } from 'react-native'
import Theme from '../../../Theme/theme'
const windowWidth = Dimensions.get('window').width

const routes_styles = StyleSheet.create({
  header_box: {
    // borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf:'center',
    marginBottom: 15,
    backgroundColor: Theme.white,
  },
  header_flex_box: {
    flexDirection: 'row',
    // borderWidth:1,
    gap: 5,
    paddingHorizontal: 15,
  },
  header_headig_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xbold,
    color: Theme.blue.primary,
  },
  search_box: {
    paddingRight: 25,
  },
  route_info_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    marginTop: 15,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  route_info_flex_box: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  route_info_text: {
    fontSize: 16,
    color: Theme.blue.primary,
    fontWeight: Theme.font.bold,
  },
  details_text: {
    fontSize: Theme.font.small,
    color: Theme.blue.primary,
    fontWeight: Theme.font.xthin,
  },

  routes_main_box: {
    backgroundColor: Theme.white,
    // borderWidth: .5,
    paddingBottom: 7,
    borderRadius: 8,
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: Theme.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: '95%',
    padding: 10,
  },

  update_box: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    height: 24,
    width: '100%',
  },
  status_box_child4_time: {
    borderTopWidth: 0.5,
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: Theme.white,
    height: 24,
  },
  status_box_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    color: Theme.white,
  },

  progress_main_box1: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    marginTop: 15,
    // height: 24,
    borderRadius: 4,
    // borderWidth:1,
  },
  progress_box1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    gap: 20,
    alignSelf: 'center',
    backgroundColor: '#29A7E4',
    borderRadius: 4,
    // borderTopRightRadius: 4,
    // borderBottomRightRadius: 4,
    height: 24,
    // borderWidth:1
  },
  progress_box1_child: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    // height:22,
    // borderWidth:1,
  },

  distance_per_box: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },
  distance_box1: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },
  distance_box2: {
    backgroundColor: '#F2F2F2',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    height: 24,

    // borderWidth:1,
  },
  progress_main_box2: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    height: 24,
    borderRadius: 4,
    // borderWidth:1,
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: '#F2F2F2',
  },
  progress_box2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '78%',
    gap: 12,
    alignSelf: 'center',
    backgroundColor: '#113870',
    borderRadius: 5,
    borderRadius: 4,
    overflow: 'hidden',
    // borderWidth:1,
    // borderColor:'red',
    height: 24,
  },
  progress_time_box2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    // bor
    // borderWidth:1,
  },
  progress_per_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.xbold,
    color: Theme.white,
  },
  progress_per_box: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress_duration_box: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress_time_box: {
    backgroundColor: '#F2F2F2',
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    // borderWidth:1
  },
  progress_time_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,
    color: Theme.black,
    // borderWidth:1,
  },

  flex_box2: {
    flexDirection: 'row',
    // borderWidth:1,
    justifyContent: 'space-between',
    gap: 5,
    // height:24,
    // marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    paddingRight: 10,
  },

  flex_box: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  number_plate_box: {
    width: '37%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.yellow,
    height: 28,
    borderRadius: 4,
    borderColor: '#392400',
  },
  number_plate_text: {
    fontSize: 16,
    fontWeight: Theme.font.bold,
    color: Theme.blue.primary,
    textAlign: 'center',
  },
  running_box: {
    width: '15%',
    // borderWidth:1,
    height: 16,
    // borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.green,
    borderRadius: 4,
    // borderColor:'#392400'
  },
  running_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.gray53,
    textAlign: 'center',
  },
  running_status_text: {
    fontSize: 9,
    color: Theme.white,
    fontWeight: Theme.font.fat,
  },

  last_update_flex_box: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 6,
    // paddingHorizontal:5
  },
  last_update_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.xthin,
    color: Theme.blue.primary,
  },
  time_text: {
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.xthin,
    color: Theme.blue.secondary,
  },

  flex_box3: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    // borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
  },
  address_text: {
    fontSize: Theme.font.small,
    fontWeight: Theme.font.xthin,
    color: Theme.black,
    width: '80%',
    // textAlign: 'center',
  },
})

export default routes_styles
