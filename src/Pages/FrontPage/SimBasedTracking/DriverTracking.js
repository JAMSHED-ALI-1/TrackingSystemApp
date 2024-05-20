import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Svgsearch from '../../../../assets/search.svg'
import SupportSvg from '../../../../assets/support-agent.svg'
import TimeSvg from '../../../../assets/time_remain.svg'

import HistoryIcon from '../../../../assets/history_icon.svg'

import driver_track_styles from '../../../Styles/Pages/FrontPage/SimBasedTracking/DriverTracking.module'
import Theme from '../../../Theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler'
import LocationSvg from '../../../../assets/location.svg'
import EditDriver from './Driver/EditDriver'
import Carousel from '../../../Component/Carousel/Carousel'

const DriverTracking = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [editingDriverIndex, setEditingDriverIndex] = useState(null)

  const driversData = [
    {
      vehicleNumber: 'HR XXXX 123',
      validity: '2d 5hr Remaining',
      driverName: 'Rajiv',
      driverNumber: '(2156206520)',
      address:
        'Sector 62, Noida sfbrfng gweruvb bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      Img: require('../../../../assets/driver_img.png'),
    },

    {
      vehicleNumber: 'HR XXXX 123',
      validity: '2d 5hr Remaining',
      driverName: 'Rajiv',
      driverNumber: '(2156206520)',
      address:
        'Sector 62, Noida sfbrfng gweruvb bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent Pending',
      lastUpdated: '05:56 PM',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      vehicleNumber: 'HR XXXX 123',
      validity: '2d 5hr Remaining',
      driverName: 'Rajiv',
      driverNumber: '(2156206520)',
      address:
        'Sector 62, Noida sfbrfng gweruvb bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      vehicleNumber: 'HR XXXX 123',
      validity: '2d 5hr Remaining',
      driverName: 'Rajiv',
      driverNumber: '(2156206520)',
      address:
        'Sector 62, Noida sfbrfng gweruvb bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      Img: require('../../../../assets/driver_img.png'),
    },
  ]


  const carouselData = [
    {
        id: 0,
        image: require("../../../../assets/image_6.png"),
    },
    {
        id: 1,
        image: require("../../../../assets/image_7.png"),
    },
    {
        id: 2,
        image: require("../../../../assets/image_8.png"),
    },
    // {
    //     id: 3,
    //     image: require("../../../../assets/image_4.png"),
    // },
    // {
    //     id: 4,
    //     image: require("../../../../assets/image_5.png"),
    // }
];


  const openEditModal = (index) => {
    setEditingDriverIndex(index)
    setModalVisible(true)
  }

  const saveChanges = (driverName) => {
    console.log(
      'Saving changes for index',
      editingDriverIndex,
      'with name:',
      driverName,
    )
  }

  const handlePlayStop = (driver) => {
    if (driver.concent === 'Concent') {
      // Implement logic to handle stop action
      console.log('Stop action for driver:', driver.driverName)
    } else if (driver.concent === 'Concent Pending') {
      // Implement logic to handle refresh action
      console.log('Refresh action for driver:', driver.driverName)
    }
  }

  return (
    <View style={driver_track_styles.main_box}>
      <View style={driver_track_styles.info_box}>
        <View style={driver_track_styles.header_box}>
          <View style={driver_track_styles.header_flex_box}>
            <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
              <Ionicons name="arrow-back" size={24} color={Theme.white} />
            </TouchableOpacity>
            <Text style={driver_track_styles.heading_text}>
              Driver Tracking
            </Text>
          </View>
          <View style={driver_track_styles.header_flex_box}>
            <TouchableOpacity>
              <Svgsearch height={20} width={20} fill={Theme.white} />
            </TouchableOpacity>
            <SupportSvg height={24} width={24} fill={Theme.white} />
          </View>
        </View>
      </View>

      <View style={{height:'94%', borderWidth:0 }}>

        {/* <View > */}
      <Carousel carouselData={carouselData} />

        {/* </View> */}

        <View style={[driver_track_styles.header_box, {width:'90%', alignSelf:'center', marginVertical:15, borderWidth:0,}]}>
          <Text style={driver_track_styles.filter_text_value}>
            All Driver (23)
          </Text>
          <Text style={driver_track_styles.filter_pending_text}>
            Concent Pending (13)
          </Text>
          <Text style={driver_track_styles.filter_tracking_text}>
            Tracking (13)
          </Text>
        </View>

        <ScrollView style={{ width:'90%', alignSelf:'center', borderWidth:0, }}>
          {driversData.map((driver, index) => (
            <View style={driver_track_styles.card} key={index}>
              <View style={driver_track_styles.header_box}>
                <View style={driver_track_styles.vehicle_no_box}>
                  <Text style={driver_track_styles.vehicle_no_text}>
                    {driver.vehicleNumber}
                  </Text>
                </View>
                <View style={driver_track_styles.validity_flex_box}>
                  <TimeSvg height={13} width={13} fill={Theme.secondary} />
                  <Text style={driver_track_styles.validity_text}>
                    {driver.validity}
                  </Text>
                </View>
              </View>

              <View style={driver_track_styles.driver_info_flex_box}>
                {/* Driver image and other components */}
                <View style={driver_track_styles.img_box}>
                  <Image source={driver.Img} />
                </View>

                <View>
                  <View style={driver_track_styles.driver_info_right_flex_box}>
                    <View style={driver_track_styles.driver_name_no_flex_box}>
                      <Text style={driver_track_styles.name_text}>
                        {driver.driverName}
                      </Text>
                      <Text style={driver_track_styles.driver_number_text}>
                        {driver.driverNumber}
                      </Text>
                    </View>

                    <View style={driver_track_styles.driver_info_flex_box}>
                      <TouchableOpacity onPress={() => openEditModal(index)}>
                        <MaterialIcons
                          name="edit"
                          size={18}
                          color={Theme.blue.primary}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => alert('items will be deleted')}
                      >
                        <MaterialIcons
                          name="delete"
                          size={18}
                          color={Theme.red}
                          style={{ marginLeft: 15 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* Address box */}
                  <View style={driver_track_styles.address_box}>
                    <Text
                      numberOfLines={2}
                      style={driver_track_styles.address_text}
                    >
                      {driver.address}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Concent */}
              <View style={driver_track_styles.concent_box}>
                <View style={driver_track_styles.concent_child_box}>
                  <Text
                    style={[
                      driver_track_styles.concent_text,
                      {color:  driver.concent === 'Concent'
                        ? Theme.green 
                        : Theme.red }
                    ]}
                  >
                    {driver.concent}
                  </Text>
                  <View
                    style={[
                      driver_track_styles.check_box,
                      {
                        backgroundColor:
                          driver.concent === 'Concent' ? Theme.green : Theme.red,
                      },
                    ]}
                  >
                    {driver.concent === 'Concent' ? (
                      <MaterialIcons
                        name="check"
                        size={10}
                        color={Theme.white}
                      />
                    ) : (
                      <MaterialIcons
                        name="close"
                        size={10}
                        color={Theme.white}
                      />
                    )}
                  </View>
                </View>
                <View style={driver_track_styles.concent_child_box}>
                  <Text style={driver_track_styles.last_update_text}>
                    Last Updated
                  </Text>
                  <Text style={driver_track_styles.last_update_time}>
                    {driver.lastUpdated}
                  </Text>
                </View>
              </View>

              {/* Filter */}

              <View style={driver_track_styles.hishory_box}>
                <TouchableOpacity style={driver_track_styles.icons_box}>
                  
                {driver.concent==='Concent'  ? (
                    <HistoryIcon
                    height={18}
                    width={18}
                    fill={Theme.blue.primary}
                  />
                  ):(
                    null
                    )}


                  {driver.concent==='Concent' ?
                (
                  <Text style={driver_track_styles.icons_text}>History</Text>
                ) :(
                  <Text style={driver_track_styles.icons_text}>More Info</Text>
                )}
                </TouchableOpacity>

                <TouchableOpacity style={driver_track_styles.icons_box}>
                  <Ionicons
                    name="logo-whatsapp"
                    size={15}
                    color={Theme.blue.primary}
                  />
                  <Text style={driver_track_styles.icons_text}>Message</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={driver_track_styles.icons_box}
                  onPress={() => handlePlayStop(driver)}
                >
                  {driver.concent === 'Concent' ? (
                    <>
                      {driver.playStatus === 'play' ? (
                        <MaterialIcons
                          name="play-arrow"
                          size={24}
                          color={Theme.blue.primary}
                        />
                      ) : (
                        <MaterialIcons
                          name="stop"
                          size={18}
                          color={Theme.blue.primary}
                        />
                      )}
                      <Text style={driver_track_styles.icons_text}>
                        {driver.playStatus === 'play' ? 'Play' : 'Stop'}
                      </Text>
                    </>
                  ) : driver.concent === 'Concent Pending' ? (
                    <>
                      <MaterialIcons
                        name="refresh"
                        size={18}
                        color={Theme.blue.primary}
                      />
                      <Text style={driver_track_styles.icons_text}>
                        Refresh
                      </Text>
                    </>
                  ) : null}
                </TouchableOpacity>

                <TouchableOpacity style={driver_track_styles.icons_box}>
                  <MaterialIcons
                    name="call"
                    size={18}
                    color={Theme.blue.primary}
                  />
                  <Text style={driver_track_styles.icons_text}>Call</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* Floating edit button */}

        <TouchableOpacity style={driver_track_styles.floating_location_btn}>
          <MaterialIcons
            name="location-pin"
            size={24}
            color={Theme.blue.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={driver_track_styles.floating_edi_btn}>
          <MaterialIcons name="add" size={34} color={Theme.white} />
        </TouchableOpacity>
      </View>

      <EditDriver
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={saveChanges}
      />
    </View>
  )
}

export default DriverTracking
