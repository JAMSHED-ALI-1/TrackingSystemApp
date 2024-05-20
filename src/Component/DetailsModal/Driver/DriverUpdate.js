import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Theme from '../../../Theme/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { updateDriver } from '../../../HelperFunction/api'
import { useNavigation } from '@react-navigation/native'

const DriverUpdate = ({ route }) => {
  const { driverId, vehicleDriverData } = route.params || {}
  const [name, setDriverName] = useState('')
  const [contact, setContactNumber] = useState('')
  const navigation = useNavigation()

  // console.log(route)

//   useEffect(() => {
//     // console.log(route)
//     console.log('DriverUpdate', vehicleDriverData)
//   }, [vehicleDriverData])

useEffect(() => {
    if (vehicleDriverData && vehicleDriverData.name && vehicleDriverData.contact) {
        setDriverName(vehicleDriverData.name);
        setContactNumber(vehicleDriverData.contact);
    }
}, [vehicleDriverData]);


  const handleSubmit = () => {
    if (!name.trim() || !contact.trim()) {
      return
    }

    const updatedData = {
      name: name,
      contact: contact,
    }

    updateDriver(driverId, updatedData)
      .then(() => {
        console.log('Driver updated successfully')
        navigation.goBack('MapScreen')
        setDriverName('')
        setContactNumber('')
      })
      .catch((error) => {
        console.error('Failed to update driver:', error)
      })
  }

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
          <Text style={styles.title}>Update Driver</Text>
        </View>
        <View style={styles.vehicleNumber}></View>
        <TextInput
          style={styles.input}
          placeholder="Update Driver Name"
          value={name}
          onChangeText={(text) => setDriverName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Update Contact Number"
          keyboardType="numeric"
          value={contact}
          onChangeText={(text) => {
            // Regex to allow only numeric characters
            const formattedText = text.replace(/[^0-9]/g, '')
            // Limiting to 10 digits
            const limitedText = formattedText.substring(0, 10)
            setContactNumber(limitedText)
          }}
          maxLength={10} // Limiting to 10 characters
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

export default DriverUpdate
