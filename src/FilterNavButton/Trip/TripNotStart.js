import { Text, View } from 'react-native';
import trip_styles from '../../Styles/FilterNavButton/Trip/Trip.module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../Theme/theme';
import trip_map_styles from '../../Styles/ReportsNav/TripReportMap.module';
import trip_not_start_styles from '../../Styles/FilterNavButton/Trip/TripNotStart.module';

const TripNotStart = () => {
  return (
    <View style={trip_styles.trip_main_box}>
      <View style={trip_styles.details_box}>
        <View style={trip_styles.flex_box1}>
          <View style={trip_styles.trip_location_box}>
            <Text style={trip_styles.trip_location_text}>Delhi</Text>
            <Ionicons name="arrow-forward" size={16} color={Theme.black} />
            <Text style={trip_styles.trip_location_text}>Mumbai</Text>
          </View>

          <Text style={trip_styles.trip_text}>( T1. 234dxd323 )</Text>
          <View style={trip_styles.view_details}>
            <Text style={trip_styles.view_details_text}>View Details</Text>
          </View>
        </View>

        {/* flex box 2 */}

        <View style={trip_styles.flex_box2}>
          <View style={trip_styles.number_plate_box}>
            <Text>HR 12 ZZZ 5438</Text>
          </View>

          <View style={[trip_styles.track_sim_box,{marginLeft:6}]}>
            <Text style={trip_styles.track_text}>Tracking</Text>
            <Text style={trip_styles.track_sim_text}>SIM</Text>
          </View>

        </View>

        {/* flex box 3 */}
        <View style={trip_not_start_styles.trip_info_box}>
         <View style={trip_not_start_styles.trip_info_box_child1}>

         <View style={trip_not_start_styles.start_trip_info_box}>
          <Text style={trip_not_start_styles.start_trip_info_text}>Start Trip</Text>
         </View>
         <View style={trip_not_start_styles.start_trip_info_box}>
          <Text style={trip_not_start_styles.update_trip_info_text}>Update Trip</Text>
         </View>

         </View>

         <View>
          <MaterialIcons name='delete' size={24} color='#4F4F4F' />
         </View>
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
                8/64 heera ganj eyx road new mumbai, road new mumbai 100320 {' '}
              </Text>
            </View>
          </View>

        </View>

      </View>
    </View>
  )
}

export default TripNotStart;