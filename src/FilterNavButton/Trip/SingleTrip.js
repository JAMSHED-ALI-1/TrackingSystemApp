
import { Text, TouchableOpacity, View } from 'react-native';
import trip_styles from '../../Styles/FilterNavButton/Trip/Trip.module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Theme from '../../Theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Location from '../../assets/gis_location-poi.svg';
import trip_map_styles from '../../Styles/ReportsNav/TripReportMap.module';
import single_trip_styles from '../../Styles/FilterNavButton/Trip/SingleTrip.module';
import routes_styles from '../../Styles/FilterNavButton/Routes.module';

const SingleTrip = () => {
  return (
    <View>
      {/* <ActiveAllFilterButton /> */}
      {/* <View style={trip_styles.trip_filter_box}>
      <TripFilterButton/>
      </View> */}

      <View style={trip_styles.trip_main_box}>
        <View style={trip_styles.details_box}>
          <View style={trip_styles.flex_box1}>
            <View style={trip_styles.trip_location_box}>
              <Text style={trip_styles.trip_location_text}>Delhi</Text>
              <Ionicons name="arrow-forward" size={16} color={Theme.black} />
              <Text style={trip_styles.trip_location_text}>Mumbai</Text>
            </View>

            <Text style={trip_styles.trip_text}>( T1. 234dxd323 )</Text>
            {/* <View style={trip_styles.view_details}>
              <Text style={trip_styles.view_details_text}>View Details</Text>
            </View> */}
            <View style={trip_styles.number_plate_box}>
              <Text style={trip_styles.number_plate_text}>HR 12 ZZZ 5438</Text>
            </View>
          </View>

          {/* flex box 3 */}
          <View style={trip_styles.flex_box3}>
            <Location width={25} height={25} fill={Theme.blue.primary} />
            <Text numberOfLines={2} style={trip_styles.address_text}>
              2/245 Lal bhagh eyx road, near ram lila maidan right new delhi ,
              221020
            </Text>
          </View>

          {/* flex box 2 */}
          <View style={trip_styles.flex_box2}>
            <LinearGradient
              colors={['#11D269', '#056430']}
              style={trip_styles.running_box}
            >
              <Text style={trip_styles.running_text}>Running</Text>
            </LinearGradient>

            <LinearGradient
              colors={['#BF4545', '#BF4545']}
              style={trip_styles.running_box}
            >
              <Text style={trip_styles.running_text}>Delay</Text>
            </LinearGradient>

            <View style={trip_styles.track_sim_box}>
              <Text style={trip_styles.track_text}>Tracking</Text>
              <Text style={trip_styles.track_sim_text}>SIM</Text>
            </View>

            <TouchableOpacity
              style={[trip_styles.view_details, single_trip_styles.details_box]}
            >
              <Text style={trip_styles.view_details_text}>View Details</Text>
            </TouchableOpacity>
          </View>

          {/* flex box 4 */}
          <View style={trip_styles.flex_box4}>
            <View>
              <View style={trip_styles.start_end_trip_box}>
                <View style={trip_map_styles.admin_image_box}>
                  <MaterialIcons
                    name="arrow-drop-down"
                    color={Theme.white}
                    size={21}
                  />
                </View>
                <Text numberOfLines={2} style={trip_styles.start_end_trip_text}>
                  2/245 Lal bhagh eyx road new delhi 221020
                </Text>
              </View>

              <View
                style={[trip_map_styles.admin_vh_line_box, { height: 25 }]}
              ></View>

              <View style={trip_styles.start_end_trip_box}>
                <View style={trip_map_styles.trip_push_box}>
                  <FontAwesome name="stop" color={Theme.white} size={10} />
                </View>
                <Text numberOfLines={2} style={trip_styles.start_end_trip_text}>
                  8/64 heera ganj eyx road new mumbai, road new mumbai 100320{' '}
                </Text>
              </View>
            </View>

            <LinearGradient
              colors={['#D6D6D6', '#606060']}
              style={[
                routes_styles.status_box_child4,
                single_trip_styles.update_box,
              ]}
            >
              <View style={routes_styles.update_box}>
                <Text style={routes_styles.status_box_text}>Last Updated</Text>
              </View>

              <View style={routes_styles.status_box_child4_time}>
                <Text style={routes_styles.status_box_text}>05: 56 PM</Text>
              </View>
            </LinearGradient>
          </View>

          <View style={routes_styles.progress_main_box1}>
            <View style={routes_styles.progress_box1}>
              <View style={routes_styles.progress_box1_child}>
                <Text style={routes_styles.status_box_text}>Distance</Text>
              </View>

              <View style={routes_styles.distance_per_box}>
                <Text style={routes_styles.progress_per_text}>65%</Text>
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
            </View>

            <View style={routes_styles.progress_time_box}>
              <Text style={routes_styles.progress_time_text}>6d 16h</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  )
}
export default SingleTrip;



