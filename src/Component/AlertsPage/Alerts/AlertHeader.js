import { View, Text, Alert } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import devive_modal_styles from '../../../Styles/DeviceDetails/DeviceDetailsModal.module';

const AlertHeader = () => {
  return (
    <View style={{ width: '100%', alignSelf: 'center' }}>
      <LinearGradient
        start={{ x: 0, y: 0}}
        end={{ x: 1, y: 1 }}
        colors={['#2A77E3', '#051C3E']}
        // locations={[0, 1]}
        style={devive_modal_styles.device_modal_linear}
      >
        <Text style={devive_modal_styles.linear_text}>Vehicle Alerts</Text>
      </LinearGradient>
    </View>
  )
}

export default AlertHeader;