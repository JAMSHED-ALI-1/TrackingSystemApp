import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Svgsearch from '../../../../assets/search.svg'
import SupportSvg from '../../../../assets/support-agent.svg'
import TimeSvg from '../../../../assets/time_remain.svg'
import HistoryIcon from '../../../../assets/history_icon.svg'
import Theme from '../../../Theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import employee_styles from '../../../Styles/Pages/FrontPage/SimBasedTracking/Employee.module'
import { ScrollView } from 'react-native-gesture-handler'
import EditDriver from './Driver/EditDriver'
import Carousel from '../../../Component/Carousel/Carousel'

const Employee = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [editingDriverIndex, setEditingDriverIndex] = useState(null)

  const employeesData = [
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent Pending',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
    {
      name: 'Rajiv',
      number: '2156206520',
      address:
        'Sector 62, Noida sfbrfngmg gweruvbdjvuw bv wrgbjbro dvoirwob jioehbneriohbneriohnberaiohbninn ifn',
      concent: 'Concent',
      lastUpdated: '05:56 PM',
      validity: '2d 5hr Remaining',
      Img: require('../../../../assets/driver_img.png'),
    },
  ]

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
  ]

  const openEditModal = (index) => {
    setEditingDriverIndex(index)
    setModalVisible(true)
  }

  const saveChanges = (name) => {
    console.log(
      'Saving changes for index',
      editingDriverIndex,
      'with name:',
      name,
    )
  }
  return (
    <View style={employee_styles.main_box}>
      <View style={employee_styles.info_box}>
        <View style={employee_styles.header_box}>
          <View style={employee_styles.header_flex_box}>
            <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
              <Ionicons name="arrow-back" size={24} color={Theme.white} />
            </TouchableOpacity>
            <Text style={employee_styles.heading_text}>Employee Tracking</Text>
          </View>
          <View style={employee_styles.header_flex_box}>
            <TouchableOpacity>
              <Svgsearch height={20} width={20} fill={Theme.white} />
            </TouchableOpacity>
            <SupportSvg height={24} width={24} fill={Theme.white} />
          </View>
        </View>
      </View>

      <View style={{ height: '92%' }}>
        <Carousel carouselData={carouselData} />

        <View style={[employee_styles.header_box, { marginBottom: 15 }]}>
          <Text style={employee_styles.filter_text_value}>
            All Employee (23)
          </Text>
          <Text style={employee_styles.filter_pending_text}>
            Concent Pending (13)
          </Text>
          <Text style={employee_styles.filter_tracking_text}>
            Tracking (13)
          </Text>
        </View>

        <ScrollView
          style={{
            borderWidth: 0,
            height: 700,
            width: '90%',
            alignSelf: 'center',
          }}
        >
          {employeesData.map((employee, index) => (
            <View style={employee_styles.card} key={index}>
              <View style={employee_styles.driver_info_flex_box}>
                <View style={employee_styles.img_box}>
                  <Image source={employee.Img} />
                </View>

                <View>
                  <View style={employee_styles.driver_info_right_flex_box}>
                    <View style={employee_styles.driver_name_no_flex_box}>
                      <Text style={employee_styles.name_text}>
                        {employee.name}
                      </Text>
                      <Text style={employee_styles.driver_number_text}>
                        ({employee.number})
                      </Text>
                    </View>

                    <View style={employee_styles.driver_info_flex_box}>
                      <TouchableOpacity onPress={() => openEditModal(index)}>
                        <MaterialIcons
                          name="edit"
                          size={18}
                          color={Theme.blue.primary}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => alert('item will be deleted!')}
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

                  {/* address box */}
                  <View style={employee_styles.address_box}>
                    <Text
                      numberOfLines={2}
                      style={employee_styles.address_text}
                    >
                      {employee.address}
                    </Text>
                  </View>
                </View>
              </View>

              {/* concent */}
              <View style={employee_styles.concent_box}>
                <View style={employee_styles.concent_child_box}>
                  <Text
                    style={[
                      employee_styles.concent_text,
                      {
                        color:
                          employee.concent === 'Concent'
                            ? Theme.green
                            : Theme.red,
                      },
                    ]}
                  >
                    {employee.concent}
                  </Text>
                  <View
                    style={[
                      employee_styles.check_box,
                      {
                        backgroundColor:
                          employee.concent === 'Concent'
                            ? Theme.green
                            : Theme.red,
                      },
                    ]}
                  >
                    {employee.concent === 'Concent' ? (
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

                <View style={employee_styles.concent_child_box}>
                  <Text style={employee_styles.last_update_text}>
                    Last Updated
                  </Text>
                  <Text style={employee_styles.last_update_time}>
                    {employee.lastUpdated}
                  </Text>
                </View>

                <View style={employee_styles.validity_flex_box}>
                  <TimeSvg height={13} width={13} fill={Theme.secondary} />
                  <Text style={employee_styles.validity_text}>
                    {employee.validity}
                  </Text>
                </View>
              </View>

              {/* filter */}
              <View style={employee_styles.hishory_box}>
                <TouchableOpacity style={employee_styles.icons_box}>
                  <HistoryIcon
                    height={18}
                    width={18}
                    fill={Theme.blue.primary}
                  />
                  <Text style={employee_styles.icons_text}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={employee_styles.icons_box}>
                  <Ionicons
                    name="logo-whatsapp"
                    size={15}
                    color={Theme.blue.primary}
                  />
                  <Text style={employee_styles.icons_text}>Message</Text>
                </TouchableOpacity>

                <TouchableOpacity style={employee_styles.icons_box}>
                  <HistoryIcon
                    height={24}
                    width={18}
                    fill={Theme.blue.primary}
                  />
                  <Text style={employee_styles.icons_text}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={employee_styles.icons_box}>
                  <MaterialIcons
                    name="call"
                    size={18}
                    color={Theme.blue.primary}
                  />
                  <Text style={employee_styles.icons_text}>Call</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={employee_styles.floating_location_btn}>
          <MaterialIcons
            name="location-pin"
            size={24}
            color={Theme.blue.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={employee_styles.floating_edi_btn}>
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

export default Employee
