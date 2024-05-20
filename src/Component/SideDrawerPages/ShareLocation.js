import { View, Text } from 'react-native'
import React from 'react'
import LiveLocation from '../SwipeableCards/LiveLocation'

const ShareLocation = ({ locationData, vehiclesData }) => {
    return (
        <View style={{ flex: 1 }}>
            <LiveLocation locationData={locationData} vehiclesData={vehiclesData} />
        </View>
    )
}

export default ShareLocation