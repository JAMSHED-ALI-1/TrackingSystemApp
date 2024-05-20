import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import com_profile_styles from '../../../Styles/SideDrowerPages/CompleteProfile.module'
import Theme from '../../../Theme/theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreateUser = ({ navigation }) => {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [ userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault()

    if (!name || !companyName || !email || !password || !userId || !number) {
      Alert.alert('Please enter valid credentials')
    }

    console.log(name, companyName, email, password, userId, number)
    setName('')
    setCompanyName('')
    setEmail('');
    setPassword('');
    setNumber('')
    setUserId('');
  }

  return (
    <View>
      <LinearGradient
        colors={['#2A77E3', '#051C3E']}
        style={com_profile_styles.profile_box}
      >
        <View style={com_profile_styles.profile_log}>
         
         <TouchableOpacity onPress={() => navigation.navigate('SideSettings')}>
         <MaterialIcons name="arrow-back" size={24} color={Theme.white} />
         </TouchableOpacity>
          <Text style={com_profile_styles.heading_text}>
          Create User
          </Text>
        </View>

        <View style={com_profile_styles.profile_image_box}>
          <View style={com_profile_styles.img_box}>{/* add img  */}</View>
          <Text style={com_profile_styles.change_photo_text}>Change Photo</Text>
        </View>
      </LinearGradient>

      <View style={com_profile_styles.input_main_box}>
        {/* <Text style={com_profile_styles.lable_text}>Role Name</Text> */}
        <TextInput
          style={com_profile_styles.input_box}
          placeholder="Role Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Company Name */}
      <View style={com_profile_styles.input_main_box}>
        {/* <Text style={com_profile_styles.lable_text}>Company Name</Text> */}
        <TextInput
          style={com_profile_styles.input_box}
          placeholder="Account information"
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
        />
      </View>

      {/* User ID* */}
      <View style={com_profile_styles.input_main_box}>
        {/* <Text style={com_profile_styles.lable_text}>User ID </Text> */}
        <TextInput
          style={com_profile_styles.input_box}
          placeholder="Assignee vehicle"
          // keyboardType="email-address" // Set keyboardType to "email-address"
          value={userId}
          onChangeText={(text) => setUserId(text)}
        />
      </View>

     

{/* Phone Number */}
      <View style={com_profile_styles.input_main_box}>
        {/* <Text style={com_profile_styles.lable_text}>Phone Number</Text> */}
        <TextInput
          style={com_profile_styles.input_box}
          placeholder="Assignee Permissions"
        //   keyboardType="numeric"
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
      </View>

{/* email */}
      <View style={com_profile_styles.input_main_box}>
        {/* <Text style={com_profile_styles.lable_text}>Email</Text> */}
        <TextInput
          style={com_profile_styles.input_box}
          placeholder="Assignee Alerts"
        //   keyboardType="email-address" 
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={com_profile_styles.upload_box}>
        <LinearGradient colors={['#2A77E3','#051C3E']} style={com_profile_styles.upload_linear_box}>
        <Text style={com_profile_styles.upload_text}>Update Profile</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default CreateUser;
