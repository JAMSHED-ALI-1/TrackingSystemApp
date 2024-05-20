import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import front_page_styles from '../../Styles/Pages/FrontPage/FrontPage.module'
import RunningSvg from '../../../assets/running_duration.svg'
import RouteSvg from '../../../assets/route_track.svg'
import GroupSvg from '../../../assets/group_track.svg'
import TripSvg from '../../../assets/vehicle-truck-bag-filled.svg'
import DriverSvg from '../../../assets/driver_tracking_filled.svg'
import EmployeeSvg from '../../../assets/employee_tracking_filled.svg'
import OtherSvg from '../../../assets/other_tracking_filled.svg'
import FriendSvg from '../../../assets/family_tracking.svg'
import GstSvg from '../../../assets/gst_calculater.svg'
import EMISvg from '../../../assets/emi_calculater.svg'
import Theme from '../../Theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import Bar1 from './CarouselBar/Bar1'
import Img1 from '../../../assets/carousel_img1.svg'
import Img2 from '../../../assets/carousel_img2.svg';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
const FrontPage = ({ allVehicleData, navigation, tabBarView }) => {
  // const navigation = useNavigation();

  const barData = [
    {
      id: 0,
      heading: 'Track with Confidence Today!',
      cont1: 'Take Vehicle Security in your hands Using ',
      cont2: 'GPS Tracker',
      btn: 'Order Now',
      img: Img1,
    },
    {
      id: 1,
      heading: 'Drive Safer, Track Smarter.',
      cont1: 'Take Vehicle Security in your hands Using ',
      cont2: 'GPS Tracker',
      btn: 'Order Now',
      img: Img2,
    },
  ]

  return (
    <BottomSheetScrollView style={front_page_styles.main_box}>
      <View style={front_page_styles.gps_box}>
        <Text style={front_page_styles.gps_heading_text}>
          GPS Based Tracking
        </Text>
        <View style={front_page_styles.flex_box}>
          <View style={front_page_styles.flex_box_child}>
            <TouchableOpacity
              onPress={() =>
                navigation.push('MainTabNav', {
                  allVehicleData: allVehicleData,
                  tabBarView: { display: 'flex' },
                })
              }
            >
              <View style={front_page_styles.icon_box}>
                <RunningSvg height={24} width={24} fill={Theme.white} />
              </View>
              <Text style={front_page_styles.gps_type_text}>
                Vehicle{'\n'}Tracking
              </Text>
            </TouchableOpacity>
          </View>

          <View style={front_page_styles.flex_box_child}>
            <TouchableOpacity onPress={() =>
              // navigation.navigate('RouteTrack')}
              alert("Coming Soon!")
            }
            >
              <View style={front_page_styles.icon_box}>
                <RouteSvg height={20} width={20} fill={Theme.white} />
              </View>
              <Text style={front_page_styles.gps_type_text}>
                Route{'\n'}Tracking
              </Text>
            </TouchableOpacity>
          </View>

          <View style={front_page_styles.flex_box_child}>
            <TouchableOpacity onPress={() =>
              // navigation.navigate('GroupTrack')
              alert("Coming Soon!")
            }>
              <View style={front_page_styles.icon_box}>
                <GroupSvg height={32} width={32} fill={Theme.white} />
              </View>
              <Text style={front_page_styles.gps_type_text}>
                Group{'\n'}Tracking
              </Text>
            </TouchableOpacity>
          </View>

          <View style={front_page_styles.flex_box_child}>
            <TouchableOpacity onPress={() =>
              // navigation.navigate('TripTrack')
              alert("Coming Soon!")
            }>
              <View style={front_page_styles.icon_box}>
                <TripSvg height={32} width={32} fill={Theme.white} />
              </View>
              <Text style={front_page_styles.gps_type_text}>
                Trip{'\n'}Tracking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*  */}

      <View style={front_page_styles.carousel_box}>
        <Bar1 barData={barData} />
      </View>

      {/* sim box */}
      <View style={front_page_styles.gps_box}>
        <View style={front_page_styles.sim_box}>
          <Text style={front_page_styles.gps_heading_text}>
            SIM Based Tracking
          </Text>
          <View style={front_page_styles.flex_box}>
            <View style={front_page_styles.flex_box_child}>
              <TouchableOpacity
                onPress={() =>
                  //  navigation.navigate('DriverTraking')
                  alert("Coming Soon!")
                }
              >
                <View style={front_page_styles.icon_box}>
                  <DriverSvg height={28} width={24} fill={Theme.white} />
                </View>
                <Text style={front_page_styles.gps_type_text}>
                  Driver Tracking
                </Text>
              </TouchableOpacity>
            </View>

            <View style={front_page_styles.flex_box_child}>
              <TouchableOpacity
                onPress={() =>
                  //  navigation.navigate('EmployeeTracking')
                  alert("Coming Soon!")
                }
              >
                <View style={front_page_styles.icon_box}>
                  <EmployeeSvg height={30} width={30} fill={Theme.white} />
                </View>
                <Text style={front_page_styles.gps_type_text}>
                  Employee Tracking
                </Text>
              </TouchableOpacity>
            </View>

            <View style={front_page_styles.flex_box_child}>
              <TouchableOpacity
                onPress={() =>
                  // navigation.navigate('GroupTracking')
                  alert("Coming Soon!")

                }
              >
                <View style={front_page_styles.icon_box}>
                  <OtherSvg height={24} width={24} fill={Theme.white} />
                </View>
                <Text style={front_page_styles.gps_type_text}>
                  Others Tracking
                </Text>
              </TouchableOpacity>
            </View>

            <View style={front_page_styles.flex_box_child}>
              <TouchableOpacity onPress={() =>
                navigation.navigate('MoreInfo')}>
                <View style={front_page_styles.icon_box}>
                  {/* <FriendSvg height={38} width={38} fill={Theme.white} /> */}
                  <Ionicons
                    name="chevron-forward-outline"
                    size={35}
                    color={Theme.white}
                  />
                </View>
                <Text style={front_page_styles.gps_type_text}>
                  {/* Family Tracking{' '} */}
                  More Info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* useful tools */}

      <View style={front_page_styles.useful_tools_box}>
        <Text
          style={[front_page_styles.gps_heading_text, { marginBottom: 15 }]}
        >
          Useful Tools
        </Text>

        <View style={front_page_styles.tool_flex_box}>
          <View style={front_page_styles.tool_flex_box_child}>
            <TouchableOpacity onPress={() => navigation.navigate('GST')}>
              <View style={front_page_styles.tool_flex_box}>
                <GstSvg height={30} width={30} fill={Theme.white} />
                <Text style={front_page_styles.tool_text}>GST Calculator</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={front_page_styles.tool_flex_box_child}>
            <TouchableOpacity onPress={() => navigation.navigate('EMI')}>
              <View style={front_page_styles.tool_flex_box}>
                <EMISvg height={30} width={30} fill={Theme.white} />
                <Text style={front_page_styles.tool_text}>EMI Calculator</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  )
}

export default FrontPage
