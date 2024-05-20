
import React, { useState, useCallback, useEffect } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchAllVehicleData, fetchLocationData, fetchOperatorVehiclesData } from '../../HelperFunction/api';
import Theme from '../../Theme/theme'
import CardList from '../../Component/CardList'
import CardListRenderer from '../../Component/CardListRenderer';
import track_nav_styles from '../../Styles/Screens/TrackNavigator.module';
import TrackHeader from './HeaderTrackNav';

const TrackNavigator = ({ navigation }) => {
  const [activeScreen, setActiveScreen] = useState('all')
  const [runningStat, setRunningStat] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false),
    [allVehicleData, setAllVehicleData] = useState(null),
    [matchingDeviceIds, setMatchingDeviceIds] = useState([]),
    [searchText, setSearchText] = useState(""),
    [isLoading, setIsLoading] = useState(false),
    [locationData, setLocationData] = useState([])

  const fetchData = async () => {
    try {
      const Operator = await AsyncStorage.getItem("operator_id");
      if (Operator) {
        const data = await fetchOperatorVehiclesData(Operator);
        setRunningStat(data);
      } else {
        console.log("No operator");
      }
    } catch (error) {
      console.error("Error fetching operator vehicles data:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
    }, [])
  );

  const fetchVehicleData = async () => {
    try {
      const Operator = await AsyncStorage.getItem("operator_id");
      if (Operator) {
        const data = await fetchAllVehicleData(Operator);
        setAllVehicleData(data);
      } else {
        console.log("No operator search text");
      }
    } catch (error) {
      console.error("Error fetching data by search text:", error);
    }
  };

  const fetchDataBySearchText = async (searchText) => {
    try {
      const searchTextWithoutSpace = searchText.replace(/\s+/g, '');
      const matchingIds = allVehicleData
        .filter(vehicle =>
          vehicle.reg_no.toLowerCase().replace(/\s+/g, '').includes(searchTextWithoutSpace.toLowerCase())
        )
        .flatMap(vehicle => vehicle.device_id)
      if (matchingIds?.length > 0) {
        setMatchingDeviceIds(() => matchingIds);
      } else {
        console.log("Vehicle not found.");
        setMatchingDeviceIds([]);
      }
    } catch (error) {
      console.error("Error fetching data by search text:", error);
    }
  };

  const fetchLocationDataForDevices = async (deviceId, pageNumber, page = 1) => {
    setIsLoading(true);
    if (deviceId) {
      try {
        const responseData = await fetchLocationData(
          deviceId,
          pageNumber,
          page
        );
        setLocationData([...responseData?.data]);
      } catch (error) {
        console.error("Error fetching location from API:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (matchingDeviceIds.length > 0) {
      setIsLoading(true);
      fetchLocationDataForDevices(matchingDeviceIds);
    }
  }, [matchingDeviceIds]);

  const renderTabBar = () => {
    const buttons = [
      { key: 'all', title: 'All', value: runningStat?.totalCount ?? "--", color: Theme.blue.primary },
      { key: 'running', title: 'Running', value: (runningStat?.running?.count + runningStat?.wirecut?.count) ?? "--", color: Theme.green },
      { key: 'stopped', title: 'Stopped', value: (runningStat?.stopped?.count + runningStat?.idle?.count) ?? "--", color: Theme.red },
      { key: 'nodata', title: 'No Data', value: runningStat?.noInfo?.count ?? "--", color: Theme.gray53 },
      // { key: 'filter', title: 'Filter', value: null, color: Theme.blue.primary }, // Add a filter button
    ];

    return (
      <View style={[track_nav_styles.tabBar, { marginTop: 15 }]}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.key}
            style={[
              track_nav_styles.tabItem,
              {
                backgroundColor:
                  activeScreen === button.key ? Theme.mykonos : Theme.white,
                borderRadius: activeScreen === button.key ? 8 : 8,
                borderWidth: activeScreen === button.key ? 0 : 1,
                borderColor:
                  activeScreen === button.key ? '' : Theme.blue.primary,
              },
            ]}
            onPress={() => setActiveScreen(button.key)}
          >
            <Text
              style={{
                color: activeScreen === button.key ? Theme.white : button.color,
              }}
            >
              {button.title || '--'}
            </Text>
            <Text
              style={{
                color: activeScreen === button.key ? Theme.white : button.color,
              }}
            >
              {button.value || '--'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View style={track_nav_styles.container} onStartShouldSetResponder={() => true}>
      <View style={track_nav_styles.main_header_box}>
        <TrackHeader
          navigation={navigation}
          searchExpand={searchExpanded}
          setSearchExpand={setSearchExpanded}
          allVehicleData={allVehicleData}
          setAllVehicleData={setAllVehicleData}
          matchingDeviceIds={matchingDeviceIds}
          setMatchingDeviceIds={setMatchingDeviceIds}
          searchText={searchText}
          setSearchText={setSearchText}
          fetchData={fetchVehicleData}
          fetchDataBySearchText={fetchDataBySearchText}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        searchExpanded && locationData && <CardListRenderer locationData={locationData} allVehicleData={allVehicleData} />
      )}
      {!searchExpanded && renderTabBar()}
      {!searchExpanded && activeScreen !== 'filter' && (
        <CardList
          allVehicleData={allVehicleData}
          navigation={navigation}
          filterData={
            activeScreen === 'all' ? null :
              activeScreen === 'running' ? [...runningStat?.running?.id, ...runningStat?.wirecut?.id] :
                activeScreen === 'stopped' ? [...runningStat?.stopped?.id, ...runningStat?.idle?.id] :
                  activeScreen === 'nodata' ? runningStat?.noInfo?.id :
                    null
          }
        />
      )}
    </View>
  )
}

export default TrackNavigator
