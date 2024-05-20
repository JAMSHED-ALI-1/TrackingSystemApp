import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Slider from '@react-native-community/slider'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo-linear-gradient'
import Theme from '../../Theme/theme'

const HistorySlider = () => {
  const [sliderValue, setSliderValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const updateSliderValue = (value) => {
    setSliderValue(value)
  }

  const incrementSlider = () => {
    const newValue = sliderValue + 2
    if (newValue <= 100) {
      setSliderValue(newValue)
    }
  }

  const decrementSlider = () => {
    const newValue = sliderValue - 1
    if (newValue >= 0) {
      setSliderValue(newValue)
    }
  }

  const playSlider = () => {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        incrementSlider()
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isPlaying, sliderValue])

  return (
    <SafeAreaView style={styles.slider_safe}>
      <View style={styles.history_slider_box}>
        <View style={styles.slider_main_box}>
          <TouchableOpacity
            onPress={playSlider}
            style={styles.leftButtonsContainer}
          >
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              style={styles.silder_icon_box}
            >
              <Text style={styles.slider_button_text}>
                {isPlaying ? (
                  <MaterialCommunityIcons
                    name="pause"
                    color="white"
                    size={17}
                  />
                ) : (
                  <MaterialCommunityIcons name="play" color="white" size={17} />
                )}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            //   onPress={() => {
            //     /* Handle Slider Click */
            //   }}
            style={styles.slider_main}
          >
            <Text
              style={[
                styles.silder_value_text,
                { left: `${(sliderValue / 5000) * 100}%` },
              ]}
            >
              {sliderValue} KM/h
            </Text>
            <Slider
              style={styles.slider_box}
              thumbTintColor="#2A77E3"
              maximumValue={50}
              minimumValue={0}
              minimumTrackTintColor="#2A77E3"
              maximumTrackTintColor="#ADB2BA"
              step={1}
              value={sliderValue}
              onValueChange={(value) => updateSliderValue(value)}
            />
            {/* <Text style={styles.silder_value_text}>Time</Text>
            <Text style={styles.silder_value_text}>Date</Text> */}
          </TouchableOpacity>

          <View style={styles.rightButtonsContainer}>
            <View style={styles.right_btn_child}>
              <LinearGradient
                colors={['#2A77E3', '#051C3E']}
                style={styles.silder_icon_box}
              >
                <TouchableOpacity
                  onPress={decrementSlider}
                  style={styles.incrementButton}
                >
                  <MaterialCommunityIcons
                    name="chevron-double-left"
                    color="#2A77E3"
                    size={15}
                  />
                </TouchableOpacity>
              </LinearGradient>
              <Text style={styles.silder_value_text}>1x</Text>
            </View>

            <View style={styles.right_btn_child}>

              <LinearGradient
                colors={['#2A77E3', '#051C3E']}
                style={styles.silder_icon_box}
              >
                <TouchableOpacity
                  onPress={incrementSlider}
                  style={styles.incrementButton}
                >
                  <MaterialCommunityIcons
                    name="chevron-double-right"
                    color="#2A77E3"
                    size={15}
                  />
                </TouchableOpacity>
              </LinearGradient>
              <Text style={styles.silder_value_text}>2x</Text>
            </View>
          </View>
        </View>
        {/* <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
          <Entypo name="location" color="#666666" size={20} />
          <Text style={styles.slider_add_info_text}>
            2/245 Lal bhagh eyx road new delhi, 221020
          </Text>
        </View> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  slider_safe: {
    flex: 1,
    // marginTop: 20,
  },
  history_slider_box: {
    // height: 113,
    height: 60,
    borderWidth: 1,
    borderColor: Theme.lightWhite,
    // borderRadius: 8,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    // shadowColor: Theme.black,
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    // elevation: 5,
  },
  slider_main_box: {
    flex: 1,
    flexDirection: 'row',
    gap: 1,
  },
  slider_main: {
    height: 20,
    width: '70%',
  },
  slider_box: {
    width: '100%',
  },

  leftButtonsContainer: {
    marginTop: 10,
    width: 25,
    height: 25,
    borderRadius: 12,
  },
  silder_icon_box: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12.5,
  },
  rightButtonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
    // height: 10,
    // borderRadius: 10,
    // width: 20,
  },
  right_btn_child: {
    alignItems: 'center',
  },
  playPauseButton: {
    backgroundColor: '#2A77E3',
    borderRadius: 5,
  },
  pushButton: {
    backgroundColor: '#2A77E3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  incrementButton: {
    backgroundColor: Theme.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 15,
    width: 15,
  },
  slider_button_text: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    color: 'red',
    height: 20,
  },
  silder_value_text: {
    color: Theme.sliderGrey,
    textAlign: 'center',
    fontSize: Theme.font.xsmall,
    fontWeight: Theme.font.xbold,
  },
  slider_add_info_text: {
    fontSize: 13,
    color: Theme.greyLight,
    fontWeight: Theme.font.fat,
  },
})

export default HistorySlider
