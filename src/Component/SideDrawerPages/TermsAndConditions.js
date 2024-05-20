import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import side_settings_styles from '../../Styles/SideDrowerPages/SideSettings.module';
import terms_cond_styles from '../../Styles/SideDrowerPages/TermsAndConditions.module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonHeader from './CommonHeader';

const TermsAndConditions = ({ navigation }) => {
  return (
    <View>
      <CommonHeader navigation={navigation} />
      <View style={side_settings_styles.side_settings_main_box}>
        <View style={terms_cond_styles.terms_cond_heading_box}>
          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Ionicons name="arrow-back" size={26} color="#333322" />
          </TouchableOpacity>
          <Text style={side_settings_styles.side_settings_text}>
            Terms and Conditions
          </Text>
        </View>
        <View style={side_settings_styles.side_settings_hr_line}></View>

        <TouchableOpacity>
          <Text style={side_settings_styles.side_select_text}>
            Edit Prifile
          </Text>
          <Text style={terms_cond_styles.side_terms_text_child2}>
            Change your name, email, phone number and profile picture
          </Text>
        </TouchableOpacity>
        <View style={side_settings_styles.side_settings_hr_line}></View>

        <TouchableOpacity>
          <Text style={side_settings_styles.side_select_text}>
            Notification Settings
          </Text>
          <Text style={terms_cond_styles.side_terms_text_child2}>
            Define what alert and notifications you want to see
          </Text>
        </TouchableOpacity>

        <View style={side_settings_styles.side_settings_hr_line}></View>

        <TouchableOpacity>
          <Text style={side_settings_styles.side_select_text}>
            Account settings
          </Text>
          <Text style={terms_cond_styles.side_terms_text_child2}>
            Delete your account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TermsAndConditions;
