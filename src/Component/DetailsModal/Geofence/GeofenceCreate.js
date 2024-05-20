import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import GeofenceHeader from './GeofenceHeader'
import geofence_search_styles from '../../../Styles/DeviceDetails/GeofenceSlider.module'
import { addGeofence } from '../../../HelperFunction/api'
import AsyncStorage from "@react-native-async-storage/async-storage";
import GeoFenceMapSelector from './GeoFenceMapSelector'
import Theme from '../../../Theme/theme'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import GeofenceSlider from './GeoSlider'
// import LocationAutocomplete from '../../../FilterNavButton/LocationAutocomplete'
// import GeoFenceMap from './GeoFenceMap'
// import { LinearGradient } from 'expo-linear-gradient'


// import GeoToggleButton from './GeoToggleButton'

const GeofenceCreate = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [sliderValue, setSliderValue] = useState(100);
  const [coordinates, setCoordinates] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [operatorId, setOperatorId] = useState(null);
  const [selectMap, setSelectMap] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('AM')
  // const [selectedOption2, setSelectedOption2] = useState('PM')
  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option)
  // }
  // const handleOptionSelect2 = (option) => {
  //   setSelectedOption2(option)
  // }

  const handleInputChange = (name) => {
    setName(name);
    console.log('name', name)

  };

  const handleEndLocationSelect = (lat, lng, zipCode, cityText, address) => {
    const location = {
      type: 'Point',
      coordinates: [lat, lng], // Note the change in the order of coordinates
    };
    setCoordinates(location)

    // setEndLocation(location);
    setSelectedAddress(address + "  \nPin Code : " + zipCode)

    // console.log("From GeoFence Create : ", address, zipCode);
  };

  const handleSubmit = async () => {
    if (!name || !coordinates || !sliderValue || !operatorId) {
      alert('Please fill all required Fields');
      console.log('Please fill all required fields', name, coordinates.coordinates, sliderValue, (!operatorId ? "No operator" : null));
      return;
    }
    try {
      console.log('Creating GeoFence with this Details : ', name, coordinates.coordinates, sliderValue, (!operatorId ? "No operator" : "Success"));
      const response = await addGeofence(name, coordinates.coordinates, sliderValue, selectedAddress, operatorId);
      console.log('Geofence created:', response);
      navigation.navigate("Geofence");
      // Handle success, navigate or show success message
    } catch (error) {
      console.error('Error creating geofence:', error);
      // Handle error, show error message
    }
  }

  const toggleMap = () => {
    setSelectMap(!selectMap);
  }

  useEffect(() => {
    // Fetch operator ID from AsyncStorage and fetch all vehicle data
    AsyncStorage.getItem("operator_id").then((Operator) => {
      if (Operator) {
        setOperatorId(Operator);
      } else {
        console.log("No operator!");
      }
    });
  }, []);

  useEffect(() => {
    console.log("from here Create Geo page: ", coordinates);
  }, [coordinates])

  return (

    !selectMap ? (<View style={{ borderWidth: 0, height: '100%' }}>

      <View style={geofence_search_styles.header_box}>
        <GeofenceHeader />
      </View>


      <View style={geofence_search_styles.geofence_ser_select_radio}>


        <View style={geofence_search_styles.geofence_ser_geoname}>
          <Text style={geofence_search_styles.geo_select_radio_text}>Geofence Name : </Text>
          <View
            style={geofence_search_styles.geo_search_input_box}
          >
            <TextInput
              placeholder='Name'
              value={name}
              onChangeText={handleInputChange}
              style={geofence_search_styles.geo_search_input_text}
            />
          </View>
        </View>

        <View style={geofence_search_styles.selectedLocationContainer}>
          <Text style={geofence_search_styles.geo_select_radio_text}> Radius :
          </Text>
          <Text style={geofence_search_styles.selectedLocationText}>
            {sliderValue || ' No location Selected'}
          </Text>
        </View>

        {/* Display selected location address or "No location" */}
        <View style={geofence_search_styles.selectedLocationContainer}>
          <Text style={geofence_search_styles.geo_select_radio_text}> Address :
          </Text>
          <Text style={geofence_search_styles.selectedLocationText}>
            {selectedAddress || ' No location Selected'}
          </Text>
        </View>



        {/* <View style={geofence_search_styles.selectBox}>
          <Text style={geofence_search_styles.geo_select_radio_text}>Select Radius</Text>
          <View style={geofence_search_styles.slider_box_view}>
            <GeofenceSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
          </View>
        </View> */}


        {/* <View style={geofence_search_styles.geofence_ser_geoname}>
          <Text style={geofence_search_styles.geofence_ser_geoname_text}>Entry Time</Text>
          <View style={geofence_search_styles.geo_ser_time_main_box}>
            <View style={geofence_search_styles.geo_ser_time_box}>
              <Text style={geofence_search_styles.geo_time_text}>11</Text>
            </View>

            <View style={geofence_search_styles.geo_ser_time_box}>
              <Text style={geofence_search_styles.geo_time_text}>01</Text>
            </View>
            <View style={geofence_search_styles.am_pm_cntainer}>
              <TouchableOpacity
                onPress={() => handleOptionSelect('AM')}
                style={
                  selectedOption === 'AM'
                    ? geofence_search_styles.selectedOption
                    : geofence_search_styles.option
                }
              >
                {selectedOption === 'AM' ? (
                  <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={geofence_search_styles.gradient_am_pm}
                  >
                    <Text style={geofence_search_styles.radio_white_text}>
                      AM
                    </Text>
                  </LinearGradient>
                ) : (
                  <Text style={geofence_search_styles.radio_text_gray}>AM</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleOptionSelect('PM')}
                style={
                  selectedOption === 'PM'
                    ? geofence_search_styles.selectedOption
                    : geofence_search_styles.option
                }
              >
                {selectedOption === 'PM' ? (
                  <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={geofence_search_styles.gradient_am_pm}
                  >
                    <Text style={geofence_search_styles.radio_white_text}>
                      PM
                    </Text>
                  </LinearGradient>
                ) : (
                  <Text style={geofence_search_styles.radio_text_gray}>PM</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={geofence_search_styles.geo_ser_edit_icon}
          >
            <MaterialIcons name="edit" size={15} color="#fff" />
          </LinearGradient>
        </View>
        <View style={geofence_search_styles.geofence_ser_geoname}>
          <Text style={geofence_search_styles.geofence_ser_geoname_text}>Exit Time  </Text>
          <View style={geofence_search_styles.geo_ser_time_main_box}>
            <View style={geofence_search_styles.geo_ser_time_box}>
              <Text style={geofence_search_styles.geo_time_text}>06</Text>
            </View>

            <View style={geofence_search_styles.geo_ser_time_box}>
              <Text style={geofence_search_styles.geo_time_text}>00</Text>
            </View>

            <View style={geofence_search_styles.am_pm_cntainer}>
              <TouchableOpacity
                onPress={() => handleOptionSelect2('AM')}
                style={
                  selectedOption2 === 'AM'
                    ? geofence_search_styles.selectedOption
                    : geofence_search_styles.option
                }
              >
                {selectedOption2 === 'AM' ? (
                  <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={geofence_search_styles.gradient_am_pm}
                  >
                    <Text style={geofence_search_styles.radio_white_text}>
                      AM
                    </Text>
                  </LinearGradient>
                ) : (
                  <Text style={geofence_search_styles.radio_text_gray}>AM</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleOptionSelect2('PM')}
                style={
                  selectedOption2 === 'PM'
                    ? geofence_search_styles.selectedOption
                    : geofence_search_styles.option
                }
              >
                {selectedOption2 === 'PM' ? (
                  <LinearGradient
                    colors={['#2A77E3', '#051C3E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={geofence_search_styles.gradient_am_pm}
                  >
                    <Text style={geofence_search_styles.radio_white_text}>
                      PM
                    </Text>
                  </LinearGradient>
                ) : (
                  <Text style={geofence_search_styles.radio_text_gray}>PM</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={geofence_search_styles.geo_ser_edit_icon}
          >
            <MaterialIcons name="edit" size={15} color="#fff" />
          </LinearGradient>
        </View>
        <View style={speed_limit_edit_styles.speed_edit_alarm}>
          <View
            style={[odometer_edit_styles.odometer_flex_box1, { width: '40%' }]}
          >
            <Text style={odometer_edit_styles.odometer_flex_box1_text}>
              Exit Alarm Type
            </Text>
          </View>

          <View style={speed_limit_edit_styles.speed_radio_btn}>
            <GeoRadioButton />
          </View>
        </View> */}

        <View style={{ marginBottom: 30, marginTop: 30 }}>
          <TouchableOpacity onPress={() => toggleMap()}>

            <Text style={{ color: Theme.darkBlue, fontSize: Theme.font.large, fontWeight: 600 }}>Select Location</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={geofence_search_styles.geofence_ser_search_main_box}>
          <MaterialIcons
            name="search"
            size={20}
            color="grey"
            style={{ marginRight: 5 }}
          />
          <KeyboardAvoidingView style={{ height: '70%', width: '95%' }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <LocationAutocomplete placeholderText="Search Location"
              fetchAddress={handleEndLocationSelect} />
          </KeyboardAvoidingView>
        </View> */}

        {(name && coordinates && sliderValue && operatorId) &&
          // <View style={}>

          <TouchableOpacity onPress={handleSubmit} style={geofence_search_styles.submitButton}>
            <Text style={geofence_search_styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          // </View>
        }
      </View>

    </View >) :

      <View style={{ height: '100%', width: '100%' }}>
        <GeoFenceMapSelector toggleMap={toggleMap}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          selectedAddress={setSelectedAddress}
          navigation={navigation} />
      </View>



  )
}

export default GeofenceCreate;
