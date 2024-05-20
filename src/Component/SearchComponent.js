import React, { useState, useRef } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Theme from "../Theme/theme";
import Svgsearch from "../../assets/search.svg";
import Close_cross from '../../assets/close_cross.svg';

const SearchComponent = ({ onSearchFocus, onSearchChange, setSearchExpand, searchText }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;

  const toggleInputVisibility = () => {
    if (!isInputVisible) {
      setSearchExpand(!isInputVisible);
    }
    setIsInputVisible(!isInputVisible);

    // Configure the animation
    Animated.timing(inputWidth, {
      toValue: isInputVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start(({ finished }) => {
      /* completion callback */
      // if (finished) {
      setSearchExpand(!isInputVisible);
      // onSearchChange(null);
      // }
      // console.log("finished : ", finished);
    });
  };

  const inputWidthInterpolate = inputWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "90%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textInputContainer, { width: inputWidthInterpolate }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Search here..."
          onFocus={onSearchFocus}
          onChangeText={onSearchChange}
          textAlign={"center"}
        />
      </Animated.View>

      <TouchableOpacity style={styles.icon} onPress={toggleInputVisibility}>

        {/* <Svgsearch name="search1" style={styles.icon} width="25" height="25" fill={Theme.blue.primary} /> */}
        {isInputVisible ? (
          <Close_cross width="35" height="35" fill={Theme.blue.primary} />
        ) : (
          <Svgsearch name="search1" style={styles.icon} width="25" height="25" fill={Theme.blue.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInputContainer: {
    overflow: "hidden",
    borderRadius: 20,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: Theme.offWhite,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 20,
    // marginRight: 0,
  },
  icon: {
    // marginLeft: 2,
    // color: Theme.blue.primary
  },
});

export default SearchComponent;

