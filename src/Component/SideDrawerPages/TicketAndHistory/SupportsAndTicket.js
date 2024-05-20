import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import supports_styles from '../../../Styles/Support/Supports'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import side_settings_styles from '../../../Styles/SideDrowerPages/SideSettings.module'
import terms_cond_styles from '../../../Styles/SideDrowerPages/TermsAndConditions.module'
import HistoryMap from './HistoryMap'
import CommonHeader from '../CommonHeader'

const SupportsAndTicket = ({ navigation }) => {
  // for the email
  const handleEmailPress = () => {
    const email = 'qiksupport@gmail.com'; 
    const emailUrl = `mailto:${email}`;

    Linking.canOpenURL(emailUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(emailUrl);
        } else {
          console.warn("Cannot open email client");
        }
      })
      .catch((error) => console.error('Error opening email client:', error));
  };

  // for the call 
  const handlePhonePress = () => {
    const phoneNumber = '+919650022515'; 
    const phoneUrl = `tel:${phoneNumber}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          console.warn("Cannot open phone dialer");
        }
      })
      .catch((error) => console.error('Error opening phone dialer:', error));
  };

  return (
    <View>
      <CommonHeader navigation={navigation} />
      <View style={{ width: '95%', alignSelf: 'center', marginTop:0 }}>
        {/* <View style={terms_cond_styles.terms_cond_heading_box}>
          <TouchableOpacity onPress={() => navigation.goBack("Home")}>

            <Ionicons name="arrow-back" size={26} color="#333322" />
          </TouchableOpacity>
          <Text style={side_settings_styles.side_settings_text}>
            Support & Ticket
          </Text>
        </View> */}

        {/* <View
          style={[
            side_settings_styles.side_settings_hr_line,
            { marginBottom: 0 },
          ]}
        ></View> */}

        <Text style={supports_styles.supports_heading_text}>Contact US</Text>
        <Text style={supports_styles.supports_info_text}>
          Get in touch and let us know your queries
        </Text>
        <TouchableOpacity onPress={()=> handleEmailPress()} style={supports_styles.supports_main_box }>
          <View style={supports_styles.supports_icon_box}>
            <MaterialCommunityIcons name="gmail" size={25} color="#2A77E3" />
          </View>
          <View style={supports_styles.supports_icon_box2}>
            <Text style={supports_styles.supports_icon_box2_text}>
              qiksupport@gmail.com
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={supports_styles.supports_main_box} onPress={() => handlePhonePress()}>
          <View style={supports_styles.supports_icon_box}>
            <MaterialCommunityIcons name="phone" size={25} color="#3396B3" />
          </View>
          <View style={supports_styles.supports_icon_box2}>
            <Text style={supports_styles.supports_icon_box2_text}>
            +91 9650022515
            </Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity style={supports_styles.supports_main_box}> */}
        <View style={supports_styles.supports_main_box}>
          <View style={supports_styles.supports_icon_box}>
            <MaterialCommunityIcons name="ticket" size={25} color="#D3883E" />
          </View>
          <View style={supports_styles.supports_icon_box2}>
            <Text style={supports_styles.supports_icon_box2_text}>
              Generate a Ticket
            </Text>
          </View>
          </View>
        {/* </TouchableOpacity> */}
        <Text style={supports_styles.ticket_history_text}>Ticket History</Text>
        <HistoryMap />
      </View>
    </View>
  )
}

export default SupportsAndTicket
