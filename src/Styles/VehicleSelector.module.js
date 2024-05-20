import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const vehicle_selector_styles = StyleSheet.create({
  select_main_container: {
    // backgroundColor: '#FFFFFF',
    // flex: 1,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    // padding: 20,
    // borderWidth: .5
  },
  select_row_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // borderColor:'red',borderWidth:1,
    // width:114
  },
  select_row_container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 32,
    borderRadius: 6,
    shadowColor: '#000000',
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    paddingTop: 4,
    padding: 8
  },
  select_col: {
    flexDirection: 'row',
    gap: -55,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  select_text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#323232',
    // justifyContent: 'cen ter',
    // alignItems: 'center',
    // borderColor:'red',borderWidth:1,
    width: '100%'


  },
  select_no_plate: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,

  },
});

export default vehicle_selector_styles;
