import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ActiveAllFilterButton from '../ActiveAllFilterButton';
import trip_history_styles from '../../Styles/FilterNavButton/Trip/TripHistory.module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../Theme/theme';
import SearchSvg from '../../../assets/search.svg';
import { useNavigation } from '@react-navigation/native';


const TripHistory = () => {
  const [selectedOption, setSelectedOption] = useState('History');
  const navigation = useNavigation()

  const data = [
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
    {
      trip_from: 'Warehouse',
      trip_to: 'Reliance DC',
      id: 'TRQ2345GDCDV',
      vehicle_no: 'HR XXXX 123',
      date: '14/02/2023',
      traking_type: 'SIM Tracking',
      duration: '72hrs',
    },
  ];

  return (
    <View style={trip_history_styles.main_box}>
      <View style={trip_history_styles.header_box}>
        <View style={trip_history_styles.header_flex_box}>
          <TouchableOpacity onPress={() => navigation.navigate('TripTrack')}>
            <Ionicons name="arrow-back" size={24} color={Theme.blue.primary} />
          </TouchableOpacity>
          <Text style={trip_history_styles.header_text}>Trip Tracking</Text>
        </View>

        <TouchableOpacity onPress={()=> alert('search press !!')}>
          <SearchSvg height={24} width={24} fill={Theme.blue.primary} />
        </TouchableOpacity>

      </View>
      <ActiveAllFilterButton selectedOption={selectedOption} />
      <Text style={trip_history_styles.heading_text}>All Trips </Text>

      <ScrollView style={trip_history_styles.scroll_view_box}>
        {data.length > 0 &&
          data.map((item, index) => (
            <View key={index} style={trip_history_styles.card_box}>
              <View style={trip_history_styles.flex_box}>
                <View style={trip_history_styles.flex_box1}>
                  <Text style={trip_history_styles.text}>{item.trip_from}</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color={Theme.black}
                  />
                  <Text style={trip_history_styles.text}>{item.trip_to}</Text>
                  <Text style={trip_history_styles.text}>({item.id})</Text>
                </View>
                <TouchableOpacity>
                  <Text style={trip_history_styles.details_text}>
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={trip_history_styles.flex_box2}>
                <Text style={trip_history_styles.vehicle_no_text}>
                  {item.vehicle_no}
                </Text>
                <View style={trip_history_styles.date_flex_box}>
                  <Text style={trip_history_styles.date_heading_text}>
                    Date-
                  </Text>
                  <Text style={trip_history_styles.date_text}>{item.date}</Text>
                </View>
              </View>

              <View style={trip_history_styles.flex_box2}>
                <Text style={trip_history_styles.sim_track}>
                  ({item.traking_type})
                </Text>
                <View style={trip_history_styles.date_flex_box}>
                  <Text style={trip_history_styles.sim_track}>
                    Duration- {item.duration}
                  </Text>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  )
}

export default TripHistory;
