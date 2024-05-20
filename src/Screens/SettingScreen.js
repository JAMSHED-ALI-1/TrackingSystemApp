import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import SideSettings from "../Component/SideDrawerPages/SettingsPages/SideSettings";
// import { SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";




function SettingScreen({ navigation }) {
    return (
        <View >
            <SideSettings navigation={navigation} />
            {/* <Settings /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});


export default SettingScreen;
