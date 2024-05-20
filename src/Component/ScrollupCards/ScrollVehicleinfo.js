import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import scrollVehicleinfoStyle from "../../Styles/ScrollupCards/ScrollVehicleinfo.module";
import { LinearGradient } from "expo-linear-gradient";
import SwitchButton from "./SwitchButton";
import MapDriverInfo from "./MapDriverInfo";
import Theme from "../../Theme/theme";
// import VehicleReport from "../../Component/ReportPage/VehicleReport";
// import DeviceDetails from '.././SwipeableCards /DeviceDetails';
// import BottomSheet from '../../Component/BottomSheet/BottomSheet';
// import DriverInfo from './DriverInfo'

const ScrollVehicleinfo = ({
  locData,
  vehiclesData,
  odometer,
  itineraryData
}) => {
  const [meter, setMeter] = useState(0),
    [locDataId, setLocDataId] = useState(null);
  let runningText = 'No info';
  // const [imei, setImei] = useState(),
  // [meter, setMeter] = useState(parseFloat(vehiclesData?.odometer ?? 0)),
  // distanceAsFloat = parseFloat(odometer?.distance ?? 0),
  // newOdometerValue = meter + distanceAsFloat;
  // console.log(newOdometerValue);
  // setMeter(newOdometerValue);
  useEffect(() => {
    setLocDataId(locData?._id ?? undefined);
    // Update meter when odometer changes
    const newDistance = parseFloat(odometer?.distance ?? 0);
    setMeter((prevMeter) => prevMeter + newDistance);
  }, [odometer]);

  const speed = (locData?.location?.speed) || 0;
  let gradientColors = [];
  if (speed === 0) {
    runningText = 'Stopped'
    gradientColors = [
      Theme.blue.gradient.expire.start,
      Theme.blue.gradient.expire.end,
    ];
  } else if (speed > 50) {
    runningText = 'Running'
    gradientColors = [
      Theme.blue.gradient.stopped.start,
      Theme.blue.gradient.stopped.end,
    ];
  } else {

    runningText = 'Running'
    if (speed == (null || undefined)) {
      runningText = "No Info."
    }
    gradientColors = [
      Theme.blue.gradient.running.start,
      Theme.blue.gradient.running.end,
    ];
  }




  return (
    <View style={scrollVehicleinfoStyle.scrollcardContainer}>
      <View style={scrollVehicleinfoStyle.row}>
        <View style={scrollVehicleinfoStyle.vehicleInfo}>
          <Text style={scrollVehicleinfoStyle.vehicleOdoText}>Vehicle No</Text>
          <View style={scrollVehicleinfoStyle.vehiclePlate}>
            <Text style={scrollVehicleinfoStyle.text}>
              {vehiclesData?.vehicleNumber}
            </Text>
          </View>
        </View>

        <View style={scrollVehicleinfoStyle.speedBoxCircle}>
          <Text style={scrollVehicleinfoStyle.speed}>{speed}</Text>
          <Text style={scrollVehicleinfoStyle.speed_km}>Km / h</Text>
          <View style={scrollVehicleinfoStyle.speedImageWrapper}>
            <LinearGradient
              colors={gradientColors}
              style={scrollVehicleinfoStyle.speedImage}
            >
              <View>
                <Text style={scrollVehicleinfoStyle.bottom_speed}>Speed</Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View style={scrollVehicleinfoStyle.odoMeterWrap}>
          <Text style={scrollVehicleinfoStyle.vehicleOdoText}>Odometer</Text>
          <View style={scrollVehicleinfoStyle.odoMeter}>
            <Text style={scrollVehicleinfoStyle.reading}>
              {(meter / 1000).toFixed(1)}
            </Text>
            <View style={scrollVehicleinfoStyle.kmTextContainer}>
              <Text style={scrollVehicleinfoStyle.kmText}>Km</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={scrollVehicleinfoStyle.rowOverRide}>
        <View style={scrollVehicleinfoStyle.scrolladdess_info_box}>
          <Text style={scrollVehicleinfoStyle.scrolladdess_info_text}>
            Add:
          </Text>
          <Text
            numberOfLines={2}
            style={scrollVehicleinfoStyle.scrolladdess_loc_text}
          >
            {locData?.location?.address}
          </Text>
        </View>

        <View style={scrollVehicleinfoStyle.upadte_flex_container}>
          <View style={scrollVehicleinfoStyle.update_white_box}>
            <LinearGradient
              colors={[
                Theme.blue.gradient.all.start,
                Theme.blue.gradient.all.end,
              ]}
              style={scrollVehicleinfoStyle.update_white_box_child}
            >
              <View style={scrollVehicleinfoStyle.update_white_text_box}>
                <Text style={scrollVehicleinfoStyle.upadte_color_text}>
                  Last Updated
                </Text>
              </View>
            </LinearGradient>
            <View style={scrollVehicleinfoStyle.update_white_text_box}>
              <Text style={scrollVehicleinfoStyle.update_white_text}>
                {locData?.heartbeat?.timestamp &&
                  new Date(locData.heartbeat.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
              </Text>
            </View>
          </View>
          <View style={scrollVehicleinfoStyle.update_white_box}>
            <LinearGradient
              colors={
                //   [
                //   Theme.blue.gradient.running.start,
                //   Theme.blue.gradient.running.end,
                // ]
                gradientColors
              }
              style={scrollVehicleinfoStyle.update_white_box_child}
            >
              <View style={scrollVehicleinfoStyle.update_white_text_box}>
                <Text style={scrollVehicleinfoStyle.upadte_color_text}>
                  Status
                </Text>
              </View>
            </LinearGradient>
            <View style={scrollVehicleinfoStyle.update_white_text_box}>
              <Text style={scrollVehicleinfoStyle.update_white_text}>
                {/* {parseInt(odometer?.speed)} */}
                {runningText || "No Data"}
              </Text>
            </View>
          </View>
          <View style={scrollVehicleinfoStyle.update_white_box}>
            <LinearGradient
              colors={[
                Theme.blue.gradient.all.start,
                Theme.blue.gradient.all.end,
              ]}
              style={scrollVehicleinfoStyle.update_white_box_child}
            >
              <View style={scrollVehicleinfoStyle.update_white_text_box}>
                <Text style={scrollVehicleinfoStyle.upadte_color_text}>
                  Today KM
                </Text>
              </View>
            </LinearGradient>

            <View style={scrollVehicleinfoStyle.update_white_text_box}>
              <Text style={scrollVehicleinfoStyle.update_white_text}>
                {itineraryData?.distanceCovered || "No Data"}
              </Text>
            </View>
          </View>
        </View>

        <View style={scrollVehicleinfoStyle.switchBoxContainer}>
          <SwitchButton locData={locData} vehiclesData={vehiclesData} />
        </View>

        <View style={scrollVehicleinfoStyle.driverContainer}>
          <MapDriverInfo locDataId={locDataId} />
        </View>

        {/* <View style={[scrollVehicleinfoStyle.expandedBox_main]}>
          <TouchableOpacity style={scrollVehicleinfoStyle.expanded_details_box} onPress={onPressDetails}>
            <LinearGradient
              colors={[
                Theme.blue.gradient.all.start,
                Theme.blue.gradient.all.end,
              ]}
              style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 35, borderRadius: 5 }}
            >
              <Text style={scrollVehicleinfoStyle.expanded_text1}>Details</Text>
            </LinearGradient>
          </TouchableOpacity>

          <LinearGradient
            colors={[
              Theme.blue.gradient.all.start,
              Theme.blue.gradient.all.end,
            ]}
            style={scrollVehicleinfoStyle.expanded_details_box}
          >
            <TouchableOpacity onPress={onReportsPress}>
              <Text style={scrollVehicleinfoStyle.expanded_text1}>Reports</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={[
              Theme.blue.gradient.all.start,
              Theme.blue.gradient.all.end,
            ]}
            style={scrollVehicleinfoStyle.expanded_details_box}
          >
            <TouchableOpacity onPress={onShareTripPress}>
              <Text style={scrollVehicleinfoStyle.expanded_text1}>
                Share Trip
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> */}

      </View>
    </View>
  );
};

export default ScrollVehicleinfo;
