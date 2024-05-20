import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import gst_styles from '../../../Styles/Pages/FrontPage/UsefulTools/GstCalculater.module'
import Theme from '../../../Theme/theme'
import RupeeSvg from '../../../../assets/rupee_filled.svg'

const GstCalculater = ({ navigation }) => {
  const [amount, setAmount] = useState('')
  const [profitRatio, setProfitRatio] = useState('')
  const [selectedPercentage, setSelectedPercentage] = useState('5%')

  const handlePercentageSelect = (percentage) => {
    setSelectedPercentage(percentage)
  }

  const calculateGST = () => {
    const cost = parseFloat(amount) || 0
    const profitRatioValue = parseFloat(profitRatio) || 0
    const gstAmount =
      (cost * parseFloat(selectedPercentage.replace('%', ''))) / 100
    const sellingPrice = cost + gstAmount + (cost * profitRatioValue) / 100
    const totalProfit = sellingPrice - cost - gstAmount

    return {
      sellingPrice: sellingPrice.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
      totalGST: gstAmount.toFixed(2),
    }
  }

  const result = calculateGST() // Calculate the values

  return (
    <View style={gst_styles.container}>
      <View style={gst_styles.header_flex_box}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <Ionicons name="arrow-back" size={24} color={Theme.blue.primary} />
        </TouchableOpacity>
        <Text style={gst_styles.title}>GST Calculator</Text>
      </View>

      {/* Select GST Rates  start */}

      <Text style={gst_styles.gst_select_text}>Select GST Rates</Text>

      <View style={gst_styles.gst_select_per_main}>
        {['5%', '8%', '12%', '18%', '28%'].map((percentage, index) => (
          <TouchableOpacity
            key={index}
            // onPress={()=> calculateGST()}
            style={[
              gst_styles.gst_select_per,
              {
                borderColor:
                  selectedPercentage === percentage
                    ? Theme.blue.primary
                    : 'transparent',
                backgroundColor:
                  selectedPercentage === percentage ? Theme.white : Theme.white,
              },
            ]}
            onPress={() => handlePercentageSelect(percentage)}
          >
            <Text
              style={{
                color:
                  selectedPercentage === percentage
                    ? Theme.secondary
                    : Theme.black,
              }}
            >
              {percentage}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Select GST Rates end */}

      <View style={gst_styles.inputContainer}>
        <Text style={gst_styles.label}>
          Cost of Goods/Services (Without GST)
        </Text>
        <View style={gst_styles.input_flex_box}>
          <RupeeSvg />
          <View style={gst_styles.vr_line}></View>
          <TextInput
            style={gst_styles.input}
            keyboardType="numeric"
            placeholder="Enter Amount here"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
      </View>

      <View style={gst_styles.inputContainer}>
        <Text style={gst_styles.label}>Profit Ratio (%)</Text>
        <View style={gst_styles.input_flex_box}>
          <TextInput
            style={gst_styles.input}
            keyboardType="numeric"
            placeholder="Enter Profit Ratio here"
            value={profitRatio}
            onChangeText={(text) => setProfitRatio(text)}
          />

          <View style={gst_styles.vr_line}></View>
          <Text style={[gst_styles.input_per, { marginRight: 10 }]}>%</Text>
        </View>
      </View>

      <View style={gst_styles.total_selling_box}>
        <Text style={gst_styles.selling_heading_text}>
          Total Selling price will be
        </Text>
      </View>
      <View style={gst_styles.output_box}>
        <Text style={gst_styles.price_text}>{result.sellingPrice} Rs</Text>

        <View style={gst_styles.total_gst_frofit_flex_box}>
          <View style={gst_styles.total_flex_child}>
            <Text style={gst_styles.profit_gst_heading_text}>Total Profit</Text>
            <Text style={gst_styles.profit_gst_text}>
              {result.totalProfit} Rs
            </Text>
          </View>
          <View style={gst_styles.total_flex_child}>
            <Text style={gst_styles.profit_gst_heading_text}>Total GST </Text>
            <Text style={gst_styles.profit_gst_text}>{result.totalGST} Rs</Text>
          </View>
        </View>
      </View>

      {/* <View style={gst_styles.inputContainer}>
        <Text style={gst_styles.label}>Enter GST Rate (%):</Text>
        <TextInput
          style={gst_styles.input}
          keyboardType="numeric"
          placeholder="Enter GST rate"
          value={gstRate}
          onChangeText={(text) => setGstRate(text)}
        />
      </View> */}

      {/* <TouchableOpacity
        style={gst_styles.calculateButton}
        onPress={() => {
          const result = calculateGST()
          alert(
            `Selling Price: ${result.sellingPrice}\nTotal Profit: ${result.totalProfit}\nTotal GST: ${result.totalGST}`,
          )
        }}
      >
        <Text style={gst_styles.calculateButtonText}>Calculate</Text>
        <Icon name="calculator" size={20} color="#FFF" />
      </TouchableOpacity> */}
    </View>
  )
}

export default GstCalculater
