import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import Theme from '../../Theme/theme';

const SwitchBox = ({ label, value, onValueChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>Switch Box:</Text> */}
      <Switch
        trackColor={{ false: '#CCCCCC', true: '#C8EDFF' }}
        thumbColor={isEnabled ? Theme.secondary : Theme.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
      {/* <Text>{isEnabled ? 'Enabled' : 'Disabled'}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});

export default SwitchBox;
