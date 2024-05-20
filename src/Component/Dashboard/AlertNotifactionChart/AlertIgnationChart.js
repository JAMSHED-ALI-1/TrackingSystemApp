import { View, Text,  Dimensions } from 'react-native'
import React from 'react';
const windowWidth = Dimensions.get('window').width
import { ScrollView } from 'react-native-gesture-handler'
import { BarChart } from 'react-native-chart-kit'
import Theme from '../../../Theme/theme'
import styles from '../../../Styles/Dashboard/Chart/AllChart.module'

const data = {
  labels: [
    'Parking',
    'Relay On/Off',
    'Geofence',
    'Ignition',
    'Over speed',
    'Harsh Breaking',
    'Sharp Turn',
    'POI Entry/Exit',
    'Device Inactive',
  ],
  datasets: [
    {
      data: [20, 10, 25, 11, 6, 15, 24, 18, 23],
      colors: [
        (opacity) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
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
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
  ],
  datasets: [
    {
      data: [20, 10, 25, 11, 6, 15, 24, 18, 23],
      colors: [
        (opacity) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
        (opacity = 1) => '#2A77E3',
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
  barPercentage: .6,

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

const AlertIgnationChart = () => {
  return (
    <View >
      {/* <Text>VehiclePerfomance</Text> */}

      <View style={[styles.container,{marginBottom:15}]}>
        <View>
          <View style={styles.trip_text_box}>
            <Text style={styles.alert_ingnation_text}>Alert / Notification History</Text>
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
            verticalLabelRotation={15}
            withCustomBarColorFromData
            flatColor
              showValuesOnTopOfBars={true}
            fromZero={true}
            yAxisSuffix="h"
          />
        </View>
        
      </View>


      {/* Ignition Report */}
      <View style={styles.container}>
        <View>
          <View style={styles.trip_text_box}>
            <Text style={styles.alert_ingnation_text}>Ignition Report</Text>
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
            fromZero={true}
            yAxisSuffix="h"
          />
          <View style={styles.trip_text_box}>
            <Text style={styles.alert_bottom_text}>Date ( Last 10 Days in December 2023 )</Text>
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default AlertIgnationChart
