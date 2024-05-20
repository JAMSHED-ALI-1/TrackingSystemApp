import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import DashboardVehicleSelector from './DashboardVehicleSelect'
import dashboard_styles from '../../../Styles/Dashboard/DashboardInfo/Dashboard.module'
import Reminder from '../Reminder'
import DashboardAllVehicle from './DashboardAllVehicle'
import VehicleInfoBox from '../VehicleInfoBox'
import AlertNotifaction from '../AlertNotifaction'
import StatusReportChart from '../StatusReportChart'
import { ScrollView } from 'react-native-gesture-handler'
import VehiclePerfomance from '../VehiclePerfomance/VehiclePerfomance'
import AlertChart from '../AlertNotifactionChart/AlertChart'

const Dashboard = ({ runningStat }) => {
  // useEffect(() => console.log(runningStat), [])
  return (
    <ScrollView style={{ marginTop: 15, marginBottom: 70 }}>
      <View style={dashboard_styles.vehicle_select_box}>
        <DashboardVehicleSelector />
      </View>
      <View style={dashboard_styles.reminder_vehicle_box}>
        <Text style={dashboard_styles.reminder_text}>Reminder</Text>
        <Reminder />
      </View>
      <View style={dashboard_styles.reminder_vehicle_box}>
        <Text style={dashboard_styles.reminder_text}>All Vehicle Status</Text>
        <DashboardAllVehicle runningStat={runningStat} />
      </View>

      {/* all vehicle chart  */}
      <View style={dashboard_styles.vehicle_report_graph_box}>
        {/* <Text
          style={[
            dashboard_styles.time_text,
            { transform: [{ rotate: '270deg' }] },
          ]}
        >
          Time
        </Text> */}
        <View>
          <View style={dashboard_styles.vehicle_report_status_box}>
            <Text style={dashboard_styles.status_report_text}>
              Status Report
            </Text>
            <Text style={dashboard_styles.status_all_veh_report_text}>
              (All Vehicle)
            </Text>
          </View>
          <StatusReportChart />
        </View>
      </View>

      <View style={dashboard_styles.reminder_vehicle_box}>
        <VehicleInfoBox />
      </View>

      <View style={dashboard_styles.reminder_vehicle_box}>
        <Text style={dashboard_styles.reminder_text}>Alert / Notification</Text>
        <AlertNotifaction />
      </View>


      <View style={dashboard_styles.reminder_vehicle_box}>
        <Text style={dashboard_styles.reminder_text}>Vehicle Performance</Text>
        <VehiclePerfomance />
      </View>


      {/* <View style={dashboard_styles.reminder_vehicle_box}>
        <AlertChart/>
      </View> */}
    </ScrollView>
  )
}

export default Dashboard
