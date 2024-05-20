
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { drawerStyles } from '../Styles/DrawerStyle/DrawerChild.module' // Import the styles from the external file
import Theme from '../Theme/theme'
import Setting from '../../assets/setting.svg'
import Privacy from '../../assets/privacy.svg'
import TermsAndConditions from '../../assets/term_condition.svg'
import SupportsAndTickets from '../../assets/support_and_tickets.svg'
import SpeedLimitSvg from '../../assets/speed_meter_filled.svg'
import GeofenceSvg from '../../assets/geofence_on_off.svg'

// import Car from '../../assets/solid_car.svg'
// import User from '../../assets/user_filled.svg'
// import Driver from '../../assets/driver_filled.svg'
// import Renew from '../../assets/renew_validity.svg'
// import SvgAlertIcon from '../../assets/alert_icon.svg'
// import BuyDevice from '../../assets/buy_device.svg'
// import Documents from '../../assets/documents-accepted';
// import Language from '../../assets/language.svg';



const CustomDrawer = (props) => {
  const navigation = useNavigation(),
    [userDetail, setUserDetail] = useState(null),
    handleLogout = async () => {
      try {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('operator_id')
        await AsyncStorage.removeItem('user_details')

        console.log('logout Entered.')
        navigation.navigate('StackNavigator')
      } catch (error) {
        console.error('Logout failed:', error.message)
        Alert.alert('Error', 'Failed to logout. Please try again.')
      }
    }

  useEffect(() => {
    AsyncStorage.getItem('user_details').then((user) => {
      if (user) {
        setUserDetail(JSON.parse(user))
        console.log('userDetails : ', userDetail)
      } else {
        console.log('No user, Found')
      }
    })
  }, [])

  return (
    <View style={drawerStyles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: Theme.white,
          borderWidth: 0,
        }}
      >
        <View style={drawerStyles.header}>
          <Image
            source={require('../../assets/qiktrack-logo-icon.png')}
            style={drawerStyles.logo}
          />
          <Text style={drawerStyles.title}>Qiktrack</Text>
        </View>

        {/* <View style={drawerStyles.profileContainer}>
          <View style={drawerStyles.profileInfo}>
            <MaterialCommunityIcons
              name="account-circle"
              size={45}
              style={drawerStyles.profileIcon}
            />
            <Text numberOfLines={2} style={drawerStyles.profileText}>
              {userDetail?.name || 'Company Name'}
            </Text>
          </View>
          <View style={drawerStyles.userDetailsContainer}>
            <View style={drawerStyles.userDetailsRow}>
              <Text style={drawerStyles.userDetailsText}>
                {' '}
                {userDetail?.name || 'UserName'}{' '}
              </Text>
              <Text style={drawerStyles.roleText}>( Role )</Text>
            </View>
            <View style={drawerStyles.userDetailsRow}>
              <Text style={drawerStyles.emailText}>
                {userDetail?.user_email || 'Email Address'}
              </Text>
            </View>
            <View style={drawerStyles.userDetailsRow}>
              <Text style={drawerStyles.mobileText}>Mobile No.</Text>
            </View>
          </View>
        </View> */}

        <View style={drawerStyles.drawerItemsContainer}>
          {/* <DrawerItemList {...props} /> */}
          {/* <DrawerItem
            label={'All Vehicles'}
            icon={() => (
              <Car height={20} width={20} fill={Theme.blue.primary} />
            )}
            onPress={() => navigation.navigate('SideAllVehicle')}
          /> */}
          <DrawerItem
            label={'Notification Settings'}
            icon={() => (
              // <User height={24} width={24} fill={Theme.blue.primary} />
              <Ionicons  name="notifications-sharp"
              size={24}
              color={Theme.blue.primary} />
            )}
            onPress={() => navigation.navigate('Notification')}
          />

          <DrawerItem
            label={"Speed Limit"}
            icon={() => <SpeedLimitSvg height={21} width={21} fill={Theme.blue.primary} />}
            onPress={() => navigation.navigate("Speed")}
          />

           <DrawerItem
            label={"Geofence"}
            icon={() => <GeofenceSvg height={28} width={28} fill={Theme.blue.primary} />}
            onPress={() => navigation.navigate('Geofence')}
          />
          <DrawerItem
            label={"Account Settings"}
            icon={() => <Ionicons
              name="settings-outline"
              size={22}
              color={Theme.blue.primary}
            />}
            onPress={() => navigation.navigate('User')}
          /> 
          <DrawerItem
            label={'Privacy'}
            icon={() => (
              <Privacy height={27} width={27} fill={Theme.blue.primary} />
            )}
            onPress={() => navigation.navigate('Privacy')}
          />
          <DrawerItem
            label={'Terms and Condition'}
            icon={() => (
              <TermsAndConditions
                height={21}
                width={21}
                fill={Theme.blue.primary}
              />
            )}
            onPress={() => navigation.navigate('TermsAndConditions')}
          />
          {/* <DrawerItem
            label={'Setting'}
            icon={() => (
              <Setting height={24} width={24} fill={Theme.blue.primary} />
            )}
            onPress={() => navigation.navigate('SideSettings')}
          /> */}
          <DrawerItem
            label={'Supports and Ticket'}
            icon={() => (
              <SupportsAndTickets
                height={24}
                width={24}
                fill={Theme.blue.primary}
              />
            )}
            onPress={() => navigation.navigate('SupportsAndTicket')}
          />

          {/* <DrawerItem
            label={'Language'}
            icon={() => (
              <Language height={24} width={24} fill={Theme.blue.primary} />
            )}
            onPress={() => navigation.navigate('LanguageSelection')}
          /> */}

          {/* <DrawerItem
            label={'Reminders'}
            icon={() => (
              <SvgAlertIcon
                height={24}
                width={24}
                fill={Theme.blue.primary}
              />
            )}
            onPress={() => navigation.navigate('SupportsAndTicket')}
          /> */}

          {/* <DrawerItem
            label={'Documents'}
            icon={() => (
              <Documents
                height={24}
                width={24}
                fill={Theme.blue.primary}
              />
            )}
            onPress={() => navigation.navigate('SupportsAndTicket')}
          /> */}

          {/* <TouchableOpacity>
                        <View style={drawerStyles.drawerItem}>
                            <Ionicons name="car" size={22} />
                            <Text>All Vehicles</Text>
                        </View>
                    </TouchableOpacity> */}
        </View>
      </DrawerContentScrollView>

      <View style={drawerStyles.footerContainer}>
        <TouchableOpacity
          onPress={handleLogout}
          style={drawerStyles.logoutButton}
        >
          <Ionicons
            name="exit-outline"
            size={22}
            style={drawerStyles.logoutIcon}
          />
          <Text style={drawerStyles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer
