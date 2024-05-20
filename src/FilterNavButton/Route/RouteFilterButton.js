import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../Theme/theme';
import route_filter_styles from '../../Styles/FilterNavButton/Route/RouteFilterButton.module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RouteFilterButton = ({ selectedFilter, setSelectedFilter,filters}) => {
  // const [selectedFilter, setSelectedFilter] = useState({
  //   name1: 'DEL',
  //   name2:'MUM'
  // });

  // const filters = [
  //   { name1: 'DEL', name2:'MUM', value: '50', running: '1', stopped: '2', status_start: 'ON Time', status_end: 'Delay' },
  //   { name1: 'DEL', name2:'MUM1', value: '70', running: '1', stopped: '2', status_start: 'ON Time', status_end: 'Delay' },
  //   { name1: 'DEL2', name2:'MUM2', value: '80', running: '1', stopped: '2', status_start: 'ON Time', status_end: 'Delay' },
  //   { name1: 'DEL3', name2:'MUM3', value: '70', running: '1', stopped: '2', status_start: 'ON Time', status_end: 'Delay' },
  // ];

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    // onSelectFilter(filter);
  };

  return (
    <ScrollView horizontal style={route_filter_styles.vehicle_radio_main_box}>
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleFilterSelection(filter)}
          style={route_filter_styles.vehicle_radio_check_box}
        >
          {selectedFilter && selectedFilter.name1 === filter.name1 && selectedFilter.name2 === filter.name2 ? (
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={route_filter_styles.vehicle_radio_liner_box}
            >
              <View style={route_filter_styles.fliter_flex_box}>
                <View style={route_filter_styles.fliter_flex_left_child}>
                  <View style={{ flexDirection: 'row', gap: 2 }}>
                    <Text style={[route_filter_styles.filter_name_text, { color: 'white', height: 25 }]}>
                      {filter.name1}
                    </Text>
                    <MaterialIcons name='arrow-forward' size={15} color={Theme.white}/>
                    <Text style={[route_filter_styles.filter_name_text, { color: 'white' }]}>
                      {filter.name2}
                    </Text>
                  </View>
                  <Text style={[route_filter_styles.fliter_stopped_text, { color: 'white' }]}>{filter.running}</Text>
                  <Text style={[route_filter_styles.filter_status_text, { color: Theme.white }]}>{filter.status_start}</Text>
                </View>
                <View>
                  <Text style={[route_filter_styles.fliter_value_text, { color: 'white' }]}>{filter.value}</Text>
                  <Text style={[route_filter_styles.fliter_stopped_text, { color: 'white' }]}>{filter.stopped}</Text>
                  <Text style={[route_filter_styles.filter_status_text, { color: Theme.white }]}>{filter.status_end}</Text>
                </View>
              </View>
            </LinearGradient>
          ) : (
            <View style={[route_filter_styles.vehicle_radio_check_text]}>
              <View style={route_filter_styles.fliter_flex_box}>
                <View style={route_filter_styles.fliter_flex_left_child}>
                  <View style={{ flexDirection: 'row', gap: 2 }}>
                    <Text style={[route_filter_styles.filter_name_text, { height: 23 }]}>
                      {filter.name1}
                    </Text>
                    <MaterialIcons name='arrow-forward' size={15} color={Theme.blue.primary}/>
                    <Text style={[route_filter_styles.filter_name_text]}>{filter.name2}</Text>
                  </View>
                  <Text style={[route_filter_styles.fliter_stopped_text]}>{filter.running}</Text>
                  <Text style={[route_filter_styles.filter_status_text, { color: filter.status_start === 'Running' || filter.status_start === 'Unloading' || filter.status_start === 'Today' || filter.status_start === 'ON Time' || filter.status_start === 'Submitted' ? Theme.green : Theme.blue.primary }]}>
                    {filter.status_start}
                  </Text>
                </View>
                <View>
                  <Text style={route_filter_styles.fliter_value_text}>{filter.value}</Text>
                  <Text style={[route_filter_styles.fliter_stopped_text]}>{filter.stopped}</Text>
                  <Text style={[route_filter_styles.filter_status_text, { color: filter.status_end === 'Stopped' || filter.status_end === 'Detained' || filter.status_end === 'tomorrow' || filter.status_end === 'Delay' || filter.status_end === 'Pending' ? Theme.red : Theme.blue.primary }]}>
                    {filter.status_end}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RouteFilterButton;
