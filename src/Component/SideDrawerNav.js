// AppNavigator.js
import React from 'react'
import { useEffect, useCallback, useState } from 'react'
import {
  createDrawerNavigator,
  // DrawerContentScrollView,
  // DrawerItemList,
  // DrawerItem,
} from '@react-navigation/drawer'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  requestLocationPermission,
  requestStoragePermission,
  requestContactPermission,
  requestSMSPermission,
  requestCameraPermission,
  requestMicrophonePermission,
  requestMultiplePermissions,
} from '../HelperFunction/LocationHandler'
import MyTabs from './MainTabNavigator'
import CustomDrawerContent from '../SideDrawer/DrawerChild'
import SideAllVehicle from './SideDrawerPages/SideAllVehicle'
import AdminPage from './SideDrawerPages/Admin/AdminPage'
import Privacy from './SideDrawerPages/Privacy'
import TermsAndConditions from './SideDrawerPages/TermsAndConditions'
import SupportsAndTicket from './SideDrawerPages/TicketAndHistory/SupportsAndTicket'
import HistoryScreen from '../MapNavigatorScreen/History'
import AlertScreen from '../MapNavigatorScreen/AlertScreen'
import ReviewScreen from './ReportPage/Review'
import SupportScreen from '../MapNavigatorScreen/Supports'
import MapScreen from '../MapNavigatorScreen/MapScreen'
import LanguageSelection from './SideDrawerPages/LanguageSelection'
import CreateTrip from '../FilterNavButton/Trip/CreateTrip'
import SideSettings from './SideDrawerPages/SettingsPages/SideSettings'
import Notification from './SideDrawerPages/SettingsPages/Notification'
import Geofence from './SideDrawerPages/SettingsPages/Geofence'
import SpeedLimit from './SideDrawerPages/SettingsPages/SpeedLimit/SpeedLimit'
import AddDriver from './SideDrawerPages/AddDriver'
import CompleteProfile from './SideDrawerPages/SettingsPages/CompleteProfile'
import Trip from '../FilterNavButton/Trip/Trip'
import Groups from '../FilterNavButton/Groups/Groups'
import GstCalculater from '../Pages/FrontPage/UsefulTools/GstCalculater'
import EmiCalculator from '../Pages/FrontPage/UsefulTools/EmiCalculator'
import DriverTracking from '../Pages/FrontPage/SimBasedTracking/DriverTracking'
import HomeScreen from '../Screens/HomeScreen'
import Employee from '../Pages/FrontPage/SimBasedTracking/Employee'
import GroupTracking from '../Pages/FrontPage/SimBasedTracking/GroupTracking'
import MoreInfo from '../Pages/FrontPage/SimBasedTracking/MoreInfo'
import AllVehicleAlerts from './AlertsPage/Alerts/AllVehicleAlerts'
import GeoFenceMap from './DetailsModal/Geofence/GeoFenceMap'
import GeofenceCreate from './DetailsModal/Geofence/GeofenceCreate'
import TripHistory from '../FilterNavButton/Trip/TripHistory'
import Route from '../FilterNavButton/Route/Route'
import Balance from '../Pages/Balance/Balance'
import SignUp from '../Screens/SignUp/SignUp'
import DailyReport from '../ReportsNav/DailyReport/DailyReport'
import SentOtp from '../Screens/OTPVerification/SentOtp'
import VerifyOtp from '../Screens/OTPVerification/VerifyOtp'
import { sendTokenToBackend } from '../HelperFunction/api'
import { usePushNotifications } from '../Notification/pushNotification'
import DriverModalAdd from './DetailsModal/Driver/DriverModalAdd'

import NotificationBanner from './Notifiction/NotificationBanner'

import DriverUpdate from './DetailsModal/Driver/DriverUpdate'


const Drawer = createDrawerNavigator()

