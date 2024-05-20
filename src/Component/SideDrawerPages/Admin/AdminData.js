
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import adminData from '../../../Constants/admin.json';
import { ScrollView } from 'react-native-gesture-handler';
import AdminMapValue from './AdminMapValue';

const AdminData = () => {
  // console.log("Admin Data:", adminData);
  // if (!adminData.admin || adminData.admin.length === 0) {
  //   return <Text>No admin data available</Text>;
  // }

  return (
    <SafeAreaView>
    <ScrollView>
      {adminData.admin.map(admin => (
        <AdminMapValue key={admin.id} admin={admin} />
      ))}
    </ScrollView>
  </SafeAreaView>
  )
}

export default AdminData;