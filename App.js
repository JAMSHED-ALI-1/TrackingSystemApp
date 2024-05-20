
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar } from 'react-native';
import AllRoutes from './src/Component/AllRoutes';
import Theme from './src/Theme/theme';
// import { usePushNotifications } from './src/Notification/pushNotification'; // Import the usePushNotifications hook
// import { sendTokenToBackend } from './src/HelperFunction/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as BackgroundFetch from 'expo-background-fetch';
// import * as TaskManager from 'expo-task-manager';
// import * as Notifications from 'expo-notifications';

// const BACKGROUND_FETCH_TASK = 'background-fetch';

// TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
//   try {
//     const now = Date.now();
//     console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);
//     // Be sure to return the successful result type!
//     return BackgroundFetch.BackgroundFetchResult.NewData;
//   } catch (error) {
//     console.error('Error in background fetch task:', error);
//     return BackgroundFetch.BackgroundFetchResult.Failed;
//   }
// });

// async function registerBackgroundFetchAsync() {
//   return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
//     minimumInterval: 60 * 15, // 15 minutes
//     stopOnTerminate: false, // android only,
//     startOnBoot: true, // android only
//   });
// }

const App = () => {
  // const { expoPushToken, notification } = usePushNotifications();
  // const [userId, setUserId] = useState(null);

  // useEffect to log expoPushToken


  // useEffect(() => {
  //   console.log('Expo Push Token:', expoPushToken);
  //   if (expoPushToken) {
  //     // Send the token to your backend server
  //     console.log("Sended Push Token  from App.js: ")

  //     AsyncStorage.getItem('user_id').then((id) => {
  //       if (id) {
  //         // navigation.replace('SideDrawerNav');
  //         console.log("Sended to Background : ", expoPushToken, id.replace(/"/g, ''))
  //         sendTokenToBackend(expoPushToken, id.replace(/"/g, ''));
  //       } else {
  //         // navigation.navigate('LoginScreen');
  //       }
  //     });
  //   }
  // }, [expoPushToken])


  // useEffect to log notification
  // useEffect(() => {
  //   console.log('Notification  :', notification);
  // }, [notification]);

  // useEffect(() => {
  //   console.log('Notification:', notification);
  //   if (notification) {
  //     // Display notification in device notification tray
  //     Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: notification.request.content.title,
  //         body: notification.request.content.body,
  //       },
  //       trigger: null, // Display immediately
  //     });
  //   }
  // }, [notification]);

  // useEffect(() => {
  //   // Register the background fetch task when the app starts
  //   registerBackgroundFetchAsync();
  // }, []);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <StatusBar barStyle="dark-content" showHideTransition='fade' backgroundColor={Theme.extraLightBlue} />
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <AllRoutes />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  topSafeArea: {
    flex: 0,
  },
});

export default App;
