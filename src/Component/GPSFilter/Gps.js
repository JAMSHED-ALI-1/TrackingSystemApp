import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import BottomSheet from "../BottomSheet/BottomSheet";
import Theme from "../../Theme/theme";
import TrackNavigator from "../../Component/TrackNavigator";
import Carousel from "../Carousel/Carousel";
// import AllvehicleList from "../../FilterNavButton/AllVehicleList";
// import '../../../assets/home.png';
// import CardList from "../CardList";

const Gps = ({ navigation }) => {

  const carouselData = [
    {
      id: 0,
      image: require("../../../assets/img1.jpeg"),
    },
    {
      id: 1,
      image: require("../../../assets/img2.jpeg"),
    },
    {
      id: 2,
      image: require("../../../assets/img3.jpeg"),
    },
    {
      id: 3,
      image: require("../../../assets/img4.jpeg"),
    },
    {
      id: 4,
      image: require("../../../assets/img5.jpeg"),
    }
  ];
  // const initialImages = ['../../../assets/home.png',];
  const CustomHandle = () => {
    return <View style={{
      height: 0,
      backgroundColor: Theme.black,
    }} />;
  };


  return (
    <View style={{ borderWidth: 0, height: "100%", width: "100%" }}>

      <Carousel carouselData={carouselData} />
      <BottomSheet
        customSnapPoints={["77%", "100%"]}
        backgroundStyle={{
          backgroundColor: Theme.offWhite,
          borderRadius: 10,
          // borderWidth: .3,
        }}
        handleStyle={{ height: 10 }}
        closeStyle={false}
        handleIndicatorStyle={{ backgroundColor: Theme.blue.primary, height: 2 }}
        customHandleComponent={CustomHandle}
      >
        <View style={{ flex: 1, width: "100%", borderWidth: 0, paddingBottom: 60, paddingTop: 10 }}>
          <TrackNavigator navigation={navigation} tabBarView={{ display: 'flex' }} />
        </View>
      </BottomSheet>

    </View>
  );
};

export default Gps;
