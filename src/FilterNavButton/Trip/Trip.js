import { useState, useEffect, useCallback } from 'react';
import { StatusBar, Text, View, useRef } from 'react-native'
import trip_styles from '../../Styles/FilterNavButton/Trip/Trip.module'
import { useFocusEffect } from "@react-navigation/native";
// import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import ActiveAllFilterButton from '../ActiveAllFilterButton';
import TripFilterButton from './TripFilterButton';
import TripCard from './TripCard';
import { getTripsByOperatorId } from '../../HelperFunction/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SearchSvg from '../../../assets/search.svg'
import CommonHeader from '../../Component/SideDrawerPages/CommonHeader';
import Theme from '../../Theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { useNavigation } from '@react-navigation/native';

const Trip = ({ navigation }) => {
  const [isCreateTripVisible, setCreateTripVisible] = useState(false);
  const [operatorId, setOperatorId] = useState('');
  const [tripData, setTripData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Active');


  const toggleCreateTrip = () => {
    // setCreateTripVisible(!isCreateTripVisible);
    navigation.navigate("CreateTrip");
  };
  // const list = useRef(null);

  useEffect(() => {
    const today = new Date();
    // setSelectedDate(today);
    AsyncStorage.getItem('operator_id').then((token) => {
      if (token) {
        setOperatorId(token);
        // console.log(operatorId);
      } else {
        // navigation.navigate('LoginScreen');
        console.log('No operator');
      }
    });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (operatorId.length > 0) {
  //       getTripsByOperatorId(operatorId)
  //         .then(data => {
  //           setTripData(data);
  //         })
  //         .catch(error => {
  //           console.error("Error fetching trip data:", error);
  //         });
  //     }
  //   }, 30000); // 30 seconds

  //   return () => clearInterval(interval);
  // }, [operatorId]);

  useFocusEffect(
    useCallback(() => {
      if (operatorId.length > 0) {
        getTripsByOperatorId(operatorId)
          .then(data => {
            setTripData(data);
          })
          .catch(error => {
            console.error("Error fetching trip data:", error);
          });
      }
    }, [operatorId])
  );

  const renderItem = ({ item }) => (
    <TripCard tripData={item} />
  );


  // useEffect(() => {
  //   console.log("tripData :", tripData);
  // }, [tripData])

  // const navigation = useNavigation();



  return (
    <View style={{ flex: 1 }}>
      {/* <CommonHeader navigation={navigation} /> */}

      <StatusBar barStyle="dark-content" showHideTransition='fade' backgroundColor={Theme.white} />
      <View style={trip_styles.header_box}>
        <View style={trip_styles.header_flex_box}>
          <TouchableOpacity onPress={()=> navigation.navigate('MainPage')}>
            <MaterialIcons name='arrow-back' size={24} color={Theme.blue.primary} />
          </TouchableOpacity>
          <Text style={trip_styles.header_headig_text}>Trip Tracking</Text>
        </View>
        <TouchableOpacity style={trip_styles.search_box}>
          <SearchSvg height={24} width={24} fill={Theme.blue.primary} />
        </TouchableOpacity>
      </View>


      <>
        <ActiveAllFilterButton  selectedOption={selectedOption} onCreatePress={toggleCreateTrip} />
        <View style={trip_styles.trip_filter_box}>
          <TripFilterButton />
        </View>

        {/* FlatList to render TripCard */}
        <FlatList
          data={tripData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </>
    </View>


  )
}
export default Trip;
