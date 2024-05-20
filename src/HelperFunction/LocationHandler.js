// import { PermissionsAndroid } from 'react-native';

// const requestLocationPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             // {
//             //     title: 'Location Permission',
//             //     message: 'This app requires access to your location.',
//             //     buttonPositive: 'OK',
//             // },
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//         console.warn(err);
//         return false;
//     }
// };


// const requestStoragePermission = async () => {
//     try {
//         console.log("Permission Requested");
//         // Check if the permission is already granted
//         //     const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

//         //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         //         console.log('Storage permission already granted');
//         //         return true; // Indicate success without redundant request
//         //     }
//         //     console.log("Permission Requested level: 2");
//         //     // Request the permission if not granted
//         //     const requestResult = await PermissionsAndroid.requestMultiple([
//         //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         //     ]);

//         //     if (requestResult['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
//         //         console.log('Storage permission granted');
//         //         // Proceed with file saving
//         //         return true;
//         //     } else {
//         //         console.log('Storage permission denied from PermissionsAndroid');
//         //         return false;
//         //     }
//         // } catch (err) {
//         //     console.warn(err);
//         //     return false; // Indicate error during process
//         // }
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//             // {
//             //     title: 'Location Permission',
//             //     message: 'This app requires access to your location.',
//             //     buttonPositive: 'OK',
//             // },
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//         console.warn(err);
//         return false;
//     }
// };
// export { requestLocationPermission, requestStoragePermission };

import { PermissionsAndroid } from 'react-native';

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            // ,
            // {
            //     title: 'Location Permission',
            //     message: 'This app requires access to your location for better functionality.',
            //     buttonPositive: 'OK',
            // }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Error requesting location permission:', err);
        return false;
    }
};

const requestStoragePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission',
                message: 'This app requires access to your storage for saving data.',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Error requesting storage permission:', err);
        return false;
    }
};

const requestContactPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: 'Contact Permission',
                message: 'This app requires access to your contacts for better functionality.',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Error requesting contact permission:', err);
        return false;
    }
};

const requestSMSPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
            {
                title: 'SMS Permission',
                message: 'This app requires access to send SMS messages.',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Error requesting SMS permission:', err);
        return false;
    }
};

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message: 'This app requires access to your camera for taking photos.',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Error requesting camera permission:', err);
        return false;
    }
};

const requestMicrophonePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: 'Microphone Permission',
                message: 'This app requires access to your microphone for recording audio.',
                buttonPositive: 'OK',
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn('Error requesting microphone permission:', err);
        return false;
    }
};

const requestMultiplePermissions = async () => {
    try {
        const permissions = [
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]
        const grantedPermissions = {};
        for (const permission of permissions) {
            const granted = await PermissionsAndroid.request(permission
                //     ,
                //      {
                //     title: 'Permission Request',
                //     message: `This app requires access to ${permission}`,
                //     buttonPositive: 'OK',
                // }
            );
            grantedPermissions[permission] = granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return grantedPermissions;
    } catch (err) {
        console.warn('Error requesting multiple permissions:', err);
        return {};
    }
};

export {
    requestLocationPermission,
    requestStoragePermission,
    requestContactPermission,
    requestSMSPermission,
    requestCameraPermission,
    requestMicrophonePermission,
    requestMultiplePermissions,
};
