import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../../Theme/theme';

const GeoToggleButton = () => {
  const [selectedOption, setSelectedOption] = useState('Circular');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.geo_toggel_cntainer}>
      <TouchableOpacity
        onPress={() => handleOptionSelect('Circular')}
        style={selectedOption === 'Circular' ? styles.selectedOption : styles.option}
      >
        {selectedOption === 'Circular' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient_toggle_btn}
          >
            <Text style={styles.geo_toggel_white_text}>Circular</Text>
          </LinearGradient>
        ) : (
          <Text style={styles.radio_text_gray}>Circular</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleOptionSelect('Polygon')}
        style={selectedOption === 'Polygon' ? styles.selectedOption : styles.option}
      >
        {selectedOption === 'Polygon' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient_toggle_btn}
          >
            <Text style={styles.geo_toggel_white_text}>Polygon</Text>
          </LinearGradient>
        ) : (
          <Text style={styles.radio_text_gray}>Polygon</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  geo_toggel_cntainer: {
    flexDirection: 'row',
    height: 32,
    width: 206,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#F0F0F0',
    alignSelf: 'center',
  },
  option: {
    borderRadius: 5,
    width: 100,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.white,
  },
  selectedOption: {
    borderRadius: 5,
    width: 100,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient_toggle_btn: {
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
  },
  geo_toggel_white_text: {
    color: 'white', 
  },
  radio_text_gray:{
    color:'#133F7D'
  }
});

export default GeoToggleButton;
