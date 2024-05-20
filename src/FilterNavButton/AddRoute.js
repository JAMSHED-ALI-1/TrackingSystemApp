import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import create_group_styles from '../Styles/FilterNavButton/CreateGroup.module'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Theme from '../Theme/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AddRoute = () => {
  const [routeName, setRouteName] = useState('')
  const [addRoute, setAddRoute] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [time, setTime] = useState('')

  const handleButtonPress = () => {
    if (!routeName || !addRoute || !vehicle || !time) {
      Alert.alert(
        'Validation Error',
        'Group Name and Assignee Vehicle are required.',
      )
      return
    }

    console.log('Group Name:', routeName)
    console.log('Vehicle Name:', addRoute)
    console.log('Assignee Vehicle:', vehicle)
    console.log('time', time)
  }

  return (
    <View style={create_group_styles.main_box}>
      <View style={create_group_styles.heading_icon_box}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          color={Theme.blue.primary}
        />
        <Text style={create_group_styles.heading_text}>Add Route</Text>
      </View>

      <TextInput
        style={create_group_styles.input_box}
        placeholder="Route Name"
        onChangeText={(text) => setRouteName(text)}
        value={routeName}
      />

      <TextInput
        style={create_group_styles.input_box}
        placeholder="Add Route"
        onChangeText={(text) => setAddRoute(text)}
        value={addRoute}
      />

      <TextInput
        style={create_group_styles.input_box}
        placeholder="Assignee Vehicle"
        onChangeText={(text) => setVehicle(text)}
        value={vehicle}
      />

      <TextInput
        style={create_group_styles.input_box}
        placeholder="Estimate Time"
        onChangeText={(text) => setTime(text)}
        value={time}
      />

      <TouchableOpacity
        style={[
          create_group_styles.touchable_box,
          { marginBottom: 0, marginTop: '95%' },
        ]}
        title="Submit"
        onPress={handleButtonPress}
      >
        <LinearGradient
          style={create_group_styles.submit_button_box}
          colors={['#2A77E3', '#051C3E']}
        >
          <Text style={create_group_styles.create_btn_text}>Create</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default AddRoute
