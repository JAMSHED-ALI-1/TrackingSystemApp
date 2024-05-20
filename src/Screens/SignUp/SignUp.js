import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import Theme from '../../Theme/theme'
import sign_styles from '../../Styles/Screens/SignUp/SignUp.module'
import StateSelectionModal from './StateSelectionModal'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SignUp = () => {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  // const [state, setState] = useState('');
  const [pincode, setPincode] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedState, setSelectedState] = useState('')

  const [nameError, setNameError] = useState('');
  const [stateError, setStateError] = useState('');
  const [pincodeError, setPincodeError] = useState('');

  const handleSubmit = () => {
    // Check for required fields
    if (!name) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }

    if (!selectedState) {
      setStateError('Please select a state');
    } else {
      setStateError('');
    }

    if (!pincode) {
      setPincodeError('Please enter pin code');
    } else {
      setPincodeError('');
    }

    // Proceed with form submission logic if all fields are filled
    if (name && selectedState && pincode) {
      // Your form submission logic here
      console.log('Submitting form...');
      console.log(name, companyName, email, selectedState, pincode);
    }
  };

  const handleStateSelect = (selected) => {
    setSelectedState(selected);
    setModalVisible(false);
  };

  return (
    <View>
      {/* <StatusBar barStyle="dark-content" showHideTransition='fade' backgroundColor={Theme.white} /> */}

        
        <ScrollView contentContainerStyle={sign_styles.scrollContainer}>
      <View style={sign_styles.main_box}>
        <View style={sign_styles.flex_box1}>
          <Image
            source={require('../../../assets/qiktrack.png')}
            style={sign_styles.img}
          />
          <Text style={sign_styles.logo_text}>QikTrack</Text>
        </View>
          <Text style={sign_styles.main_heading}>Please Enter You Details</Text>
          <Text style={sign_styles.lable_text}>Owner Name</Text>
        <TextInput
          placeholder="Enter Owner Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={sign_styles.input_box}
        />
        {/* Display name error */}
        {nameError ? <Text style={sign_styles.error_text}>{nameError}</Text> : null}

        {/* company name */}
        {/* Company name input field */}

        <Text style={sign_styles.lable_text}>Company Name</Text>
        <TextInput
          placeholder="Enter Company Name"
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
          style={sign_styles.input_box}
        />
        

        {/* E-mail Address */}
        {/* Email input field */}

        <Text style={sign_styles.lable_text}>E-mail Address</Text>
        <TextInput
          placeholder="Enter E-mail Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          style={sign_styles.input_box}
        />

        {/* State */}
        {/* State selection input field */}
        
        <Text style={sign_styles.lable_text}>State</Text>
        <TouchableOpacity
          style={sign_styles.input_state_box}
          onPress={() => setModalVisible(true)}
        >
          <TextInput
            placeholder="Select State"
            value={selectedState}
            editable={false}
            style={sign_styles.select_text}
          />
          {selectedState ? (
            <MaterialIcons name="arrow-drop-up" size={24} color="black" />
          ) : (
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          )}
        </TouchableOpacity>
        {/* Display state error */}
        {stateError ? <Text style={sign_styles.error_text}>{stateError}</Text> : null}

        {/* Pin Code */}
        {/* Pin code input field */}
        
        <Text style={sign_styles.lable_text}>Pin Code</Text>
        <TextInput
          placeholder="Enter Pin Code"
          value={pincode}
          onChangeText={(text) => setPincode(text)}
          keyboardType="numeric"
          style={sign_styles.input_box}
        />
        {/* Display pin code error */}
        {pincodeError ? <Text style={sign_styles.error_text}>{pincodeError}</Text> : null}

        {/* Modal for selecting state */}
        <StateSelectionModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleStateSelect={handleStateSelect}
        />
      </View>

      {/* <TouchableOpacity onPress={handleSubmit} style={sign_styles.submit_btn}>
        <Text style={sign_styles.submi_btn_text}>Submit</Text>
      </TouchableOpacity> */}
    </ScrollView>
        {/* </View> */}

        
      <TouchableOpacity
          onPress={handleSubmit}
          style={sign_styles.submit_btn}
        >
          <Text style={sign_styles.submi_btn_text}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUp
