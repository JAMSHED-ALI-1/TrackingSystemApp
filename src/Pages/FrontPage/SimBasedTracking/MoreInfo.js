import { View, Text, TouchableOpacity , ScrollView} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LanguageSvg from '../../../../assets/language.svg'
import more_info_styles from '../../../Styles/Pages/FrontPage/SimBasedTracking/MoreInfo.module'
import Theme from '../../../Theme/theme';
import Entypo from 'react-native-vector-icons/Entypo'

const MoreInfo = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={more_info_styles.header_box}>
        <View style={more_info_styles.header_flex_child_box}>
          <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
            <MaterialIcons name="arrow-back" size={24} color={Theme.white} />
          </TouchableOpacity>

          <Text style={more_info_styles.header_text}>More Info</Text>
        </View>

        {/* <TouchableOpacity style={more_info_styles.language_box}>
          <LanguageSvg height={24} width={24} fill={Theme.white} />
        </TouchableOpacity> */}
      </View>

      <View style={more_info_styles.content_box}>
     
     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
        <Text style={more_info_styles.heading1_text}>What is SIM Tracking?</Text>
     </View>

     <Text style={more_info_styles.cont_text}>SIM tracking uses cellular signals to locate devices, helping track their movements and positions.</Text>

     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
        <Text style={more_info_styles.heading1_text}>Does it require Special device?</Text>
        
     </View>
     <Text style={more_info_styles.cont_text}>No, it does not required any Special device , any mobile devices (normal or Smart ) can be used.</Text>

     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
        <Text style={more_info_styles.heading1_text}>What are its key importance over normal GPS Devices ?</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>It can be used in any area where their is No/Poor GPS Coverage</Text>
     </View>
     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>It can be used Internationally</Text>
     </View>
     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>It does not required any Special devices so it is more affordable</Text>
     </View>
     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>It follows “Pay as you used model”</Text>
     </View>


     <Text style={more_info_styles.heading1_text}>Step required for SIM Tracking</Text>
     <Text style={more_info_styles.cont_text}>Step 1- Add Name and Number of a Person (Driver, Employee, Freinds , Family etc) Which you want to Track</Text>
     <Text style={more_info_styles.cont_text}>Step 2- Get Concent from user (Driver, Employee, Freinds , Family etc) Which you want to Track</Text>
     <Text style={more_info_styles.cont_text}>Step 3- Wait for 15-45 min to get location of user</Text>

     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
        <Text style={more_info_styles.heading1_text}>How to get Concent of user?</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By IVR : dial 7303777719 and Press 1 from user device</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By SMS (for VI users) : Reply ‘Yes/Y’ in response of SMS you get from 55502 or message 'Yes/Y' to 55502 this number.</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By SMS (for JIO users) : Reply ‘Yes/Y’ in response of SMS you get from 51712032, 5575701 or message ‘Yes/Y’ to 51712032 this number.</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By SMS (for Non Airtel Users) : Reply ‘Yes/Y’ in response of SMS you get from 5114040 or message ‘Yes/Y’ to 5114040 this number.</Text>
     </View>

     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
        <Text style={more_info_styles.heading1_text}>For how many days is the Concent Validity ?</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>For Non JIO Users the Concent Validity is Unlimited Days , until the users deny the Concent</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>For JIO Users the Concent Validity is 180 Days , until the users deny the Concent</Text>
     </View>

     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
        <Text style={more_info_styles.heading1_text}>Is SIM Tracking is Ethical ?</Text>
     </View>

     <Text style={more_info_styles.cont_text}>Until and Unless you have the Concent from the User in ethical way and User Knows that his/her location has been tracked by You , it is ethical Otherwise no.</Text>

     <View style={more_info_styles.header_flex_child_box}>
     <Entypo name='dot-single' size={30} color={Theme.blue.primary}/>
     <Text style={more_info_styles.heading1_text}>How user can Stop SIM Tracking ?</Text>

     </View>


     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By SMS (for VI users) : Reply ‘Yes/Y’ in response of SMS you get from 55502 or message 'Yes/Y' to 55502 this number.</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By SMS (for JIO users) : Reply ‘Yes/Y’ in response of SMS you get from 51712032, 5575701 or message ‘Yes/Y’ to 51712032 this number.</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>By SMS (for Non Airtel Users) : Reply ‘Yes/Y’ in response of SMS you get from 5114040 or message ‘Yes/Y’ to 5114040 this number.</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
     <Text style={more_info_styles.heading1_text}>How you can Stop SIM Tracking by Qiktrack App ?</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>If you Want to Stop Further SIM tracking you can easily delete the User.</Text>
     </View>

     <View style={more_info_styles.order_list}>
     <Entypo name='dot-single' size={25} color={Theme.blue.primary}/>
        <Text style={more_info_styles.cont_text}>If you Want to Stop SIM Tracking for next few days you can Pause the Tracking. you don’t be charge for that “Paused time period”</Text>
     </View>

      </View>
    </ScrollView>
  )
}

export default MoreInfo
