import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'

import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../../../Styles/UploadDocument/UploadDocument.module'
import GenerateTicketType from './GenerateTicketType'
import VehicleSelector from '../../VehicleSelector'
import TicketHeader from './TicketHeader'
import ticket_styles from '../../../Styles/SideDrowerPages/GenerateTicket.module'
import Group from '../../../assets/Group'

const GenerateTicket = () => {
  const [clicked, setClicked] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const [otherValue, setOtherValue] = useState('')
  const [showOtherBox, setShowOtherBox] = useState(false)
  const [message, SetMessage] = useState('')
  const [image, setImage] = useState(null)
  const [image2, setImage2] = useState(null)
  const [imageSelected, setImageSelected] = useState(false)
  const [imageSelected2, setImageSelected2] = useState(false)
  const handleSubmit = () => {
    if (!message) {
      Alert.alert('Validation Error', 'Please fill in all required fields')
      return
    }
    console.log('doc number:', docNumber)
    console.log('Selected Value:', selectedValue)
    console.log(image)
    console.log(image2, 'img2')

    if (selectedValue === 'Other') {
      console.log('Other Value:', otherValue)
    }
    setOtherValue('')
    setShowOtherBox(false)
    SetMessage('')
  }

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) {
        setImage(result.uri)
        setImage2(result.uri)
        setImageSelected(true)
        setImageSelected2(true)
        console.log('user selected an image')
      } else {
        // User canceled the operation
        console.log('Image selection cancelled')
      }
    } catch (error) {
      // Handle any potential errors
      console.error('Error picking image:', error)
    }
  }

  return (
    <View>
      <View style={styles.up_doc_header}>
        <TicketHeader />

        <View style={ticket_styles.vehicle_select_box}>
          <VehicleSelector />
        </View>

        <Text style={ticket_styles.ticket_type_text}>Ticket Type</Text>
        {/* <Selec  */}
      </View>
      <GenerateTicketType
        setClicked={setClicked}
        clicked={clicked}
        onSelect={(value) => {
          setSelectedValue(value)

          if (value !== 'Other') {
            setShowOtherBox(false)
            setOtherValue('')
          } else {
            setShowOtherBox(true)
          }
        }}
      />

      <View style={styles.up_input_main_box}>
        <View style={{ marginTop: -90 }}>
          {showOtherBox && selectedValue === 'Other' && (
            <TextInput
              style={[
                styles.ticket_mess_input_text,
                {
                  marginTop: showOtherBox ? 50 : 0,
                  height: showOtherBox ? 50 : 0,
                },
              ]}
              placeholder="Other Name"
              value={otherValue}
              onChangeText={(text) => setOtherValue(text)}
              editable={!clicked}
            />
          )}
        </View>

        <View style={styles.placeholder_box}>
          <Text style={ticket_styles.ticket_mess_text}>Message</Text>
          <TextInput
            style={[
              styles.remarks_input,
              clicked && styles.ticket_mess_input_text,
            ]}
            // multiline
            numberOfLines={4}
            maxLength={40}
            placeholder="Type Message"
            value={message}
            onChangeText={(text) => SetMessage(text)}
            editable={!clicked}
          />
        </View>

        <View style={styles.imge_up_main_box}>
          <View style={ticket_styles.ticke_img_upload_box}>
            <TouchableOpacity
              onPress={pickImage}
              style={styles.image_upload_container}
            >
              <View style={{ marginTop: 25 }}>
                <Group />
              </View>
              <View style={ticket_styles.image_upload_button}>
                <AntDesign name="upload" size={15} color="#ABABAB" />
                <Text style={ticket_styles.ticket_upload_img_text}>
                  Upload Image{' '}
                </Text>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={styles.uploaded_image}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.first_img_up_box}>
          <TouchableOpacity onPress={pickImage} style={styles.image_upload_container} >
        <View style={styles.image_upload_button}>
        <AntDesign name='upload' size={24} color='#ABABAB'/>
            <Text style={styles.button_text1}>Upload Image </Text>
          {image2 && <Image source={{ uri: image2 }} style={styles.uploaded_image} />}
        </View>
          </TouchableOpacity>
          <Text style={styles.img_font_text}>Back</Text>
          </View>          */}
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={ticket_styles.Sub_button}
        >
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            style={ticket_styles.Sub_button}
          >
            <Text style={styles.button_text}>Raise Ticket</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={ticket_styles.cancel_button}>
          <Text style={ticket_styles.cancel_btn_text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GenerateTicket
