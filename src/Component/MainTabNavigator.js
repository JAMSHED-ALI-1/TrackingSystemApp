import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import SettingScreen from "../Screens/SettingScreen";
import Locations from "../Screens/Locations";
import { LinearGradient } from "expo-linear-gradient";
import Theme from "../Theme/theme";
import ReportNavigator from "./ReportsNavigator";
import LocationIcon from '../../assets/location_icon.svg';
import ReportsIcon from '../../assets/report-box-outline.svg';
import SettingIcon from '../../assets/setting_icon.svg';
import SvgQik from '../../assets/qiktrack_color_logo.svg'
import SvgQik2 from '../../assets/qiktrack_bNw_logo.svg';
import SupportSvg from '../../assets/support.svg'
import SupportsAndTicket from './SideDrawerPages/TicketAndHistory/SupportsAndTicket';
import TrackNavigator from "../Screens/HomeComponent/TrackNavigator";
// import HomeScreen from "../Screens/HomeScreen";
// import DashBoard from "../Screens/DashBoard";
// import DashboardIcon from '../../assets/dashboard_icon.svg';
// import HomeIcon from '../../assets/home_Vector.svg';
// import MainHeader from "./MainHeader";

const TabArr = [
  {
    route: "Setting",
    label: "Setting",
    icon: SettingIcon, // Use SVG icon component
    component: SettingScreen,
  },
  {
    route: "Locations",
    label: "Location",
    icon: LocationIcon, // Use SVG icon component
    component: Locations,
  },

  {
    route: "Home",
    label: "Home",
    // icon: HomeIcon, // Use SVG icon component
    // icon: require("../../assets/qiktrack-logo-icon.png"),
    // inactiveIcon: require("../../assets/qiktrack-logo-icon-blackAndWhite.png"),
    icon: SvgQik,
    inactiveIcon: SvgQik2,
    component: TrackNavigator,
  },
  {
    route: "Report",
    label: "Reports",
    icon: ReportsIcon, // Use SVG icon component
    component: ReportNavigator,
  },

  {
    route: "Dash",
    label: "Support",
    icon: SupportSvg, // Use SVG icon component
    component: SupportsAndTicket,
  },

];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={() => {
        // console.log("Pressed route:", item.route); // Add this line for debugging
        onPress(item.route);
      }}
      activeOpacity={.5}
      style={[styles.container, focused && styles.activeContainer]}
    >
      <View style={styles.container1}>
        <View style={[styles.btn, focused && styles.activeBtn]}>
          <LinearGradient
            colors={
              // focused
              //   ? [Theme.blue.gradient.all.start, Theme.blue.gradient.all.end]
              //   : 
              ["transparent", "transparent"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.circle,
              //  focused && styles.activeCircle
            ]}
          >
            <View style={styles.textAndIcon}>
              {item.route === "Home" ? (
                // <Image
                //   source={focused ? item.icon : item.inactiveIcon}
                //   style={[
                //     styles.icon,
                //     focused ? null : styles.inactiveIcon,
                //   ]}
                // />
                focused ?
                  <item.icon
                    width={54}
                    height={54}
                  />
                  :
                  <item.inactiveIcon
                    width={54}
                    height={54}
                    fill={
                      focused ? Theme.blue.primary :
                        Theme.grey}
                  />
              ) : (
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                  <item.icon
                    width={24}
                    height={24}
                    fill={
                      focused ? Theme.blue.primary :
                        Theme.grey}
                  />
                  <Text style={
                    focused ? styles.labelText :
                      styles.inActivelabelText}>
                    {item.label}
                  </Text>
                </View>

              )}

            </View>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function MyTabs({ navigation }) {
  // const navigation = useNavigation();

  return (
    <Tab.Navigator
      id="MainTabNav"
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        lazy: true,
        tabBarStyle: {
          height: 55,
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 40,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: true,
              headerShown: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
              // header: (props) => (
              //   <MainHeader {...props} navigation={navigation} />
              // ),
              // headerShown: item.route == 'Home',
              tabBarStyle: {
                height: 55,
                position: "absolute",
                bottom: 10,
                left: 10,
                right: 10,
                borderRadius: 40,
                // display: item.route == 'Report' ? 'none' : null,
              },

            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeContainer: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  activeBtn: {
    // width: 70,
    // height: 70,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    borderRadius: 25,
    // borderWidth: .5
  },
  activeCircle: {
    borderRadius: 35,
    // borderWidth: 2
  },
  textAndIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 9,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    color: Theme.blue.primary,
  },
  inActivelabelText: {
    fontSize: 9,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    color: Theme.greyDark,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  inactiveIcon: {
    // Apply grayscale filter for inactive state
    // tintColor: "gray",
    opacity: 1,
  },
});

export default MyTabs;
