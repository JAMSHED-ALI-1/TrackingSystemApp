import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RupeeSvg from '../../../../assets/rupee_filled.svg';
import emi_cal_styles from '../../../Styles/Pages/FrontPage/UsefulTools/EmiCalculator.module';
import Theme from '../../../Theme/theme';

const EmiCalculator = ({ navigation }) => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interest, setInterest] = useState('');
    const [loanTenure, setLoanTenure] = useState('');
    const [durations, setDurations] = useState('Yr');

    const handleChange = (item) =>{
      setDurations(item)

    }

    const calculateEMI = () => {
      if (loanAmount === '' || interest === '' || loanTenure === '') {
        return {
          emi: '00',
          totalInterest: '00',
          totalPayment: '00',
        };
      }
    
      const principal = parseFloat(loanAmount);
      const rateOfInterest = parseFloat(interest) / 12 / 100; // Monthly interest rate
      const tenureInMonths = durations === 'Yr' ? parseFloat(loanTenure) * 12 : parseFloat(loanTenure);
  
      const emi = principal * rateOfInterest * Math.pow(1 + rateOfInterest, tenureInMonths) /
        (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);
  
      const totalInterest = emi * tenureInMonths - principal;
      const totalPayment = principal + totalInterest;
  
      return {
        emi: emi.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
      };
    };
  
    const { emi, totalInterest, totalPayment } = calculateEMI();
   
  return (
    <View style={emi_cal_styles.main_box}>
      <View style={emi_cal_styles.header_flex_box}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <Ionicons name="arrow-back" size={24} color={Theme.blue.primary} />
        </TouchableOpacity>
        <Text style={emi_cal_styles.title}>EMI Calculator</Text>
      </View>
      <View style={emi_cal_styles.input_main_box}>

      <View style={emi_cal_styles.input_container}>
        <Text style={emi_cal_styles.label}>
        Loan Amount
        </Text>
        <View style={emi_cal_styles.input_flex_box}>
        
        <TextInput
          style={emi_cal_styles.input}
          keyboardType="numeric"
          placeholder="Enter Amount here"
          value={loanAmount}
          onChangeText={(text) => setLoanAmount(text)}
        />
        <View style={emi_cal_styles.vr_line}></View>
        <RupeeSvg/>
        {/* <Text style={emi_cal_styles.input_per}>%</Text> */}
        </View>
      </View>

      <View style={emi_cal_styles.input_container}>
        <Text style={emi_cal_styles.label}>
        Interest Rate
        </Text>
        <View style={emi_cal_styles.input_flex_box}>
        
        <TextInput
          style={emi_cal_styles.input}
          keyboardType="numeric"
          placeholder="Enter Interest rate"
          value={interest}
          onChangeText={(text) => setInterest(text)}
        />
        <View style={emi_cal_styles.vr_line}></View>
        <Text style={emi_cal_styles.input_per}>%</Text>
        </View>
      </View>


      <View style={emi_cal_styles.input_container}>
        <Text style={emi_cal_styles.label}>
        Loan Tenure
        </Text>
        <View style={emi_cal_styles.input_flex_box}>
        
        <TextInput
          style={emi_cal_styles.input_loan_tenure}
          keyboardType="numeric"
          placeholder="Enter Loan Tenure"
          value={loanTenure}
          onChangeText={(text) => setLoanTenure(text)}
        />

        {['Yr','Mo'].map((item, index)=>(
          <TouchableOpacity key={index} 
          onPress={()=> handleChange(item)}
          style={[
            emi_cal_styles.month_box,
          {
            backgroundColor: durations === item ? '#E7F7FF': '#FAFAFA'
          }
          ]}
          >
            <Text style={{color: durations === item? Theme.blue.primary: Theme.black}}>{item}</Text>
          </TouchableOpacity>
        ))}


        </View>
      </View>

      </View>


      <View style={emi_cal_styles.total_selling_box}>

<Text style={emi_cal_styles.selling_heading_text}>Total Payment (Principal + Interest)</Text>

</View>
<View style={emi_cal_styles.output_box}>

<Text style={emi_cal_styles.price_text}>{totalPayment} Rs</Text>

<View style={emi_cal_styles.total_gst_frofit_flex_box}>
  <View style={emi_cal_styles.total_flex_child}>
    <Text style={emi_cal_styles.interest_emi_heading_text}>Loan EMI</Text>
    <Text style={emi_cal_styles.interest_emi_text}>{emi} Rs</Text>

  </View>
  <View style={emi_cal_styles.total_flex_child}>
  <Text style={emi_cal_styles.interest_emi_heading_text}>Total interest</Text>
    <Text style={emi_cal_styles.interest_emi_text}>{totalInterest} Rs</Text>
  </View>

</View>

</View>

    </View>
  )
}

export default EmiCalculator;