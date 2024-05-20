import { Text, View, Dimensions } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import vehicle_report_styels from '../../Styles/ReportPage/VehicleReport.module';
import ReportBarChartButton from './ReportBarChartButton';
import barchart_styles from '../../Styles/ReportPage/ReportBarChart.module';
import Theme from '../../Theme/theme';
const windowWidth = Dimensions.get('window').width;

const ReportRunningChart = () => {
  const data = {
    labels: ['Yesterday', 'Today'],
    datasets: [
      {
        data: [20, 45],
        colors: [(opacity) => '#33ABE5', (opacity) => Theme.red],
      },
    ],
  }

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

  return (
    <View style={barchart_styles.barchart_main_view}>
      <View style={barchart_styles.barchart_status_box}>
        <Text style={barchart_styles.barchart_running_text}>
          Running Durations
        </Text>
        <View>
          <ReportBarChartButton />
        </View>
      </View>

      <View style={barchart_styles.barchart_box}>
        <View
          style={[{ marginLeft: -10 }, { transform: [{ rotate: '270deg' }] }]}
        >
          <Text>Time</Text>
        </View>
        <BarChart
          data={data}
          width={windowWidth / 2.0}
          height={260}
          borderRadius={20}
          // yAxisLabel="$"
          chartConfig={chartConfig}
          withInnerLines={false}
          fromZero={true}
          showBarTops={false}
          // showValuesOnTopOfBars={true}
          withCustomBarColorFromData
          withHorizontalLabels={false}
        />
        <View
          style={
            vehicle_report_styels.vehicle_report_total_distance_child1_left
          }
        >
          <Text style={vehicle_report_styels.vehicle_report_down_text}>
            7 %
          </Text>
          <MaterialCommunityIcons
            name="arrow-down-thick"
            size={30}
            color="#BF4545"
          />
        </View>
      </View>
    </View>
  )
}

export default ReportRunningChart;
