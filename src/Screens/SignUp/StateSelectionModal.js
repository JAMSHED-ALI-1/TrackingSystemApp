import React from 'react';
import { View, TouchableOpacity, Modal, Text, ScrollView } from 'react-native';
import state_styles from '../../Styles/Screens/SignUp/StateSelectionModal.module';

const StateSelectionModal = ({ modalVisible, setModalVisible, handleStateSelect }) => {
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
   ''
  ];

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
      
    >
      <View style={state_styles.main_box}>
        <ScrollView style={state_styles.scroll_box}>
          <Text style={state_styles.select_text}>Select State</Text>
          {states.map((state, index) => (
            <TouchableOpacity key={index} onPress={() => handleStateSelect(state)}>
              <Text style={state_styles.state_text}>{state}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default StateSelectionModal;
