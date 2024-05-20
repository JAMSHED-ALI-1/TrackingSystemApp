import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../Theme/theme';
import { addDriver } from '../../HelperFunction/api'; // Import the addDriver function


const AddDriver = ({ route, navigation }) => {
    const { locDataId } = route.params || {},
        [formData, setFormData] = useState({
            vehicle_id: '',
            name: '',
            contact: '',
        })

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            console.log(formData);
            // Call addDriver function with formData
            const result = await addDriver(formData);
            console.log('Driver added successfully:', result);
            // Reset form after successful submission if needed
            setFormData({
                vehicle_id: '',
                name: '',
                contact: '',
            });
        } catch (error) {
            console.error('Error adding driver:', error.message);
            // Handle error as needed
        }
    };

    useEffect(() => {
        if (locDataId?.device_id) {
            // Update vehicle_id in formData when locDataId.device_id changes
            setFormData((prevData) => ({
                ...prevData,
                vehicle_id: locDataId.device_id[0],
            }));
        }
    }, [locDataId]);



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack("MapScreen")}>
                    <MaterialCommunityIcons
                        name="chevron-left"
                        size={40}
                        color={Theme.blue.primary}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Add Driver</Text>
            </View>
            <View style={styles.vehicleNumber}>
                <Text>{locDataId.vehicleNumber}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={formData.name}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact"
                value={formData.contact}
                onChangeText={(text) => handleInputChange('contact', text)}
            />
            <View style={styles.submit}>
                <TouchableOpacity onPress={handleSubmit} >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddDriver;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 10,
    },
    header: {
        flexDirection: 'row',
        width: "100%",
        marginBottom: 40,
        marginTop: 20,
        alignItems: 'center',
    },
    vehicleNumber: {
        width: "100%",
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: .5,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    submit: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: .5,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.blue.secondary
    }
});
