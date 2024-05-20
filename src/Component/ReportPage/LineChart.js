import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { LineChart } from "react-native-chart-kit";

const ReportLineChart = () => {
  // Function to generate random speed values for the graph
  const generateRandomSpeed = () => {
    return Math.random() * 100;
  };

  // Function to generate labels for the graph based on time intervals of 4
  const generateLabels = () => {
    const labels = [];
    for (let i = 0; i <= 24; i += 4) {
      labels.push(`${i % 12 === 0 ? 0 : i % 12}`);
    }
    return labels;
  };

  // Function to generate data for the graph
  const generateData = () => {
    const data = [];
    for (let i = 0; i <= 24; i += 4) {
      data.push(generateRandomSpeed());
    }
    return data;
  };

  return (
    <View>
      <Text>Time vs. Speed Chart</Text>
      <LineChart
        data={{
          labels: generateLabels(), // Generate labels with time intervals of 4
          datasets: [
            {
              data: generateData(), // Generate random speed data
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="Speed"
        yAxisSuffix=" km/h"
        yAxisInterval={1}
        chartConfig={{
          decimalPlaces: 4,
          borderColor :'green',
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",

          color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Set green color for the line
          labelColor: (opacity = 0.5) => `rgba(128, 128, 128, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
    </View>
  );
}

export default ReportLineChart;
