import { View, Text, Dimensions } from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import { ScrollView } from 'react-native-gesture-handler';
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
      data: [200, 150, 250, 120, 160],
      colors: [
        (opacity) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
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
      data: [200, 150, 250, 120, 160],
      colors: [
        (opacity) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
        (opacity = 1) => '#33ABE5',
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
    fontSize:6,
    
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

const VehiclePerfomance = () => {
  return (
    <ScrollView horizontal>
      {/* <Text>VehiclePerfomance</Text> */}

      <View style={styles.container}>
        <View style={styles.trip_text_box}>
          <Text style={styles.heading_text}>Distance Report</Text>
        </View>
        <BarChart
          style={styles.bar_chart_box}
          data={data}
          width={windowWidth / 1.17}
          overflow={'visible'}
          height={340}
          yAxisLabel=""
          xAxisLabel=""
          chartConfig={chartConfig}
          showBarTops={false}
          // verticalLabelRotation={30}
          withCustomBarColorFromData
          // flatColor
          //   showValuesOnTopOfBars={true}
          fromZero={true}
          yAxisSuffix="KM"
        />
      </View>

      {/* trip box  */}
      <View style={styles.trip_cont}>
        {/* <View style={styles.trip_text_box}>
          <Text
            style={(styles.trip_text, [{ transform: [{ rotate: '270deg' }] }])}
          >
            Trip
          </Text>
        </View> */}

        <View>
          <View style={styles.trip_text_box}>
            <Text style={styles.heading_text}>Trip Report</Text>
          </View>
          <BarChart
            style={styles.bar_chart_box}
            data={data2}
            width={windowWidth / 1.15}
            overflow={'visible'}
            height={340}
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
    </ScrollView>
  )
}

export default VehiclePerfomance
