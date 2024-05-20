import { View, Text } from 'react-native'
import React from 'react'
import SupportHeader from './SupportHeader'
import supports_styles from '../../Styles/Support/Supports';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Supports = () => {
  return (
    <View style={{ flex: 1, width: '95%', alignSelf: 'center', borderWidth: 0, marginTop: 20 }}>
      <SupportHeader />
      <View style={{ width: '95%', alignSelf: 'center' }}>
        <Text style={supports_styles.supports_heading_text}>Contact US</Text>
        <Text style={supports_styles.supports_info_text}>
          Get in touch and let us know your queries
        </Text>
        <View style={supports_styles.supports_main_box}>
          <View style={supports_styles.supports_icon_box}>
            <MaterialCommunityIcons name='gmail' size={25} color='#2A77E3' />
          </View>
          <View style={supports_styles.supports_icon_box2}>
            <Text style={supports_styles.supports_icon_box2_text}>qiksupport@gmail.com</Text>
          </View>
        </View>
        <View style={supports_styles.supports_main_box}>
          <View style={supports_styles.supports_icon_box}>
            <MaterialCommunityIcons name='phone' size={25} color='#3396B3' />
          </View>
          <View style={supports_styles.supports_icon_box2}>
            <Text style={supports_styles.supports_icon_box2_text}>+91 - 7890-897-980</Text>
          </View>
        </View>

        <View style={supports_styles.supports_main_box}>
          <View style={supports_styles.supports_icon_box}>
            <MaterialCommunityIcons name='ticket' size={25} color='#D3883E' />
          </View>
          <View style={supports_styles.supports_icon_box2}>
            <Text style={supports_styles.supports_icon_box2_text}>Generate a Ticket</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Supports
