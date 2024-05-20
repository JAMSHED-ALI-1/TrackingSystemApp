import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modal_radio_styles from '../../../Styles/DeviceDetails/RadioButton.module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const SpeedRadioButton = () => {
  const [checked, setChecked] = useState('Repeat')

  return (
    <View style={{ flexDirection: 'column' }}>
      <TouchableOpacity
        onPress={() => setChecked('Repeat')}
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      >
        <View style={modal_radio_styles.outer_box}>
          <View
            style={[
              modal_radio_styles.inner_box,
              { backgroundColor: checked === 'Repeat' ? '#0A8F47' : '#BBBBBB' },
            ]}
          ></View>
        </View>
        <Text style={modal_radio_styles.radio_check_text}>Only Once</Text>
      </TouchableOpacity>

      <View style={{ flexDirection:'row', gap:10 }}>
      <TouchableOpacity
        onPress={() => setChecked('Every')}
        style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
      >
        <View style={modal_radio_styles.outer_box}>
          <View
            style={[
              modal_radio_styles.inner_box,
              { backgroundColor: checked === 'Every' ? '#0A8F47' : '#BBBBBB' },
            ]}
          ></View>
        </View>
        <Text style={modal_radio_styles.radio_check_text}>Every</Text>

      </TouchableOpacity>
    
    <View style={{borderRadius:5,height:32, width:52, backgroundColor:'#003B97', flexDirection:'row', justifyContent:'space-between', alignItems:'center', }}>
    <View style={{color:'white',  width:'55%', justifyContent:'center', alignItems:'center'}}><Text style={{color:'#FFFFFF'}}>1</Text></View>
   
    <View style={{ height:20, width:20,  backgroundColor:'#FFFFFF', borderRadius:4, marginRight:2, justifyContent:'center', alignItems:'center'}}>
    <MaterialIcons name="arrow-drop-down" size={20} color="#003B97" />
    </View>
    <Text style={{marginLeft:10}}>Min</Text>
    </View>
          </View>

    </View>
  );
};

export default SpeedRadioButton;
