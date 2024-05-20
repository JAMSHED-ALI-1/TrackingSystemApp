
import { View, Text, TouchableOpacity, ScrollView, Linking , Share} from 'react-native';
import React, { useEffect, useState } from 'react';
import live_location_styles from '../../Styles/SwipeableCards/LiveLocation.module';
import { LinearGradient } from 'expo-linear-gradient';

// import { CheckBox } from 'react-native-elements';
import Theme from "../../Theme/theme";
const LiveLocation = ({ locationData, vehiclesData }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    name: '30 Min',
    value: 0,
  })
  const [isChecked, setChecked] = useState(false);

  const filters = [
    { name: '30 Min', value: '50' },
    { name: '6 Hr', value: '70' },
    { name: '3 Day ', value: '80' },
    { name: '7 Day ', value: '70' },
  ];

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };


  useEffect(()=>{
    // console.log(locationData.location,"location")
    // const { latitude, longitude } = locationData.location;
  })

  const handleFilterSelection = (filter) => {
    setSelectedFilter({ name: filter.name, value: filter.value })
  }

  // 
  const shareLocationOnWhatsApp = async() => {
    // const { latitude, longitude } = locationData.location; // Assuming locationData contains latitude and longitude
    // const message = `Check out my location: https://maps.google.com/?q=${latitude},${longitude}`;
    
    // // Replace '1234567890' with the recipient's phone number
    // const phoneNumber = '1234567890';

    // // Construct the deep link
    // const deepLink = `whatsapp://send?text=${encodeURIComponent(message)}`;

    // // Open WhatsApp with the deep link
    // Linking.openURL(deepLink);

    const { latitude, longitude } = locationData.location;
    const message = `Check out my location: https://maps.google.com/?q=${latitude},${longitude}`;

    try {
      await Share.share({
        message: message,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  


  return (
    <View style={live_location_styles.main_box}>
      <View style={live_location_styles.share_location_box}>
        <Text style={live_location_styles.share_location_heading_text}>Share Location</Text>
        <Text style={live_location_styles.vehicle_no_text}>{vehiclesData?.vehicleNumber ?? "--"}</Text>
      </View>


      {/*  */}

      <View style={live_location_styles.vehicle_radio_main_box}>
        {filters.map((filter) => (
          <TouchableOpacity
            onPress={() => handleFilterSelection(filter)}
            key={filter.name}
            style={live_location_styles.vehicle_radio_check_box}
          >
            {selectedFilter.name === filter.name ? (
              <LinearGradient
                colors={['#2A77E3', '#051C3E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={live_location_styles.vehicle_radio_liner_box}
              >

                <Text
                  style={[
                    live_location_styles.filter_name_text,
                    { color: 'white' },
                  ]}
                >
                  {filter.name}
                </Text>
              </LinearGradient>
            ) : (
              <View style={live_location_styles.vehicle_radio_check_text}>

                <Text style={live_location_styles.filter_name_text}>
                  {filter.name}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
      {/* <View style={live_location_styles.share_driver_box}>
        <CheckBox
          // title="Checkbox Label"
          checked={isChecked}
          onPress={toggleCheckbox}
          checkedColor={Theme.secondary}
          uncheckedColor={Theme.blue.primary}
        />
        <Text>Share driver info</Text>

      </View> */}
      <TouchableOpacity style={live_location_styles.share_Box} onPress={()=> shareLocationOnWhatsApp()}>
        <Text style={live_location_styles.share_text}>Share</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LiveLocation;
