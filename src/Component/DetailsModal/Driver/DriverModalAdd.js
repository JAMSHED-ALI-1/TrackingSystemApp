import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native'
import Theme from '../../../Theme/theme'
import { addDriver } from '../../../HelperFunction/api'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const DriverModalAdd = ({ route }) => {
  const navigation = useNavigation()
  const { locationData } = route.params || {}
  const [formData, setFormData] = useState({
    vehicle_id: '',
    name: '',
    contact: '',
  })

  // console.log(locationData?.vehiclesData?.device_id, 'lo')

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = async () => {
    try {
      // console.log(formData);
      // Call addDriver function with formData
      const result = await addDriver(formData)
      console.log('Driver added successfully:', result)
      navigation.goBack('Tracking')
      // console.log(result)
      // Reset form after successful submission if needed
      setFormData({
        vehicle_id: '',
        name: '',
        contact: '',
      })
    } catch (error) {
      console.error('Error adding driver:', error.message)
      // Handle error as needed
    }
  }

  useEffect(() => {
    if (locationData?.vehiclesData?.device_id) {
      // Update vehicle_id in formData when locationData.device_id changes
      setFormData((prevData) => ({
        ...prevData,
        vehicle_id: locationData.vehiclesData.device_id[0],
      }))
    }
  }, [locationData])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack('MapScreen')}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={40}
              color={Theme.blue.primary}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Add Driver</Text>
        </View>
        <View style={styles.vehicleNumber}>
          <Text>{locationData.vehicleNumber}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Add Driver Name"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Add Contact Number"
          keyboardType="numeric"
          value={formData.contact}
          onChangeText={(text) => {
            const formattedText = text.replace(/[^0-9]/g,'');
            const limitedText = formattedText.substring(0,10);
            handleInputChange('contact', limitedText)
          }}
          maxLength={10}
        />
        <View style={styles.submit}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.add_driver}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default DriverModalAdd

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    // marginBottom: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  vehicleNumber: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submit: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.blue.primary,
    marginTop: 15,
    position: 'absolute',
    bottom: 10,
  },
  add_driver: {
    color: Theme.white,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
  },
})
