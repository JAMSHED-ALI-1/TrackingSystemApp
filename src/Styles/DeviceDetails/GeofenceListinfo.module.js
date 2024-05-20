import { StyleSheet } from 'react-native'

const geo_list_info_styles = StyleSheet.create({
  geo_list_info_main: {
    width: '100%',
    height: 103,
    borderWidth: 1,
    borderColor: '#5882BF',
    marginTop: 10,
    borderRadius: 5,
    // elevation:5
    shadowRadius: 1,
    shadowColor: '#000000',
  },
  geo_list_info_child1: {
    flexDirection: 'row',
    flexGrow: 1,
    gap: 10,
    height: 22,
    marginBottom: 10,
    marginTop: 2,
    width: '97%',
    alignSelf: 'center',
  },

  geo_list_info_child1_box_a: {
    flexBasis: '18%',
    flexGrow: 0,
  },
  geo_list_info_child1_box_b: {
    flexBasis: '48%',
    flexGrow: 0,
  },
  geo_list_info_child1_box_c: {
    flexBasis: '29%',
    flexGrow: 0,
  },
  geo_list_info_child1_box1_circular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  geo_list_info_grad_box: {
    height: 20,
    width: 52,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  geo_grad_text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  geo_list_info_child1_box2: {
    height: 38,
    flexDirection: 'row',
    gap: 25,
    marginBottom: 6,
    width: '97%',
    alignSelf: 'center',
  },
  geo_list_info_child1_box1_text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#484848',
  },
  geo_child1_box2_address: {
    width: '15%',
  },
  geo_child1_box2_address_info: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 5,
    width: '78%',
    justifyContent: 'center',
    alignItems:'center'
  },
  geo_child1_box3_main: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    gap: 20,
    width: '98%',
    alignSelf: 'center',
  },
  geo_child1_box3_child1: {
    flexGrow: 1,
    flexDirection: 'row',
    gap: 20,
    // justifyContent:'center',
    alignItems: 'center',
  },
})
export default geo_list_info_styles
