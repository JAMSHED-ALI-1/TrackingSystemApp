import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, cardPress } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome'

import SettingsInfo from './SettingsInfo';
import settings_styles from '../Styles/Settings.module'

const Settings = ({ navigation }) => {
  const cardPress = () => {

  };

  return (
    <ScrollView contentContainerStyle={settings_styles.scrollViewContainer}>
      <View style={settings_styles.dash_main}>
        <View style={settings_styles.dash_info_card}>
          <View style={settings_styles.iconContainer}>
            <Icon name="user-circle" size={80} color="#8E0E00" />
            <Text style={settings_styles.text}>Account</Text>
          </View>
          {/* user name */}
          <View style={settings_styles.account_info}>
            <Text style={settings_styles.account_info_text}> Name</Text>
            <Text style={settings_styles.account_user_info}> Sunder </Text>
          </View>

          {/* user id */}
          <View style={settings_styles.account_info}>
            <Text style={settings_styles.account_info_text}> User Id</Text>
            <Text style={settings_styles.account_user_info}> Sunder </Text>
          </View>

          {/* Mobile number */}
          <View style={settings_styles.account_info}>
            <Text style={settings_styles.account_info_text}> Mobile Number</Text>
            <Text style={settings_styles.account_user_info}> 987654321 </Text>
          </View>
        </View>


        {/* settings div */}
        <View style={settings_styles.setting_card}>
          <View style={settings_styles.iconContainer_settings}>
            <Icon name="cog" size={60} color="white" style={{ marginLeft: 14 }} />
            <Text style={settings_styles.text}>Settings</Text>
          </View>
          <View style={settings_styles.setting_card_info}>
            {/* import setting card  */}
            <SettingsInfo />
          </View>
        </View>

        <TouchableOpacity style={settings_styles.trackButton} onPress={cardPress}>
          <Text style={settings_styles.trackButtonText}>Get in Touch</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};



export default Settings;
