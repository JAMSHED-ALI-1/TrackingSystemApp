import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import vehicle_selector_styles from '../../../Styles/VehicleSelector.module'
import dash_select_stlyes from '../../../Styles/Dashboard/DashboardInfo/DashboardVehicleSelect.module';

const DashboardVehicleSelector = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={vehicle_selector_styles.select_main_container}>
      <View style={vehicle_selector_styles.select_col}>
        <View style={[vehicle_selector_styles.select_row_container, { flex: 1 }]}>
          <Text style={dash_select_stlyes.dash_text}>Dashboard</Text>
        </View>

        <TouchableOpacity
          style={[vehicle_selector_styles.select_row_container2, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}
          onPress={() => handleSelect('All Vehicle')} 
        >
          <MaterialIcons name='search' size={16} color='#666666' />
          <Text style={vehicle_selector_styles.select_no_plate}>{selectedValue || 'All vehicle'}</Text>
          <MaterialIcons name='arrow-drop-down' size={24} color='#9F9F9F' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardVehicleSelector;
