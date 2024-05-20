import { View, Text } from 'react-native'
import React from 'react'
import Alerts from '../Component/AlertsPage/Alerts/Alerts';


const AlertScreen = ({ navigation, route }) => {
    const { vehiclesData ,imei} = route.params || null;
    return (

        <View style={{ flex: 1, }}>
            <Alerts vehiclesData={vehiclesData} imei={imei}/>
        </View>
    )
}

export default AlertScreen;