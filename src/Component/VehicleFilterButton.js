import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Theme from "../Theme/theme";
import CardList from "./CardList";
import { card_styles } from "../Styles/VehicleFilterButton.module";

const VehicleFilterButton = ({ runningStat, navigation }) => {
  const [selectedButton, setSelectedButton] = useState("All");
  const data = [
    {
      gradientColors: [Theme.blue.gradient.all.start, Theme.blue.gradient.all.end],
      name: Theme.vehiclefilter.all,
      total: runningStat?.totalCount ?? "--",
      borderColor: Theme.blue.gradient.all.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.running.start,
        Theme.blue.gradient.running.end,
      ],
      name: Theme.vehiclefilter.running,
      total: runningStat?.runningCount ?? "--",
      borderColor: Theme.blue.gradient.running.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.stopped.start,
        Theme.blue.gradient.stopped.end,
      ],
      name: Theme.vehiclefilter.stopped,
      total: runningStat?.stoppedCount ?? "--",
      borderColor: Theme.blue.gradient.stopped.start,
    },
    {
      gradientColors: [Theme.blue.gradient.idle.start, Theme.blue.gradient.idle.end],
      name: Theme.vehiclefilter.idle,
      total: runningStat?.idleCount ?? "--",
      borderColor: Theme.blue.gradient.idle.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.nodata.start,
        Theme.blue.gradient.nodata.end,
      ],
      name: Theme.vehiclefilter.nodata,
      total: runningStat?.noInfoCount ?? "--",
      borderColor: Theme.blue.gradient.nodata.start,
    },
    {
      gradientColors: [
        Theme.blue.gradient.expire.start,
        Theme.blue.gradient.expire.end,
      ],
      name: Theme.vehiclefilter.expire,
      total: runningStat?.expiryCount ?? "--",
      borderColor: Theme.blue.gradient.expire.start,
    },
    {
      gradientColors: [Theme.blue.gradient.park.start, Theme.blue.gradient.park.end],
      name: Theme.vehiclefilter.park,
      total: "00",
      borderColor: Theme.blue.gradient.park.start,
    }
  ];
  const isSelected = (buttonName) => selectedButton === buttonName;
  const zoomInStyle = (buttonName) => {
    const scaleFactor = isSelected(buttonName) ? 1.2 : 1,
      fontSize = isSelected(buttonName)
        ? Theme.font.xlarge1 * scaleFactor
        : Theme.font.xlarge1,
      textWidth = isSelected(buttonName) ? 60 * scaleFactor : 60,
      totalfontSize = isSelected(buttonName)
        ? Theme.font.small * scaleFactor
        : Theme.font.small,
      totalheight = isSelected(buttonName) ? 57 * scaleFactor : 57;

    return {
      fontSize: fontSize,
      textWidth: textWidth,
      totalfontSize: totalfontSize,
      height: totalheight,
    };
  };

  // useEffect(() => {
  //   console.log("Running vehicle :", runningStat);
  // }, [runningStat]);

  return (
    <View style={{ backgroundColor: "transparent", flex: 1 }}>
      <View style={card_styles.cardSection}>
        <ScrollView
          horizontal
          contentContainerStyle={card_styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                card_styles.buttonContainer,
                {
                  height: zoomInStyle(item.name).height,
                  top: isSelected(item.name) ? 0 : 6,
                  width: zoomInStyle(item.name).textWidth,
                },
              ]}
              onPress={() => {
                setSelectedButton(item.name);
                // Handle button press here
              }}
            >
              <LinearGradient
                colors={item.gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[StyleSheet.absoluteFill, { borderRadius: 5 }]}
              />
              <Text
                style={[
                  card_styles.total_btn_text,
                  { fontSize: zoomInStyle(item.name).fontSize },
                ]}
              >
                {item.total}
              </Text>
              <View
                style={[
                  card_styles.filter_btn_child,
                  {
                    borderColor: item.shadow,
                  },
                ]}
              >
                <Text
                  style={[
                    card_styles.filter_btn_text,
                    {
                      fontSize: zoomInStyle(item.name).totalfontSize,

                      color: isSelected(item.name)
                        ? Theme.greyDark
                        : Theme.greyLight,
                    },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={card_styles.selectedButtonContainer}>
        <Text style={card_styles.selectedButtonText}>
          {selectedButton} Vehicles :
        </Text>
      </View>

      {/* <CardList /> */}
    </View>
  );
};

export default VehicleFilterButton;



