// api.js

import { Alert } from "react-native";

//URL : to access api's
const BASE_URL = "https://qiktrack.com/api",
  // const BASE_URL = "http://localhost:3000/api",
  key = "AIzaSyBuYObm7UlhKmPwlAEMJebwzKdPPmQzsbc",
  url =
    "https://roads.googleapis.com/v1/snapToRoads?interpolate=true&key=" +
    key +
    "&path=",
  addressurl =
    "https://maps.googleapis.com/maps/api/geocode/json?language=hi&key=" +
    key +
    "&latlng=";

import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchAllVehicleData = async (Operator) => {
  try {
    // console.log('Fetching all vehicle data called');
    // console.log(Operator);
    const response = await fetch(`${BASE_URL}/getOperatorVehicle/${Operator}`);

    if (!response.ok) {
      console.error("Error fetching vehicle data:", response.status);
      throw new Error(
        `Unable to load vehicle data. Status code: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle data:", error.message);
    throw new Error("Unable to load vehicle data. An error occurred.");
  }
};

const fetchOperatorVehiclesData = async (operatorId) => {
  try {
    const response = await fetch(`${BASE_URL}/getOperatorVehicleCount/${operatorId}`);
    if (!response.ok) {
      console.error("Error fetching vehicle data:", response.status);
      throw new Error(
        `Unable to load vehicle data. Status code: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle data:", error.message);
    throw new Error("Unable to load vehicle data. An error occurred.");
  }
};

// Example usage:
// const operatorId = '65728bda2ccde6aa73c4fc46';
// fetchOperatorVehiclesData(operatorId)
//   .then(data => {
//     console.log("Vehicle data:", data);
//     // Process the data further as needed
//   })
//   .catch(error => {
//     console.error("Error fetching vehicle data:", error.message);
//   });


const fetchLocationData = async (
  deviceId,
  pageSize = 10,
  page = 1,
  language = "hi"
) => {
  try {
    // console.log("Fetching location data : ", deviceId, pageSize, page);
    if (deviceId?.length > 0) {
      const response = await fetch(
        `${BASE_URL}/location?language=${language}&pageSize=${pageSize}&page=${page}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deviceIds: deviceId, // Pass deviceId inside an array as data
          }),
        }
      );
      if (!response.ok) {
        console.error("Error fetching location data from fetchLocationData:", response.status);
        // throw new Error(`Unable to load location data. Status code: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching location data:", error.message);
    throw new Error("Unable to load location data. An error occurred.");
  }
};

const fetchPathData = async (imei, query = null) => {
  try {
    // console.log("Fetching path data called : ");
    let url = `${BASE_URL}/pathcovered/${imei}`;
    if (query && query.startDate && query.endDate) {
      const { startDate, endDate } = query;
      // const formattedStartDate = formatDate(startDate);
      // const formattedEndDate = formatDate(endDate);

      url += `?startDate=${startDate}&endDate=${endDate}`;
    }
    // console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Path data: ", data);

    // You can handle the path data as needed here
    // For example, update the state or trigger some action
    return data;
  } catch (error) {
    console.error("Error fetching path data from api.js:", error);
    // Handle the error as needed
  }
};

const fetchRawPathData = async (imei) => {
  try {
    // console.log("Fetching path data called : ");
    const response = await fetch(`${BASE_URL}/path/${imei}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Path data: ", data);

    // You can handle the path data as needed here
    // For example, update the state or trigger some action
    return data;
  } catch (error) {
    console.error("Error fetching path data from api.js:", error);
    // Handle the error as needed
  }
};

const sendRelayCommand = async (terminalId, command) => {
  try {
    console.log(terminalId, command);
    console.log("Sending command called");

    const postData = {
      terminalId: terminalId,
      command: command,
    };

    const response = await fetch(`${BASE_URL}/sendcommand`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed

    return data;
  } catch (error) {
    console.error("Error sending command:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};

// Function to handle login API call
const loginUser = async (email, password) => {
  // console.log("cred :", email, password);
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    throw new Error("Error during login:", error.message);
  }
};

const getSpeedLimit = async (vehicleIdsArray) => {
  // console.log("veh : ", vehicleIdsArray);
  try {
    const response = await fetch(`${BASE_URL}/getSpeedlimit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "vehicle_ids": vehicleIdsArray })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Speed Limit data from api.js:", error);
    // Handle the error as needed
    return null; // or throw the error again depending on your requirement
  }
};


const setSpeedLimit = async (speed, vehicleId) => {

  try {
    const response = await fetch(`${BASE_URL}/setSpeedlimit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        speed: speed,
        vehicle_id: vehicleId
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    throw new Error("Error during Setting Speed:", error.message);
  }
};

const fetchSnappedPoint = async (latitude, longitude) => {
  try {
    // console.log(url + latitude + "," + longitude);
    // console.log("Fetching path data called");
    const response = await fetch(url + latitude + "," + longitude);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Path data: ", data.snappedPoints[0].location);

    // You can handle the path data as needed here
    // For example, update the state or trigger some action
    if (data?.snappedPoints[0]?.location) {
      return data.snappedPoints[0].location;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error fetching path data from snapped point:", error);
    // Handle the error as needed
  }
};

const fetchAddress = async (latitude, longitude) => {
  try {
    // console.log(url + latitude + "," + longitude);
    console.log("Fetching path data called");
    const response = await fetch(addressurl + latitude + "," + longitude);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(),
      respData = data.results[0].formatted_address.split(", ");
    return respData.slice(1).join(", ");
  } catch (error) {
    console.error(
      "Error fetching path data from Path address in api.js:",
      error
    );
    // Handle the error as needed
  }
};
const fetchItineraryData = async (imei, fromDate, toDate) => {
  try {
    let apiUrl = `${BASE_URL}/Itinerary/${imei}`;
    const queryParams = [];
    if (fromDate && toDate) {
      queryParams.push(`fromDate=${fromDate}&toDate=${toDate}`);
    }
    // if (limit) {
    //   queryParams.push(`limit=${limit}`);
    // }
    if (queryParams.length > 0) {
      apiUrl += `?${queryParams.join("&")}`;
    }
    // console.log(apiUrl);
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching itinerary data:", error);
    throw error;
  }
};

const fetchVehicleDriversAllData = async (deviceId) => {
  try {
    const response = await fetch(`${BASE_URL}/vehicleDriversData/${deviceId}`);
    if (!response.ok) {
      console.error("Error fetching vehicleDriverAllData:", response.status);
      throw new Error(
        `Unable to load vehicle driver All data. Status code: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle Driver All data:", error.message);
    throw new Error("Unable to load vehicle Driver All data. An error occurred.");
  }
};

const updateDriver = async (driverId, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/updateDriver/${driverId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating driver:', error);
    throw new Error('Unable to update driver. An error occurred.');
  }
};

const fetchVehicleDriver = async (deviceId) => {
  try {
    const response = await fetch(`${BASE_URL}/vehicleDrivers/${deviceId}`);
    if (!response.ok) {
      console.error("Error fetching vehicleDriverData:", response.status);
      throw new Error(
        `Unable to load vehicle driver data. Status code: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching vehicle Driver data:", error.message);
    throw new Error("Unable to load vehicle Driver data. An error occurred.");
  }
};

const addDriver = async (driverData) => {
  //driverData = { vehicle_id, name, contact, address, documents } 
  try {
    const response = await fetch(`${BASE_URL}/addDriver`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(driverData),
    });

    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    throw new Error("Error while adding driver:", error.message);
  }
};

const deleteDriver = async (driverId) => {
  // console.log('api.js',`${BASE_URL}/deleteDriver/${driverId}`,driverId)
  try {
    const response = await fetch(`${BASE_URL}/deleteDriver/${driverId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.log("Status 404: driver area not found for the provided device.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    const data = await response.json();
    // Handle the response data as needed
    alert("Successfully Deleted !")
    return data;// This will likely return a success message or confirmation
  } catch (error) {
    throw new Error(error.message || 'Failed to delete driver');
  }
};


const addTrip = async (tripData) => {
  try {
    const response = await fetch(`${BASE_URL}/addTrip/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    });

    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    throw new Error("Error while adding trip:", error.message);
  }
};

const getTripById = async (tripId) => {
  try {
    const response = await fetch(`${BASE_URL}/getTrip/${tripId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    throw new Error("Error while fetching trip:", error.message);
  }
};

const getTripsByOperatorId = async (operatorId) => {
  try {
    // console.log("operatorId:", operatorId, `${BASE_URL}/getTripsByOperator/${operatorId}`);
    const response = await fetch(`${BASE_URL}/getTripsByOperator/${operatorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    throw new Error("Error while fetching trips by operator:", error.message);
  }
};


const getDailyReports = async (operatorId, type, from_date, to_date) => {
  try {
    // let query;
    // if (type === 'current_day') {
    //   const todayStart = new Date().setHours(0, 0, 0, 0);
    //   const todayEnd = new Date().setHours(23, 59, 59, 999);
    //   query = { created_at: { $gte: new Date(todayStart), $lte: new Date(todayEnd) } };
    // } else if (type === 'previous_day') {
    //   const yesterdayStart = new Date().setDate(new Date().getDate() - 1);
    //   const yesterdayEnd = new Date().setDate(new Date().getDate() - 1);
    //   query = { created_at: { $gte: new Date(yesterdayStart), $lte: new Date(yesterdayEnd) } };
    // } else if (type === 'week') {
    //   const weekStart = new Date().setDate(new Date().getDate() - 6);
    //   const weekEnd = new Date();
    //   query = { created_at: { $gte: new Date(weekStart), $lte: new Date(weekEnd) } };
    // } else if (type === 'custom_date' && from_date && to_date) {
    //   const fromDateObj = new Date(from_date);
    //   const toDateObj = new Date(to_date);
    //   query = { created_at: { $gte: new Date(fromDateObj), $lte: new Date(toDateObj) } };
    // } else {
    //   throw new Error("Invalid type parameter");
    // }
    let url;
    if (type === 'current_day') {
      const todayStart = new Date().setHours(0, 0, 0, 0);
      const todayEnd = new Date().setHours(23, 59, 59, 999);
      url = `${BASE_URL}/get-daily-reports/${operatorId}?type=${type}`;
    } else if (type === 'previous_day') {
      const yesterdayStart = new Date(new Date().setDate(new Date().getDate() - 1));
      const yesterdayEnd = new Date(new Date().setDate(new Date().getDate() - 1));
      const formattedStartDate = yesterdayStart.toISOString().split('T')[0]; // Get YYYY-MM-DD format
      const formattedEndDate = yesterdayEnd.toISOString().split('T')[0]; // Get YYYY-MM-DD format
      url = `${BASE_URL}/get-daily-reports/${operatorId}?type=custom_date&from_date=${encodeURIComponent(formattedStartDate)}&to_date=${encodeURIComponent(formattedEndDate)}`;
    } else if (type === 'week') {
      const weekStart = new Date(new Date().setDate(new Date().getDate() - 6));
      const weekEnd = new Date();
      const formattedStartDate = weekStart.toISOString().split('T')[0]; // Get YYYY-MM-DD format
      const formattedEndDate = weekEnd.toISOString().split('T')[0]; // Get YYYY-MM-DD format
      url = `${BASE_URL}/get-daily-reports/${operatorId}?type=custom_date&from_date=${encodeURIComponent(formattedStartDate)}&to_date=${encodeURIComponent(formattedEndDate)}`;
    } else if (type === 'custom_date' && from_date && to_date) {
      url = `${BASE_URL}/get-daily-reports/${operatorId}?type=${type}&from_date=${encodeURIComponent(from_date)}&to_date=${encodeURIComponent(to_date)}`;
    } else {
      throw new Error("Invalid type parameter");
    }
    // const url = `${BASE_URL}/get-daily-reports/${operatorId}?type=${type}`;
    console.log("URL:", url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (response.ok) {
      const result = await response.json();
      return result; // You may want to return relevant data from the response
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message); // You can handle error messages as needed
    }
  } catch (error) {
    console.log(operatorId, type, from_date, to_date);
    throw new Error("Error while fetching daily reports: ", error.message);
  }
};

const fetchAPI = async (url, method = 'POST', body = null) => {
  try {
    // console.log("fecthAPI function => ",url,body,method);
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorResult = await response.json();
      throw new Error(errorResult.message);
    }
  } catch (error) {
    throw new Error(`Error while fetching API: ${error.message}`);
  }
};

const generateURL = (endpoint) => {
  const url = `${BASE_URL}/${endpoint}`;
  return url;
};

// Define functions for POST APIs
const getStoppageReport = async (deviceIds, fromDate, toDate) => {
  try {
    const url = generateURL('stoppage-report');
    const body = {
      "deviceIds": deviceIds,
      "fromDate": fromDate,
      "toDate": toDate
    };
    return await fetchAPI(url, 'POST', body);
  } catch (error) {
    console.error("Error while fetching stoppage report in Api.js:", error.message);
    throw error;
  }
};

const getSpeedReport = async (deviceIds, fromDate, toDate) => {
  try {
    console.log(deviceIds, fromDate, toDate);
    const url = generateURL('speed-report');
    const body = {
      "deviceIds": deviceIds,
      "fromDate": fromDate,
      "toDate": toDate
    }
    return await fetchAPI(url, 'POST', body);
  } catch (error) {
    console.error("Error while fetching speed report:", error.message);
    throw error;
  }
};

const getIgnitionReport = async (deviceIds, fromDate, toDate) => {
  try {
    console.log(deviceIds, fromDate, toDate);
    const url = generateURL('ignition-report');
    const body = {
      "deviceIds": deviceIds,
      "fromDate": fromDate,
      "toDate": toDate
    }
    return await fetchAPI(url, 'POST', body);
  } catch (error) {
    console.error("Error while fetching ignition report:", error.message);
    throw error;
  }
};

const getRelayReport = async (deviceIds, fromDate, toDate) => {
  try {
    // console.log(deviceIds, fromDate, toDate, 'api');
    const url = generateURL('relay-report');
    const body = {
      "deviceIds": deviceIds,
      "fromDate": fromDate,
      "toDate": toDate
    }
    return await fetchAPI(url, 'POST', body);
  } catch (error) {
    console.error("Error while fetching relay report:", error.message);
    throw error;
  }
};

const addGeofence = async (name, coordinates, radius, address, operatorId) => {
  try {
    // console.log("API js : ", name, coordinates, radius, address, operatorId);
    // console.log("Adding geofence called");
    const postData = {
      name: name,
      center: { type: "Point", coordinates: coordinates },
      radius: radius,
      operatorId: operatorId,
      address: address,
    };
    console.log("Body : ", postData);
    const response = await fetch(`${BASE_URL}/add-geofence`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding geofence:", error);
    throw error;
  }
};

const getGeofencesById = async (ids) => {
  try {
    console.log(ids);
    console.log("Fetching geofences by IDs called");

    const postData = {
      ids: ids,
    };

    const response = await fetch(`${BASE_URL}/api/geofencesby-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed

    return data;
  } catch (error) {
    console.error("Error fetching geofences by IDs:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};

const getAllGeofences = async (operatorId) => {
  try {
    // console.log(operatorId);
    // console.log("Fetching all geofences called");

    const response = await fetch(`${BASE_URL}/get-all-geofence/${operatorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed
    // console.log("data from api.js", data);
    return data;
  } catch (error) {
    console.error("Error fetching all geofences:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};

const deleteGeofences = async (ids) => {
  try {
    console.log(ids);
    const body =
    {
      "ids": ids
    }

    console.log("Deleting geofences called, ", body);

    const response = await fetch(`${BASE_URL}/delete-geofences`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed

    return data;
  } catch (error) {
    console.error("Error deleting geofences:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};

const getNotification = async (operatorId) => {
  try {
    // console.log("Fetching notifications called", `${BASE_URL}}/get-notification/${operatorId}`);

    const response = await fetch(`${BASE_URL}/get-notification/${operatorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed

    return data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};


const updateNotificationSettings = async (operatorId, notificationSettings) => {
  try {
    console.log(operatorId, notificationSettings);
    console.log("Updating notification settings called");

    const response = await fetch(`${BASE_URL}/update-notification/${operatorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notificationSettings),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed
    // console.log("Res Data from API.js: ", data);

    return data;
  } catch (error) {
    console.error("Error updating notification settings:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};


const fetctAlertsReport = async (deviceIds, fromDate, toDate) => {
  try {
    // console.log(deviceIds, fromDate, toDate, 'api');
    const url = generateURL('alerts-report');
    const body = {
      "deviceIds": deviceIds,
      "fromDate": fromDate,
      "toDate": toDate
    }
    return await fetchAPI(url, 'POST', body);
  } catch (error) {
    console.error("Error while fetching alerts report:", error.message);
    throw error;
  }
}

const addParking = async (deviceId, coordinates, radius) => {
  try {
    // console.log("API js : ", name, coordinates, radius, address, operatorId);
    // console.log("Adding geofence called");
    const postData = {
      deviceId: deviceId,
      center: { type: "Point", coordinates: coordinates },
      radius: radius,
    };
    console.log("Add Parking : ", postData);
    const response = await fetch(`${BASE_URL}/add-parking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    alert("Successfully Added !")
    return data;
  } catch (error) {
    console.error("Error adding Parking:", error);
    throw error;
  }
};

const getParking = async (deviceId) => {
  try {
    // console.log("Get Device : ", deviceId);
    // console.log("Fetching all geofences called");

    const response = await fetch(`${BASE_URL}/get-parking/${deviceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed
    // console.log("Parking Data from api.js", data);
    return data;
  } catch (error) {
    console.error("Error fetching Parking:", error);
    // Handle the error as needed
    throw error; // rethrow the error to propagate it further
  }
};

const deleteParking = async (deviceId) => {
  try {
    console.log("Delete Park deviceId:", deviceId);

    const response = await fetch(`${BASE_URL}/delete-parking/${deviceId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.log("Status 404: Parking area not found for the provided device.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    const data = await response.json();
    // Handle the response data as needed
    alert("Successfully Deleted !")
    return data;
  } catch (error) {
    console.error("Error Deleting Parking:", error.message);
    // Handle the error as needed
    // throw error; // rethrow the error to propagate it further
  }
};


const sendTokenToBackend = async (token, userId) => {
  try {
    // Assuming you have an API endpoint to send the token
    // console.log("Send Token : ", { token: token, userId: userId.replace(/"/g, '') })
    // Alert.alert("Connected to Server for Alerts!")
    // console.log('uncomment token generated before pushing github')
    const response = await fetch(`${BASE_URL}/receive-notification-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token, userId: userId.replace(/"/g, '') }), // Include user ID or any other identifier
    });

    if (response.ok) {
      console.log('Expo Push Token sent to backend successfully!');
    } else {
      console.error('Failed to send Expo Push Token to backend:', response.status);
    }
  } catch (error) {
    console.error('Error sending Expo Push Token to backend:', error);
  }
};



// otp 

// const apiUrl = "https://smsapi.edumarcsms.com/api/v1/sendsms/login";
const apiUrls = "http://localhost:3000/login"
const apiKey = "clmhhq1ss0002rlqxa6mkdz6t";

const sendOTP = async (phoneNumber) => {
  try {
    const response = await fetch(apiUrls, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: apiKey,
      },
      body: JSON.stringify({
        phone: phoneNumber
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    console.log(response, 'res api otp')

    // Handle response, maybe return response data
    return response.json();
  } catch (error) {
    // Handle error
    console.error('Error sending OTP:', error);
    throw error;
  }
};

// ---------------------------------------------------------  //

// get groups 

// --------------------------------------------------------   //


const fetchVehicleGroups = async () => {
  try {
    // Move the AsyncStorage call to get operator_id outside the try block
    const operator_id = await AsyncStorage.getItem('operator_id');
    if (!operator_id) {
      throw new Error('Operator ID not found in AsyncStorage');
    }

    console.log('groups data api.js ===>', `${BASE_URL}/get-operator-vehicles-groups/${operator_id}`);

    const response = await fetch(`${BASE_URL}/get-operator-vehicles-groups/${operator_id}`);
    if (!response.ok) {
      console.log("Error while fetching vehicleOperatorGroupsData:", response.status);
      throw new Error(`Unable to load vehicle Operator Groups Data. Status code: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching vehicle groups data:", error.message);
    throw new Error("Unable to fetch vehicle groups data. An error occurred while fetching vehicle groups");
  }
}


// --------------------------------------------------------//

// notifactions 

// --------------------------------------------------------//

const fetchNotifications = async (userId) => {
  try {
    // Construct the URL with query parameters
    // console.log('userid api.js =>', userId);
    const url = `${BASE_URL}/notification-queue/${userId}`;
    const response = await fetch(url);
    // console.log('api.js ===>', url);

    if (!response.ok) {
      throw new Error(`Failed to fetch notifications: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data, 'data');
    return data;
  }
  catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
}

const fetchAlerts = async (imei) => {
  try {
    const url = `${BASE_URL}/notification-queue/vehicle/${imei}`
    // console.log('api.js',url)

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`failed fetch alerts api : ${response.status}`)
    }
    const data = await response.json();
    return data;

  }
  catch (error) {
    console.error(`Error while fetching alerts api `, error)
  }

}

export {
  fetchAllVehicleData,
  fetchOperatorVehiclesData,
  fetchLocationData,
  fetchPathData,
  sendRelayCommand,
  loginUser,
  fetchSnappedPoint,
  fetchAddress,
  fetchRawPathData,
  fetchItineraryData,
  fetchVehicleDriversAllData,
  updateDriver,
  fetchVehicleDriver,
  getSpeedLimit,
  setSpeedLimit,
  addDriver,
  deleteDriver,
  addTrip,
  getTripById,
  getTripsByOperatorId,
  getDailyReports,
  getStoppageReport,
  getSpeedReport,
  getIgnitionReport,
  getRelayReport,
  addGeofence,
  getGeofencesById,
  getAllGeofences,
  deleteGeofences,
  updateNotificationSettings,
  getNotification,
  fetctAlertsReport,
  addParking,
  getParking,
  deleteParking,
  sendOTP,
  sendTokenToBackend,
  fetchVehicleGroups,
  fetchNotifications,
  fetchAlerts,
};
