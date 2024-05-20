import { View, Text, StatusBar } from 'react-native'
import CreateGroupButton from './CreateGroupButton'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import group_styles from '../../Styles/FilterNavButton/Groups/Group.moudel'
import Theme from '../../Theme/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchSvg from '../../../assets/search.svg'
import GroupsMap from './GroupsMap'
import { fetchVehicleGroups } from '../../HelperFunction/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Groups = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigation = useNavigation();
  const [selectedBox, setSelectedBox] = useState(0);
  const [vehicleGroups, setVehicleGroups] = useState([]); // State to hold the fetched vehicle groups
  const [defaultGroupName, setDefaultGroupName] = useState(""); // State to hold the default group name

  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        const data = await fetchVehicleGroups();
        setVehicleGroups(data);
        if(data.length > 0) {
          setDefaultGroupName(data[0].group_name); // Set the default group name to the first value
        }
      } catch (error) {
        console.log('Error while fetching vehicle groups data:', error.message);
      }
    };

    fetchGroupsData();
  }, []);

  useEffect(()=>{
    console.log('data groups.js=>',selectedFilter)
  },[])

  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        showHideTransition="fade"
        backgroundColor={Theme.white}
      />
      <View style={group_styles.header_box}>
        <View style={group_styles.header_flex_box}>
          <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={Theme.blue.primary}
            />
          </TouchableOpacity>
          <Text style={group_styles.header_headig_text}>Group Tracking</Text>
        </View>
        <TouchableOpacity style={group_styles.search_box}>
          <SearchSvg height={24} width={24} fill={Theme.blue.primary} />
        </TouchableOpacity>
      </View>

      <CreateGroupButton
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        vehicleGroups={vehicleGroups}
        setSelectedBox={setSelectedBox}
        selectedBox={selectedBox}
      />
      <View style={group_styles.route_info_box}>
        <View style={group_styles.route_info_flex_box}>
          <Text style={group_styles.route_info_text}>
            {selectedFilter ? selectedFilter.group_name : defaultGroupName}
          </Text>
          <MaterialIcons
            name="arrow-forward"
            size={20}
            color={Theme.blue.primary}
          />
          <Text style={group_styles.route_info_text}>
            {selectedFilter?.name2}
          </Text>
        </View>

        <View style={group_styles.route_info_flex_box}>
          <TouchableOpacity>
            <Text style={group_styles.details_text}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={15} color={Theme.black} />
          </TouchableOpacity>
        </View>
      </View>
      <GroupsMap/>
    </View>
  )
}
export default Groups
