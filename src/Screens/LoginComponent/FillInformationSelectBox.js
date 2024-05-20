import React, { useState } from 'react';
import {View,Text,TouchableOpacity,FlatList,Modal} from 'react-native';
import upload_box_styles from '../../Styles/UploadDocument/UploadSelectBox.module';
import Radiobtn from '../../Component/UploadDocument/Radiobtn';

const selectContent = [
  { value: '2G wired' },
  { value: '4G wired' },
  { value: '2G OBD' },
  { value: '4G OBD' },
  {value: 'OBD (with fuel senser)'},
  { value: 'AIS - 140' },
  { value: 'Container Lock' },
  { value: 'Fuel Sensor' },
  { value: 'Temperature Sensor' },
]

const FillInformationSelectBox = () => {
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
      <View style={[upload_box_styles.up_main_box, {}]}>
        <TouchableOpacity
          style={upload_box_styles.upload_opacity_box}
          onPress={() => {
            setClicked(!clicked)
          }}
        >
          <Text style={upload_box_styles.select_box_text}>
            {selectedContent == null ? 'Select Requirements' : selectedContent}
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
          <View style={[upload_box_styles.up_modal_child, {}]}>
            <View style={[upload_box_styles.up_modal_child1, { marginTop:-210,width:'96%', height:160}]}>
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
                    <Text style={upload_box_styles.up_modal_text}>
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

export default FillInformationSelectBox