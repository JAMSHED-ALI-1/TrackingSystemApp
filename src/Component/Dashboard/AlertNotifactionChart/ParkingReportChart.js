import { View, Text, Dimensions } from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import { BarChart } from 'react-native-chart-kit';
import styles from '../../../Styles/Dashboard/Chart/AllChart.module';

const data = {
  labels: [
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
   
  ],
  datasets: [
    {
      data: [20, 10, 25, 11, 6,],
      colors: [
        (opacity) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
       
      ],
    },
  ],
}

const data2 = {
  labels: [
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    'HR 23 HHH 2345',
    
  ],
  datasets: [
    {
      data: [20, 10, 25, 11, 6, ],
      colors: [
        (opacity) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
       
      ],
    },
  ],
}

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 1.1,

  propsForVerticalLabels: {
    fontSize: 5.5,
  },
  propsForHorizontalLabels: {
    fontSize: 5.5,
  },
  propsForLabels: {
    fontSize: 5,
  },
  propsForBackgroundLines: {
    strokeWidth: 0,
  },
  horizontalLabelRotation: 0, 
}

const ParkingReportChart = () => {
  return (
    <View >

      <View style={[styles.trip_cont,{marginBottom:15}]}>
        {/* <View style={[{ borderWidth:1,justifyContent:'center', width:'5%'}]}>
            <Text numberOfLines={1} style={[styles.trip_text,{borderWidth:1,}, {transform:[{rotate:'270deg'}]}]}>No. Of Time</Text>
        </View> */}
        <View>
          <View style={styles.heading_box}>
            <Text style={styles.alert_ingnation_text}>Parking Report</Text>
            {/* <Text style={styles.heading_text2}>All Vehicle</Text> */}

          </View>
          <BarChart
            style={styles.bar_chart_box}
            data={data}
            width={windowWidth / 1.1}
            overflow={'visible'}
            height={340}
            yAxisLabel=""
            xAxisLabel=""
            chartConfig={chartConfig}
            showBarTops={false}
            // verticalLabelRotation={15}
            withCustomBarColorFromData
            flatColor
              showValuesOnTopOfBars={true}
            fromZero={true}
            yAxisSuffix=""
            // hideLegend={true}
          />
        </View>
        
      </View>


      {/* Engine On/Off Report */}
      <View style={styles.container}>
        <View>
          <View style={styles.heading_box}>
            <Text style={styles.alert_ingnation_text}>Parking Report</Text>
            {/* <Text style={styles.heading_text2}>All Vehicle</Text>  */}
          </View>
          <BarChart
            style={styles.bar_chart_box}
            data={data2}
            width={windowWidth / 1.1}
            overflow={'visible'}
            height={340}
            yAxisLabel=""
            xAxisLabel=""
            chartConfig={chartConfig}
            showBarTops={false}
            // verticalLabelRotation={30}
            withCustomBarColorFromData
            flatColor
              showValuesOnTopOfBars={true}
            showValuesOnBottomOfBars={true}
            fromZero={true}
            yAxisSuffix="h"
          />
          <View style={[styles.trip_text_box,{marginBottom:10}]}>
            {/* <Text style={styles.alert_bottom_text}>Date ( Last 10 Days in December 2023 )</Text> */}
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default ParkingReportChart;
