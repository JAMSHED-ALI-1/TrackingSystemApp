import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Supports from '../Component/Support/Supports';
import HistoryMap from '../Component/SideDrawerPages/TicketAndHistory/HistoryMap';

const SupportScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.support_box}>
        <Supports />
      </View>
      <View style={styles.support_history_box}>
        <HistoryMap />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  support_box: {
    height: '54%',
  },
  support_history_box: {
    width: '96%',
    alignSelf: 'center',
  },
})

export default SupportScreen;
