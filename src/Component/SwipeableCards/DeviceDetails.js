import React, {
  useEffect,
  useState,
  // useEffect,
} from 'react'
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  // StyleSheet,
} from 'react-native'
import { CustomeModal } from '../Modal/Modal'
import DriverModal from '../DetailsModal/Driver/DriverModal'
import SpeedLimitModal from '../DetailsModal/Speed/SpeedLimitModal'
import GpsDetails from '../DetailsModal/GpsDetails'
import DriverDetails from '../../../assets/driver-details.svg'
import Speed from '../../../assets/speed.svg'
import DeviceDetails from '../../../assets/device-details'
import Theme from '../../Theme/theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import devive_modal_styles from '../../Styles/DeviceDetails/DeviceDetailsModal.module'
import device_details_styles from '../../Styles/SwipeableCards/DeviceDetails.module'
// import VehicleDetails from '../../../assets/vehicle-details.svg';
// import DocumentModal from "../DetailsModal/Document/DocumentModal";
// import ValiditySvg from '../../../assets/validity.svg';
// import Documents from '../../../assets/documents.svg';
// import Location from "../../../assets/gis_location-poi.svg";
// import Notifications from '../../../assets/notifications-sharp.svg';
// import Odometer from '../../../assets/odometer.svg';
// import GeofenceListInfo from "../DetailsModal/Geofence/GeofenceListInfo";
// import ReminderEdit from "../DetailsModal/Reminder/ReminderEdit";
// import Validity from "../DetailsModal/Validity/Validity";
// import OdometerCheckModal from "../DetailsModal/Odometer/OdometerCheckModal";
// import VehicleDetailsModal from "../DetailsModal/VehicleDetails/VehicleDetailsModal";

const windowWidth = Dimensions.get('window').width

const DevicesDetails = ({ locationData, vehiclesData, toggleShowDetails }) => {
  // const deviceId = locationData?._id
  // console.log(t)
  const data = [
    {
      id: '1',
      rowId: 'row1',
      name: 'Device Details',
      child: GpsDetails,
      image: DeviceDetails,
      prop: {vehiclesData, locationData},
    },
    {
      id: '2',
      rowId: 'row2',
      name: 'Driver Details',
      child: DriverModal,
      image: DriverDetails,
      prop: {vehiclesData, locationData },
    },
    {
      id: '3',
      rowId: 'row3',
      name: 'Speed Limit',
      child: SpeedLimitModal,
      image: Speed,
      prop: { vehiclesData, locationData  },
    },
    // { id: "4", rowId: "row4", name: "Reminder", child: ReminderEdit, image:Notifications, prop: vehiclesData },
    // { id: "5", rowId: "row5", name: "Validity", child: Validity, image:ValiditySvg, prop: vehiclesData  },
    // {id: "6", rowId: "row6", name: "Vehicle Details",child: VehicleDetailsModal,  image:VehicleDetails},
    // { id: "7", rowId: "row7", name: "Odometer", child: OdometerCheckModal, image:Odometer,  },
    // { id: "8", rowId: "row8", name: "Geofence", child: GeofenceListInfo,  image:Location},
    // { id: "9", rowId: "row9", name: "Documents", child: DocumentModal,  image:Documents},
  ]

  useEffect(()=>{
    // console.log("device Details.js => : ", vehiclesData)
  },[locationData])

  const handlePress = (item) => {
    // Update the modal content based on the button press
    setModalContent(
      React.createElement(item.child, { vehiclesData: item.prop, locationData: item.prop, }),
    )
    // Show the modal
    setModalVisible(true)
  }

  const handleModalClose = () => {
    // Hide the modal when it's closed
    setModalVisible(false)
    // console.log('close modal')
  }

  // useEffect(()=>{
  //   console.log("devi", vehiclesData)
  // })

  // const handlecloseaddModal = () =>{
  //   setAddModal(false)
  // }

  // const hadleToggel = () =>{

  // }

  const renderGridItem = (item, index) => (
    <TouchableOpacity
      key={item.rowId + item.id}
      style={[device_details_styles.nearby_col, commonColStyles]}
      onPress={() => handlePress(item)}
    >
      <View style={[device_details_styles.nearby_col, commonColStyles]}>
        <View
          style={device_details_styles.render_box}
        >
          {item.image && <item.image height={50} width={50} fill={'#29A7E4'} />}
        </View>
        <View style={[device_details_styles.nearby_text_box]}>
          {/* <View style={device_details_styles.nearby_text_child}> */}
          <Text
            style={[
              device_details_styles.nearby_text,
              { color: Theme.blue.primary },
            ]}
          >
            {item.name}
          </Text>
          {/* </View> */}
        </View>
      </View>
      {/* <Text>close</Text> */}
    </TouchableOpacity>
  )

  // const handlePress = (item) => {
  //   console.log(`Grid item pressed: ${item.id}`)
  // }
const [chaildModal, setChaildModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false),
    [modalContent, setModalContent] = useState(
      <Text style={devive_modal_styles.modalText}>Default</Text>,
    )

// const [addModal, setAddModal] = useState(false)
//     const [addForm, setAddform] = useState(
//       <Text style={devive_modal_styles.modalText}>Default</Text>,
//     )
  // useEffect(() => {
  //   if (modalVisible) {
  //     (1);
  //   } else {
  //     (0);
  //   }
  // }, [modalVisible])

  return (
    <View style={device_details_styles.nearby_main_container}>
      <View style={device_details_styles.device_info_box}>
        {/* <TouchableOpacity onPress={handleModalClose}>
       <MaterialIcons name='close' size={24} color={Theme.black} />
       </TouchableOpacity> */}
        {/* {!modalVisible && (<DeviceDetailsInfo />)} */}
        <View
          style={device_details_styles.modal_close_box}
        >
          <TouchableOpacity
            onPress={() => {
              toggleShowDetails()
            }}
            style={device_details_styles.close_box}
          >
            <Text style={device_details_styles.close_text}>Close</Text>
            <MaterialIcons name="close" size={20} color={Theme.red} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={device_details_styles.rowContainer}>
        {data.map(renderGridItem)}
      </View>

      <CustomeModal
        visible={modalVisible}
        onPressOverlay={handleModalClose}
        onRequestClose={handleModalClose}
        style={device_details_styles.modal_box}
      >
        <View style={device_details_styles.modal_child_box}>
          <View style={device_details_styles.close_icon}>
            <TouchableOpacity
              onPress={handleModalClose}
              style={device_details_styles.flex_box}
            >
              <Text style={device_details_styles.close_text}>Close</Text>
              <MaterialIcons name="close" size={20} color={Theme.red} />
            </TouchableOpacity>
          </View>
          {modalContent}
        </View>
      </CustomeModal>


      {/* <CustomeModal
        visible={addModal}
        onPressOverlay={handlecloseaddModal}
        onRequestClose={handlecloseaddModal}
        style={device_details_styles.modal_box}
      >
        <View style={device_details_styles.modal_child_box}>
          <View style={device_details_styles.close_icon}>
            <TouchableOpacity
              onPress={handlecloseaddModal}
              style={device_details_styles.flex_box}
            >
              <Text style={device_details_styles.close_text}>Close</Text>
              <MaterialIcons name="close" size={20} color={Theme.red} />
            </TouchableOpacity>
          </View>
          {addForm}
        </View>
      </CustomeModal> */}
    </View>
  )
}

const commonColStyles = {
  width: windowWidth / 3.439,
  height: 85,
  alignItems: 'center',
  // borderWidth:1
}

// const device_details_styles = StyleSheet.create({

// });

export default DevicesDetails
