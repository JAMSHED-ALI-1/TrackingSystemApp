function calculateDuration(itineraryData) {
    let runningDuration = 0; // in milliseconds
    let stopDuration = 0; // in milliseconds
    let idleDuration = 0; // in milliseconds
    const data = itineraryData?.data;

    // Check if data exists and has at least one element
    if (!data || data.length < 1) {
        return {
            running: { hours: 0, minutes: 0 },
            stop: { hours: 0, minutes: 0 },
            idle: { hours: 0, minutes: 0 }
        };
    }

    const pings = data[0].total_pings;
    const fromTime = new Date(data[0].from_time);
    const toTime = new Date(data[0].to_time);
    // console.log(fromTime, toTime);
    const totalTime = toTime - fromTime; // Total time in milliseconds
    // console.log(totalTime)
    const totalTimeInHours = totalTime / (1000 * 60 * 60); // Convert milliseconds to hours
    const totalHours = Math.floor(totalTimeInHours); // Extract whole hours
    const totalMinutes = Math.floor((totalTimeInHours - totalHours) * 60); // Extract remaining minutes

    // console.log(totalHours, 'hours', totalMinutes, 'minutes');


    return { "hrs": totalHours, "min": totalMinutes };



    /////////////////////////////////Not accessible to Programm /////////////////////////

    // Assuming distance threshold for considering the vehicle as running (in meters)
    const runningThreshold = 5; // Adjust as needed

    // Assuming first ping is the starting point
    let lastPing = data[0];

    // Iterate through each ping
    for (let i = 1; i < pings; i++) {
        const currentPing = data[i];

        if (!currentPing) {
            // Skip current iteration if currentPing is undefined
            continue;
        }

        // Calculate distance between consecutive pings
        const distance = calculateDistance(lastPing?.from_location, currentPing.from_location);

        // Calculate time difference since last ping
        const timeDifference = new Date(currentPing.from_time) - new Date(lastPing.from_time);

        if (distance >= runningThreshold) {
            // Considered as running time
            runningDuration += timeDifference;
        } else if (distance === 0) {
            // Considered as stop time
            stopDuration += timeDifference;
        } else {
            // Considered as idle time
            idleDuration += timeDifference;
        }

        // Update last ping
        lastPing = currentPing;
    }

    // Convert milliseconds to hours and minutes
    const runningHours = Math.floor(runningDuration / (1000 * 60 * 60));
    const runningMinutes = Math.floor((runningDuration % (1000 * 60 * 60)) / (1000 * 60));

    const stopHours = Math.floor(stopDuration / (1000 * 60 * 60));
    const stopMinutes = Math.floor((stopDuration % (1000 * 60 * 60)) / (1000 * 60));

    const idleHours = Math.floor(idleDuration / (1000 * 60 * 60));
    const idleMinutes = Math.floor((idleDuration % (1000 * 60 * 60)) / (1000 * 60));

    return {
        running: { hours: runningHours, minutes: runningMinutes },
        stop: { hours: stopHours, minutes: stopMinutes },
        idle: { hours: idleHours, minutes: idleMinutes }
    };
}


// Function to calculate distance between two locations (in this case, assuming a simple Euclidean distance)
function calculateDistance(location1, location2) {
    // Assuming location is an array with [latitude, longitude] values
    const lat1 = location1[0];
    const lon1 = location1[1];
    const lat2 = location2[0];
    const lon2 = location2[1];

    // Using Haversine formula for simplicity
    const R = 6371e3; // Earth radius in meters
    const phi1 = lat1 * Math.PI / 180; // Latitude in radians
    const phi2 = lat2 * Math.PI / 180;
    const deltaPhi = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in meters
    return distance;
}

export {
    calculateDuration,
}