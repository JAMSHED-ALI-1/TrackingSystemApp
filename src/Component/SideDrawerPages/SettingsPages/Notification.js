import { View, Text } from 'react-native';
import React, { useState, useCallback } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
// import com_profile_styles from '../../../Styles/SideDrowerPages/CompleteProfile.module'
import Theme from '../../../Theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import notifaction_styles from '../../../Styles/SideDrowerPages/Notification.module';
import SwitchBox from '../SwitchBox';
import { LinearGradient } from 'expo-linear-gradient';
import { updateNotificationSettings, getNotification } from '../../../HelperFunction/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import  GeofenceExit from '../../../../assets/geofence_entry_exit.svg';
import GeofenceEntry from '../../../../assets/geofence_filled_enter.svg';
import SharpTurn from '../../../../assets/sharp_turn.svg';
import HarshBreakingSvg from '../../../../assets/harsh_breaking.svg';
import OverSpeedSvg from '../../../../assets/over_speed.svg';
import IgnationSvg from '../../../../assets/ignition.svg'; 

const Notification = ({ navigation }) => {

  const [enableAll, setEnableAll] = useState(false);
  const [operatorId, setOperator] = useState(null);
  const [notificationStates, setNotificationStates] = useState({
    ignitionOn: false,
    ignitionOff: false,
    geofenceEntry: false,
    geofenceExit: false,
    sharp_turns: false,
    overSpeed: false,
    harshBreaking: false,
    sharpTurn: false,
  });

  // "ignition_on": true,
  // "ignition_off": true,
  // "overspeed": true,
  // "geofence_entry": false,
  // "geofence_exit": false,
  // "sharp_turn": true,
  // "harsh_breaking": true,
  // "relay_on": true,
  // "relay_off": true,

  const handleEnableAllToggle = () => {
    const newEnableAllState = !enableAll;
    setEnableAll(newEnableAllState);

    // Toggle all notification states based on the "Enable all" switch
    setNotificationStates({
      ignitionOn: newEnableAllState,
      ignitionOff: newEnableAllState,
      overSpeed: newEnableAllState,
      harshBreaking: newEnableAllState,
      sharpTurn: newEnableAllState,
      geofenceEntry: newEnableAllState,
      geofenceExit: newEnableAllState,
    });
  };

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("operator_id").then((Operator) => {
        // console.log("Operator ID :", Operator); // Log the operator id
        if (Operator) {
          // fetchData(Operator);
          setOperator(Operator);
          NotificationFunc(Operator);
        } else {
          console.log("No operator!");
        }
      });
    }, [])
  );

  const handleSwitchBoxToggle = (notificationType) => {
    // Toggle the specific notification type
    const newEnableAllState = false;
    setEnableAll(newEnableAllState);
    setNotificationStates((prevState) => ({
      ...prevState,
      [notificationType]: !prevState[notificationType],
    }));
  };

  const handleSaveChanges = async () => {
    // Call the API to update notification settings
    const notificationSettings = {
      ignition_on: notificationStates.ignitionOn,
      ignition_off: notificationStates.ignitionOff,
      overspeed: notificationStates.overSpeed,
      geofence_entry: notificationStates.geofenceEntry,
      geofence_exit: notificationStates.geofenceExit,
      sharp_turn: notificationStates.sharpTurn,
      harsh_breaking: notificationStates.harshBreaking,
      relay_on: true, // assuming relay_on should be true always
      relay_off: true, // assuming relay_off should be true always
    };

    if (operatorId) {

      try {
        let res = await updateNotificationSettings(operatorId, notificationSettings)
        console.log(" Response : ", res.updatedData);
        alert(res.message);
        NotificationFunc(operatorId);
      } catch (error) {
        console.log("Error updating Notification : ", error)
      }
    } else {
      alert("No Operator Found ! \n Login Again")
    }
  };

  const NotificationFunc = async (operatorId) => {
    if (operatorId) {
      try {
        console.log("Operator Id from Notification :", operatorId);
        let res = await getNotification(operatorId);
        console.log(res);

        // Update enableAll state based on the response
        setEnableAll(
          res.ignition_on &&
          res.ignition_off &&
          res.overspeed &&
          res.harsh_breaking &&
          res.sharp_turn &&
          res.geofence_entry &&
          res.geofence_exit
        );

        // Update notificationStates based on the response
        setNotificationStates({
          ignitionOn: res.ignition_on,
          ignitionOff: res.ignition_off,
          overSpeed: res.overspeed,
          harshBreaking: res.harsh_breaking,
          sharpTurn: res.sharp_turn,
          geofenceEntry: res.geofence_entry,
          geofenceExit: res.geofence_exit,
        });

      } catch (error) {
        console.log("Error getting Notification : ", error);
      }
    } else {
      alert("No Operator Found ! \n Login Again");
    }
  };


  return (
    <View style={notifaction_styles.main_box}>
      <View style={notifaction_styles.heading_box}>
        <TouchableOpacity onPress={() => {navigation.navigate("MainPage"), navigation.toggleDrawer()} }>
          <MaterialIcons name="arrow-back" size={24} color={Theme.black} />
        </TouchableOpacity>
        <Text style={notifaction_styles.heading_text}>
          Notifications
        </Text>
      </View>
      <View style={notifaction_styles.hr_line}></View>

      <View style={notifaction_styles.flex_box}>
        <View>
          <Text style={notifaction_styles.enable_text}>Enable all</Text>
          <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text>
        </View>
        <SwitchBox value={enableAll} onValueChange={handleEnableAllToggle} />
      </View>
      <View style={notifaction_styles.hr_line2}></View>

      {/* box 2 */}
      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}> 
        <IgnationSvg height={18} width={18} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Ignition On </Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.ignitionOn} onValueChange={() => handleSwitchBoxToggle('ignitionOn')} />
      </View>

      {/* box 3 */}
      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}>
          <IgnationSvg height={18} width={18} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Ignition Off</Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.ignitionOff} onValueChange={() => handleSwitchBoxToggle('ignitionOff')} />
      </View>

      {/* box4  */}
      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}>
          <OverSpeedSvg height={20} width={20} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Over Speed </Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.overSpeed} onValueChange={() => handleSwitchBoxToggle('overSpeed')} />
      </View>

      {/* box 5 */}

      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}>
          <HarshBreakingSvg height={20} width={20} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Harsh Breaking</Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.harshBreaking} onValueChange={() => handleSwitchBoxToggle('harshBreaking')} />
      </View>

      {/* box 6 */}
      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}>
          <SharpTurn height={20} width={20} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Sharp turm</Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.sharpTurn} onValueChange={() => handleSwitchBoxToggle('sharpTurn')} />
      </View>

      {/* box 7 */}
      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}>
          <GeofenceEntry height={20} width={20} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Geofence Entry</Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.geofenceEntry} onValueChange={() => handleSwitchBoxToggle('geofenceEntry')} />
      </View>
      {/* box 8 */}
      <View style={notifaction_styles.flex_box}>
        <View style={notifaction_styles.icon_flex_box}>
          <GeofenceExit height={24} width={24} fill={Theme.blue.primary} />
          <Text style={notifaction_styles.enable_text}>Geofence Exit</Text>
          {/* <Text style={notifaction_styles.active_noti_text}>Activate all notifications</Text> */}
        </View>
        <SwitchBox value={notificationStates.geofenceExit} onValueChange={() => handleSwitchBoxToggle('geofenceExit')} />
      </View>
      <TouchableOpacity onPress={() => handleSaveChanges()}>
        <LinearGradient colors={['#2A77E3', '#051C3E']} style={notifaction_styles.save_change_box}>
          <Text style={notifaction_styles.save_change_text}>Save Changes</Text>
        </LinearGradient>

      </TouchableOpacity>
    </View>
  )
}

export default Notification