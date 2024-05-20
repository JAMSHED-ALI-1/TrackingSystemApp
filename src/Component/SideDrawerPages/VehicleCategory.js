import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import parking_alert_styles from '../../Styles/AlertsPage/ParkingAlert.module';
import vehicle_category_styles from '../../Styles/SideDrowerPages/VehicleCategory.module';

const VehicleCategory = () => {
 
  const rows = [
    {
      id: 1,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Truck',
    },
    {
      id: 2,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Auto',
    },
    {
      id: 3,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Truck',
    },
    {
      id: 4,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Car',
    },
    {
      id: 5,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Truck',
    },
    {
      id: 6,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Truck',
    },
    {
      id: 7,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Truck',
    },
    {
      id: 8,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Car',
    },
    {
      id: 9,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Auto',
    },
    {
      id: 10,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Auto',
    },
    {
      id: 11,
      vehicle_no: 'HR 32 BBBB 2345',
      type: 'Auto',
    },
  ]

  return (
    <View style={{ marginTop: 1,  }}>
      <View style={parking_alert_styles.vehicle_report_main_box}>
        {/* <View style={parking_alert_styles.vehicle_report_hr_line_box}></View> */}

        <View style={parking_alert_styles.tableContainer}>
          <View
            style={[
              
              vehicle_category_styles.table_header,
            ]}
          >
            {/* {headers.map((header, index) => ( */}
            <View style={vehicle_category_styles.header_main_box}>
              <View style={vehicle_category_styles.vehicle_no_box}>
                <Text style={vehicle_category_styles.header_main_box_text}>
                  Vehicle No.
                </Text>
              </View>
              <View style={vehicle_category_styles.vehicle_category_box}>
                <Text style={vehicle_category_styles.header_main_box_text}>
                  Category
                </Text>
              </View>
              <View style={vehicle_category_styles.vehicle_sr_num}>
                <Text style={vehicle_category_styles.header_main_box_text}>
                  Details
                </Text>
              </View>
            </View>
          </View>

          {/* <View style={parking_alert_styles.vehicle_report_hr_line_box}></View> */}

          <ScrollView style={vehicle_category_styles.rows_box}>
            {rows.map((item, index) => (
              //   <ScrollView  contentContainerStyle={{borderWidth:1,}}>
              <View key={index} style={vehicle_category_styles.table_row}>
                <View style={vehicle_category_styles.vehicle_no_box}>
                  <Text style={vehicle_category_styles.rows_vehicle_num_text}>
                    {item.vehicle_no}
                  </Text>
                </View>
                <View style={vehicle_category_styles.vehicle_category_box}>
                  <Text style={vehicle_category_styles.rows_type_text}>
                    {item.type}
                  </Text>
                </View>

                <TouchableOpacity
                  style={vehicle_category_styles.vehicle_category_box}
                >
                  <Text style={vehicle_category_styles.details_text}>
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default VehicleCategory;
