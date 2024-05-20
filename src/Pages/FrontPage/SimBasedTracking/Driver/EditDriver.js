  
import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker' // Import ImagePicker from Expo
import edit_driver_styles from '../../../../Styles/Pages/FrontPage/SimBasedTracking/DriverTracking/EditDriver.module'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Theme from '../../../../Theme/theme'

const EditDriver = ({ isVisible, onClose, onSave }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)

  const handleSave = () => {
    onSave(name, image)
    setName('')
    setImage(null)
    onClose()
  }

  const selectImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri)
    }
  }

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={edit_driver_styles.main_box}>
        <View style={edit_driver_styles.edit_box}>
          <TouchableOpacity
            onPress={onClose}
            style={edit_driver_styles.close_box}
          >
            <Text style={edit_driver_styles.close_text}>Close</Text>
            <Ionicons name="close" size={20} color={Theme.red} />
          </TouchableOpacity>
          {!image && (
            <TouchableOpacity
              onPress={selectImage}
              style={edit_driver_styles.img_picker_btn}
            >
              <Text style={edit_driver_styles.img_picker_btn_text}>
                Select Image
              </Text>
            </TouchableOpacity>
          )}
          {/* Display selected image */}
          {image && (
            <Image
              source={{ uri: image }}
              style={edit_driver_styles.selected_image}
            />
          )}
          <Text style={edit_driver_styles.label}>Edit Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
            style={edit_driver_styles.input}
          />
          {/* Image picker button */}
          {/* Save button */}
          <TouchableOpacity
            onPress={handleSave}
            style={edit_driver_styles.save_box}
          >
            <Text style={edit_driver_styles.save_text}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default EditDriver