// import React, { useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import Theme from "../Theme/theme";
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   // ScrollView,
// } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import CardList from "./CardList";
// const windowWidth = Dimensions.get("window").width,
//   VehicleFilterButton = () => {
//     const [selectedButton, setSelectedButton] = useState("All"),
//       data = [
//         {
//           gradientColors: [
//             Theme.blue.gradient.all.start,
//             Theme.blue.gradient.all.end,
//           ],
//           name: Theme.vehiclefilter.all,
//           total: "99",
//           borderColor: Theme.blue.gradient.all.start,
//           // shadow: Theme.blue.gradient.all.shadow,
//         },
//         {
//           gradientColors: [
//             Theme.blue.gradient.running.start,
//             Theme.blue.gradient.running.end,
//           ],
//           name: Theme.vehiclefilter.running,
//           total: "01",
//           borderColor: Theme.blue.gradient.running.start,
//           // shadow: Theme.blue.gradient.running.shadow,
//         },
//         {
//           gradientColors: [
//             Theme.blue.gradient.stopped.start,
//             Theme.blue.gradient.stopped.end,
//           ],
//           name: Theme.vehiclefilter.stopped,
//           total: "03",
//           borderColor: Theme.blue.gradient.stopped.start,
//           // shadow: Theme.blue.gradient.stopped.shadow,
//         },
//         {
//           gradientColors: [
//             Theme.blue.gradient.idle.start,
//             Theme.blue.gradient.idle.end,
//           ],
//           name: Theme.vehiclefilter.idle,
//           total: "01",
//           borderColor: Theme.blue.gradient.idle.start,
//           // shadow: Theme.blue.gradient.idle.shadow,
//         },
//         {
//           gradientColors: [
//             Theme.blue.gradient.park.start,
//             Theme.blue.gradient.park.end,
//           ],
//           name: Theme.vehiclefilter.park,
//           total: "02",
//           borderColor: Theme.blue.gradient.park.start,
//           // shadow: Theme.blue.gradient.park.shadow,
//         },
//         {
//           gradientColors: [
//             Theme.blue.gradient.nodata.start,
//             Theme.blue.gradient.nodata.end,
//           ],
//           name: Theme.vehiclefilter.nodata,
//           total: "05",
//           borderColor: Theme.blue.gradient.nodata.start,
//           // shadow: Theme.blue.gradient.nodata.shadow,
//         },
//         {
//           gradientColors: [
//             Theme.blue.gradient.expire.start,
//             Theme.blue.gradient.expire.end,
//           ],
//           name: Theme.vehiclefilter.expire,
//           total: "01",
//           borderColor: Theme.blue.gradient.expire.start,
//           // shadow: Theme.blue.gradient.expire.shadow,
//         },
//       ],
//       isSelected = (buttonName) => selectedButton === buttonName,
//       zoomInStyle = (buttonName) => {
//         const scaleFactor = isSelected(buttonName) ? 1.2 : 1,
//           fontSize = isSelected(buttonName)
//             ? Theme.font.xlarge1 * scaleFactor
//             : Theme.font.xlarge1,
//           textWidth = isSelected(buttonName) ? 60 * scaleFactor : 60,
//           totalfontSize = isSelected(buttonName)
//             ? Theme.font.small * scaleFactor
//             : Theme.font.small,
//           totalheight = isSelected(buttonName) ? 57 * scaleFactor : 57;

//         return {
//           fontSize: fontSize,
//           textWidth: textWidth,
//           totalfontSize: totalfontSize,
//           height: totalheight,
//         };
//       };

//     return (
//       <View style={{ backgroundColor: 'transparent', flex: 1 }}>
//         <View style={card_styles.cardSection}>
//           <ScrollView
//             horizontal
//             contentContainerStyle={card_styles.scrollViewContent}
//             showsHorizontalScrollIndicator={false}
//           >
//             {data.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   card_styles.buttonContainer,
//                   {
//                     height: zoomInStyle(item.name).height,
//                     top: isSelected(item.name) ? 0 : 6,
//                     width: zoomInStyle(item.name).textWidth,
//                   },
//                 ]}
//                 onPress={() => {
//                   setSelectedButton(item.name);
//                   // Handle button press here
//                 }}
//               >
//                 <LinearGradient
//                   colors={item.gradientColors}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 1 }}
//                   style={[StyleSheet.absoluteFill, { borderRadius: 5 }]}
//                 />
//                 <Text
//                   style={[
//                     card_styles.total_btn_text,
//                     { fontSize: zoomInStyle(item.name).fontSize },
//                   ]}
//                 >
//                   {item.total}
//                 </Text>
//                 <View
//                   style={[
//                     card_styles.filter_btn_child,
//                     {
//                       borderColor: item.shadow,
//                     },
//                   ]}
//                 >
//                   <Text
//                     style={[
//                       card_styles.filter_btn_text,
//                       {
//                         fontSize: zoomInStyle(item.name).totalfontSize,

//                         color: isSelected(item.name)
//                           ? Theme.greyDark
//                           : Theme.greyLight,
//                       },
//                     ]}
//                   >
//                     {item.name}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>


//         <View style={card_styles.selectedButtonContainer}>
//           <Text style={card_styles.selectedButtonText}>
//             {selectedButton} Vehicles :
//           </Text>
//         </View>

//         <CardList />
//         {/* <Text style={{ alignSelf: 'center' }}>Comming Soon...</Text> */}
//       </View>
//     );
//   };

// const card_styles = StyleSheet.create({
//   cardSection: {
//     height: 75,
//     // borderWidth: .5,
//     // backgroundColor: 'red',
//   },
//   scrollViewContent: {
//     gap: 10,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   buttonContainer: {
//     alignItems: "center",
//   },
//   filter_btn_child: {
//     backgroundColor: Theme.white,
//     alignItems: "center",
//     borderRadius: 4,
//     // borderWidth: 2,
//     alignSelf: "stretch",
//     margin: 2,
//   },

//   filter_btn_text: {
//     color: Theme.white,
//     fontSize: Theme.font.small,
//     fontWeight: Theme.font.fat,
//   },

//   total_btn_text: {
//     flexDirection: "row",
//     flexGrow: 1,
//     flexShrink: 1,
//     color: Theme.white,
//     fontWeight: Theme.font.bold,
//     // fontSize
//   },

//   selectedButtonContainer: {
//     // borderWidth: .2,
//     backgroundColor: 'transparent',
//     marginLeft: 10,
//     marginRight: 10,
//   },

//   selectedButtonText: {
//     fontSize: 16,
//     fontWeight: Theme.font.bold,
//     color: Theme.heading,
//   },
// });

// export default VehicleFilterButton;

