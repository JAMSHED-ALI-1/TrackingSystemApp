import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,} from 'react-native';

import UploadDocumentHeader from './UploadDoucmentHeader';
import UploadSelectBox from './UploadSelectBox';
import Theme from '../../Theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../Styles/UploadDocument/UploadDocument.module';

const UploadDocument = () => {
  const [docNumber, setDocNumber] = useState('')
  const [clicked, setClicked] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const [otherValue, setOtherValue] = useState('')
  const [showOtherBox, setShowOtherBox] = useState(false)
  const [remarks, setRemarks] = useState('')
  const [calendar, setCalendar] = useState('');
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [imageSelected2, setImageSelected2] = useState(false);
  const handleSubmit = () => {
    if (!docNumber || !remarks || !calendar) {
      Alert.alert('Validation Error', 'Please fill in all required fields')
      return
    }
    console.log('doc number:', docNumber)
    console.log('Selected Value:', selectedValue)
    console.log(image)
    console.log(image2, "img2")

    if (selectedValue === 'Other') {
      console.log('Other Value:', otherValue)
    }
    setDocNumber('')
    setOtherValue('')
    setShowOtherBox(false)
    setRemarks('')
  }

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.uri);
        setImage2(result.uri);
        setImageSelected(true);
        setImageSelected2(true);
        console.log("user selected an image")
      
      } else {
        // User canceled the operation
        console.log('Image selection cancelled');
      }
    } catch (error) {
      // Handle any potential errors
      console.error('Error picking image:', error);
    }
  };

  return (
    <View >
<View  style={styles.up_doc_header}>
<UploadDocumentHeader />
</View>
      <UploadSelectBox 
      
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
        {showOtherBox && selectedValue === 'Other' && (
          <TextInput
            style={[styles.input, { marginTop: showOtherBox ? 50 : 0 }]}
            placeholder="Other Name"
            value={otherValue}
            onChangeText={(text) => setOtherValue(text)}
            editable={!clicked}
          />
        )}

        <TextInput
          style={[styles.input, clicked && styles.disabled_input]}
          placeholder="Document Number"
          value={docNumber}
          onChangeText={(text) => setDocNumber(text)}
          keyboardType="numeric"
          editable={!clicked}
        />

        <View style={styles.cal_placeholder_box}>
          <Text style={styles.placeholder}>Document Expire Date</Text>
          <TextInput
            style={[styles.input, clicked && styles.disabled_input]}
            placeholder="24/1/2024"
            value={calendar}
            onChangeText={(text) => setCalendar(text)}
            // keyboardType='calendar'
            editable={!clicked}
          />
        </View>

        <View style={styles.placeholder_box}>
          <Text style={styles.placeholder}>Remarks</Text>
          <TextInput
            style={[styles.remarks_input, clicked && styles.disabled_input]}
            // multiline
            numberOfLines={4}
            maxLength={40}
            placeholder="Enter Remarks"
            value={remarks}
            onChangeText={(text) => setRemarks(text)}
            editable={!clicked}
          />
        </View>


        <View style={styles.imge_up_main_box}>

        <View style={styles.first_img_up_box}>
          <TouchableOpacity onPress={pickImage} style={styles.image_upload_container} >
        <View style={styles.image_upload_button}>
          <AntDesign name='upload' size={24} color='#ABABAB'/>
            <Text style={styles.button_text1}>Upload Image </Text>
          {image && <Image source={{ uri: image }} style={styles.uploaded_image} />}
        </View>
          </TouchableOpacity>
          <Text style={styles.img_font_text}>Front</Text>
          </View>
        
          <View style={styles.first_img_up_box}>
          <TouchableOpacity onPress={pickImage} style={styles.image_upload_container} >
        <View style={styles.image_upload_button}>
        <AntDesign name='upload' size={24} color='#ABABAB'/>
            <Text style={styles.button_text1}>Upload Image </Text>
          {image2 && <Image source={{ uri: image2 }} style={styles.uploaded_image} />}
        </View>
          </TouchableOpacity>
          <Text style={styles.img_font_text}>Back</Text>
          </View>         
        </View>
        <TouchableOpacity  onPress={handleSubmit} style={styles.Sub_button}>
       <LinearGradient colors={['#2A77E3','#051C3E']}   style={styles.Sub_button}>
          <Text style={styles.button_text}>Upload</Text>
       </LinearGradient>
        </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default UploadDocument;
