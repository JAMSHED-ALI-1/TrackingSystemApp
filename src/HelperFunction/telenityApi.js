const login = async () => {
    try {
        const response = await fetch('https://smarttrail.telenity.com/trail-rest/login', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic cWlrYnVrOlFpa2J1a'
            }
        });

        if (!response.ok) {
            console.error("Error logging in:", response.status);
            throw new Error(`Unable to login. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging in:", error.message);
        throw new Error("Unable to login. An error occurred.");
    }
};

// Example usage:
// login()
//     .then(data => {
//         console.log("Login successful:", data);
//         // Do something with the response data
//     })
//     .catch(error => {
//         console.error("Login failed:", error.message);
//     });
// ===========================================================================>
const importEntities = async (dynamicBody, token) => {
    try {
        const response = await fetch('https://smarttrail.telenity.com/trail-rest/entities/import', {
            method: 'POST',
            headers: {
                'Host': 'smarttrail.telenity.com',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'curl/7.29.0',
                'token': token
            },
            body: JSON.stringify(dynamicBody)
        });

        if (!response.ok) {
            console.error("Error importing entities:", response.status);
            throw new Error(`Unable to import entities. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error importing entities:", error.message);
        throw new Error("Unable to import entities. An error occurred.");
    }
};

// Example usage:
//   importEntities(dynamicBody)
//     .then(data => {
//       console.log("Entities imported successfully:", data);
//       // Do something with the response data
//     })
//     .catch(error => {
//       console.error("Failed to import entities:", error.message);
//     });
// =======================================================================>
const generateBearerToken = async (token) => {
    try {
        const response = await fetch('https://india-agw.telenity.com/oauth/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Host': 'india-agw.telenity.com',
                'Authorization': `Basic ${token}`
            }
        });

        if (!response.ok) {
            console.error("Error generating bearer token:", response.status);
            throw new Error(`Unable to generate bearer token. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error generating bearer token:", error.message);
        throw new Error("Unable to generate bearer token. An error occurred.");
    }
};

//   // Example usage:
//   const token = 'your_token_here';
//   generateBearerToken(token)
//     .then(data => {
//       console.log("Bearer token generated successfully:", data);
//       // Use the generated bearer token for further API calls
//     })
//     .catch(error => {
//       console.error("Failed to generate bearer token:", error.message);
//     });
// ====================================================================================>
const getConsentStatus = async (token, subscriberNumber) => {
    try {
        const response = await fetch(`https://india-agw.telenity.com/apigw/NOFBconsent/v1/NOFBconsent?address=tel:${subscriberNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Accept': '*/*',
                'Host': 'india-agw.telenity.com',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            console.error("Error retrieving consent status:", response.status);
            throw new Error(`Unable to retrieve consent status. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error retrieving consent status:", error.message);
        throw new Error("Unable to retrieve consent status. An error occurred.");
    }
};
//   // Example usage:
//   const token = 'your_bearer_token_here';
//   const subscriberNumber = '+911234567890'; // Replace this with the subscriber number
//   getConsentStatus(token, subscriberNumber)
//     .then(data => {
//       console.log("Consent status retrieved successfully:", data);
//       // Process the consent status data as needed
//     })
//     .catch(error => {
//       console.error("Failed to retrieve consent status:", error.message);
//     });
// ========================================================================================>
const getLocationDetails = async (token, subscriberNumber) => {
    try {
        const response = await fetch(`https://smarttrail.telenity.com/trail-rest/location/msisdnList/${subscriberNumber}?lastResult=True`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Host': 'smarttrail.telenity.com',
                'Token': token
            }
        });

        if (!response.ok) {
            console.error("Error retrieving location details:", response.status);
            throw new Error(`Unable to retrieve location details. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error retrieving location details:", error.message);
        throw new Error("Unable to retrieve location details. An error occurred.");
    }
};

//   // Example usage:
//   const token = 'your_token_here';
//   const subscriberNumber = '911234567890'; // Replace this with the subscriber number
//   getLocationDetails(token, subscriberNumber)
//     .then(data => {
//       console.log("Location details retrieved successfully:", data);
//       // Process the location details data as needed
//     })
//     .catch(error => {
//       console.error("Failed to retrieve location details:", error.message);
//     });
// =============================================================================================>
const getOverallDetails = async (token, msisdn) => {
    try {
        const response = await fetch(`https://smarttrail.telenity.com/trail-rest/entities?search=${msisdn}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Host': 'smarttrail.telenity.com',
                'Token': token
            }
        });

        if (!response.ok) {
            console.error("Error retrieving overall details:", response.status);
            throw new Error(`Unable to retrieve overall details. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error retrieving overall details:", error.message);
        throw new Error("Unable to retrieve overall details. An error occurred.");
    }
};
// Example usage:
//   const token = 'your_token_here';
//   const msisdn = '911234567890'; // Replace this with the MSISDN
//   getOverallDetails(token, msisdn)
//     .then(data => {
//       console.log("Overall details retrieved successfully:", data);
//       // Process the overall details data as needed
//     })
//     .catch(error => {
//       console.error("Failed to retrieve overall details:", error.message);
//     });
// ================================================================================================>
const deleteNumbers = async (token, msisdnList) => {
    try {
        const response = await fetch('https://smarttrail.telenity.com/trail-rest/tracking/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Host': 'smarttrail.telenity.com',
                'x-access-token': token
            },
            body: JSON.stringify({ msisdnList: msisdnList })
        });

        if (!response.ok) {
            console.error("Error deleting numbers:", response.status);
            throw new Error(`Unable to delete numbers. Status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting numbers:", error.message);
        throw new Error("Unable to delete numbers. An error occurred.");
    }
};

// Example usage:
//   const token = 'your_token_here';
//   const msisdnList = ['911234567890']; // Replace this with the list of MSISDNs to delete
//   deleteNumbers(token, msisdnList)
//     .then(data => {
//       console.log("Numbers deleted successfully:", data);
//       // Process the deletion response data as needed
//     })
//     .catch(error => {
//       console.error("Failed to delete numbers:", error.message);
//     });
// ==============================================================================================>


export {
    login,
    importEntities,
    generateBearerToken,
    getConsentStatus,
    getLocationDetails,
    getOverallDetails,
    deleteNumbers
}
