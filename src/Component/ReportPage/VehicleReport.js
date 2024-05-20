import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native";
import ReportHeader from './ReportHeader'
import vehicle_report_styels from '../../Styles/ReportPage/VehicleReport.module'
import VehicleSelector from '../VehicleSelector'
import { LinearGradient } from 'expo-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { fetchLocationData, fetchItineraryData, } from "../../HelperFunction/api";
import DateTimeSelector from '../../Component/DateTimeSelector';
// import { calculateDuration } from '../../HelperFunction/DurationCalc'

const VehicleReport = ({ route }) => {
  const { vehiclesData } = route.params || {};
  const [itineraryData, setItineraryData] = useState();
  const [locData, setLocationData] = useState(null);
  const [selectedFromDate, setSelectedFromDate] = useState(new Date());
  const [selectedToDate, setSelectedToDate] = useState(new Date());

  // useEffect(() => {
  //   const yesterday = new Date();
  //   yesterday.setDate(yesterday.getDate() - 1);
  //   yesterday.setHours(0, 1, 0, 0); // Set time to 00:01:00 AM for IST
  //   setSelectedFromDate(yesterday);
  //   const today = new Date();
  //   setSelectedToDate(today);
  //   // console.log("Selected Yesterday Date and Time: ", yesterday, yesterday.toLocaleDateString(), yesterday.toLocaleTimeString());
  //   // console.log("Selected Today Date and Time: ", today);

  // }, []);

  useEffect(() => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const initialTime = new Date().toLocaleTimeString(); // Get current time string in local timezone
    // Convert yesterday to the desired timezone
    const timezoneOffset = yesterday.getTimezoneOffset();
    yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset);
    // Set selectedFromDate with adjusted timezone but keep the same time
    yesterday.setHours(0, 1, 0, 0); // Set time to 00:01:00 AM for adjusted timezone
    setSelectedFromDate(yesterday);
    const today = new Date();
    // Convert today to the desired timezone
    today.setMinutes(today.getMinutes() - timezoneOffset);
    // Set selectedToDate with adjusted timezone but keep the same time
    today.setHours(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()); // Set time to the current time for adjusted timezone
    setSelectedToDate(today);
    console.log("Selected To Date and Time: ", yesterday, yesterday.toLocaleString());
    console.log("Selected From Date and Time: ", today, today.toLocaleString());
  }, []);



  const setLocationFromApi = async (responseData) => {
    try {
      setLocationData(responseData.data[0]);
    } catch (error) {
      console.error("Error fetching location from API:", error);
    }
  };

  const fetchLocationFromApi = async (deviceId) => {
    try {
      const responseData = await fetchLocationData(deviceId, 1, 1);
      // console.log(vehiclesData?.vehicleNumber, "Fetched itinerary :", responseData);
      setLocationFromApi(responseData);
    } catch (error) {
      console.error("Error fetching location from API:", error);
    }
  };

  const fetchItinerary = async (imei, fromDate, toDate,) => {
    try {
      console.log("fD : ", fromDate.toLocaleString(), "tD :", toDate.toLocaleString());
      const iData = await fetchItineraryData(imei, fromDate, toDate,);
      console.log(iData);
      setItineraryData(iData);
    } catch (error) {
      console.error("Error fetching itinerary data:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (vehiclesData?.device_id) {
        fetchLocationFromApi(vehiclesData.device_id);
      }
    }, [vehiclesData])
  );

  useFocusEffect(
    useCallback(() => {
      if (locData?.imei) {
        const intervalId = setInterval(() => {
          // console.log("Selected From : ", selectedFromDate.toLocaleString(), "Selected To : ", selectedToDate.toLocaleString())
          fetchItinerary(locData.imei, selectedFromDate, selectedToDate);
        }, 6000); // 6 seconds interval
        return () => {
          console.log("Cleared Settime out for itinery of indiviual vehicle:");
          clearInterval(intervalId);
        };
      }
    }, [locData, selectedFromDate, selectedToDate])
  );

  useEffect(() => {
    if (selectedToDate < selectedFromDate) {
      // Alert the user if the TO date is earlier than the FROM date
      alert("Invalid Date Selection", "TO date cannot be earlier than FROM date.");
      setSelectedToDate(selectedFromDate);
    }
  }, [selectedFromDate, selectedToDate]);

  // useEffect(() => {
  //   // Convert selectedFromDate and selectedToDate to your desired timezone
  //   const fromDateTime = new Date(selectedFromDate);
  //   const toDateTime = new Date(selectedToDate);
  //   // Get timezone offset in minutes
  //   const timezoneOffset = fromDateTime.getTimezoneOffset();
  //   // Add timezone offset to convert to desired timezone
  //   fromDateTime.setMinutes(fromDateTime.getMinutes() - timezoneOffset);
  //   toDateTime.setMinutes(toDateTime.getMinutes() - timezoneOffset);
  //   // Convert dates to ISO strings
  //   const fromDateISO = fromDateTime.toISOString();
  //   const toDateISO = toDateTime.toISOString();
  //   // // Log the readable date and time
  //   // console.log("Selected From Date and Time: ", selectedFromDate.toLocaleString());
  //   // console.log("Selected To Date and Time: ", selectedToDate.toLocaleString());
  //   // console.log("Selected From Date and TimeISO: ", fromDateISO.toLocaleString());
  //   // console.log("Selected To Date and TimeISO: ", toDateISO.toLocaleString());
  // }, [selectedFromDate, selectedToDate]);

  return (
    <ScrollView style={vehicle_report_styels.scrollContainer}>
      <View style={vehicle_report_styels.vehicle_report_main_box}>
        <ReportHeader />
        <View style={vehicle_report_styels.vehicle_report_hr_line_box}></View>
        <View style={vehicle_report_styels.vehicle_report_vehicle_select}>
          <VehicleSelector />
        </View>
        <View style={{ marginTop: 15, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}>
          <Text>From:</Text>
          <View style={{}}>

            <DateTimeSelector
              value={selectedFromDate}
              onChange={(date) => setSelectedFromDate(date)}
              showPicker={false} // Do not show the picker by default
              disableFuture={true}
              disablePast={false}
            />
          </View>
          <Text>To:</Text>
          <View style={{}}>

            <DateTimeSelector
              value={selectedToDate}
              onChange={(date) => setSelectedToDate(date)}
              showPicker={false} // Do not show the picker by default
              disableFuture={true}
              disablePast={false}
              selectSameDayFuture={false}
            />
          </View>
        </View>

        <View style={[vehicle_report_styels.vehicle_report_hr_line_box, { marginTop: 0 }]}></View>

        <View style={vehicle_report_styels.vehicle_report_total_distance}>
          <View
            style={vehicle_report_styels.vehicle_report_total_distance_child1}
          >
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_total_dis_text}>
                Total distance Covered :{' '}
              </Text>
              <Text>Today</Text>
            </View>

            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_right
              }
            >
              <Text
                style={
                  vehicle_report_styels.vehicle_report_total_distance_child1_km
                }
              >
                KM
              </Text>
              <LinearGradient
                colors={['#2A77E3', '#051C3E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={
                  vehicle_report_styels.vehicle_report_total_distance_child1_per
                }
              >
                <Text style={vehicle_report_styels.vehicle_report_liner_per_text}>
                  %
                </Text>
              </LinearGradient>
            </View>
          </View>

          <View
            style={vehicle_report_styels.vehicle_report_total_distance_child2}
          >
            <View style={vehicle_report_styels.vehicle_report_dis_main_box}>
              <Text
                style={
                  vehicle_report_styels.vehicle_report_total_distance_child2_text
                }
              >
                {itineraryData?.distanceCovered || "00"}

              </Text>
              <Text style={vehicle_report_styels.vehicle_report_day}>Today</Text>
            </View>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_up_text}>
                10 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thick"
                size={30}
                color="#0AC15E"
              />
            </View>
            <View style={vehicle_report_styels.vehicle_report_dis_main_box}>
              <Text
                style={
                  vehicle_report_styels.vehicle_report_total_distance_child2_text
                }
              >
                No Data
              </Text>
              <Text style={vehicle_report_styels.vehicle_report_day}>
                Yesterday
              </Text>
            </View>
          </View>
        </View>

        <View
          style={vehicle_report_styels.vehicle_report_box}
        >
          <View style={vehicle_report_styels.vehicle_report_filter_box_main}>
            <LinearGradient
              colors={['#11D269', '#056430']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Running Time
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              {itineraryData?.driveTime || "00"}
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_down_text}>
                07 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-down-thick"
                size={30}
                color="#BF4545"
              />
            </View>
          </View>
          <View style={vehicle_report_styels.vehicle_report_filter_box_main}>
            <LinearGradient
              colors={['#F46E6E', '#8F1F1F']}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Stop Time
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              {itineraryData?.stoppageTime || "00"}
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_up_text}>
                10 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thick"
                size={30}
                color="#0AC15E"
              />
            </View>
          </View>
          <View style={vehicle_report_styels.vehicle_report_filter_box_main}>
            <LinearGradient
              colors={['#FFC121', '#6F5E03']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Idle Time
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              No Data
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_up_text}>
                10 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thick"
                size={30}
                color="#0AC15E"
              />
            </View>
          </View>
        </View>


        <View style={vehicle_report_styels.vehicle_report_top_avg_speed_box}>

          <View style={vehicle_report_styels.vehicle_report_top_avg_speed_box_child}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >

              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Top speed
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              {itineraryData?.maxSpeed || "00 KM/h"}
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_down_text}>
                01 KM/h
              </Text>
              <MaterialCommunityIcons
                name="arrow-down-thick"
                size={30}
                color="#BF4545"
              />
            </View>
          </View>
          <View style={vehicle_report_styels.vehicle_report_top_avg_speed_box_child}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Average Speed
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              {/* 70 KM/h */}
              {itineraryData?.avgSpeed || "00 KM/h"}
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_up_text}>
                05 KM/h
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thick"
                size={30}
                color="#0AC15E"
              />
            </View>
          </View>
        </View>


        <View
          style={vehicle_report_styels.vehicle_report_box}
        >
          <View style={vehicle_report_styels.vehicle_report_filter_box_main}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >

              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Over Speed Count
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              {itineraryData?.overSpeed || "00"}
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_down_text}>
                07 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-down-thick"
                size={30}
                color="#BF4545"
              />
            </View>
          </View>
          <View style={vehicle_report_styels.vehicle_report_filter_box_main}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Stoppage Count
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              {itineraryData?.stoppage || "00"}
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_up_text}>
                10 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thick"
                size={30}
                color="#0AC15E"
              />
            </View>
          </View>
          <View style={vehicle_report_styels.vehicle_report_filter_box_main}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Harsh Breaking
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              No Data
            </Text>
            <View
              style={
                vehicle_report_styels.vehicle_report_total_distance_child1_left
              }
            >
              <Text style={vehicle_report_styels.vehicle_report_up_text}>
                10 %
              </Text>
              <MaterialCommunityIcons
                name="arrow-up-thick"
                size={30}
                color="#0AC15E"
              />
            </View>
          </View>
        </View>



        <View style={vehicle_report_styels.vehicle_report_start_end_box}>

          <View style={vehicle_report_styels.vehicle_report_top_avg_speed_box_child}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                Set Odometer
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              No Data
            </Text>

          </View>
          <View style={vehicle_report_styels.vehicle_report_top_avg_speed_box_child}>
            <LinearGradient
              colors={['#2A77E3', '#051C3E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={vehicle_report_styels.vehicle_report_filter_boxs}
            >
              <Text style={vehicle_report_styels.vehicle_report_filter_boxs_text}>
                End Odometer
              </Text>
            </LinearGradient>
            <Text style={vehicle_report_styels.vehicle_report_filter_time}>
              No Data
            </Text>

          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default VehicleReport


// import { View, Text, TextInput } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import React, { useEffect, useState, useCallback } from 'react'
// import { useFocusEffect } from '@react-navigation/native'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import single_report_styels from '../../Styles/ReportPage/VehicleReports.module'
// import Theme from '../../Theme/theme'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import { fetchItineraryData } from '../../HelperFunction/api'
// import DateRangeSelector from '../DateSelector'
// import Running from '../../../assets/running.svg'
// import Stopped from '../../../assets/stopped.svg'
// import SpeedMeter from '../../../assets/speedometer.svg'
// import AvgSpeed from '../../../assets/avg_speed.svg';
// import Hourglass from '../../../assets/hourglass.svg';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// // import DateRangeSelector from '../../ReportsNav/DateRangeSelector'
// // import CarCrash from '../../../assets/car-crash.svg';
// // import vehicle_report_styels from '../../Styles/ReportPage/VehicleReport.module'
// // import { LinearGradient } from 'expo-linear-gradient'
// // import RadioBtn from '../HistoryPage/VehicleRadio';

// const VehicleReports = ({ navigation, route }) => {
//   const [searchText, setSearchText] = useState('')
// const { vehiclesData, locationData } = route.params || {}
// const [itineraryData, setItineraryData] = useState();
// const [checked, setChecked] = useState('current_day');
// const [fromDate, setFromDate] = useState('2024-01-01');
// const [toDate, setToDate] = useState('2024-01-02');

// useEffect(() => {
//   if (checked === "current_day") {
//     // console.log("checkedType : ", checked);
//     const yesterday = new Date()
//     yesterday.setDate(yesterday.getDate())
//     const initialTime = new Date().toLocaleTimeString() // Get current time string in local timezone
//     const timezoneOffset = yesterday.getTimezoneOffset()
//     yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset)
//     yesterday.setHours(0, 1, 0, 0) // Set time to 00:01:00 AM for adjusted timezone
//     const today = new Date()
//     today.setMinutes(today.getMinutes() - timezoneOffset)
//     today.setHours(
//       new Date().getHours(),
//       new Date().getMinutes(),
//       new Date().getSeconds(),
//       new Date().getMilliseconds(),
//     )
//     setFromDate(yesterday.toISOString());
//     setToDate(today.toISOString());
//     fetchItinerary(locationData.imei, yesterday, today)
//     // console.log(
//     //   'Selected from Date and Time: ',
//     //   yesterday,
//     //   yesterday.toLocaleString(),
//     // )
//     // console.log('Selected To Date and Time: ', today, today.toLocaleString())
//   }
//   else if (checked === "previous_day") {
//     // console.log("checkedType : ", checked);
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1); // Subtract one day
//     const timezoneOffset = yesterday.getTimezoneOffset();
//     yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset);
//     yesterday.setHours(0, 1, 0, 0);
//     const today = new Date();
//     today.setDate(today.getDate() - 1); // Subtract one day
//     today.setMinutes(today.getMinutes() - timezoneOffset);
//     today.setHours(23, 59, 59, 999);
//     setFromDate(yesterday.toISOString());
//     setToDate(today.toISOString());
//     fetchItinerary(locationData.imei, yesterday, today)
//     // console.log(
//     //   "Selected from Date and Time: ",
//     //   yesterday,
//     //   yesterday.toLocaleString()
//     // );
//     // console.log("Selected To Date and Time: ", today, today.toLocaleString());
//   } else if (checked === "week") {
//     // console.log("checkedType : ", checked);
//     const today = new Date();
//     const startOfWeek = new Date(today);
//     startOfWeek.setDate(startOfWeek.getDate() - today.getDay()); // Move to previous Sunday
//     startOfWeek.setHours(0, 1, 0, 0);
//     const timezoneOffset = today.getTimezoneOffset();
//     today.setMinutes(today.getMinutes() - timezoneOffset);
//     today.setHours(23, 59, 59, 999);
//     setFromDate(() => startOfWeek.toISOString());
//     setToDate(() => today.toISOString());
//     fetchItinerary(locationData.imei, startOfWeek, today)
//     // console.log(
//     //   "Selected from Date and Time (Week): ",
//     //   startOfWeek,
//     //   startOfWeek.toLocaleString()
//     // );
//     // console.log("Selected To Date and Time (Week): ", today, today.toLocaleString());
//   }
// }, [checked]);

// useEffect(() => {
//   // Parse fromDate and toDate strings into Date objects
//   const fromDateObject = new Date(fromDate);
//   const toDateObject = new Date(toDate);
//   if (checked === "custom_date") {
//     // console.log("itinerary called : ");
//     fetchItinerary(locationData?.imei, fromDateObject, toDateObject);
//   }
// }, [fromDate, toDate, checked]);

// const fetchItinerary = async (imei, fromDate, toDate) => {
//   try {
//     // console.log("Date : ", fromDate.toLocaleString(), toDate.toLocaleString());
//     const iData = await fetchItineraryData(imei, fromDate, toDate)
//     // console.log("it from fetch itineray: ")
//     setItineraryData(iData)
//   } catch (error) {
//     console.error('Error fetching itinerary data:', error)
//   }
// }

// useFocusEffect(
//   useCallback(() => {
//     if (locationData) {
//       setItineraryData(locationData.itinerary)
//     }
//   }, [locationData]),
// )

//   return (
//     <View style={{ width: '95%', alignSelf: 'center' }}>
//       <View style={single_report_styels.heading_box}>
//         <TouchableOpacity onPress={() => navigation.goBack("MyTabs")}>
//           <MaterialIcons name="arrow-back" size={30} color={Theme.black} />
//         </TouchableOpacity>


//         <Text style={single_report_styels.heading_text}>Report</Text>
//       </View>

//       <View style={single_report_styels.input_container}>
//         <Ionicons
//           name="search"
//           size={20}
//           color="gray"
//           style={single_report_styels.icon}
//         />
//         <TextInput
//           style={single_report_styels.input}
//           placeholder="HR 43 XXX 3434"
//           value={searchText}
//           onChangeText={(text) => setSearchText(text)}
//         />
//       </View>
//       {/* 
//       <View style={{ marginBottom: -8, marginTop: 15 }}>
//         <RadioBtn />
//       </View> */}

//       {/* calendar */}

//       {/* <View style={single_report_styels.cal_box}>
//         <View style={single_report_styels.cal_child_box}>
//           <Text style={single_report_styels.cal_child_text}>select Date</Text>
//           <View style={single_report_styels.cal_select_box}>
//             <Text style={single_report_styels.cal_text}>Calendar</Text>
//             <MaterialIcons
//               name="arrow-drop-down"
//               size={24}
//               color={Theme.blue.primary}
//             />
//           </View>
//         </View>

//         <View style={single_report_styels.cal_child_box}>
//           <Text style={single_report_styels.cal_child_text}>From</Text>
//           <View style={{}}>
//             <DateTimeSelector
//               value={selectedFromDate}
//               onChange={(date) => setSelectedFromDate(date)}
//               showPicker={false} // Do not show the picker by default
//               disableFuture={true}
//               disablePast={false}
//             />
//           </View>
//         </View>
//         <View style={single_report_styels.cal_child_box}>
//           <Text style={single_report_styels.cal_child_text}>To</Text>
//           <View style={{}}>
//             <DateTimeSelector
//               value={selectedToDate}
//               onChange={(date) => setSelectedToDate(date)}
//               showPicker={false} // Do not show the picker by default
//               disableFuture={true}
//               disablePast={false}
//               selectSameDayFuture={false}
//             />
//           </View>
//         </View>
//       </View> */}

//       <View style={{ marginTop: 10 }}>
//         <DateRangeSelector checked={checked} setChecked={setChecked} setFromDate={setFromDate} setToDate={setToDate} fromDate={fromDate} toDate={toDate} />
//       </View>

//       {/* today  */}

//       <View style={single_report_styels.distance_box}>
//         <View style={single_report_styels.distance_box_child}>
//           <Text style={single_report_styels.day_text}>Distance Covered :</Text>
//           <View style={single_report_styels.distance_flex_box}>
//             <Text style={single_report_styels.distance_text}>{itineraryData?.distanceCovered ?? "--"}</Text>
//             {/* <View style={single_report_styels.distance_flex_box2}>
//               <Text style={single_report_styels.increase_text}>+10</Text>
//               <MaterialCommunityIcons
//                 name="percent-outline"
//                 size={15}
//                 color={Theme.green}
//               />
//             </View> */}
//           </View>
//         </View>
//         {/* <View style={single_report_styels.distance_box_child}>
//           <Text style={single_report_styels.day_text}>Yesterday</Text>
//           <View style={single_report_styels.distance_flex_box}>
//             <Text style={single_report_styels.distance_text}>457 KM</Text>
//             <View style={single_report_styels.distance_flex_box2}>
//               <Text style={single_report_styels.decrease_text}>-10</Text>
//               <MaterialCommunityIcons
//                 name="percent-outline"
//                 size={15}
//                 color={Theme.red}
//               />
//             </View>
//           </View>
//         </View> */}
//       </View>

//       {/* running duration */}
//       <View style={single_report_styels.duration_box}>
//         <View style={single_report_styels.duration_child_box}>
//           <View style={single_report_styels.distance_flex_box}>
//             <Running height={34} width={34} fill={Theme.black} />
//             <Text style={single_report_styels.duration_text}>Running Duration</Text>
//           </View>

//           <Text style={single_report_styels.duration_time_text}>{itineraryData?.driveTime ?? "--"}</Text>

//           {/* <View
//             style={[
//               single_report_styels.duration_per_box,
//               { backgroundColor: Theme.green, padding: 2 },
//             ]}
//           >
//             <MaterialIcons name="call-made" size={15} color={Theme.black} />
//             <Text style={single_report_styels.duration_text}>10%</Text>
//           </View> */}
//         </View>

//         {/* <View style={single_report_styels.duration_child_box}> */}

//         <View style={single_report_styels.duration_child_box}>
//           <View style={single_report_styels.distance_flex_box}>
//             <Stopped height={34} width={35} fill={Theme.black} />
//             <Text style={single_report_styels.duration_text}>Stop {'\n'} Duration</Text>
//           </View>
//           {/* </View> */}

//           <Text style={single_report_styels.duration_time_text}>{itineraryData?.stoppageTime ?? "--"}</Text>

//           {/* <View
//             style={[
//               single_report_styels.duration_per_box,
//               { backgroundColor: Theme.red, padding: 2 },
//             ]}
//           >
//             <MaterialIcons name="south-west" size={15} color={Theme.black} />
//             <Text style={single_report_styels.duration_text}>7%</Text>
//           </View> */}
//         </View>
//       </View>

//       {/* speed */}

//       <View style={single_report_styels.distance_box}>
//         <View style={single_report_styels.distance_box_child}>
//           <View style={single_report_styels.distance_flex_box}>
//             <SpeedMeter height={36} width={36} fill={Theme.black} />
//             <Text style={single_report_styels.day_text}>Top Speed</Text>
//           </View>

//           <View style={single_report_styels.distance_flex_box}>
//             <Text style={single_report_styels.speed_text}>{itineraryData?.maxSpeed ?? "--"}</Text>
//             <View style={single_report_styels.distance_flex_box}>
//             </View>
//           </View>
//         </View>
//       </View>

//       <View style={{ width: '100%', flexDirection: 'row', gap: 10, marginBottom: 10 }}  >
//         <View style={single_report_styels.horizontal_scroll_box}>
//           <View style={single_report_styels.distance_flex_box}>
//             <AvgSpeed height={36} width={36} fill={Theme.black} />
//             <Text style={single_report_styels.scroll_child_flex_box}>Over Speed Count</Text>
//           </View>
//           <View style={single_report_styels.distance_flex_box}>
//             <Text style={single_report_styels.speed_count_text}>{itineraryData?.overSpeed ?? "--"}</Text>
//           </View>
//         </View>

//         <View style={single_report_styels.horizontal_scroll_box}>
//           <View style={single_report_styels.distance_flex_box}>
//             <Hourglass height={36} width={36} fill={Theme.black} />
//             <Text style={single_report_styels.scroll_child_flex_box}>Stoppage Count</Text>
//           </View>
//           <View style={single_report_styels.distance_flex_box}>
//             <Text style={single_report_styels.speed_count_text}>{itineraryData?.stoppage ?? "--"}</Text>

//           </View>
//         </View>

//         {/* <View style={single_report_styels.horizontal_scroll_box}>
//           <View style={single_report_styels.distance_flex_box}>
//             <CarCrash height={20} width={20} fill={Theme.black} />
//             <Text style={single_report_styels.scroll_child_flex_box}>Harsh Breaking</Text>
//           </View>
//           <View style={single_report_styels.distance_flex_box}>
//             <Text style={single_report_styels.speed_count_text}>--</Text>
//           </View>
//         </View> */}


//       </View>

//       <View style={single_report_styels.distance_box_child}>
//         <View style={single_report_styels.distance_flex_box}>
//           <AvgSpeed height={36} width={36} fill={Theme.black} />
//           <Text style={single_report_styels.day_text}>Averag Speed</Text>
//         </View>

//         <View style={single_report_styels.distance_flex_box}>
//           <Text style={single_report_styels.speed_text}>{itineraryData?.avgSpeed ?? "--"}</Text>
//         </View>
//       </View>


//       {/* odometer */}
//       {/* <View style={single_report_styels.odometer_box}> */}

//       {/* <View style={single_report_styels.duration_child_box}> */}
//       {/* <LinearGradient
//     colors={['#2A77E3', '#051C3E']}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 1 }}
//     style={single_report_styels.odometer_flex_box}
//   >
//     <Text style={single_report_styels.odometer_heading_text}>
//       Set Odometer
//     </Text>
//     <Text style={single_report_styels.odometer_text}>
//     No Data
//   </Text>
//   </LinearGradient> */}


//       {/* </View> */}

//       {/* <View style={single_report_styels.duration_child_box}> */}
//       {/* <LinearGradient
//     colors={['#2A77E3', '#051C3E']}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 1 }}
//     style={single_report_styels.odometer_flex_box}
//   >
//     <Text style={single_report_styels.odometer_heading_text}>
//       End Odometer
//     </Text>
//     <Text style={single_report_styels.odometer_text}>
//     No Data
//   </Text>
//   </LinearGradient> */}


//       {/* </View> */}
//       {/* </View> */}
//     </View>
//   )
// }

// export default VehicleReports

