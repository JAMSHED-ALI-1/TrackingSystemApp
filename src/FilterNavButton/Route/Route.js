import {
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import routes_styles from '../../Styles/FilterNavButton/Route/Routes.module'
import Location from '../../../assets/gis_location-poi.svg';
import RouteFilterButton from './RouteFilterButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../Theme/theme';
import SearchSvg from '../../../assets/search.svg'
import { useNavigation } from '@react-navigation/native';

const Route = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    name1: 'DEL',
    name2: 'MUM',
  });
  const navigation = useNavigation();

  const filters = [
    {
      name1: 'DEL',
      name2: 'MUM',
      value: '50',
      running: '1',
      stopped: '2',
      status_start: 'ON Time',
      status_end: 'Delay',
      vehicle_no: 'HR XXXX 123',
      status: 'Running',
      // on_time :""
    },
    {
      name1: 'DEL',
      name2: 'MUM1',
      value: '70',
      running: '1',
      stopped: '2',
      status_start: 'ON Time',
      status_end: 'Delay',
    },
    {
      name1: 'DEL2',
      name2: 'MUM2',
      value: '80',
      running: '1',
      stopped: '2',
      status_start: 'ON Time',
      status_end: 'Delay',
    },
    {
      name1: 'DEL3',
      name2: 'MUM3',
      value: '70',
      running: '1',
      stopped: '2',
      status_start: 'ON Time',
      status_end: 'Delay',
    },
  ]

  return (
    <View>
       <StatusBar barStyle="dark-content" showHideTransition='fade' backgroundColor={Theme.white} />
      <View style={routes_styles.header_box}>
        <View style={routes_styles.header_flex_box}>
          <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
            <MaterialIcons name='arrow-back' size={24} color={Theme.blue.primary} />
          </TouchableOpacity>
          <Text style={routes_styles.header_headig_text}>Route Tracking</Text>
        </View>
        <TouchableOpacity style={routes_styles.search_box}>
          <SearchSvg height={24} width={24} fill={Theme.blue.primary} />
        </TouchableOpacity>
      </View>
      <RouteFilterButton
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        filters={filters}
      />
      <View style={routes_styles.route_info_box}>
        {/* {selectedRoute && ( */}
        <View style={routes_styles.route_info_flex_box}>
          <Text style={routes_styles.route_info_text}>
            {selectedFilter?.name1}
          </Text>
          <MaterialIcons
            name="arrow-forward"
            size={20}
            color={Theme.blue.primary}
          />
          <Text style={routes_styles.route_info_text}>
            {selectedFilter?.name2}
          </Text>
          {/* Render other details of the selected route */}
        </View>

        <View style={routes_styles.route_info_flex_box}>
          <TouchableOpacity>
            <Text style={routes_styles.details_text}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={15} color={Theme.black} />
          </TouchableOpacity>
        </View>
        {/* )} */}
      </View>

      <View style={routes_styles.routes_main_box}>
        <View style={routes_styles.flex_box2}>
          <View style={routes_styles.flex_box}>
            <Text style={routes_styles.number_plate_text}>HR 12 ZZZ 5XXX7</Text>

            <Text style={routes_styles.running_text}>(Running)</Text>
          </View>

          <View style={routes_styles.running_box}>
            <Text style={routes_styles.running_status_text}>On Time</Text>
          </View>
        </View>

        <View style={routes_styles.last_update_flex_box}>
          <Text style={routes_styles.last_update_text}>Last Update:</Text>
          <Text style={routes_styles.time_text}>05:46 PM</Text>
          {/* <Text style={routes_styles.last_update_text}>(SIM Tracking)</Text> */}
        </View>

        <View style={routes_styles.flex_box3}>
          <Location width={25} height={25} fill={Theme.blue.primary} />
          <Text numberOfLines={2} style={routes_styles.address_text}>
            2/245 Lal bhagh eyx road, near ram lila maidan right new delhi ,
            221020
          </Text>
        </View>

        <View style={routes_styles.progress_main_box1}>
          <View style={routes_styles.progress_box1}>
            <View style={routes_styles.progress_box1_child}>
              <Text style={routes_styles.status_box_text}>Distance</Text>
            </View>

            <View style={routes_styles.distance_per_box}>
              <Text style={routes_styles.progress_per_text}>65%</Text>
            </View>

            <View style={routes_styles.distance_box1}>
              <Text style={routes_styles.status_box_text}>329.6 KM</Text>
            </View>
          </View>

          <View style={routes_styles.distance_box2}>
            <Text style={routes_styles.progress_time_text}>459.6 KM</Text>
          </View>
        </View>

        <View style={routes_styles.progress_main_box2}>
          <View style={routes_styles.progress_box2}>
            <View style={routes_styles.progress_time_box2}>
              <Text style={routes_styles.status_box_text}>Time</Text>
            </View>

            <View style={routes_styles.progress_per_box}>
              <Text style={routes_styles.progress_per_text}>82%</Text>
            </View>

            <View style={routes_styles.progress_duration_box}>
              <Text style={routes_styles.status_box_text}>1d 12h</Text>
            </View>
          </View>

          <View style={routes_styles.progress_time_box}>
            <Text style={routes_styles.progress_time_text}>6d 16h</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Route
