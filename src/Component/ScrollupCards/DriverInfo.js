import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Linking
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Theme from "../../Theme/theme";
import Svgphone from "../../../assets/phone.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const DriverInfo = ({ driver, length, count }) => {
  // const { name, mobile, driver_no } = driver;
  // console.log(driver, 'driver');

  useEffect(() => {
    //  console.log("length of driver", length);
  }, [driver]);

  const handlePhonePress = (phoneNumber) => {
    // if(phoneNumber.length >10){
    //   return
    // }
    // else{
    console.log("calling Driver.");
    Linking.openURL(`tel:${phoneNumber}`);
    // }
  };

  return (
    <View style={styles.card}>
      <Image
        source={require("../../../assets/driver.png")}
        style={styles.img}
        alt="kilometers"
      />
      <View style={styles.info}>
        {/* <Text style={styles.context}>Driver {count}</Text> */}
        <Text style={styles.context}>{driver?.name || 'No Data'}</Text>
        <Text style={styles.context}>{driver?.contact || 'No Data'}</Text>
      </View>


      {/* {length === 1 && (
        <TouchableOpacity>
          <LinearGradient
            colors={[Theme.blue.gradient.all.start, Theme.blue.gradient.all.end]}
            style={styles.shade}
          >
            <MaterialIcons name="add-box" size={20} color={Theme.white} />
          </LinearGradient>
        </TouchableOpacity>
      )} */}

      <TouchableOpacity onPress={() => handlePhonePress(driver?.contact)}>
        <LinearGradient
          colors={[Theme.blue.gradient.all.start, Theme.blue.gradient.all.end]}
          style={styles.shade}
        >
          <Svgphone width="20" height="20" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  img: {
    height: 55,
    width: 55,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Theme.silver,
  },
  context: {
    color: Theme.text,
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    lineHeight: 14.52,
  },
  shade: {
    marginHorizontal: 3,
    padding: 10,
    borderRadius: 8,
  },
  Icon: {
    color: Theme.white,
  },
});

export default DriverInfo;
