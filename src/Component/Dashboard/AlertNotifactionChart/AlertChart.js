import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AlertIgnationChart from './AlertIgnationChart';
import OverTopReportChart from './OverTopReportChart';
import StoppageReportChart from './StoppageReportChart';
import GeofenceChart from './GeofenceChart';
import EngineReportChart from './EngineReportChart';
import ParkingReportChart from './ParkingReportChart';

const AlertChart = () => {
  return (
    <ScrollView horizontal>
     <AlertIgnationChart/>
     <OverTopReportChart/>
     <StoppageReportChart/>
     <GeofenceChart/>
     <EngineReportChart/>
     <ParkingReportChart/>
    </ScrollView>
  )
}

export default AlertChart;