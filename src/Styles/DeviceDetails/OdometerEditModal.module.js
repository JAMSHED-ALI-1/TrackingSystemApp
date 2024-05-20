import { StyleSheet } from 'react-native'

const odometer_edit_styles = StyleSheet.create({
  odometer_edit_flex_box: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap:40,
    alignItems: 'center',
    // marginBottom: 10,
    marginTop:10
  },
  odometer_flex_box1: {
    width: '28%',
  },
  odometer_flex_box1_text: {
    fontSize: 14,
    color: '#323232',
    fontWeight: '500',
  },
  odometer_flex_box2: {
    width: '35%',
    height: 32,
    borderColor: '#2C2C2C',
    borderWidth: 1,
    marginLeft: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:5
  },
  odometer_flex_box2_child1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  odometer_flex_box2_child1_text: {
    fontSize: 14,
    color: '#484848',
    fontWeight: '600',
  },
  odometer_flex_box2_child2:{
    width: '29%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#003B97',
  },
  odometer_flex_box2_child2_text1: {
     color: '#FFFFFF' 
    },
  odometer_flex_box3: {
    width: '20%',
    marginLeft: '18%',
    height:32,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',

  },
  odometer_flex_box3_text: {
    color: '#FFFFFF',
  },
  radio_type_main_box: {
     flexDirection: 'row',marginTop:12 
  },
  radio_type_box_child: {
    marginRight:110
  },
  radio_type_text: {
    fontSize: 14,
    color: '#323232',
    fontWeight: '500',
  },

})

export default odometer_edit_styles
