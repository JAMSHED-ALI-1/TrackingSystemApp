import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageSvg from '../../../assets/add-image.svg';
import Theme from '../../Theme/theme';
import CalendarData from '../../Component/Calender/Calender';
import create_trip_styles from '../../Styles/FilterNavButton/Trip/CreateTrip.module';
import create_group_styles from '../../Styles/FilterNavButton/Groups/CreateGroup.module';
import { addTrip } from '../../HelperFunction/api';
import LocationAutocomplete from '../LocationAutocomplete';
import { getDirections } from '../../HelperFunction/directions';

const CreateTrip = ({ navigation }) => {
  const [brokerId, setBrokerId] = useState('');
  const [operatorId, setOperatorId] = useState('');
  const [consigner, setConsigner] = useState('');
  const [consignee, setConsignee] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [tripType, setTripType] = useState('gps');
  const [ewayNumber, setEwayNumber] = useState('');
  const [ewayExpiry, setEwayExpiry] = useState(new Date('2023-12-31T23:59:59.999Z'));
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [driver, setDriver] = useState('');
  const [phone, setPhone] = useState('');
  const [startName, setStartName] = useState('');
  const [startLocation, setStartLocation] = useState({ "type": "Point", "coordinates": [] });
  const [endName, setEndName] = useState('');
  const [endLocation, setEndLocation] = useState({ "type": "Point", "coordinates": [] });
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [path, setPath] = useState('y`~kDckvrM');
  const [status, setStatus] = useState('created');
  const [driverName, setDriverName] = useState('');
  // const [polylines, setPolylines] = useState([]);
  // const [viaPoints, setViaPoints] = useState([
  //   { "type": "Point", "coordinates": [76.9837550783717, 28.409920556236692] },
  //   { "type": "Point", "coordinates": [76.73287143378619, 29.123936166260716] }
  // ]);
  // const [driverPhoneNumber, setDriverPhoneNumber] = useState('');
  // const [addRoute, setAddRoute] = useState('');
  // const [vehicleMileage, setVehicleMileage] = useState('');
  // const [routeFare, setRouteFare] = useState('');
  // const [fuelTollExpense, setFuelTollExpense] = useState('');

  const formData = {
    broker_id: brokerId,
    operator_id: operatorId,
    consigner: consigner,
    consignee: consignee,
    vehicle_no: vehicleNumber,
    trip_type: tripType,
    eway_number: ewayNumber,
    eway_expiry: ewayExpiry.toISOString(), // Convert to ISO string
    invoice_number: invoiceNumber,
    driver: driver,
    phone: parseInt(phone), // Parse to integer
    start_name: startName,
    start_location: startLocation,
    end_name: endName,
    end_location: endLocation,
    distance: parseFloat(distance), // Parse to float
    duration: parseFloat(duration), // Parse to float
    path: path,
    status: status,
    // via_points: viaPoints,
  };

  const handleStartLocationSelect = (lat, lng, zipCode, cityText) => {
    const location = {
      type: 'Point',
      coordinates: [lat, lng], // Note the change in the order of coordinates
    };
    setStartLocation(location);
    console.log(lat, lng);
  };

  const handleEndLocationSelect = (lat, lng, zipCode, cityText) => {
    const location = {
      type: 'Point',
      coordinates: [lat, lng], // Note the change in the order of coordinates
    };
    setEndLocation(location);
    // console.log(lat, lng, zipCode, cityText);
  };

  // const fetchPolylines = async () => {
  //   try {
  //     const response = await getDirections(startLocation, endLocation);
  //     if (response.status === 'success') {
  //       setPolylines(response.polylines);
  //     } else {
  //       Alert.alert('Error : ', 'Failed to fetch polylines', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching polylines: ', error);
  //     Alert.alert('Error', 'An unexpected error occurred');
  //   }
  // };



  // const renderPathOptions = () => {
  //   return polylines.map((path, index) => (
  //     <Picker.Item key={index} label={path} value={path} />
  //   ));
  // };

  // const handlePathChange = (itemValue, itemIndex) => {
  //   setSelectedPath(itemValue);
  // };

  const handleButtonPress = async () => {
    // Check if mandatory fields are filled
    const missingFields = [];
    if (!operatorId) missingFields.push('Operator ID');
    if (!vehicleNumber) missingFields.push('Vehicle Number');
    if (!tripType) missingFields.push('Trip Type');
    if (!startName) missingFields.push('Start Name');
    if (!endName) missingFields.push('End Name');
    if (!distance) missingFields.push('Distance');
    if (!duration) missingFields.push('Duration');
    if (!path) missingFields.push('Path');
    if (!status) missingFields.push('Status');

    if (missingFields.length > 0) {
      Alert.alert(
        'Validation Error',
        `The following mandatory fields are not filled: ${missingFields.join(', ')}`,
      );
      return;
    }

    // Call the addTrip method
    try {
      const response = await addTrip(formData);
      if (response.status === 'success') {
        Alert.alert(
          'Success',
          'Trip created successfully.',
          [
            {
              text: 'OK', onPress: () => {
                // Clear form data
                setBrokerId('');
                setOperatorId('');
                setConsigner('');
                setConsignee('');
                setVehicleNumber('');
                setTripType('sim');
                setEwayNumber('');
                setEwayExpiry(new Date('2023-12-31T23:59:59.999Z'));
                setInvoiceNumber('');
                setDriver('');
                setPhone('');
                setStartName('');
                setStartLocation({ "type": "Point", "coordinates": [] });
                setEndName('');
                setEndLocation({ "type": "Point", "coordinates": [] });
                setDistance(0);
                setDuration(0);
                setPath('y`~kDckvrM');
                setStatus('created');
                setDriverName('');
                navigation.goBack()

              }
            },
            {
              text: 'Create Another Trip', onPress: () => {
                setBrokerId('');
                setOperatorId('');
                setConsigner('');
                setConsignee('');
                setVehicleNumber('');
                setTripType('sim');
                setEwayNumber('');
                setEwayExpiry(new Date('2023-12-31T23:59:59.999Z'));
                setInvoiceNumber('');
                setDriver('');
                setPhone('');
                setStartName('');
                setStartLocation({ "type": "Point", "coordinates": [76.82656876269496, 28.10735735261216] });
                setEndName('');
                setEndLocation({ "type": "Point", "coordinates": [76.88318028844695, 30.20003788400137] });
                setDistance(0);
                setDuration(0);
                setPath('y`~kDckvrM');
                setStatus('created');
                setDriverName('');
              }
            } // You can add functionality to create another trip here
          ]
        );
      } else {
        Alert.alert(
          'Error',
          'Failed to create trip. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Error creating trip:', error);
      Alert.alert(
        'Error',
        'An unexpected error occurred. Please try again later.'
      );
    }

    console.log('Form Data:', formData);
  }

  // useEffect(() => {

  //   if (startLocation.coordinates.length > 0 && endLocation.coordinates.length > 0) {
  //     console.log("fetche polyLine called : ", startLocation.coordinates, endLocation.coordinates)
  //     fetchPolylines();
  //   } else {
  //     console.log("fetche polyLine not called : ", startLocation.coordinates, endLocation.coordinates)
  //   }
  // }, [startLocation, endLocation])

  useEffect(() => {
    const today = new Date();
    // setSelectedDate(today);
    AsyncStorage.getItem('operator_id').then((token) => {
      if (token) {
        setOperatorId(token);
        // console.log(operatorId);
      } else {
        // navigation.navigate('LoginScreen');
        console.log('No operator');
      }
    });
  }, [])




  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={create_group_styles.backBox}>
        <TouchableOpacity onPress={() => { navigation.navigate("TripTrack") }} style={create_group_styles.heading_icon_box}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={24}
            color={Theme.blue.primary}
          />
          <Text style={create_group_styles.heading_text}>Back to Trip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps='always' style={create_trip_styles.main_box} contentContainerStyle={{ flexGrow: 1 }}>

        <View style={create_trip_styles.consignor_main_box}>
          <View style={create_trip_styles.consignor_input}>
            <Text style={create_trip_styles.label_text}>Consignor</Text>
            <TextInput
              style={create_trip_styles.input_box}
              placeholder="N/A"
              onChangeText={(text) => setConsigner(text)}
              value={consigner.toString()}
            />
          </View>

          <View style={create_trip_styles.consignor_input}>
            <Text style={create_trip_styles.label_text}>Consignee</Text>
            <TextInput
              style={create_trip_styles.input_box}
              placeholder="N/A"
              onChangeText={(text) => setConsignee(text)}
              value={consignee.toString()}
            />
          </View>
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Broker Id</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Broker ID/Name"
            onChangeText={(text) => setBrokerId(text)}
            value={brokerId.toString()}
          />
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Vehicle No.</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Ex : HR 12 ZZZ 5438  "
            onChangeText={(text) => setVehicleNumber(text)}
            value={vehicleNumber.toString()}
          />
        </View>


        {/* <View>
          <Text style={create_trip_styles.label_text}>Route</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Add Route"
            onChangeText={(text) => setAddRoute(text)}
            value={addRoute.toString()}
          />
        </View> */}

        <View>
          <Text style={create_trip_styles.label_text}>E-Way bill Number</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Eg : F0ZDPDXXXXX"
            onChangeText={(text) => setEwayNumber(text)}
            value={ewayNumber.toString()}
          />
        </View>

        <Text style={create_trip_styles.label_text}>E-Way bill expiry date</Text>

        <View style={create_trip_styles.input_box}>
          <CalendarData
            value={ewayExpiry}
            onChange={setEwayExpiry}
            disableFuture={false} // Set to true if you want to disable future dates
            disablePast={false}
          />
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Invoice no.</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Eg : INV000001"
            onChangeText={(text) => setInvoiceNumber(text)}
            value={invoiceNumber.toString()}
          />
        </View>

        {/* <View>
          <Text style={create_trip_styles.label_text}>Route Fare</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="12,000 ₹"
            onChangeText={(text) => setRouteFare(text)}
            value={routeFare}
          />
        </View>
        <View>
          <Text style={create_trip_styles.label_text}>Fuel & Toll Expense</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="12,000 ₹"
            onChangeText={(text) => setFuelTollExpense(text)}
            value={fuelTollExpense}
          />
        </View> */}
        {/* <View>
          <Text style={create_trip_styles.label_text}>Vehicle Mileage</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Eg: 10 Km/L"
            onChangeText={(text) => setVehicleMileage(text)}
            value={vehicleMileage.toString()}
          />
        </View> */}

        <View>
          <Text style={create_trip_styles.label_text}>Driver name</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Eg : Dev Kumar"
            onChangeText={(text) => setDriverName(text)}
            value={driverName.toString()}
          />
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Driver</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Driver"
            onChangeText={(text) => setDriver(text)}
            value={driver.toString()}
          />
        </View>
        <View>
          <Text style={create_trip_styles.label_text}>Driver Phone no.</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Eg : 9185640000"
            keyboardType="numeric"
            onChangeText={(text) => setPhone(text)}
            value={phone.toString()}
          />
        </View>
        {/* 
        <View>
          <Text style={create_trip_styles.label_text}>Phone</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Phone"
            keyboardType="numeric"
            onChangeText={(text) => setPhone(text)}
            value={phone.toString()}
          />
        </View> */}

        <View>
          <Text style={create_trip_styles.label_text}>Start Name</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Location Start Name (Mandatory)"
            onChangeText={(text) => setStartName(text)}
            value={startName.toString()}
          />
          <LocationAutocomplete placeholderText="Enter Start Address"
            fetchAddress={handleStartLocationSelect} />
        </View>

        {/* <View>
          <Text>Start Address :</Text>
          <LocationAutocomplete placeholderText="Enter Start Location"
            fetchAddress={handleStartLocationSelect} />
        </View> */}

        <View>
          <Text style={create_trip_styles.label_text}>End Name</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Location End Name (Mandatory)"
            onChangeText={(text) => setEndName(text)}
            value={endName.toString()}
          />
          <LocationAutocomplete placeholderText="Enter End Address"
            fetchAddress={handleEndLocationSelect} />
        </View>

        {/* <View>
          <Text>End Address : </Text>
          <LocationAutocomplete placeholderText="Enter End Location"
            fetchAddress={handleEndLocationSelect} />
        </View> */}

        <View>
          <Text style={create_trip_styles.label_text}>Distance</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Distance"
            onChangeText={(text) => setDistance(text)}
            value={distance.toString()}
          />
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Duration</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Duration"
            onChangeText={(text) => setDuration(text)}
            value={duration.toString()}
          />
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Path</Text>
          <TextInput
            style={create_trip_styles.input_box}
            placeholder="Path (Mandatory)"
            onChangeText={(text) => setPath(text)}
            value={path.toString()}
          />
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Trip Type (* Mandatory)</Text>
          <View style={{}}>
            <Picker
              style={[create_trip_styles.input_box]}
              selectedValue={tripType}
              onValueChange={(itemValue, itemIndex) => setTripType(itemValue)}
            >
              {/* <Picker.Item label="Select Trip Type" value="" /> */}
              <Picker.Item label="GPS" value="gps" />
              <Picker.Item label="Sim" value="sim" />
              {/* <Picker.Item label="App" value="app" /> */}
            </Picker>
          </View>
        </View>

        <View>
          <Text style={create_trip_styles.label_text}>Status (* Mandatory)</Text>
          <Picker
            style={create_trip_styles.input_box}
            selectedValue={status}
            onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
          >
            <Picker.Item label="Select Status" value="" />
            <Picker.Item label="Created" value="created" />
            <Picker.Item label="Started" value="started" />
            <Picker.Item label="Completed" value="completed" />
            <Picker.Item label="Delayed" value="delayed" />
          </Picker>
        </View>

        <Text style={create_trip_styles.label_text}>Documents</Text>

        <View style={create_trip_styles.grid_main_box}>

          <View style={create_trip_styles.row_box_main}>
            <View style={create_trip_styles.icon_box}>
              <ImageSvg height={24} width={24} />
            </View>
            <Text style={create_trip_styles.image_type_text}>Invoice</Text>
          </View>

          <View style={create_trip_styles.row_box_main}>
            <View style={create_trip_styles.icon_box}>
              <ImageSvg height={24} width={24} />
            </View>
            <Text style={create_trip_styles.image_type_text}>LR/BILTY</Text>
          </View>

          <View style={create_trip_styles.row_box_main}>
            <View style={create_trip_styles.icon_box}>
              <ImageSvg height={24} width={24} />
            </View>
            <Text style={create_trip_styles.image_type_text}>Other</Text>
          </View>
        </View>

        <View
          style={create_trip_styles.submit_btn_box}
        >
          <View
            style={create_trip_styles.save_box}
          >
            <TouchableOpacity
              style={create_trip_styles.touchable_opacity_save_box}
            >
              <Text style={create_trip_styles.save_text}>Save</Text>
            </TouchableOpacity>
          </View>

          <LinearGradient
            style={create_trip_styles.create_gradient_box}
            colors={['#2A77E3', '#051C3E']}
          >
            <TouchableOpacity
              title="Submit"
              onPress={handleButtonPress}
            >
              <Text style={create_group_styles.create_btn_text}>Create</Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateTrip;
