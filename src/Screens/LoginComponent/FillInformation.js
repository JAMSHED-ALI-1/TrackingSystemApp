import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../Styles/UploadDocument/UploadDocument.module';
import FillInformationSelectBox from './FillInformationSelectBox';
import InfomationHeader from './InformationHeader';

const FillInformation = () => {
  const [name, setName] = useState('');
  const [clicked, setClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showOtherBox, setShowOtherBox] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [calendar, setCalendar] = useState('');
  const [locations, setLocations] = useState('');
  
  const handleSubmit = () => {
    if (!name || !remarks || !calendar || !locations ) {
      Alert.alert('Validation Error', 'Please fill in all required fields')
      return
    }
    console.log('doc number:', name)
    console.log('Selected Value:', selectedValue)

    setName('')
    setOtherValue('')
    setShowOtherBox(false)
    setRemarks('')
    setLocations('')
  }

  return (
    <View style={{ width: '95%', alignSelf: 'center' }}>
      <View style={{marginBottom:10}}>
        <InfomationHeader />
      </View>


      <View style={{ }}>
        <TextInput
          style={[styles.input, clicked && styles.disabled_input]}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          keyboardType="numeric"
          editable={!clicked}
        />

        <View style={[styles.cal_placeholder_box, { marginBottom: -25 }]}>
          {/* <Text style={styles.placeholder}>Document Expire Date</Text> */}
          <TextInput
            style={[styles.input, clicked && styles.disabled_input]}
            placeholder="Phone Number"
            value={calendar}
            onChangeText={(text) => setCalendar(text)}
            // keyboardType='calendar'
            editable={!clicked}
          />
        </View>

        <View style={[styles.cal_placeholder_box, { marginBottom: -20 }]}>
          {/* <Text style={styles.placeholder}>Document Expire Date</Text> */}
          <TextInput
            style={[styles.input,  clicked && styles.disabled_input ]}
            placeholder="Location"
            value={calendar}
            onChangeText={(text) => setLocations(text)}
            // keyboardType='calendar'
            editable={!clicked}
          />
        </View>

        <View style={[styles.cal_placeholder_box, { height:45, marginBottom:80,  marginLeft:-16, width:'108%' }]}>
          <FillInformationSelectBox
            style={[styles.input, clicked && styles.disabled_input]}
            setClicked={setClicked}
            clicked={clicked}
            onSelect={(value) => {
              setSelectedValue(value)
            }}
          />

        </View>

       
        <TouchableOpacity onPress={handleSubmit} style={[styles.Sub_button,{ marginTop:-0}]}>
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            style={[styles.Sub_button, {marginTop:-10}]}
          >
            <Text style={styles.button_text}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FillInformation
