import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import BottomSheet from "../../Component/BottomSheet/BottomSheet";
import Theme from "../../Theme/theme";
// import TrackNavigator from "./TrackNavigator";
import Carousel from "../../Component/Carousel/Carousel";
import FrontPage from "../../Pages/FrontPage/FrontPage";
// import AllvehicleList from "../../FilterNavButton/AllVehicleList";
// import '../../../assets/home.png';
// import CardList from "../CardList";

const MainPage = ({ navigation, allVehicleData,setAllVehicleData }) => {
    const carouselData = [
        {
            id: 0,
            image: require("../../../assets/image_1.png"),
        },
        {
            id: 1,
            image: require("../../../assets/image_2.png"),
        },
        {
            id: 2,
            image: require("../../../assets/image_3.png"),
        },
        {
            id: 3,
            image: require("../../../assets/image_4.png"),
        },
        {
            id: 4,
            image: require("../../../assets/image_5.png"),
        }
    ];
    const CustomHandle = () => {
        return <View style={{
            height: 0,
            backgroundColor: Theme.black,
        }} />;
    };

    return (
        <View style={{ flex: 1 }}>
           <View>
             <Carousel carouselData={carouselData} />
           </View>
            <BottomSheet
                customSnapPoints={["71%", "100%"]}
                backgroundStyle={{
                    backgroundColor: Theme.offWhite,
                    borderRadius: 10,
                }}
                handleStyle={{ height: 10 }}
                closeStyle={false}
                handleIndicatorStyle={{ backgroundColor: Theme.blue.primary, height: 2 }}
                customHandleComponent={CustomHandle}
            >
                <View style={{ flex: 1, width: "100%", borderWidth: 0, borderColor:'red', paddingBottom: 60, paddingTop: 10 }}>
                    <FrontPage allVehicleData={allVehicleData} navigation={navigation} tabBarView={{ display: 'flex' }}/>
                    {/* <TrackNavigator allVehicleData={allVehicleData} navigation={navigation} tabBarView={{ display: 'flex' }} /> */}
                </View>
            </BottomSheet>

        </View>
    );
};

export default MainPage;
