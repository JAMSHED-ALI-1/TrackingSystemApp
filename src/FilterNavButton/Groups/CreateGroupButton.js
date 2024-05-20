import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../../Theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import create_group_styles from '../../Styles/FilterNavButton/Groups/CreateGroup.module';

const CreateGroupButton = ({ selectedFilter, setSelectedFilter, vehicleGroups, setSelectedBox,selectedBox}) => {

  // useEffect(()=>{
  //   console.log(vehicleGroups?.groups)
  // })
  useEffect(() => {
    if (!selectedFilter && vehicleGroups && vehicleGroups.groups && vehicleGroups.groups.length > 0) {
      setSelectedFilter(vehicleGroups.groups[0]);
      setSelectedBox(0); 
    }
  }, [selectedFilter, vehicleGroups]);

  const handleBoxSelection = (index) => {
    setSelectedBox(index);
    setSelectedFilter(vehicleGroups.groups[index]);
  };


  return (
    <ScrollView horizontal style={create_group_styles.vehicle_radio_main_box}>
    {vehicleGroups?.groups && vehicleGroups?.groups.map((filter, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleBoxSelection(index)}
        style={[create_group_styles.vehicle_radio_check_box, selectedBox === index ? create_group_styles.blue: create_group_styles.white]}
      >
        {/* {selectedFilter && selectedFilter.name1 === filter.name1 && selectedFilter.name2 === filter.name2 ? ( */}
          {/* <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={create_group_styles.vehicle_radio_liner_box}
          > */}
            <View style={create_group_styles.fliter_flex_box}>
              <View style={create_group_styles.fliter_flex_left_child}>
                <View style={{ flexDirection: 'row', gap: 2 }}>
                  <Text style={[selectedBox === index ? create_group_styles.filter_name_text : create_group_styles.name_text_default, {  height: 25 }]}>
                    {filter.group_name}
                  </Text>
                  <MaterialIcons name='arrow-forward' size={15} color={selectedBox === index ? Theme.white: Theme.blue.primary}/>
                  <Text style={selectedBox === index ? create_group_styles.filter_name_text : create_group_styles.name_text_default}>
                    {/* {filter.name2} */}
                  </Text>
                </View>
                <Text style={selectedBox === index ? create_group_styles.fliter_stopped_text : create_group_styles.stopped_text_default}>
                  {filter.runningCount}
                  </Text>
                <Text style={selectedBox === index ? create_group_styles.filter_status_text : create_group_styles.running_default_text}>
                  Running
                  </Text>
              </View>
              <View>
                <Text style={selectedBox === index ? create_group_styles.fliter_value_text : create_group_styles.value_text_defalut}>
                  {filter.total_vehicles}
                  </Text>
                <Text style={selectedBox === index ? create_group_styles.fliter_stopped_text : create_group_styles.stopped_text_default}>
                  {filter.stoppedCount}
                  </Text>
                <Text style={selectedBox === index ? create_group_styles.filter_status_text: create_group_styles.stop_text_default }>
                  Stopped
                  </Text>
              </View>
            </View>
          {/* </LinearGradient> */}
        {/* ) : ( */}
          {/* <View style={[create_group_styles.vehicle_radio_check_text]}>
            <View style={create_group_styles.fliter_flex_box}>
              <View style={create_group_styles.fliter_flex_left_child}>
                <View style={{ flexDirection: 'row', gap: 2 }}>
                  <Text style={[create_group_styles.filter_name_text, { height: 23 }]}>
                    {filter.group_name}
                  </Text>
                  <MaterialIcons name='arrow-forward' size={15} color={Theme.blue.primary}/>
                  <Text style={[create_group_styles.filter_name_text]}>
                    {filter.name2}
                    </Text>
                </View>
                <Text style={[create_group_styles.fliter_stopped_text]}>
                  {filter.running}
                  </Text>
                <Text style={[create_group_styles.filter_status_text, { color: filter.status_start === 'Running' || filter.status_start === 'Unloading' || filter.status_start === 'Today' || filter.status_start === 'ON Time' || filter.status_start === 'Submitted' ? Theme.green : Theme.blue.primary }]}>
                  {filter.status_start}
                </Text>
              </View>
              <View>
                <Text style={create_group_styles.fliter_value_text}>{filter.value}</Text>
                <Text style={[create_group_styles.fliter_stopped_text]}>{filter.stopped}</Text>
                <Text style={[create_group_styles.filter_status_text, { color: filter.status_end === 'Stopped' || filter.status_end === 'Detained' || filter.status_end === 'tomorrow' || filter.status_end === 'Delay' || filter.status_end === 'Pending' ? Theme.red : Theme.blue.primary }]}>
                  {filter.status_end}
                </Text>
              </View>
            </View>
          </View> */}
        {/* )} */}
      </TouchableOpacity>
    ))}
  </ScrollView>
  );
};
export default CreateGroupButton;
