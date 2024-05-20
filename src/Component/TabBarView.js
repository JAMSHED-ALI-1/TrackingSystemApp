import React, { useState, useCallback } from "react";
import {
    Animated,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native";
import { TabView } from "react-native-tab-view";
import Theme from "../Theme/theme";

const TabBarView = ({ routes, renderScene, swipeEnabled, tabBarView }) => {
    const [index, setIndex] = useState(0);
    const indicatorPosition = new Animated.Value(0);

    const handleIndexChange = useCallback((newIndex) => {
        setIndex(newIndex);
        Animated.spring(indicatorPosition, {
            toValue: newIndex,
            useNativeDriver: false,
        }).start();
    }, []);

    const renderTabBar = ({ navigationState, position }) => {
        const inputRange = navigationState.routes.map((x, i) => i);
        const tabWidth = Dimensions.get('window').width / navigationState.routes.length;
        const translateX = Animated.multiply(position, tabWidth);

        return (
            <View style={[styles.tabBar, { borderBottomColor: Theme.blue.secondary }, tabBarView]}>
                <Animated.View
                    style={[
                        styles.indicator,
                        {
                            width: tabWidth,
                            transform: [{ translateX }],

                        },
                    ]}
                />

                {navigationState.routes.map((route, i) => {
                    const isCurrentIndex = index === i;

                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={[styles.tabItem]}
                            onPress={() => handleIndexChange(i)}
                        >
                            <Animated.Text
                                numberOfLines={2}
                                style={{
                                    color: isCurrentIndex ? Theme.blue.secondary : Theme.black,
                                    fontSize: 12,
                                    // borderWidth: .3,
                                    textAlign: 'center',
                                    padding: 10
                                }}
                            >
                                {route.title}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <TabView
                swipeEnabled={swipeEnabled}
                lazy={true}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={handleIndexChange}
                style={styles.tabView}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Theme.white,
        marginTop: 0,
        marginBottom: 5,
        width: "100%",
        // borderWidth:1,
    },
    tabBar: {
        flexDirection: "row",
        height: 55,
        overflow: "hidden",
        borderBottomWidth: 2,
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: .8,
        textAlign: 'center',
    },
    indicator: {
        position: "absolute",
        height: 2,
        backgroundColor: Theme.blue.secondary,
        bottom: 0,
    },
    tabView: {
        flex: 1,
    },
});

export default TabBarView;

