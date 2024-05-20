import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import setting_info from '../Styles/SettingsInfo.module';
import setting_info from '../Styles/SettingsInfo.module'
const SettingsInfo = ({ title }) => {
  // const navigation = useNavigation();

  const cardData = [
    { id: 1, icon: 'gears', title: 'General Settings' },
    { id: 2, icon: 'question', title: 'Support & Helps' },
    { id: 3, icon: 'group', title: 'Change Password' },
    { id: 4, icon: 'male', title: 'Expense' },
    { id: 5, icon: 'lock', title: 'Drivers' },
    { id: 6, icon: 'bell', title: 'Reminders' },
    { id: 7, icon: 'group', title: 'groups' },
    { id: 8, icon: 'map-marker', title: 'Geofences' },

  ];

  const handleCardPress = () => {
    // Find the selected card based on the title
    // const selectedCard = cardData.find((card) => card.title === title);

    // if (selectedCard) {
    //   // Navigate to a specific screen based on the card's title
    //   navigation.navigate(selectedCard.title.toLowerCase());
    // }
  };

  return (
    <View>
      {cardData.map((card) => (
        <TouchableOpacity onPress={handleCardPress} key={card.id} >
          <View style={setting_info.sett_cardItem}>
            <Text style={setting_info.sett_iconContainer}>
              <Icon name={card.icon} size={25} color="white" />
            </Text>
            <View style={setting_info.sett_textContainer}>
              <Text style={setting_info.sett_title}>{card.title}</Text>
            </View>
            <View style={setting_info.arrowContainer}>
              <Icon name="caret-right" size={20} color="#b92b27" />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};



export default SettingsInfo;
