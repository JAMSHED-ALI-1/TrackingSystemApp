import { View, Text} from 'react-native';
import React from 'react';
import VehicleSelector from '../../VehicleSelector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import driver_add_styles from '../../../Styles/DeviceDetails/DriverModalAdd.module';
import DocumentHeader from './DocumentHeader';
const AddDocumentModal = ({ locationData, vehiclesData }) => {
 
  return (
    <View style={modal_gps_styles.gps_modal_main_box}>
      <DocumentHeader />
      <View style={modal_gps_styles.gps_modal_card}>
        <View style={{ height: '5%', margin: 10, zIndex: 1 }}>
          <VehicleSelector vehiclesData={vehiclesData} />
        </View>

        <View style={modal_gps_styles.gps_details_card}>
          <Text style={modal_gps_styles.gps_details_text}>Details</Text>
          <View style={modal_gps_styles.details_hr_line}></View>
          <View style={driver_add_styles.driver_add_box}>
            <View style={driver_add_styles.driver_add_child_box}>
              <MaterialIcons name="add-box" size={20} color="#000" />
              <Text style={driver_add_styles.driver_add_text}>Add </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AddDocumentModal;
