import React from 'react';
import { View, StyleSheet,Dimensions, useWindowDimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Theme from '../../Theme/theme';
const windowWidth = Dimensions.get('window').width;

const data = {
  labels: ["Running", "Stopped", "Idle", "Park", "No Data"],
  datasets: [
    {
      data: [20, 15, 25, 12, 16, ],
      colors: [(opacity)=> Theme.green, (opacity=1)=> Theme.red, (opacity=1)=> Theme.yellow, (opacity=1)=>'#137373', (opacity=1)=>'#4E3725',  ]
    }
  ]
};

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
};



const StatusReportChart = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <BarChart
        style={{ alignSelf:'center',overflow:'visible', alignSelf:'center',justifyContent:'center'}}
        data={data}
        width={windowWidth/1.15}
        overflow={'visible'}
        height={340}
        yAxisLabel=""
        xAxisLabel=""
        chartConfig={chartConfig}
        showBarTops={false} 
        // verticalLabelRotation={30}
        withCustomBarColorFromData
        // flatColor
        showValuesOnTopOfBars={true}
        fromZero={true}
        yAxisSuffix="h"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '95%',
    alignSelf:'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth:1,
    // borderColor:'red'
    // width:windowWidth/1.2
    // height:300,
    // borderWidth:1,
    // paddingBottom:0,
    marginRight:20
  },
});

export default StatusReportChart;
