import { View, Text } from 'react-native';
import React from 'react';
import admin_cont_styles from '../../Styles/LoginComponent/AdminContac.module';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Theme from '../../Theme/theme';
import { LinearGradient } from 'expo-linear-gradient';

const AdminContact = () => {
  return (
    <View style={admin_cont_styles.admin_main_box}>
      <Text style={admin_cont_styles.admin_heading_text}>Contact to the Admin</Text>
      <View style={admin_cont_styles.reset_box}> 
      <Text style={admin_cont_styles.text}>Contact to the admin to reset your password</Text>

      <View style={admin_cont_styles.icon_box}>
        <MaterialCommunityIcons name='phone' size={20} color={Theme.blue.primary}/>
        <Text style={admin_cont_styles.text}>9650022515</Text>
      </View>

      </View>
      <LinearGradient
        start={{ x: 0, y: 1}}
        end={{ x: 1, y: 1}}
        colors={['#2A77E3', '#051C3E']}
        style={admin_cont_styles.linear_gradient_box}
        >
            <Text style={admin_cont_styles.linear_gradient_text}>Call</Text>
        </LinearGradient>
      
    </View>
  )
}

export default AdminContact;