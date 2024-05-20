import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Theme from '../../../Theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient';
const GeofenceSlider = ({ sliderValue, setSliderValue }) => {


  const updateSliderValue = (value) => {
    setSliderValue(value);
    // console.log("Value : ", value)
  };

  const incrementSlider = () => {
    const newValue = sliderValue + 100;
    if (newValue <= 2000) {
      setSliderValue(newValue);
    }
  };

  const decrementSlider = () => {
    const newValue = sliderValue - 100;
    if (newValue >= 0) {
      setSliderValue(newValue);
    }
  };

  return (
    // <View >
    <View style={styles.slider_main_box}>

      <View style={styles.slider_button} >
        <Text style={styles.slider_button_text}>100 M</Text>
        <TouchableOpacity onPress={decrementSlider} >
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.geo_linearGradient}
          >
            <MaterialIcons name='horizontal-rule' size={15} color='white' />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.slider_main}>
        <Slider
          style={styles.slider_box}
          thumbTintColor="#2A77E3"
          maximumValue={5000}
          minimumValue={100}
          minimumTrackTintColor="#2A77E3"
          maximumTrackTintColor="#ADB2BA"
          step={100}
          value={sliderValue}
          onSlidingComplete={(value) => updateSliderValue(value)}
        />

        <Text
          style={[styles.silder_value_text, { left: `${(sliderValue / 2000) * 100}%`, }]}
        >
          {sliderValue} M
        </Text>
      </View>

      <View style={styles.slider_button} >
        <Text style={styles.slider_button_text}>2000 m</Text>
        <TouchableOpacity onPress={incrementSlider} >
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.geo_linearGradient}
          >
            <MaterialIcons name='add' size={15} color='white' />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  slider_safe: {
    // flex:1,
    // borderWidth:1,
    borderColor: 'red',
    // height:100

  },
  slider_main_box: {
    // flex: 1, 
    flexDirection: 'row',
    // backgroundColor: '#ecf0f1',
    // borderWidth:1,
    height: 60,
    // marginBottom:20
  },
  slider_main: {
    //  alignItems: 'center',
    flex: 1,
    // borderWidth:1,
    // height:40,
    // borderColor:'red'
  },
  slider_box: {
    width: '100%',
    marginTop: 15,
  },
  slider_button: {
    // flexDirection:'column',
    marginTop: 15,
    borderRadius: 5,
    // borderWidth:1,
    // marginBottom:10
  },
  slider_button_text: {
    fontSize: Theme.font.small,
    color: Theme.heading,
    fontWeight: Theme.font.fat,

  },
  silder_value_text: {

    color: Theme.heading,
    textAlign: 'center',
    position: 'absolute',
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.fat,


  },
  geo_linearGradient: {
    // borderWidth:1,
    borderRadius: 4,
    width: 18,
    height: 18,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});


export default GeofenceSlider;
