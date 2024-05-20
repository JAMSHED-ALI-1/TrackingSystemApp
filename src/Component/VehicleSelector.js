import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import vehicle_selector_styles from '../Styles/VehicleSelector.module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VehicleSelector = ({ locationData, vehiclesData }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  
  // useEffect(()=> 
  // console.log("vahicle data vehicle select =>",locationData?.vehiclesData?.vehicleNumber)
  // )

  return (
    <View style={vehicle_selector_styles.select_main_container}>
      <View style={vehicle_selector_styles.select_col}>
        <View style={[vehicle_selector_styles.select_row_container, { flex: 1 }]}>
          {/* Content for the first box */}
          <Text style={vehicle_selector_styles.select_text}>Selected Vehicle</Text>
        </View>
        <View
          style={[vehicle_selector_styles.select_row_container2, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}
          // Update this function to handle selecting the value
        >
          {/* Content for the second box */}
          {/* <MaterialIcons name='search' size={16} color='#666666' /> */}
          <Text style={vehicle_selector_styles.select_no_plate}>{locationData?.vehiclesData?.vehicleNumber ?? "--"}</Text>
          {/* <MaterialIcons name='arrow-drop-down' size={24} color='#9F9F9F' /> */}
        </View>
      </View>
    </View>
  );
};

export default VehicleSelector;
