import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import vehicle_radio_btn_styles from '../../../Styles/SideDrowerPages/GpsFilterButton.module';

const GpsFilterButton = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    name: 'Gps',
    value: 0,
  })

  const filters = [
    { name: 'Gps', value: '50' },
    { name: 'Container Lock', value: '70' },
    { name: 'Temp. Sensor', value: '80' },
    { name: 'Fuel Sensor', value: '70' },
  ]

  const handleFilterSelection = (filter) => {
    setSelectedFilter({ name: filter.name, value: filter.value })
  }

  return (
    <View style={vehicle_radio_btn_styles.vehicle_radio_main_box}>
      {filters.map((filter) => (
        <TouchableOpacity
          onPress={() => handleFilterSelection(filter)}
          key={filter.name}
          style={vehicle_radio_btn_styles.vehicle_radio_check_box}
        >
          {selectedFilter.name === filter.name ? (
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_radio_btn_styles.vehicle_radio_liner_box}
            >
              <Text
                style={[
                  vehicle_radio_btn_styles.fliter_value_text,
                  { color: 'white' },
                ]}
              >
                {filter.value}
              </Text>
              <Text
                style={[
                  vehicle_radio_btn_styles.filter_name_text,
                  { color: 'white' },
                ]}
              >
                {filter.name}
              </Text>
            </LinearGradient>
          ) : (
            <View style={vehicle_radio_btn_styles.vehicle_radio_check_text}>
              <Text style={vehicle_radio_btn_styles.fliter_value_text}>
                {filter.value}
              </Text>
              <Text style={vehicle_radio_btn_styles.filter_name_text}>
                {filter.name}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  )
}



export default GpsFilterButton
