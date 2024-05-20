import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Theme from '../../../Theme/theme';
import admin_styles from '../../../Styles/SideDrowerPages/Admin/AdminPage.module';
import AdminData from './AdminData';
import CommonHeader from '../CommonHeader';
// import AdminPage from './AdminMapValue';

const AdminPage = ({ navigation }) => {
  return (
    <View >
      <View style={admin_styles.header_box}>
        <CommonHeader navigation={navigation} />
        <View style={admin_styles.search_box}>
          <Ionicons name='search' size={24} color={Theme.blue.primary} />
        </View>
      </View>
      <View style={admin_styles.admin_details_box}>
        <View style={admin_styles.admin_image_box}>
          <MaterialCommunityIcons
            name="account-circle"
            color={Theme.white}
            size={30}
          />
        </View>

        <Text style={admin_styles.admin_name_text}>Rakesh Bansal</Text>
        <Text style={admin_styles.type_of_user_text}>( Admin )</Text>
      </View>

      <AdminData />
    </View>
  )
}

export default AdminPage;
