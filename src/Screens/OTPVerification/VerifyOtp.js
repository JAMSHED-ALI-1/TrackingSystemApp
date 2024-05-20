import { View, Text, ScrollView, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState , useEffect, useRef } from 'react'
import verify_otp from '../../Styles/Screens/OTPVarification/VerifyOtp.module';
// import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Theme from '../../Theme/theme';

const VerifyOtp = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(10);
  const inputRefs = useRef([]);
  const [editable, setEditable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+91 9999999999');

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft === 0) return;

    // Timer countdown
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear timeout on unmount
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResendOTP = () => {
    setTimeLeft(10); // Reset timer

    // Move focus to the first input box
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  
  };

  const handleVerifyOTP = () => {
    // Send the OTP to your server for verification
    // Compare otp with the generated OTP
    const enteredOTP = otp.join('');
    if (enteredOTP === '1234') {
      Alert.alert('Success', 'OTP Verified Successfully');
      setOTP(['', '', '', '']);
      // Proceed with further actions like authentication
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

//   const handleInputChange = (text, index) => {
//     const newOTP = [...otp];
//     newOTP[index] = text;
//     setOTP(newOTP);

//     // Move focus to the next input if the current input is filled
//     if (text.length === 1 && index < 3) {
//       inputRefs.current[index + 1].focus();
//     }

//     // If all OTP fields are filled, trigger verification
//     if (newOTP.every((value) => value !== '')) {
//       handleVerifyOTP();
//     }
//   };

const handleInputChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);
  
    // Move focus to the next input if the current input is filled
    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View>
      <ScrollView contentContainerStyle={verify_otp.scrollContainer}>
      <View style={verify_otp.flex_box1}>
          <Image
            source={require('../../../assets/qiktrack.png')}
            style={verify_otp.img}
          />
          <Text style={verify_otp.logo_text}>QikTrack</Text>
        </View>
        <Text style={verify_otp.heading_text}>OTP Verification</Text>
        <View style={{  }}>
          <Text style={verify_otp.text}>Enter the OTP Sent on </Text>
          <View style={verify_otp.flex_box}>
        {editable ? (
          <TextInput
            style={verify_otp.text}
            value={phoneNumber}
            onChangeText={handleChange}
            keyboardType="numeric"
          />
        ) : (
          <Text style={verify_otp.text}>{phoneNumber}</Text>
        )}

        <TouchableOpacity onPress={handleEdit}>
          <MaterialIcons name={editable ? 'done' : 'edit'} size={24} color={Theme.black} />
        </TouchableOpacity>
      </View>
          <View style={verify_otp.otp_box}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                style={verify_otp.otp_input}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={(text) => handleInputChange(text, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </View>
          {timeLeft > 0 ? (
            <Text style={verify_otp.resent_otp_text}>
              Reset OTP in <Text style={verify_otp.time_text}>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</Text>
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={verify_otp.resent_btn}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
          onPress={handleVerifyOTP}
          style={verify_otp.submit_btn}
        >
          <Text style={verify_otp.submi_btn_text}>Submit</Text>
        </TouchableOpacity>
    </View>
  );
};

export default VerifyOtp;
