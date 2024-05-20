//AllRoutes.jsx
import React from "react";
import { View,SafeAreaView,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNav from "./MainTabNavigator";  
import StackNavigator from "./StackNav";
import ReportNavigator from "./ReportsNavigator";
import SideDrawerNavigator from './SideDrawerNav'
// import MapNavigator from "./MapNavigator";

const Stack = createStackNavigator();

const AllRoutes = () => {

    return (       
        // <View style={styles.container}>
             <NavigationContainer>

                 <Stack.Navigator initialRouteName="StackNavigator" screenOptions={{ headerShown: false,}}>
                 <Stack.Screen name="StackNavigator" component={StackNavigator} />
                 <Stack.Screen name="SideDrawerNav" component={SideDrawerNavigator}/>
                 <Stack.Screen name="MainTabNav" component={MainTabNav} />
                 <Stack.Screen name="ReportNav" component={ReportNavigator}/>
                 </Stack.Navigator>

             </NavigationContainer> 
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'green',
        // width: 'auto',  // '100%'
        // marginTop: 10,
        // display:'none'
    },
    text: {
        fontSize: 10,
        color: '#05375a',

    },
    logo: {
        fontSize: 25,
    }
});

export default AllRoutes;



