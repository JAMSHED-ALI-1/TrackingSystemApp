 import { useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Application from 'expo-application';


async function registerForPushNotificationsAsync() {
    let token = null;

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        if (Device.isDevice) {
            // For iOS devices
            if (Platform.OS === 'ios') {
                const iosPushToken = await Notifications.getDevicePushTokenAsync();
                token = iosPushToken.data;
            }
            // For Android devices
            else if (Platform.OS === 'android') {
                const androidPushToken = await Notifications.getDevicePushTokenAsync();
                token = androidPushToken.data;
            }
        }
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}


// Hook to manage push notifications
export function usePushNotifications() {
    const [expoPushToken, setExpoPushToken] = useState(null);
    const [notification, setNotification] = useState(null);
    const [installationId, setInstallationId] = useState(null);

    // useEffect to register for push notifications and retrieve Expo push token
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        // // Retrieve installation ID
        // const installationId = Application.getI();
        // setInstallationId(installationId);

        // Set notification handler to handle notifications when the app is in foreground, background, or device screen is off
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldPlaySound: true, // Play sound for the notification
                shouldShowAlert: true, // Show alert for the notification
                shouldSetBadge: true, // Set badge for the notification (e.g., app icon badge count)
            }),
        });

        // Listener for notification received
        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);

            // Handle notification received logic here
            console.log('Notification received:', notification);
        });

        // Listener for notification response received
        const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

    return { expoPushToken, notification, installationId };
}

