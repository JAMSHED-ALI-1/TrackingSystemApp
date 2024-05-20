import { View, Text } from 'react-native';
import React from 'react';
import common_header_styles from '../../Styles/SideDrowerPages/CommonHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Theme from '../../Theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CommonHeader = ({ navigation }) => {

  return (
    <View style={common_header_styles.main_box}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MaterialCommunityIcons
          name="account-circle"
          size={40}
          color={Theme.blue.primary}
          style={common_header_styles.icon}
        />
      </TouchableOpacity>
      <Text style={common_header_styles.heading_text}>Qiktrack</Text>

    </View >
  )
}

export default CommonHeader;