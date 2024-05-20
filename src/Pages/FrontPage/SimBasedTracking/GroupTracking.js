import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Svgsearch from '../../../../assets/search.svg'
import SupportSvg from '../../../../assets/support-agent.svg'
import TimeSvg from '../../../../assets/time_remain.svg'
import HistoryIcon from '../../../../assets/history_icon.svg'
import Theme from '../../../Theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import group_tracking_styles from '../../../Styles/Pages/FrontPage/SimBasedTracking/GroupTracking.module'
import { ScrollView } from 'react-native-gesture-handler'
import Carousel from '../../../Component/Carousel/Carousel'

const GroupTracking = ({ navigation }) => {
  const [select, setSelect] = useState('Family')

  const handlePress = (item) => {
    setSelect(item)
  }

  const carouselData = [
    {
      id: 0,
      image: require('../../../../assets/image_6.png'),
    },
    {
      id: 1,
      image: require('../../../../assets/image_7.png'),
    },
    {
      id: 2,
      image: require('../../../../assets/image_8.png'),
    },
    // {
    //     id: 3,
    //     image: require("../../../../assets/image_4.png"),
    // },
    // {
    //     id: 4,
    //     image: require("../../../../assets/image_5.png"),
    // }
  ]

  return (
    <View style={group_tracking_styles.main_box}>
      <View style={group_tracking_styles.info_box}>
        <View style={group_tracking_styles.header_box}>
          <View style={group_tracking_styles.header_flex_box}>
            <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
              <Ionicons name="arrow-back" size={24} color={Theme.white} />
            </TouchableOpacity>
            <Text style={group_tracking_styles.heading_text}>
              Groups Tracking
            </Text>
          </View>
          <View style={group_tracking_styles.header_flex_box}>
            <TouchableOpacity>
              <Svgsearch height={20} width={20} fill={Theme.white} />
            </TouchableOpacity>
            <SupportSvg height={24} width={24} fill={Theme.white} />
          </View>
        </View>
      </View>

      <View style={{}}>
        <Carousel carouselData={carouselData} />

        {/* <View style={group_tracking_styles.animation_box}></View> */}

        <View style={[group_tracking_styles.header_box, { marginBottom: 15 }]}>
          <Text style={group_tracking_styles.filter_text_value}>Groups</Text>

          <TouchableOpacity>
            <Text style={group_tracking_styles.filter_tracking_create_text}>
              Create Group +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={group_tracking_styles.header_flex_box}>
          <ScrollView
            horizontal
            style={{ marginTop: 15, width: '95%', alignSelf: 'center' }}
          >
            {['Family', 'Freinds'].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item)}
                style={[
                  group_tracking_styles.scroll_filter_box,
                  {
                    backgroundColor:
                      select === item ? Theme.blue.primary : 'transparent',
                    borderWidth: select === item ? 0 : 1,
                    borderColor:
                      select === item ? 'transparent' : Theme.blue.primary,
                  },
                ]}
              >
                <Text
                  style={[
                    group_tracking_styles.scroll_filter_text,
                    {
                      color: select === item ? Theme.white : Theme.blue.primary,
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity>
            {/* <Text style={group_tracking_styles.edit}>Edit</Text> */}
          </TouchableOpacity>
        </View>

        <View style={group_tracking_styles.card}>
          <View style={group_tracking_styles.driver_info_flex_box}>
            <View style={group_tracking_styles.img_box}></View>

            <View>
              <View style={group_tracking_styles.driver_info_right_flex_box}>
                <View style={group_tracking_styles.driver_name_no_flex_box}>
                  <Text style={group_tracking_styles.name_text}>Rajiv</Text>
                  <Text style={group_tracking_styles.driver_number_text}>
                    ( 2156206520)
                  </Text>
                </View>

                <View style={group_tracking_styles.driver_info_flex_box}>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="edit"
                      size={18}
                      color={Theme.blue.primary}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <MaterialIcons
                      name="delete"
                      size={18}
                      color={Theme.red}
                      style={{ marginLeft: 15 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* address box */}
              <View style={group_tracking_styles.address_box}>
                <Text
                  numberOfLines={2}
                  style={group_tracking_styles.address_text}
                >
                  Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob
                  jioehbneriohbneriohnberaiohbninn ifn
                </Text>
              </View>
            </View>
          </View>

          {/* concent */}

          <View style={group_tracking_styles.concent_box}>
            <View style={group_tracking_styles.concent_child_box}>
              <Text style={group_tracking_styles.concent_text}>Concent</Text>
              <View style={group_tracking_styles.check_box}>
                <MaterialIcons name="check" size={10} color={Theme.white} />
              </View>
            </View>

            <View style={group_tracking_styles.concent_child_box}>
              <Text style={group_tracking_styles.last_update_text}>
                Last Updated
              </Text>
              <Text style={group_tracking_styles.last_update_time}>
                05 : 56 PM
              </Text>
            </View>

            <View style={group_tracking_styles.validity_flex_box}>
              <TimeSvg height={13} width={13} fill={Theme.secondary} />
              <Text style={group_tracking_styles.validity_text}>
                2d 5hr Remaining
              </Text>
            </View>
          </View>

          {/* filter */}

          <View style={group_tracking_styles.hishory_box}>
            <TouchableOpacity style={group_tracking_styles.icons_box}>
              <HistoryIcon height={18} width={18} fill={Theme.blue.primary} />
              <Text style={group_tracking_styles.icons_text}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={group_tracking_styles.icons_box}>
              <Ionicons
                name="logo-whatsapp"
                size={15}
                color={Theme.blue.primary}
              />
              <Text style={group_tracking_styles.icons_text}>Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={group_tracking_styles.icons_box}>
              <HistoryIcon height={24} width={18} fill={Theme.blue.primary} />
              <Text style={group_tracking_styles.icons_text}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={group_tracking_styles.icons_box}>
              <MaterialIcons name="call" size={18} color={Theme.blue.primary} />
              <Text style={group_tracking_styles.icons_text}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default GroupTracking
