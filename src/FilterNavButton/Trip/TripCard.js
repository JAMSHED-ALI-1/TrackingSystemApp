 import { useEffect } from 'react';
import { Text, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Theme from '../../Theme/theme'
import { LinearGradient } from 'expo-linear-gradient'
import Location from '../../../assets/gis_location-poi.svg'
import trip_styles from '../../Styles/FilterNavButton/Trip/Trip.module'
import trip_map_styles from '../../Styles/ReportsNav/TripReportMap.module'
// import trip_styles from '../../Styles/FilterNavButton/Routes.module'


const TripCard = ({ tripData }) => {

    const {
        start_location,
        end_location,
        _id,
        broker_id,
        consigner,
        consignee,
        vehicle_no,
        trip_type,
        eway_number,
        eway_expiry,
        invoice_number,
        driver,
        phone,
        start_name,
        end_name,
        via_points,
        distance,
        duration,
        createdAt,
        updatedAt
    } = tripData;


    // useEffect(() => {
    // console.log("tripData :", tripData);
    // }, [tripData])

    return (
        <TouchableNativeFeedback onPress={() => console.log("touched feedBack")}>
            <View style={trip_styles.trip_main_box}>
                <View style={trip_styles.details_box}>
                    <View style={trip_styles.flex_box1}>
                        <View style={trip_styles.trip_location_box}>
                            <Text numberOfLines={2} style={trip_styles.trip_location_text}>{start_name}</Text>
                            <Ionicons name="arrow-forward" size={14} color={Theme.black} />
                            <Text numberOfLine={2} style={trip_styles.trip_location_text}>Mumbai</Text>
                        <Text numberOfLines={2} style={trip_styles.trip_text}>( {_id} )</Text>
                        </View>

                        <TouchableOpacity style={trip_styles.view_details}>
                            <Text style={trip_styles.view_details_text}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                    

                    {/* flex box 2 */}

                    <View style={trip_styles.flex_box2}>
                        {/* <View style={trip_styles.number_plate_box}> */}
                        <View style={trip_styles.flex_box}>
                            <Text style={trip_styles.number_plate_text}>{vehicle_no ?? "HR 12 ZZZ 5XXX7"}</Text>
                        {/* </View> */}
                        {/* <LinearGradient 
                            colors={['#11D269', '#056430']}
                            style={trip_styles.running_box}
                        > */}
                            <Text style={trip_styles.running_text}>(Running)</Text>
                        {/* </LinearGradient> */}
                        </View>
                        {/* <View style={trip_styles.track_sim_box}>
                            <Text style={trip_styles.track_text}>Tracking</Text>
                            <Text style={trip_styles.track_sim_text}>SIM</Text>
                        </View> */}

                        <View
                            // colors={['#11D269', '#056430']}
                            style={trip_styles.running_box}
                        >
                            <Text style={trip_styles.running_status_text}>On Time</Text>
                        </View>
                    </View>


                    <View style={trip_styles.last_update_flex_box}>
                        <Text style={trip_styles.last_update_text}>Last Update:</Text>
                        <Text style={trip_styles.time_text}>05:46 PM</Text>
                        <Text style={trip_styles.last_update_text}>(SIM Tracking)</Text>
                    </View>



                    {/* flex box 3 */}
                    <View style={trip_styles.flex_box3}>
                        <Location width={25} height={25} fill={Theme.blue.primary} />
                        <Text numberOfLines={2} style={trip_styles.address_text}>
                            2/245 Lal bhagh eyx road, near ram lila maidan right new delhi ,
                            221020
                        </Text>
                    </View>

                    {/* flex box 4 */}
                    {/* <View style={trip_styles.flex_box4}>
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
                            colors={['#00ACFF', '#1A6A90']}
                            style={[trip_styles.status_box_child4, { marginLeft: -55 }]}
                        >
                            <View style={trip_styles.update_box}>
                                <Text style={trip_styles.status_box_text}>Last Updated</Text>
                            </View>

                            <View style={trip_styles.status_box_child4_time}>
                                <Text style={trip_styles.status_box_text}>05: 56 PM</Text>
                            </View>
                        </LinearGradient>
                    </View> */}
                    {/* <Text>ggg</Text> */}

                    <View style={trip_styles.progress_main_box1}>
                        <View style={trip_styles.progress_box1}>
                            <View style={trip_styles.progress_box1_child}>
                                <Text style={trip_styles.status_box_text}>Distance</Text>
                            </View>

                            <View style={trip_styles.distance_per_box}>
                                <Text style={trip_styles.progress_per_text}>65%</Text>
                            </View>
                            {/* <View style={trip_styles.}> */}
                                <Text style={trip_styles.status_box_text}>329.6 KM</Text>
                            {/* </View> */}
                        </View>

                        <View style={trip_styles.distance_box2}>
                            <Text style={trip_styles.progress_time_text}>459.6 KM</Text>
                        </View>
                    </View>

                    <View style={trip_styles.progress_main_box2}>
                        <View style={trip_styles.progress_box2}>
                            <View style={trip_styles.progress_time_box2}>
                                <Text style={trip_styles.status_box_text}>Time</Text>
                            </View>

                            <View style={trip_styles.hr_line}></View>

                            <View style={trip_styles.progress_per_box}>
                                <Text style={trip_styles.progress_per_text}>82%</Text>
                            </View>

                            <Text style={trip_styles.status_box_text}>1d 12h</Text>
                        </View>

                        <View style={trip_styles.progress_time_box}>
                            <Text style={trip_styles.progress_time_text}>6d 16h</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}
export default TripCard;



