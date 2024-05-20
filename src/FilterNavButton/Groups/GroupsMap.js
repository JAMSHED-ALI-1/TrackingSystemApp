import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
// import { fetchVehicleDriver } from '../../src/HelperFunction/api';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
// import card_styles from '../Styles/card.module'
import Theme from '../../Theme/theme'
// import { formatTimestamp } from '../HelperFunction/TimeAndDateParser'
import KmSvg from '../../../assets/km.svg'
import Gps from '../../../assets/gps.svg'
import Gps_1 from '../../../assets/gps_1.svg'
import Battery from '../../../assets/battery.svg'
import Battery_0 from '../../../assets/battery_0.svg'
import Battery_1 from '../../../assets/battery_1.svg'
import Battery_4 from '../../../assets/battery_4.svg'
import Battery_6 from '../../../assets/battery_6.svg'
import Charging from '../../../assets/charging.svg'
import Charging_1 from '../../../assets/charging_1.svg'
import Charging_0 from '../../../assets/charging_0.svg'
import Ignition from '../../../assets/ignition.svg'
import Ignition_1 from '../../../assets/ignition_1.svg'
import Ignition_0 from '../../../assets/ignition_0.svg'
import Location from '../../../assets/gis_location-poi.svg'
import TimeFill from '../../../assets/time-fill.svg'
import HistoryIcon from '../../../assets/history_icon.svg'
import SvgReport from '../../../assets/report-box-outline.svg'
import SvgAlertIcon from '../../../assets/alert_icon.svg'
import SvgShareIcon from '../../../assets/shareIcon.svg'
import SpeedMeterSvg from '../../../assets/speed_meter_filled.svg'
// import LiveLocation from './SwipeableCards/LiveLocation'
import Gps_0 from '../../../assets/gps_0.svg'
import gropus_map_styles from '../../Styles/FilterNavButton/Groups/GroupsMap.module';
const GroupsMap = () => {
    const [iconName, setIconName] = useState('');
    const [showShareView, setShowShareView] = useState(true)
  return (
    <View>
    <View style={gropus_map_styles.card}>
      <View style={gropus_map_styles.cardHeader}>
        {/* <View style={gropus_map_styles.cardHeaderLeft}>
          <View style={[gropus_map_styles.truckIconContainer, {}]}> */}
        {/* <CarSvg height={60} width={60} /> */}
        {/* <Icon name={iconName} size={50} color={Theme.black} />
          </View> */}
        {/* <View style={gropus_map_styles.runningStatus}>
            <LinearGradient
              colors={gradientColor}
              style={gropus_map_styles.linearGradient}
            >
              <Text style={gropus_map_styles.runningStatusText}>{runningText}</Text>
            </LinearGradient>
          </View> */}
        {/* </View> */}

        <View style={gropus_map_styles.cardHeaderRight}>
          <View
            style={[
              gropus_map_styles.numberPlate,
              iconName !== 'truck' && gropus_map_styles.personal,
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* <View style={{ alignItems: 'center' }}>
                <SpeedMeterSvg
                  width="18"
                  height="18"
                  // style={gropus_map_styles.bottomImg}
                  fill={Theme.blue.primary}
                />

                <Text
                  style={{
                    fontSize: 8,
                    color: Theme.blue.primary,
                    fontWeight: '500',
                  }}
                >
                  Speed
                </Text>
              </View> */}
              {/* <View style={[gropus_map_styles.iconFrame, { height: 30, width: 30 }]}> */}

              {/* <View style={{ alignItems:'center', marginRight:5 }}>
              <Text style={gropus_map_styles.speedInfoText}>{velocity}</Text>
              <Text style={{fontSize:8, marginTop:-4, color:Theme.blue.primary}}>km/h</Text>
              </View> */}

              {/* </View> */}

              {/* <Icon
              name="dharmachakra"
              size={10}
              style={[gropus_map_styles.icon, gropus_map_styles.wheel]}
            /> */}

              {/* <View style={gropus_map_styles.indIcon}>
              <Icon
                name="dharmachakra"
                size={10}
                style={[gropus_map_styles.icon, gropus_map_styles.wheel]}
              />
              <Text
                style={[
                  gropus_map_styles.indText,
                  iconName !== 'truck' && gropus_map_styles.indText2,
                ]}
              >
                IND
              </Text>
            </View> */}
              <Text style={gropus_map_styles.numberPlateText}>
                {/* {vehiclesData.vehicleNumber} */}
                HR XXXX 123
              </Text>
            </View>

            <View style={gropus_map_styles.runningStatus}>
              <LinearGradient
                colors={[Theme.green, Theme.green]}
                
                style={gropus_map_styles.linearGradient}
              >
                <Text style={gropus_map_styles.runningStatusText}>
                  {/* {runningText} */}
                  Running
                </Text>
              </LinearGradient>
            </View>
          </View>

          <View style={gropus_map_styles.address}>
            <View style={[gropus_map_styles.addressMarker]}>
              <Location width={20} height={20} fill={Theme.blue.primary} />
            </View>

            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={gropus_map_styles.addressText}
            >
              {/* {locationData?.location?.address}, */}

              Bajgerh Road ,Gurgaon Gateway, Sector 114,Gurgaon, Kapashera Tehsil
            </Text>
          </View>

          {/* <View style={gropus_map_styles.statusBox}>
            <TimeFill width="25" height="25" fill={Theme.blue.primary} />
            <Text numberOfLines={2} style={gropus_map_styles.statusText}>
              Updated At:
            </Text>
            <Text style={gropus_map_styles.updatedText}>
              {dateAndTime?.formattedDate} {dateAndTime?.formattedTime}
            </Text>
          </View> */}
        </View>
      </View>

      {/* <View style={{flexDirection:'row',marginBottom:10, justifyContent:'space-between', }}>

        <View>
        <Text style={{color:Theme.blue.primary}}>Speed</Text>
        <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>{velocity} Km/h</Text>
        </View>
        <View>
        <Text style={{color:Theme.blue.primary}}>Ignition</Text>
        <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>Off</Text>
        </View>

       <View>
       <Text style={{color:Theme.blue.primary}}>Distance</Text>
       <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>200 KM </Text>
       </View>
        <View>
        <Text style={{color:Theme.blue.primary}}>Running</Text>
        <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}> 3 H 40 min </Text>
        </View>
       
       <View>
       <Text style={{color:Theme.blue.primary}}>Stopped</Text>
       <Text style={{color:Theme.secondary, fontSize: 10, marginTop:10}}>12 H 20 min</Text>
       </View>


      </View> */}

      {showShareView ? (
        <View style={gropus_map_styles.bottomInfoContainer}>
          {/* <View style={gropus_map_styles.bottomTextContainer}>
  <TimeFill width="20" height="20" />
</View>
<Text style={gropus_map_styles.updatedText}>
  00
</Text>
<View style={gropus_map_styles.kmTextContainer}>
  <Text style={gropus_map_styles.kmText}>Km</Text>
</View>
<KmSvg width="30" height="40" style={gropus_map_styles.bottomImg} /> */}
          {/* <View style={gropus_map_styles.bottomTextContainer}>
</View> */}

          {/* Speed */}
          {/* <View style={gropus_map_styles.speedInfoContainer}>
            <SpeedMeterSvg
              width="20"
              height="20"
              style={gropus_map_styles.bottomImg}
              fill={Theme.blue.primary}
            />
            <Text style={gropus_map_styles.speedInfoText}>{velocity} Km/h</Text>
          </View> */}

          {/*  last update  */}
          <View style={gropus_map_styles.statusBox}>
            <TimeFill width="20" height="20" fill={Theme.blue.primary} />
            <Text style={gropus_map_styles.updatedText}>
              {/* {dateAndTime?.formattedDate} {dateAndTime?.formattedTime} */}
               05:46 PM
            </Text>
          </View>

          {/* <View style={gropus_map_styles.statusBox}>
  <Text numberOfLines={2} style={gropus_map_styles.statusText}>
    Updated At:
  </Text>
  <TimeFill width="20" height="20" fill={Theme.blue.primary} />
  <Text style={gropus_map_styles.updatedText}>
    {dateAndTime?.formattedTime}
  </Text>
</View> */}

          <View style={gropus_map_styles.iconFrame}>
            {/* {gpsValue === true &&  */}
            <Gps_1 width="21" height="21" />
             {/* } */}
            {/* {gpsValue === false && <Gps_0 width="21" height="21" />}
            {gpsValue === undefined && <Gps width="21" height="21" />}
            <Text style={gropus_map_styles.satellite}>

            </Text> */}
          </View>

          {/* <View style={gropus_map_styles.iconFrame}>
  {gsmValue === 0 && <Sim_0 width="20" height="20" />}
  {gsmValue === 1 && <Sim_1 width="20" height="20" />}
  {gsmValue === 2 && <Sim_2 width="20" height="20" />}
  {gsmValue === 3 && <Sim_3 width="20" height="20" />}
  {gsmValue === 4 && <Sim_4 width="20" height="20" />}
  {gsmValue === undefined && <Sim width="20" height="20" />}
</View> */}

          <View style={gropus_map_styles.iconFrame}>
            {/* {ignitionValue === true &&  */}
            <Ignition_1 width="18" height="18" />
            {/* } */}
            {/* {ignitionValue === false && <Ignition_0 width="18" height="18" />}
            {ignitionValue === undefined && (
              <Ignition width="18" height="18" />
            )} */}
          </View>

          <View style={gropus_map_styles.iconFrame}>
            {/* {chargingValue === true &&  */}
            <Charging_1 width="18" height="18" />
            {/* } */}
            {/* {chargingValue === false && <Charging_0 width="18" height="18" />}
            {chargingValue === undefined && (
              <Charging width="18" height="18" />
            )} */}
          </View>

          <View style={gropus_map_styles.iconFrame}>
            {/* {voltageValue === 0 && */}
             <Battery_6 width="21" height="21" />
             {/* } */}
            {/* {voltageValue === 1 && <Battery_1 width="21" height="21" />}
            {voltageValue === 2 && <Battery_1 width="21" height="21" />}
            {voltageValue === 3 && <Battery_4 width="21" height="21" />}
            {voltageValue === 4 && <Battery_4 width="21" height="21" />}
            {voltageValue === 5 && <Battery_6 width="21" height="21" />}
            {voltageValue === 6 && <Battery_6 width="21" height="21" />}
            {voltageValue === undefined && <Battery width="21" height="21" />} */}
          </View>
          {/* <View style={gropus_map_styles.daysIconBox}>
  <Icon name="calendar-alt" size={10} style={[gropus_map_styles.icon]} />
  <Text style={gropus_map_styles.calanderDays}>360</Text>
  <View style={gropus_map_styles.kmTextContainer}>
    <Text style={gropus_map_styles.kmText}>Days</Text>
  </View>
</View> */}

          {/* validity */}
          <View style={gropus_map_styles.daysIconBox}>
            <Icon name="calendar-alt" size={10} style={[gropus_map_styles.icon]} />
            <Text style={gropus_map_styles.calanderDays}>360</Text>
            <View style={gropus_map_styles.kmTextContainer}>
              <Text style={gropus_map_styles.kmText}>Days</Text>
            </View>
          </View>
        </View>
      ) : (
        // <LiveLocation
        //   locationData={locationData}
        //   vehiclesData={vehiclesData}
        // />
        <View></View>
      )}

      {/* <View style={gropus_map_styles.hr_line}></View> */}
      <View style={gropus_map_styles.share_box}>
        {/* <TouchableOpacity
          onPress={() => console.log('Pressed:')}
          style={gropus_map_styles.bottom_icon_box}
        >
          <Live width={20} height={20} fill={Theme.blue.primary} />
          <Text style={gropus_map_styles.bottom_icon_text}>Live</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            // if (locationData?.location) {
            //   navigation.navigate('History', {
            //     vehiclesData,
            //   })
            // }
          }}
          style={gropus_map_styles.bottom_icon_box}
        >
          <HistoryIcon width={20} height={20} fill={Theme.blue.primary} />
          <Text style={gropus_map_styles.bottom_icon_text}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // if (locationData?.location) {
            //   // console.log("vd",vehiclesData);
            //   navigation.navigate('Alerts', {
            //     vehiclesData,
            //   })
            // }
          }}
          style={gropus_map_styles.bottom_icon_box}
        >
          <SvgAlertIcon width={20} height={20} fill={Theme.blue.primary} />
          <Text style={gropus_map_styles.bottom_icon_text}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // if (locationData?.location) {
            //   navigation.navigate('Review', {
            //     vehiclesData,
            //     locationData,
            //   })
            // }
          }}
          style={gropus_map_styles.bottom_icon_box}
        >
          <SvgReport width={25} height={20} fill={Theme.blue.primary} />
          <Text style={gropus_map_styles.bottom_icon_text}>Review</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>{}
            //  handlePhonePress()
        }
          // onPress={ getDriverDetail()}
          // onPress={() => {
          //   if (locationData?.location) {
          //     navigation.navigate('Review', {
          //       vehiclesData,
          //       locationData,
          //     })
          //   }
          // }}
          style={gropus_map_styles.bottom_icon_box}
        >
          <MaterialIcons name='call' size={22} color={Theme.blue.primary} />
          <Text style={gropus_map_styles.bottom_icon_text}>Driver</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => {
          //   if (locationData?.location) {
          //     navigation.navigate('ShareLocation', {
          //       vehiclesData,
          //       locationData

          //     })
          //   }
          // }
          // }
          onPress={() => {}
            // toggleView()
        }
          style={gropus_map_styles.bottom_icon_box}
        >
          {showShareView ? (
            <View>
              <SvgShareIcon
                width={20}
                height={20}
                fill={Theme.blue.primary}
              />
              <Text style={gropus_map_styles.bottom_icon_text}>Share</Text>
            </View>
          ) : (
            <View>
              <MaterialIcons
                name="close"
                size={24}
                color={Theme.blue.primary}
              />
              <Text style={gropus_map_styles.bottom_icon_text}>Close</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default GroupsMap;