const SideDrawerNavigator = ({ navigation }) => {
  const { expoPushToken, notification, installationId } = usePushNotifications();
  const [showNotification, setShowNotification] = useState(false);

  useFocusEffect(
    useCallback(() => {
      // Check if the token exists in AsyncStorage
      AsyncStorage.getItem('token').then((token) => {
        if (token) {
          // console.log("Token found :  valid Login.")
        } else {
          // navigation.navigate('LoginScreen');
          navigation.navigate('StackNavigator');
        }
      });

      // AsyncStorage.getItem('locationPermissions').then((permission) => {
      //   if (permission) {
      //     // console.log("Permission of Location : ", JSON.parse(permission));
      //   } else {
      //     // requestPermission();
      //     requestLocationPermission();
      //   }
      // })
    }, []));


  useEffect(() => {
    const sendPushTokenToBackend = async () => {
      if (expoPushToken) {
        console.log("Sending Push Token from SideDrawer.js:", installationId);
        try {
          const id = await AsyncStorage.getItem('user_id');
          if (id) {
            // console.log("Sending to Backend:", expoPushToken, id.replace(/"/g, ''));
            sendTokenToBackend(expoPushToken, id.replace(/"/g, ''));
          } else {
            console.log("No Id Found");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    sendPushTokenToBackend();
  }, [expoPushToken]);


  useEffect(() => {
    if (notification) {
      setShowNotification(true);

      // Hide the notification banner after a certain time (e.g., 5 seconds)
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]);



  // const requestPermission = async () => {
  //   // const permission = await requestMultiplePermissions();
  //   const granted = await requestLocationPermission();
  //   // const g2 = await requestStoragePermission();
  //   // const g3 = await requestContactPermission();
  //   // const g4 = await requestSMSPermission();
  //   // const g5 = await requestCameraPermission();
  //   // const g6 = await requestMicrophonePermission();
  //   // setPermissionGranted(granted);

  //   if (g2) {
  //     await AsyncStorage.setItem('storagePermission', 'granted');
  //   } else {
  //     console.log('Storage permission denied');
  //   }

  //   AsyncStorage.setItem('locationPermissions', JSON.stringify(granted));
  // };




  useEffect(() => {
    // Check permissions and request if not granted
    const checkAndRequestPermissions = async () => {
      const permissionStatus = await AsyncStorage.getItem(
        'permissionsRequested',
      )
      if (!permissionStatus) {
        const location = await requestLocationPermission()
        const permissionsGranted = await requestLocationPermission();
        await AsyncStorage.setItem(
          'permissionsRequested',
          JSON.stringify(permissionsGranted, location),
        )
      }
    }
    checkAndRequestPermissions()
  }, [])

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('token').then((token) => {
        if (!token) {
          navigation.navigate('StackNavigator')
        }
      })
    }, []),
  )




  return (

    <Drawer.Navigator
      id="Drawer"
      initialRouteName="MainPage"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 0, marginHorizontal: 0 },
        drawerItemStyle: {
          borderRadius: 0,
          marginLeft: 0,
          borderWidth: 0.5,
          borderColor: 'red',
        },
      }}
    >
      <Drawer.Screen name="MainPage" component={HomeScreen} />
      {/* <Drawer.Screen name="Tracking" component={MyTabs} /> */}
      <Drawer.Screen name="User" component={CompleteProfile} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="Speed" component={SpeedLimit} />
      <Drawer.Screen name="Geofence" component={Geofence} />
      <Drawer.Screen name="GeofenceCreate" component={GeofenceCreate} />
      <Drawer.Screen name="Alerts" component={AlertScreen} />
      <Drawer.Screen name="AdminPage" component={AdminPage} />
      <Drawer.Screen name="Review" component={ReviewScreen} />
      <Drawer.Screen name="MapScreen" component={MapScreen} />
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="CreateTrip" component={CreateTrip} />
      <Drawer.Screen name="SideSettings" component={SideSettings} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="SideAllVehicle" component={SideAllVehicle} />
      <Drawer.Screen name="SupportsAndTicket" component={SupportsAndTicket} />
      <Drawer.Screen name="LanguageSelection" component={LanguageSelection} />
      <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Drawer.Screen name="AddDriver" component={AddDriver} />
      <Drawer.Screen name="TripTrack" component={Trip} />
      <Drawer.Screen name="RouteTrack" component={Route} />
      <Drawer.Screen name="GroupTrack" component={Groups} />
      <Drawer.Screen name="GST" component={GstCalculater} />
      <Drawer.Screen name="EMI" component={EmiCalculator} />
      <Drawer.Screen name="DriverTraking" component={DriverTracking} />
      <Drawer.Screen name="EmployeeTracking" component={Employee} />
      <Drawer.Screen name="GroupTracking" component={GroupTracking} />
      <Drawer.Screen name="MoreInfo" component={MoreInfo} />
      <Drawer.Screen name="MainAlerts" component={AllVehicleAlerts} />
      <Drawer.Screen name="GeoFenceMap" component={GeoFenceMap} />
      <Drawer.Screen name="TripHistory" component={TripHistory} />
      <Drawer.Screen name="Wallet" component={Balance} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="SendOtp" component={SentOtp} />
      <Drawer.Screen name="VerifyOtp" component={VerifyOtp} />
      <Drawer.Screen name="Add" component={DriverModalAdd} />
      <Drawer.Screen name='UpdateDriver' component={DriverUpdate} />
    </Drawer.Navigator>

  )
}

export default SideDrawerNavigator
