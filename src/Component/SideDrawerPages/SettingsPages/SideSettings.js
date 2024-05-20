import { View, Text } from 'react-native'
import React from 'react'
import side_settings_styles from '../../../Styles/SideDrowerPages/SideSettings.module'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CommonHeader from '../CommonHeader'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Theme from '../../../Theme/theme';
import GeofenceSvg from '../../../../assets/geofence_on_off.svg';
import SpeedLimitSvg from '../../../../assets/speed_meter_filled.svg'

const SideSettings = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <CommonHeader navigation={navigation} />

      <View style={side_settings_styles.side_settings_main_box}>
        <Text style={side_settings_styles.side_settings_text}>Settings</Text>
        <View style={side_settings_styles.side_settings_hr_line}></View>

        {/* notifaction */}
        <View style={side_settings_styles.setting_flex_box}>
          <Ionicons
            name="notifications-sharp"
            size={24}
            color={Theme.blue.primary}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Text style={side_settings_styles.side_select_text}>
              Notification Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View style={side_settings_styles.side_settings_hr_line}></View>

        {/* geofence */}

        <View style={side_settings_styles.setting_flex_box}>
          <GeofenceSvg height={28} width={28} fill={Theme.blue.primary} />
          <TouchableOpacity onPress={() => navigation.navigate('Geofence')}>
            <Text style={side_settings_styles.side_select_text}>Geofence</Text>
          </TouchableOpacity>
        </View>

        <View style={side_settings_styles.side_settings_hr_line}></View>


        {/* spped limit */}

        <View style={side_settings_styles.setting_flex_box} >
          <SpeedLimitSvg height={24} width={24} fill={Theme.blue.primary} />
          <TouchableOpacity onPress={() => navigation.navigate('Speed')}>
            <Text style={side_settings_styles.side_select_text}>Speed Limit</Text>
          </TouchableOpacity>
        </View>


        <View style={side_settings_styles.side_settings_hr_line}></View>

        {/* account setting  */}

        <View style={side_settings_styles.setting_flex_box}>
          <Ionicons name='settings-outline' size={24} color={Theme.blue.primary} />
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
            <Text style={side_settings_styles.side_select_text}>
              Account Settings
            </Text>
          </TouchableOpacity>
        </View>


        <View style={side_settings_styles.side_settings_hr_line}></View>

        {/* <TouchableOpacity>
          <Text style={side_settings_styles.side_select_text}>Add Mileage</Text>
        </TouchableOpacity> */}
        {/* <View style={side_settings_styles.side_settings_hr_line}></View> */}

        {/* <TouchableOpacity >
      <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={side_settings_styles.side_select_box}
                   
                  >
        
        <Text style={side_settings_styles.side_select_btn_text}>Select</Text>
      </LinearGradient>
      </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default SideSettings
