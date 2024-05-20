import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

const Box = ({ selected, onPress }) => {
  const boxStyle = {
    width: selected ? 100 : 50,  // Set the initial width and height
    height: selected ? 100 : 50,
    backgroundColor: selected ? 'blue' : 'green',
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.box, boxStyle]} />
    </TouchableOpacity>
  );
};

const SpecialOffer = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (index) => {
    setSelectedBox(index);
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
    >
      {[...Array(10).keys()].map((index) => (
        <Box
          key={index}
          selected={selectedBox === index}
          onPress={() => handleBoxPress(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    // justifyContent:"center",
    // alignSelf:'center',
  },
  box: {
    margin: 10,
  },
});

export default SpecialOffer;
