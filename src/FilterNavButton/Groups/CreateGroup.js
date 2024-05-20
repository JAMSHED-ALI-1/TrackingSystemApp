import { View, Text, TextInput,  Alert } from 'react-native';
import React, { useState } from 'react';
import create_group_styles from '../../Styles/FilterNavButton/Groups/CreateGroup.module';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('')
  const [vehicleName, setVehicleName] = useState('')

  const handleButtonPress = () => {
    if (!groupName || !vehicleName) {
      Alert.alert('Validation Error', 'Group Name and Assignee Vehicle are required.');
      return;
    }

    // console.log('Group Name:', groupName);
    // console.log('Vehicle Name:', vehicleName);
  }

  return (
    <View style={create_group_styles.main_box}>
      <View style={create_group_styles.heading_icon_box}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          color={Theme.blue.primary}
        />
        <Text style={create_group_styles.heading_text}>Create Group</Text>
      </View>

      <TextInput
        style={create_group_styles.input_box}
        placeholder="Group Name"
        onChangeText={(text) => setGroupName(text)}
        value={groupName}
        
      />

      <TextInput
        style={create_group_styles.input_box}
        placeholder="Assignee Vehicle"
        onChangeText={(text) => setVehicleName(text)}
        value={vehicleName}
      />

      <TouchableOpacity style={create_group_styles.touchable_box}  title="Submit" onPress={handleButtonPress} >
        <LinearGradient style={create_group_styles.submit_button_box} colors={['#2A77E3','#051C3E']} >

        <Text style={create_group_styles.create_btn_text}>Create</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default CreateGroup;
