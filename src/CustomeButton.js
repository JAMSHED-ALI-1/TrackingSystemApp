import React, { useState, useEffect } from 'react';
import { View, Button, Platform, Text, PermissionsAndroid } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { requestStoragePermission } from './HelperFunction/LocationHandler'; // Assuming you have a helper function for permission handling

const CustomDownloadButton = ({ html, jsonData }) => {
    const [selectedPrinter, setSelectedPrinter] = useState();
    const [storagePermission, setStoragePermission] = useState('');

    useEffect(() => {
        checkPermission();
    }, []);

    const checkPermission = async () => {
        try {
            const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
            if (granted) {
                setStoragePermission('granted');
            } else {
                console.log(granted);
                setStoragePermission('denied');
            }
        } catch (error) {
            console.error('Error checking permission:', error);
            setStoragePermission('denied');
        }
    };

    const requestPermission = async () => {
        try {
            const granted = await requestStoragePermission();
            if (granted) {
                setStoragePermission('granted');
            } else {
                console.log('Storage permission denied');
                setStoragePermission('denied');
            }
        } catch (error) {
            console.error('Error requesting permission:', error);
        }
    };

    const printToFile = async () => {
        try {
            const downloadsDirectory = FileSystem.documentDirectory + 'downloads/';
            const fileName = 'Report.pdf';
            const uri = downloadsDirectory + fileName;

            if (storagePermission !== 'granted') {
                await requestPermission();
                return;
            }

            await Print.printToFileAsync({ html: html.toString(), uri });

            const fileInfo = await FileSystem.getInfoAsync(uri);
            if (fileInfo.exists) {
                console.log('File has been saved to:', uri);
                await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
            } else {
                console.log('Error: File not saved.');
            }
        } catch (error) {
            console.error('Error printing to file:', error);
        }
    };

    const selectPrinter = async () => {
        try {
            const printer = await Print.selectPrinterAsync(); // iOS only
            setSelectedPrinter(printer);
        } catch (error) {
            console.error('Error selecting printer:', error);
        }
    };

    return (
        <View>
            <Button title="Print to PDF file" onPress={printToFile} />
            {Platform.OS === 'android' && (
                <>
                    <Button title="Request Storage Permission" onPress={requestPermission} />
                </>
            )}
            {Platform.OS === 'ios' && (
                <>
                    <Button title="Select printer" onPress={selectPrinter} />
                    {selectedPrinter && (
                        <Text>{`Selected printer: ${selectedPrinter.name}`}</Text>
                    )}
                </>
            )}
            <Text>{`Storage permission: ${storagePermission}`}</Text>
        </View>
    );
};

export default CustomDownloadButton;
