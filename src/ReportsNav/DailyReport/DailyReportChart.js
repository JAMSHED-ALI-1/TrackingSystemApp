import React from 'react'
import { View, StyleSheet, Dimensions, useWindowDimensions,Text } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import Theme from '../../Theme/theme';
import styles from '../../Styles/Dashboard/Chart/AllChart.module'
const windowWidth = Dimensions.get('window').width

const data = {
  labels: ['Running', 'Stopped', 'Idle', 'Park', 'No Data'],
  datasets: [
    {
      data: [20, 15, 25, 12, 16],
      colors: [
        (opacity) => Theme.green,
        (opacity = 1) => Theme.red,
        (opacity = 1) => Theme.yellow,
        (opacity = 1) => '#137373',
        (opacity = 1) => '#4E3725',
      ],
    },
  ],
}

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 1,

  propsForVerticalLabels: {
    fontSize: 10,
  },
  propsForHorizontalLabels: {
    fontSize: 10,
  },
  propsForLabels: {
    fontSize: 10,
  },
  propsForBackgroundLines: {
    strokeWidth: 0,
  },
  horizontalLabelRotation: 0,
}

const DailyReportChart = () => {
  const { width } = useWindowDimensions()
  return (
    <View style={[styles.trip_cont,{borderRadius:20}]}>
    <View style={styles.trip_text_box}>
      <Text
        style={(styles.trip_text, [{ transform: [{ rotate: '270deg' }] }])}
      >
        Time
      </Text>
    </View>

    <View>
      {/* <View style={[styles.trip_text_box,{marginTop:10}]}>
      </View> */}
      <View style={[styles.heading_box, {marginTop:5}]}>

      <Text style={styles.trip_text}>Status Report</Text>
            <Text style={[styles.heading_text2,{marginTop:0}]}> ( HR 12 WWWW 2345 )</Text>

          </View>
      <BarChart
        style={styles.bar_chart_box}
        data={data}
        width={windowWidth / 1.18}
        overflow={'visible'}
        height={280}
        yAxisLabel=""
        xAxisLabel=""
        chartConfig={chartConfig}
        showBarTops={false}
        // verticalLabelRotation={30}
        withCustomBarColorFromData
        // flatColor
        //   showValuesOnTopOfBars={true}
        fromZero={true}
        yAxisSuffix="h"
      />
    </View>
  </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // width: '95%',
//     alignSelf: 'center',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // borderWidth:1,
//     // borderColor:'red'
//     // width:windowWidth/1.2
//     // height:300,
//     // borderWidth:1,
//     // paddingBottom:0,
//   },
//   chart_box: {
//     alignSelf: 'center',
//     overflow: 'visible',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     // borderRadius: 20,
//     // shadowColor: '#000',
//     // // borderColor:''
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 2,
//     // },
//     // shadowOpacity: 1,
//     // shadowRadius: 6,
//     // elevation: 5,
//   },
  
// })

export default DailyReportChart
