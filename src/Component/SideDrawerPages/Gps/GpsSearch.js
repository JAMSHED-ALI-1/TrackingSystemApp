import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Theme from '../../../Theme/theme';
import styles from '../../../Styles/SideDrowerPages/GpsSearch';
const GpsSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
      <Ionicons name="search" size={20} color={Theme.blue.primary} />
        <TextInput
          style={styles.input}
          placeholder="Search category"
        />
        <Ionicons name="caret-down-outline" size={12} color="#B3B3B3" />
      </View>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color={Theme.blue.primary} />
        <TextInput
          style={styles.input}
          placeholder="Search Vehicle"
        />
        <Ionicons name="caret-down-outline" size={12} color="#B3B3B3" />
      </View>
    </View>
  );
};



export default GpsSearch;
