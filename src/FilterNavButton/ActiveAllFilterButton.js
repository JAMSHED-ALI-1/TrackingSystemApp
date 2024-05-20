import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import active_all_styles from '../Styles/FilterNavButton/ActiveAllfilterButton.module';

const ActiveAllFilterButton = ({  selectedOption,}) => {
  // const [selectedOption, setSelectedOption] = useState('Active');
  const navigation = useNavigation(); // Initialize navigation

  const options = ['Active', 'History'];

  const handleOptionSelect = (option) => {
    // setSelectedOption(option);

    // Navigate to TripHistory page when "History" option is selected
    if (option === 'History') {
      navigation.navigate('TripHistory'); // Assuming 'TripHistory' is the name of your TripHistory page/screen
    }
    else{
      // if (option === 'History') {
        navigation.navigate('TripTrack'); // Assuming 'TripHistory' is the name of your TripHistory page/screen
      
    }
  };

  return (
    <View style={{}}>
      <View style={active_all_styles.geo_toggle_container}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleOptionSelect(option)}
            style={
              selectedOption === option
                ? active_all_styles.time_def
                : active_all_styles.time_sel
            }>
            <Text style={selectedOption === option ? active_all_styles.geo_toggle_white_text : active_all_styles.radio_text_gray}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ActiveAllFilterButton;
