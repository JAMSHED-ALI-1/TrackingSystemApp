

const GOOGLE_MAPS_API_KEY = 'AIzaSyDEZOG4asjOZi3nFVQBcE8HjKn97gM_xQc'
// 'AIzaSyBY5pGRFdldsh1LIRzongR7o2INcCdAe7M';
// 'AIzaSyD1cdvn7vyvL_EC0PHsM_WxyhkkU_xFMdg';
// 'AIzaSyB805CtESIXbdoCwEeScVPUj7S2TRZrpOE';

const parsePolylines = (routes) => {
    const polylines = [];
    routes.forEach(route => {
        const polylineData = route.overview_polyline.points;
        polylines.push(polylineData);
    });
    return polylines;
};

const getDirections = async (startLocation, endLocation) => {
    try {
        const startPoint = `${startLocation.latitude},${startLocation.longitude}`;
        const endPoint = `${endLocation.latitude},${endLocation.longitude}`;
        const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${endPoint}&key=${GOOGLE_MAPS_API_KEY}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK') {
            // Parse the polyline data from the response
            const polylines = parsePolylines(data.routes);
            console.log("Succes fetching polylines :", data.status);
            return { status: 'success', polylines };
        } else {
            console.log("Failed fetching polylines => :", data.status);
            return { status: 'error', message: 'Failed to fetch directions' };
        }
    } catch (error) {
        console.error('Error fetching directions:', error);
        return { status: 'error', message: 'An unexpected error occurred' };
    }
};
const geocodeAddress = async (address) => {
    try {
        const encodedAddress = encodeURIComponent(address);
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            return { status: 'success', coordinates: { latitude: lat, longitude: lng } };
        } else {
            console.log("Failed geocoding address:", data.status);
            return { status: 'error', message: 'Failed to geocode address' };
        }
    } catch (error) {
        console.error('Error geocoding address:', error);
        return { status: 'error', message: 'An unexpected error occurred' };
    }
};



const reverseGeocodeCoordinates = async (latitude, longitude) => {
    try {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            const result = data.results[0];
            const placeId = result.place_id;

            // Call the Place Details API to get the complete address
            const address = await getPlaceDetails(placeId);

            return { status: 'success', address };
        } else {
            console.log("Failed reverse geocoding coordinates:", data.status);
            return { status: 'error', message: 'Failed to reverse geocode coordinates' };
        }
    } catch (error) {
        console.error('Error reverse geocoding coordinates:', error);
        return { status: 'error', message: 'An unexpected error occurred' };
    }
};

const getPlaceDetails = async (placeId) => {
    try {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK') {
            const address = data.result.formatted_address;
            return address;
        } else {
            console.error("Failed to get place details:", data.status);
            return "Address not found";
        }
    } catch (error) {
        console.error("Error fetching place details:", error);
        return "An unexpected error occurred";
    }
};


export {
    getDirections,
    geocodeAddress,
    reverseGeocodeCoordinates
};