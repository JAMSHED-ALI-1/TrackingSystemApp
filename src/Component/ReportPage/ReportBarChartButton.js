import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../Theme/theme';

const ReportBarChartButton = () => {
  const [selectedOption, setSelectedOption] = useState('%');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.geo_toggle_container}>
      <TouchableOpacity
        onPress={() => handleOptionSelect('TIME')}
        style={selectedOption === 'TIME' ? styles.time_def : styles.time_sel}
      >
        {selectedOption === 'TIME' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient_toggle_btn}
          >
            <Text style={styles.geo_toggle_white_text}>TIME</Text>
          </LinearGradient>
        ) : (
          <Text style={styles.radio_text_gray}>TIME</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleOptionSelect('%')}
        style={selectedOption === '%' ? styles.time_option : styles.option }
      >
        {selectedOption === '%' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient_toggle_btn}
          >
            <Text style={styles.geo_toggle_white_text}>%</Text>
          </LinearGradient>
        ) : (
          <Text style={styles.radio_text_gray}>%</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  geo_toggle_container: {
    flexDirection: 'row',
    height: 25,
    width: 70,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#F0F0F0',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
    shadowOffset:10,
    justifyContent:'space-between'
  },
  time_option:{
    width:22,
    justifyContent:'center',
    
  },
  option: {
    borderRadius: 5,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
    // height:'100%',
    alignSelf:'center',

  },
  
  time_def: {
    width:45 ,
  },
  time_sel: {
    width:45 ,
    justifyContent: 'center',
    height:25,
    alignItems: 'center',
  },
  gradient_toggle_btn: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height:22
  },
  geo_toggle_white_text: {
    color: 'white',
  },
  radio_text_gray: {
    color: '#133F7D',
  },
});

export default ReportBarChartButton;
