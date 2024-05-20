import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import upload_box_styles from '../../../Styles/UploadDocument/UploadSelectBox.module';
import Radiobtn from '../../UploadDocument/Radiobtn';

const selectContent = [
  { value: 'Device Offline' },
  { value: 'Wire Cut' },
  { value: 'Vehicle Insurance' },
  { value: 'Fitment Certificate' },
  { value: 'Relay Issue ( Engine Off )' },
  { value: 'Ignition Issue' },
  { value: 'Billing Issue' },
  { value: 'Recharge' },
  { value: 'Other' },
]

const GenerateTicketType = ({onSelect}) => {
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState(selectContent)
  const [selectedContent, setSelectedContent] = useState(null)
// console.log(data,"data")
// console.log(selectedContent,'yyy')

// if(selectedContent=== 'Other'){
//   console.log('other')
// }
// else{
//   console.log('hjhjhj')
// }
  return (
    <View style={upload_box_styles.up_main_box}>
      <TouchableOpacity
        style={[upload_box_styles.upload_opacity_box,{borderWidth:1, height:60}]}
        onPress={() => {
          setClicked(!clicked)
        }}
      >
        <Text style={upload_box_styles.select_box_text}>
          {selectedContent == null ? 'Select Ticket Type' : selectedContent}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        // animationType="slide"
        visible={clicked}
        onRequestClose={() => {
          setClicked(!clicked)
        }}
      >
        <View style={upload_box_styles.up_modal_child}>
          <View style={[upload_box_styles.up_modal_child1,{height:300}]}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={upload_box_styles.up_flat_box}
                  onPress={() => {
                    if (item.value === 'Other') {
                      setClicked(false);
                      onSelect('Other');
                      setSelectedContent(item.value);
                    } else {
                      setSelectedContent(item.value);
                      setClicked(!clicked);
                    }
                  }}
                >
                  <Text style={[upload_box_styles.up_modal_text]}>
                    {item.value}
                  </Text>
                  <Radiobtn isChecked={selectedContent === item.value} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default GenerateTicketType;
