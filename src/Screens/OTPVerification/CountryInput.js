import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';

const CountryInput = () => {
  const [selectedCountry, setSelectedCountry] = useState('India'); // Default country
  const [countryCode, setCountryCode] = useState('+91'); // Default country code for India
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [img, setImg] = useState(require('../../../assets/country/india.png')); // Default image

  // Function to handle country code change
  const handleCountryCodeChange = (text) => {
    setCountryCode(text);
  };

  // Function to handle country selection from modal
  const handleCountrySelect = (country, code, image) => {
    setSelectedCountry(country);
    setCountryCode(code);
    setModalVisible(false); // Close the modal after selection
    setImg(image); // Set the selected image
  };

  return (
    <View style={styles.container}>
      {/* Country flag image */}

      {/* TouchableOpacity to open modal for selecting country code */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.flex_box}>
      <Image source={img} style={styles.countryImage} />
        <TextInput
          style={[styles.input, styles.countryCodeInput]}
          value={countryCode}
          onChangeText={handleCountryCodeChange}
          placeholder="Country Code"
          keyboardType="phone-pad"
          editable={false} // Make the TextInput non-editable
        />
      </TouchableOpacity>

      {/* Modal for selecting country code */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Example of country selection */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => handleCountrySelect('United States', '+1', require('../../../assets/country/united-states.png'))}>
              <Image style={{ height: 20, width: 20 }} source={require('../../../assets/country/united-states.png')} />
              <Text style={styles.modalItem}>United States (+1)</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => handleCountrySelect('India', '+91', require('../../../assets/country/india.png'))}>
              <Image style={{ height: 20, width: 20 }} source={require('../../../assets/country/india.png')} />
              <Text style={styles.modalItem}>India (+91)</Text>
            </TouchableOpacity> */}
            {/* Add more country options as needed */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // paddingHorizontal: 10,
  },
  flex_box:{
    flexDirection: 'row',
    gap:0,
    borderBottomWidth:1, 
    borderColor:'#A9A9A9',
    // borderColor:'red',
     width:70,
    alignItems:'center',

  },
  countryImage: {
    width: 20,
    height: 20,
    marginRight: 0,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0, // Remove border from TextInput
  },
  countryCodeInput: {
    textAlign: 'center', // Center the country code text
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  modalItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 5, // Add margin to separate image and text
  },
});

export default CountryInput;
