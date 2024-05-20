// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/Login';

const St = createStackNavigator();

const StackNavigator = () => {

    return (
        <St.Navigator initialRouteName="Login" screenOptions={
            {
                lazy: true,
                headerShown: false,
            }
        }>
            <St.Screen name="Login" component={LoginScreen} />
        </St.Navigator>
    );
};

export default StackNavigator;
