import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler"
import { LinearGradient } from 'expo-linear-gradient';
import trip_filter_styles from '../../Styles/FilterNavButton/Trip/TripFilterButton';
import Theme from '../../Theme/theme';

const TripFilterButton = ({ tripData }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    name: 'Intransit',
    value: 0,
  })

  const filters = [
    // { name: 'On time', value: '70', running: '1', stopped: '2' },
    { name: 'Intransit', value: '50', running: '1', stopped: '2', status_start: 'ON Time', status_end: 'Delay' },
    { name: 'Reported', value: '70', running: '1', stopped: '2', status_start: 'Unloading', status_end: 'Detained' },
    { name: 'POD', value: '80', running: '1', stopped: '2', status_start: 'Submitted', status_end: 'Pending' },
    { name: 'E way Bill ', running: '1', stopped: '2', status_start: 'Today', status_end: 'tomorrow', },
    { name: 'Trip Saved', value: '70', running: '1', stopped: '2', status_start: "Today", status_end: "tomorrow" },
    // { name: 'Delevered', value: '70', running: '1', stopped: '2', status_start: "Submitted", status_end: "Pending" },
    // { name: 'Not Start', value: '70', running: '1', stopped: '2', status_start: 'Running', status_end: 'Stopped' },
    // { name: 'POD', value: '70', running:'1', stopped: '2' },
  ]

  const handleFilterSelection = (filter) => {
    setSelectedFilter({ name: filter.name, value: filter.value })
  }


  return (
    <ScrollView horizontal style={trip_filter_styles.vehicle_radio_main_box}>
      {filters.map((filter, index) => (
        <TouchableOpacity
          onPress={() => handleFilterSelection(filter)}
          key={index}
          style={trip_filter_styles.vehicle_radio_check_box}
        >
          {selectedFilter.name === filter.name ? (
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={trip_filter_styles.vehicle_radio_liner_box}
            >
              {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}> */}

              <View style={trip_filter_styles.fliter_flex_box}>
                <View style={trip_filter_styles.fliter_flex_left_child}>
                  <Text
                    style={[
                      trip_filter_styles.filter_name_text,
                      { color: 'white' , height:28, },
                    ]}
                  >
                    {filter.name}
                  </Text>

                  <Text
                    style={[
                      trip_filter_styles.fliter_stopped_text,
                      { color: 'white' },
                    ]}
                  >
                    {filter.running}
                  </Text>
                  <Text
                    style={[
                      trip_filter_styles.filter_status_text,

                      { color: filter.status_start === 'Running' || filter.status_start === 'Unloading' || filter.status_start === 'Today'  || filter.status_start === 'ON Time' || filter.status_start === 'Submitted'? Theme.white : Theme.blue.primary },

                      // {color: filter.status_start ==='E-Way bill Expire' ? Theme.red : Theme.blue.primary}
                    ]}
                  >
                    {filter.status_start}
                  </Text>
                </View>

                <View style={{}}>
                  <Text
                    style={[
                      trip_filter_styles.fliter_value_text,
                      { color: 'white' },
                    ]}
                  >
                    {filter.value}
                  </Text>

                  <Text
                    style={[
                      trip_filter_styles.fliter_stopped_text,
                      { color: 'white' },
                    ]}
                  >
                    {filter.stopped}
                  </Text>
                  <Text
                    style={[
                      trip_filter_styles.filter_status_text,
                      // style=
                      {
                        color:
                          filter.status_end === 'Stopped' ||
                            filter.status_end === 'Detained' ||
                            filter.status_end === 'tomorrow' ||
                            filter.status_end === 'Delay'||
                            filter.status_end === 'Pending'
                            ? Theme.white
                            : Theme.blue.primary, // Adjust 'Theme.red' and 'Theme.green' based on your color values
                      }
                    ]}
                  >
                    {filter.status_end}
                    {/* Stopped */}
                  </Text>
                </View>
              </View>
            </LinearGradient>

            
          ) : (
            <View style={[trip_filter_styles.vehicle_radio_check_text]}>
              <View style={trip_filter_styles.fliter_flex_box}>
                <View style={trip_filter_styles.fliter_flex_left_child}>
                  <Text style={[trip_filter_styles.filter_name_text,{height:28}]}>
                    {filter.name}
                  </Text>

                  <Text style={[trip_filter_styles.fliter_stopped_text]}>
                    {filter.running}
                  </Text>
                  <Text style={[trip_filter_styles.filter_status_text,
                  { color: filter.status_start === 'Running' || filter.status_start === 'Unloading' || filter.status_start === 'Today' || filter.status_start === 'ON Time' || filter.status_start === 'Submitted' ? Theme.green : Theme.blue.primary },


                  ]}>
                    {filter.status_start}
                  </Text>
                </View>

                <View>
                  <Text style={trip_filter_styles.fliter_value_text}>
                    {filter.value}
                  </Text>

                  <Text style={[trip_filter_styles.fliter_stopped_text]}>
                    {filter.stopped}
                  </Text>
                  <Text style={[trip_filter_styles.filter_status_text, {
                    color:
                      filter.status_end === 'Stopped' ||
                        filter.status_end === 'Detained' ||
                        filter.status_end === 'tomorrow' ||
                        filter.status_end === 'Delay' ||
                        filter.status_end === 'Pending'
                        ? Theme.red
                        : Theme.blue.primary,
                  },]}>
                    {filter.status_end}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
    // </ScrollView>
  )
}

export default TripFilterButton;
