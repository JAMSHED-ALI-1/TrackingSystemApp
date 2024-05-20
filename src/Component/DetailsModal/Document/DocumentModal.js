import { View, Text} from 'react-native';
import React from 'react';
import VehicleSelector from '../../VehicleSelector';
import modal_gps_styles from '../../../Styles/DeviceDetails/GpsModal.module';
import DocumentHeader from './DocumentHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import document_modal_styles from '../../../Styles/DeviceDetails/DocumentModal.module';
const DocumentModal = ({ locationData, vehiclesData }) => {
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

          <View style={document_modal_styles.document_grid_main_box}>
            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Rc</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Driving Licence</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Insurance</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Fitment</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>PUC</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Permit</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}></View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Other</Text>
            </View>

            <View style={document_modal_styles.document_grid_child_box}>
              <View style={document_modal_styles.document_grid_child_box1}>
              
              <MaterialIcons name="add-box" size={20} color="#000" />
              </View>
             <Text style={document_modal_styles.document_grid_child_box1_text}>Add</Text>
            </View>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default DocumentModal;
