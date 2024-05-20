import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Theme from '../../Theme/theme';
import styles from '../../Styles/HostoryPage/CustomToggleButton.module';

const CustomToggleButton = () => {
  const [checked, setChecked] = useState('Custom');

  return (
   <View>
     <View style={styles.main_box}>
      <TouchableOpacity onPress={() => setChecked('Custom')} style={[styles.checkBox, styles.customBox]}>
        {checked === 'Custom' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.selected_box}
          >
            <Text style={styles.selected_text}>Custom</Text>
          </LinearGradient>
        ) : (
          <View style={styles.not_selected_box}>
            <Text style={styles.not_selected_text}>Custom</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setChecked('11 Nov, 2023')} style={styles.checkBox}>
        {checked === '11 Nov, 2023' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.selected_box}
          >
            <View style={styles.icon_text_container}>
              <MaterialCommunityIcons name="calendar" color="white" size={18} />
              <Text style={styles.selected_text}>11 Nov, 2023</Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.not_selected_box}>
            <View style={styles.icon_text_container}>
              <MaterialCommunityIcons name="calendar" color={Theme.sliderGrey} size={18} />
              <Text style={styles.not_selected_text}>11 Nov, 2023</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setChecked('End Date')} style={styles.checkBox}>
        {checked === 'End Date' ? (
          <LinearGradient
            colors={['#2A77E3', '#051C3E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.selected_box}
          >
            <View style={styles.icon_text_container}>
              <MaterialCommunityIcons name="calendar" color="white" size={18} />
              <Text style={styles.selected_text}>End Date</Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.not_selected_box}>
            <View style={styles.icon_text_container}>
              <MaterialCommunityIcons name="calendar" color={Theme.sliderGrey} size={18} />
              <Text style={styles.not_selected_text}>End Date</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
      
    </View>
    <View style={styles.search_box}>
    <LinearGradient colors={['#2A77E3','#051C3E']} style={styles.search_text_box}>
    <Text style={{color:'white'}}>Search</Text>
    </LinearGradient>
    <Text style={styles.back_btn}>Back</Text>

    </View>
   </View>
  );
};


export default CustomToggleButton;
