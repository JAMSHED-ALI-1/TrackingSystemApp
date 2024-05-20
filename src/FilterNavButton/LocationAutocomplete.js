import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Theme from '../Theme/theme';

const LocationAutocomplete = ({
    placeholderText,
    fetchAddress
}) => {

    const onPressAddress = (data, details) => {
        // console.log("Selected Location Details:", data, details);

        let resLength = details.address_components;
        let zipCode = '';

        let filtersResCity = details.address_components.filter(val => {
            if (val.types.includes('locality') || val.types.includes('sublocality')) {
                return val;
            }
            if (val.types.includes('postal_code')) {
                let postalCode = val.long_name;
                zipCode = postalCode;
            }
            return false;
        });

        let dataTextCityObj = filtersResCity.length > 0
            ? filtersResCity[0]
            : details.address_components[
            resLength > 1 ? resLength - 2 : resLength - 1
            ];

        let cityText =
            dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
                ? dataTextCityObj.short_name
                : dataTextCityObj.long_name;

        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        // console.log("Latitude:", lat);
        // console.log("Longitude:", lng);

        fetchAddress(lat, lng, zipCode, cityText, data?.description);
    }

    const handleTextInputChange = (text) => {
        // Function to handle text input change
        // console.log("Input Text : ", text);
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                onPress={onPressAddress}
                fetchDetails={true}
                query={{
                    key: "AIzaSyB805CtESIXbdoCwEeScVPUj7S2TRZrpOE",
                    language: 'en-IN'
                }}
                // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                // currentLocationLabel="Current location"
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
                textInputProps={{
                    onChangeText: handleTextInputChange // Add onChangeText prop
                }}
                onFail={error => console.log('error to find Region : ' + error)}
                onNotFound={() => console.log('No results Found : ')}
            // keepResultsAfterBlur={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: '700%',
    },
    containerStyle: {
        // backgroundColor: Theme.offWhite,
    },
    textInputStyle: {
        height: 30,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#f3f3f3',
        borderWidth: .3
    }
});

export default LocationAutocomplete;
