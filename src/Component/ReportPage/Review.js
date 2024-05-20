import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import single_report_styels from '../../Styles/ReportPage/Review.module'
import Theme from '../../Theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  // fetchLocationData,
  fetchItineraryData
} from '../../HelperFunction/api'
import Running from '../../../assets/running_duration.svg';
import StoppedSvg from '../../../assets/stop_duration.svg';
import SpeedMeter from '../../../assets/top_speed.svg';
import AvgSpeed from '../../../assets/avg_speed.svg';
import CarCrash from '../../../assets/harsh_breaking.svg';
import DateRangeSelector from '../DateSelector'
import SpeedSvg from '../../../assets/top_speed_filled.svg';

// import DateRangeSelector from '../../ReportsNav/DateRangeSelector';

const VehicleReports = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState('')
  const { vehiclesData, locationData } = route.params || {}
  const [itineraryData, setItineraryData] = useState();
  // const [selectedType, setSelectedType] = useState('Yesterday');
  const [checked, setChecked] = useState('current_day');
  const [fromDate, setFromDate] = useState('2024-01-01');
  const [toDate, setToDate] = useState('2024-01-02');


  // useEffect(() => { console.log("vehicle Data from Review.js", vehiclesData?.vehicleNumber) }, [vehiclesData]);
  useEffect(() => {
    if (checked === "current_day") {
      // console.log("checkedType : ", checked);
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate())
      const initialTime = new Date().toLocaleTimeString() // Get current time string in local timezone
      const timezoneOffset = yesterday.getTimezoneOffset()
      yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset)
      yesterday.setHours(0, 1, 0, 0) // Set time to 00:01:00 AM for adjusted timezone
      const today = new Date()
      today.setMinutes(today.getMinutes() - timezoneOffset)
      today.setHours(
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
        new Date().getMilliseconds(),
      )
      setFromDate(yesterday.toISOString());
      setToDate(today.toISOString());
      fetchItinerary(locationData.imei, yesterday, today)
      // console.log(
      //   'Selected from Date and Time: ',
      //   yesterday,
      //   yesterday.toLocaleString(),
      // )
      // console.log('Selected To Date and Time: ', today, today.toLocaleString())
    }
    else if (checked === "previous_day") {
      // console.log("checkedType : ", checked);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1); // Subtract one day
      const timezoneOffset = yesterday.getTimezoneOffset();
      yesterday.setMinutes(yesterday.getMinutes() - timezoneOffset);
      yesterday.setHours(0, 1, 0, 0);
      const today = new Date();
      today.setDate(today.getDate() - 1); // Subtract one day
      today.setMinutes(today.getMinutes() - timezoneOffset);
      today.setHours(23, 59, 59, 999);
      setFromDate(yesterday.toISOString());
      setToDate(today.toISOString());
      fetchItinerary(locationData.imei, yesterday, today)
      // console.log(
      //   "Selected from Date and Time: ",
      //   yesterday,
      //   yesterday.toLocaleString()
      // );
      // console.log("Selected To Date and Time: ", today, today.toLocaleString());
    } else if (checked === "week") {
      // console.log("checkedType : ", checked);
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(startOfWeek.getDate() - today.getDay()); // Move to previous Sunday
      startOfWeek.setHours(0, 1, 0, 0);
      const timezoneOffset = today.getTimezoneOffset();
      today.setMinutes(today.getMinutes() - timezoneOffset);
      today.setHours(23, 59, 59, 999);
      setFromDate(() => startOfWeek.toISOString());
      setToDate(() => today.toISOString());
      fetchItinerary(locationData.imei, startOfWeek, today)
      // console.log(
      //   "Selected from Date and Time (Week): ",
      //   startOfWeek,
      //   startOfWeek.toLocaleString()
      // );
      // console.log("Selected To Date and Time (Week): ", today, today.toLocaleString());
    }
  }, [checked]);

  useEffect(() => {
    // Parse fromDate and toDate strings into Date objects
    const fromDateObject = new Date(fromDate);
    const toDateObject = new Date(toDate);
    if (checked === "custom_date") {
      // console.log("itinerary called : ");
      fetchItinerary(locationData?.imei, fromDateObject, toDateObject);
    }
  }, [fromDate, toDate, checked]);

  const fetchItinerary = async (imei, fromDate, toDate) => {
    try {
      console.log("Date : ", fromDate.toLocaleString(), toDate.toLocaleString());
      const iData = await fetchItineraryData(imei, fromDate, toDate)
      // console.log("it from fetch itineray: ")
      setItineraryData(iData)
    } catch (error) {
      console.error('Error fetching itinerary data:', error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (locationData) {
        setItineraryData(locationData.itinerary)
      }
    }, [locationData]),
  )


  return (
    <View style={{ width: '95%', alignSelf: 'center' }}>
      <View style={single_report_styels.heading_box}>
        <TouchableOpacity onPress={() => navigation.goBack("MyTabs")}>
          <MaterialIcons name="arrow-back" size={30} color={Theme.black} />
        </TouchableOpacity>
        <Text style={single_report_styels.heading_text}>Review</Text>
        <View style={single_report_styels.input_container}>
          <Text style={single_report_styels.vehicleNumer}>{vehiclesData?.vehicleNumber ?? "--"}</Text>
        </View>
      </View>


      <View style={{ marginTop: 10 }}>
        <DateRangeSelector checked={checked} setChecked={setChecked} setFromDate={setFromDate} setToDate={setToDate} fromDate={fromDate} toDate={toDate} />
      </View>

      {/* today  */}

      {/* <View style={single_report_styels.distance_box}> */}
      <View style={single_report_styels.distance_box_child}>
        <Text style={single_report_styels.day_text}>Total Distance Covered :</Text>
        <View style={single_report_styels.distance_flex_box}>
          <Text style={single_report_styels.distance_text}>{itineraryData?.distanceCovered ?? "--"}</Text>

        </View>
      </View>
      {/* </View> */}

      {/* running duration */}
      <View style={single_report_styels.duration_box}>
        <View style={single_report_styels.duration_child_box}>
          <View style={single_report_styels.distance_flex_box}>
            <Running height={30} width={30} fill={Theme.green} />
            <Text style={single_report_styels.running_duration_text}>Running Duration</Text>
          </View>

          <Text style={single_report_styels.duration_time_text}>{itineraryData?.driveTime ?? "--"}</Text>

        </View>

        <View style={single_report_styels.duration_child_box}>
          <View style={single_report_styels.distance_flex_box}>
            <StoppedSvg height={30} width={30} fill={Theme.red} />
            <Text style={single_report_styels.stop_duration_text}>Stop {'\n'} Duration</Text>
          </View>
          <Text style={single_report_styels.duration_time_text}>{itineraryData?.stoppageTime ?? "--"}</Text>
        </View>
      </View>

      {/* speed */}
      <View style={{ flexDirection: 'row', gap: 20, marginTop: 10 }}>
        {/* <View style={[single_report_styels.distance_box, ]}>
        <View style={single_report_styels.distance_box_child1}>
          <View style={single_report_styels.distance_flex_box}>
            <SpeedMeter height={30} width={30} fill={Theme.blue.primary} />
            <Text style={single_report_styels.day_text}>Top Speed</Text>
          </View>

          <View style={single_report_styels.distance_flex_box}>
            <Text style={single_report_styels.speed_text}>{itineraryData?.maxSpeed ?? "--"}</Text>
          </View>
        </View>
      </View> */}

        <View style={single_report_styels.distance_box_child1}>
          {/* <View style={single_report_styels.distance_flex_box}> */}
          <Text style={single_report_styels.speed_heading_text}>Top Speed</Text>
          <SpeedSvg height={42} width={42} fill={Theme.blue.primary} />
          {/* </View> */}
          <View style={single_report_styels.distance_flex_box}>
            <Text style={single_report_styels.speed_text}>{itineraryData?.maxSpeed ?? "--"}</Text>
          </View>
        </View>

        <View style={single_report_styels.distance_box_child1}>
          {/* <View style={single_report_styels.distance_flex_box}> */}
          <Text style={single_report_styels.speed_heading_text}>Over Speed Count</Text>
          <SpeedSvg height={42} width={42} fill={Theme.blue.primary} />
          {/* </View> */}

          <View style={single_report_styels.distance_flex_box}>
            <Text style={single_report_styels.speed_text}>{itineraryData?.overSpeed ?? "--"}</Text>
          </View>
        </View>

        <View style={single_report_styels.distance_box_child1}>
          {/* <View style={single_report_styels.distance_flex_box}> */}
          <Text style={single_report_styels.speed_heading_text}>Average Speed</Text>
          <SpeedSvg height={42} width={42} fill={Theme.blue.primary} />
          {/* </View> */}

          <View style={single_report_styels.distance_flex_box}>
            <Text style={single_report_styels.speed_text}>{itineraryData?.avgSpeed ?? "--"}</Text>
          </View>
        </View>
      </View>

      <View style={single_report_styels.speed_info_box}>
        {/* <View style={single_report_styels.horizontal_scroll_box}>
          <View style={single_report_styels.distance_flex_box}>
            <SpeedMeter height={30} width={30} fill={Theme.blue.primary} />
            <Text style={single_report_styels.scroll_child_flex_box}>Over Speed Count</Text>
          </View>
          <View style={single_report_styels.distance_flex_box}>
            <Text style={single_report_styels.speed_count_text}>{itineraryData?.overSpeed ?? "--"}</Text>
          </View>
        </View> */}
        <View style={single_report_styels.horizontal_scroll_box}>
          <View style={single_report_styels.distance_flex_box}>
            <CarCrash height={30} width={30} fill={Theme.blue.primary} />
            <Text style={single_report_styels.scroll_child_flex_box}>Harsh Breaking</Text>
          </View>
          <Text style={single_report_styels.speed_count_text}>--</Text>
        </View>

        <View style={single_report_styels.horizontal_scroll_box}>
          <View style={single_report_styels.distance_flex_box}>
            <SpeedMeter height={30} width={30} fill={Theme.blue.primary} />
            <Text style={single_report_styels.scroll_child_flex_box}>Sharp Turn</Text>
          </View>
          <View style={single_report_styels.distance_flex_box}>
            <Text style={single_report_styels.speed_count_text}>{itineraryData?.overSpeed ?? "--"}</Text>
          </View>
        </View>
      </View>


      {/* <View style={single_report_styels.speed_info_box}>
        
        <View style={single_report_styels.horizontal_scroll_box}>

          <TouchableOpacity style={single_report_styels.download_box}>
            <Text style={single_report_styels.download_text}>Download Daily {'\n'} Reports</Text>
            <MaterialIcons name='file-download' size={30} color={Theme.blue.primary} />
          </TouchableOpacity>
        </View>

        <View style={single_report_styels.horizontal_scroll_box}>

          <TouchableOpacity style={single_report_styels.download_box}>
            <Text style={single_report_styels.download_text}>Download Distance Reports</Text>
            <MaterialIcons name='file-download' size={30} color={Theme.blue.primary} />
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  )
}

export default VehicleReports