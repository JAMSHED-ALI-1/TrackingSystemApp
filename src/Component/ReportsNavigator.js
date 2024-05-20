import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import IgnitionReport from '../ReportsNav/IgnitionReport/IgnitionReport'
import TripReport from '../ReportsNav/TripReport/TripReport'
import StoppageReport from '../ReportsNav/StoppageReport/StoppageReport'
import DailyReport from '../ReportsNav/DailyReport/DailyReport'
import SpeedReport from '../ReportsNav/SpeedReport/SpeedReport'
import GeofenceReport from '../ReportsNav/GeofenceReport/GeofenceReport'
import DistanceReport from '../ReportsNav/DistanceReport/DistanceReport'
import ParkingReport from '../ReportsNav/ParkingReport/ParkingReport'
import EngineReport from '../ReportsNav/EngineReport/EngineReport'
import GeofenceEntryExit from '../ReportsNav/GeofenceReport/GeofenceEntryExit'
import LocationTimeReport from '../ReportsNav/LocationTimeReport/LocationTimeReport'
import DriverVehicleReport from '../ReportsNav/DriverReport/DriverVehicleReport'
import ReportScreen from '../ReportsNav/ReportScreen'


const ReportNav = createStackNavigator()

const ReportNavigator = ({ navigation }) => {
  // const drawerNavigation = navigation.getParent("");
  // const index = navigation.useNavigationState(state => state.index);

  // useEffect(() => {
  //   // console.log("State:", index);
  //   console.log('navigation : ', navigation?.getState().routes.length);
  //   // drawerNavigation?.toggleDrawer();
  //   navigation.navigate("AdminPage");
  // }, [])

  return (
    <ReportNav.Navigator
      id="ReportNav"
      initialRouteName="Reports"
      screenOptions={{ headerShown: false, tabBarVisible: true }}
    >
      {/* <ReportNav.Screen name="Reports" component={Reports} /> */}
      <ReportNav.Screen name="Reports" component={ReportScreen} />
      <ReportNav.Screen name="Daily" component={DailyReport} />
      <ReportNav.Screen name="Distance" component={DistanceReport} />
      <ReportNav.Screen name="Relay" component={TripReport} />
      <ReportNav.Screen name="Parking" component={ParkingReport} />
      <ReportNav.Screen name="Geofence" component={GeofenceReport} />
      <ReportNav.Screen name="Engine" component={EngineReport} />
      <ReportNav.Screen name="Ignition" component={IgnitionReport} />
      <ReportNav.Screen name="GeofenceEntryExit"component={GeofenceEntryExit}/>
      <ReportNav.Screen name="Speed" component={SpeedReport} />
      <ReportNav.Screen name="Stoppage" component={StoppageReport} />
      <ReportNav.Screen name="Location" component={LocationTimeReport} />
      <ReportNav.Screen name="Driver" component={DriverVehicleReport} />

    </ReportNav.Navigator>
  )
}

export default ReportNavigator
