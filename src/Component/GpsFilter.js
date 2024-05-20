import React, { useState, useCallback } from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import Gps from "../Component/GPSFilter/Gps";
import ContainerLock from "./GPSFilter/ContainerLock";
import TempSensor from "./GPSFilter/TempSensor";
import FuleSensor from "./GPSFilter/FuleSensor";
import Theme from "../Theme/theme";

const GpsFilter = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "gpsBtn", title: "GPS" },
    { key: "contLock", title: "Container Lock" },
    { key: "tempSensor", title: "Temp. Sensor" },
    { key: "fuleSensor", title: "Fuel Sensor" },
  ];

  const handleIndexChange = useCallback((newIndex) => setIndex(newIndex), []);

  const renderScene = SceneMap({
    gpsBtn: () => <Gps navigation={navigation} />,
    contLock: () => <ContainerLock navigation={navigation} />,
    tempSensor: () => <TempSensor navigation={navigation} />,
    fuleSensor: () => <FuleSensor navigation={navigation} />,
  });
  const renderTabBar = ({ navigationState, position }) => {
    const inputRange = navigationState.routes.map((x, i) => i);

    return (
      <View
        style={[
          styles.tabBar,
          {
            height: 35,
            backgroundColor: Theme.white,
            // justifyContent: "center",
            // alignItems: "center",
            // alignSelf: 'center',
            // alignSelfContent: 'center',
            // marginTop: 20,
            // marginBottom: 20,
            // borderWidth: .5,
            // borderColor: 'red',
            // marginLeft: 10

          },
        ]}
      >
        {navigationState.routes.map((route, i) => {
          const isCurrentIndex = index === i;
          const backgroundColor = isCurrentIndex
            ? Theme.mykonos
            : Theme.offWhite;
          const borderRadius = isCurrentIndex ? 28 : 0;
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            // <View >
            <TouchableOpacity
              key={route.key}
              style={[
                styles.tabItem,
                {
                  backgroundColor,
                  borderRadius,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: Theme.mykonos,
                  // flex: 1,
                  // width: '25%',
                  // borderWidth: ,
                  // alignSelf: 'center',
                  // alignContent: 'center',
                  // borderWidth: .3,

                  // borderBottomRightRadius: 10


                },
              ]}
              onPress={() => setIndex(i)}
            >
              <Animated.Text
                numberOfLines={2}
                style={{
                  opacity,
                  color: isCurrentIndex ? Theme.white : Theme.darkBlue,
                  fontSize: 12,
                  fontWeight: isCurrentIndex ? 'bold' : 'bold',
                  borderRadius: isCurrentIndex ? 20 : 0,
                  paddingHorizontal: isCurrentIndex ? 10 : 10,
                  textAlign: 'center',
                  alignSelf: 'center',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // paddingTop: isCurrentIndex ? 3 : 0,
                  // borderWidth: 1,
                  // paddingBottom: 5,
                  // backgroundColor: isCurrentIndex ? Theme.white : Theme.blue.primary,
                  // alignSelf: 'center',
                  // borderWidth: 1,
                }}
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
            // </View>
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={styles.container}
    // horizontal
    // contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.backgroundContainer}>

      </View>
      <View style={styles.overlayContainer}>
        <TabView
          swipeEnabled={false}
          lazy={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
          style={styles.tabView}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Theme.extraLightBlue,
    backgroundColor: Theme.offWhite,
    borderWidth: 0,
    // padding: 20,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  tabBar: {
    // display: "none", // remove this property to display primary tab
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
    width: '97%',
    alignSelf: "center",
    // borderWidth: .2,
    // backgroundColor: Theme.blue.primary,
    // borderBottomRightRadius: 20,
    // borderColor: Theme.blue.secondary,
    // paddingTop: StatusBar.currentHeight,
    // paddingTop: -15,
    // borderWidth: .2,
    // padding: 2,
    // borderBottomLeftRadius: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",

    // backgroundColor: 'red',
    // borderWidth: 3,
  },
  tabView: {
    flex: 1,
    zIndex: 1,

    // borderWidth: 5,
    // backgroundColor: "red"
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject, // This style applies absolute positioning to fill the parent
    zIndex: 1,
    // borderWidth: 2,
  },
  backgroundContainer: {
    height: 40,
    borderWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Theme.extraLightBlue,
  }
});

export default GpsFilter;

