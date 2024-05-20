import { View, Text } from 'react-native';
import React from 'react';
import GpsFilterButton from './Gps/GpsFilterButton';
import GpsSearch from './Gps/GpsSearch';
import StatusFilterBtn from './StatusFilterBtn';
import CommonHeader from './CommonHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../Theme/theme';
import all_vehicle from '../../Styles/SideDrowerPages/SideAllVehicle.module';

const SideAllVehicle = ({ navigation }) => {
  return (
    <View style={all_vehicle.all_vehicle_main_box}>
      <View style={all_vehicle.all_vehicle_header_box}>
        <CommonHeader navigation={navigation} />
        <View style={all_vehicle.right_header_box}>
          <MaterialIcons name='add' size={24} color={Theme.secondary} />
          <Text style={all_vehicle.header_text}>Add Vehicle</Text>
        </View>
      </View>
      {/* <Text>SideAllVehicle</Text> */}
      {/* <GpsFilterButton/> */}
      <View style={{ marginTop: 15, width: "95%", alignSelf: 'center' }}>
        <GpsSearch />
      </View>
      <View style={{ height: '100%', marginTop: 15 }}>
        <StatusFilterBtn />
      </View>
    </View>
  )
}

export default SideAllVehicle;