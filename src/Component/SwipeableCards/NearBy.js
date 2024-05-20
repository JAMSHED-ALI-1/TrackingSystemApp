
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import Theme from "../../Theme/theme";
import NearSvg from "../../../assets/near.svg";
import ATMSvg from "../../../assets/atm.svg";
import ParkingSvg from "../../../assets/car-parking-filled.svg";
import CarWashSvg from "../../../assets/car-wash.svg";
import MechanicsSvg from "../../../assets/mechanic_filled.svg";
import PetrolPumpSvg from "../../../assets/petrol-pump.svg";
import PoliceStationSvg from "../../../assets/police-station.svg";
import RestaurantSvg from "../../../assets/restaurant_filled.svg";
import HospitalSvg from "../../../assets/solid_hospital.svg";
// import RectSvg from "../../../assets/Rectangle_45.svg";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const data = [
  {
    id: "col1",
    rowId: "row1",
    name: "Police Station",
    image: PoliceStationSvg,
    keyword: "police+station",
  },
  {
    id: "col2",
    rowId: "row1",
    name: "Parking",
    image: ParkingSvg,
    keyword: "parking",
  },
  {
    id: "col3",
    rowId: "row2",
    name: "Mechanic",
    image: MechanicsSvg,
    keyword: "mechanic",
  },
  {
    id: "col4",
    rowId: "row2",
    name: "Petrol Pump",
    image: PetrolPumpSvg,
    keyword: "petrol+pumps",
  },
  {
    id: "col5",
    rowId: "row3",
    name: "Hospital",
    image: HospitalSvg,
    keyword: "hospitals",
  },
  {
    id: "col6",
    rowId: "row3",
    name: "Car Washing",
    image: CarWashSvg,
    keyword: "car+washing",
  },
  {
    id: "col7",
    rowId: "row4",
    name: "Restaurants",
    image: RestaurantSvg,
    keyword: "restaurants",
  },
  {
    id: "col8",
    rowId: "row4",
    name: "ATMS",
    image: ATMSvg,
    keyword: "ATMs",
  },
];

const NearBy = ({ pin, setNearBy }) => {
  const renderGridItem = (item, index) => (
    <TouchableOpacity
      key={item.rowId + item.id}
      style={styles.nearby_col}
      onPress={() => handlePress(item, pin)}
    >
      <item.image style={styles.image} width="30" height="30" />
      <Text style={styles.nearby_text}>{item.name}</Text>
    </TouchableOpacity>
  );

  // const locationPin = pin;
  // console.log("location nearby : ", locationPin.latitude, locationPin.longitude)


  // const handlePress = (item) => {
  //   const googleMapsUrl = `https://www.google.com/maps/search/${item.keyword}+nearby/@${locationPin.latitude},${locationPin.longitude}`;
  //   Linking.openURL(googleMapsUrl);
  // };

  const handlePress = (item, locationPin) => {
    const searchTerm = encodeURIComponent(item.keyword);
    const location = `${locationPin.latitude},${locationPin.longitude},17z`;
    const googleMapsUrl = `https://www.google.com/maps/@${location}/search/${searchTerm}+nearby`;
    console.log(googleMapsUrl);
    Linking.openURL(googleMapsUrl);
  };

  return (
    <View style={styles.nearby_main_container}>
      <TouchableOpacity style={styles.close} onPress={setNearBy(() => false)} >
      <MaterialIcons name="close" size={24} color={Theme.red} />
        <Text style={styles.close_text}>Close</Text>
      </TouchableOpacity>
      <View style={{ width: "100%", flexDirection: 'row', borderWidth: 0 }}>
        <Text style={styles.nearby_heading_text}>Nearby</Text>
      </View>

      <View style={styles.rowContainer}>{data.map(renderGridItem)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  nearby_main_container: {
    flex: 1,
    backgroundColor: Theme.white,
    // alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    // borderWidth: 5,
  },
  nearby_heading_text: {
    fontSize: 20,
    fontWeight: Theme.font.bold,
    color: Theme.greyDark,
    paddingBottom: 20,
    // alignSelf: 'center',
    marginLeft: '40%'
  },
  rowContainer: {
    // borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    flexDirection: "row",

    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  nearby_col: {
    flexDirection: "row",
    maxWidth: "48%",
    width: "48%",
    borderRadius: 4,
    marginBottom: 15,
    backgroundColor: Theme.white,
    shadowColor: Theme.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    alignItems: "center",
    padding: 10,
    paddingBottom: 7,

    ...Platform.select({
      ios: {
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  image: {
    marginBottom: 5,
    marginRight: 5,
  },
  nearby_text: {
    fontSize: Theme.font.medium,
    fontWeight: Theme.font.fat,
    color: Theme.greyDark,
  },
  close: {
    zIndex: 1,
    position: 'absolute',
    right: 10
  },
  close_text:{
    fontSize: Theme.font.small,
    fontWeight: Theme.font.fat,
    color: Theme.blue.primary
  }
});

export default NearBy;
