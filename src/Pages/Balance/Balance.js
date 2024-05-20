import { View, Text, StatusBar, ScrollView , TouchableOpacity} from 'react-native'
import React from 'react'
import balance_styles from '../../Styles/Pages/Balance/Balance.module'
import Theme from '../../Theme/theme'
import SearchSvg from '../../../assets/search.svg'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient';
import WalletSvg from '../../../assets/wallet.svg';
import BottomSheetScrollView from 'react-native-gesture-handler'


const Balance = ({ navigation }) => {

  const balanceData = [
    {tracking_method: "Sim Tracking", phone_no:"1234567890", other:'000000', price:'-400', date:'12/03/2024', time:'9:40 Pm'},
    {tracking_method: "Sim Tracking", phone_no:"1234567890", other:'000000', price:'+400', date:'12/03/2024', time:'9:40 Pm'},
    {tracking_method: "Sim Tracking", phone_no:"1234567890", other:'000000', price:'-400', date:'12/03/2024', time:'9:40 Pm'},
    {tracking_method: "Sim Tracking", phone_no:"1234567890", other:'000000', price:'+400', date:'12/03/2024', time:'9:40 Pm'},
    {tracking_method: "Sim Tracking", phone_no:"1234567890", other:'000000', price:'-400', date:'12/03/2024', time:'9:40 Pm'},
    {tracking_method: "Sim Tracking", phone_no:"1234567890", other:'000000', price:'+400', date:'12/03/2024', time:'9:40 Pm'},

  ]
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        showHideTransition="fade"
        backgroundColor={Theme.white}
      />
      <View style={balance_styles.header_box}>
        <View style={balance_styles.header_flex_box}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('MainPage')}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={Theme.blue.primary}
            />
          </TouchableOpacity>
          <Text style={balance_styles.header_headig_text}>Wallet</Text>
        </View>
        <View style={balance_styles.header_flex_box}>
          {/* <MaterialIcons name="add" size={24} color={Theme.blue.primary} /> */}
          <TouchableOpacity style={balance_styles.search_box}>
            {/* <SearchSvg height={24} width={24} fill={Theme.blue.primary} /> */}
          </TouchableOpacity>
        </View>
      </View>

<View style={balance_styles.cont_main_box}>

<LinearGradient 
colors={['#2A77E3E8','#051C3ECC']}
style={balance_styles.info_box}>

  <View style={balance_styles.balance_info_box}>
    <Text style={balance_styles.heading_Text}>Available wallet Balance</Text>
    <View style={balance_styles.amount_box}>
      <Text style={balance_styles.rupee_text}>₹</Text>
      <Text style={balance_styles.amount_text}>0</Text>
    </View>
    <View style={balance_styles.balance_box}>
    <Text style={balance_styles.add_balance_text}>+ Add Balance</Text>
  </View>

  </View>
  <View style={balance_styles.img_box}>
    <WalletSvg height={120} width={150}/>
  </View>
</LinearGradient>

<ScrollView>
  {balanceData && balanceData.map((item, index)=>(
    <View key={index} style={balance_styles.map_main_box}>
     <View style={balance_styles.balance_method_box}>
     <Text style={balance_styles.tracking_method_text}>{item.tracking_method}</Text>
     </View>

     <View style={balance_styles.hr_line}></View>

     <View style={balance_styles.second_flex_box}>
     <Text style={balance_styles.phone_no_text}>{item.phone_no}</Text>
     <Text style={balance_styles.other_text}>{item.other}</Text>
     </View>

     <View style={balance_styles.last_flex_box}>
     <Text style={[balance_styles.price_text, { color: item.price < 0 ? 'red' : 'green' }]}>
            {item.price} RS
        </Text>
     <View style={balance_styles.flex_box}>
      <Text style={balance_styles.other_text}>{item.date}</Text>
      <Text style={balance_styles.other_text}>{item.time}</Text>
     </View>
     </View>

    </View>
  ))}
</ScrollView>

</View>

    </View>
  )
}

export default Balance
