import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import send_otp_styles from '../../Styles/Screens/OTPVarification/SendOtp.module'
import CountryInput from './CountryInput'
import { sendOTP } from '../../HelperFunction/api'

const SentOtp = () => {
  const [number, setNumber] = useState('')
  
  const handleSubmit = async () => {
    try {
      if (!number) {
        Alert.alert('Error', 'Please enter a valid phone number');
        return;
      }

      const response = await sendOTP(number);
      console.log(response);
      // Handle success response here
    } catch (error) {
      console.error('Error sending OTP:', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again later.');
    }
  }

  return (
    <View>
      <ScrollView contentContainerStyle={send_otp_styles.scrollContainer}>
        <View style={send_otp_styles.flex_box1}>
          <Image
            source={require('../../../assets/qiktrack.png')}
            style={send_otp_styles.img}
          />
          <Text style={send_otp_styles.logo_text}>QikTrack</Text>
        </View>

        <Text style={send_otp_styles.heading_text}>Hello!</Text>

        <Text style={send_otp_styles.text}>
          Please enter your Phone Number{' '}
        </Text>
        <View style={send_otp_styles.flex_box}>
          <CountryInput />
          <TextInput
            placeholder="Phone Number"
            keyboardType="numeric"
            value={number}
            onChangeText={(text) => setNumber(text)}
            style={send_otp_styles.input_box}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={handleSubmit}
        style={send_otp_styles.submit_btn}
      >
        <Text style={send_otp_styles.submi_btn_text}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SentOtp;  
