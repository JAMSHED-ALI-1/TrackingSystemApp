function formatTimestamp(timestamp) {
  const dateObject = new Date(timestamp);
  const currentDate = new Date();

  // Calculate the time difference in minutes
  const timeDifferenceMinutes = (currentDate - dateObject) / (1000 * 60);
  let noinfo = false;

  // Check if the timestamp is older than 30 minutes
  if (timeDifferenceMinutes > 30) {
    noinfo = true;
  }

  // Check if the timestamp is from today
  if (dateObject.toDateString() === currentDate.toDateString()) {
    // Extract time in the format hh:mm:ss AM/PM
    const formattedTime = dateObject.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return {
      formattedTime,
      formattedDate: null,
      isOlderThan30Minutes: noinfo,
    };
  }

  // Check if the timestamp is from yesterday
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);
  if (dateObject.toDateString() === yesterday.toDateString()) {
    return {
      formattedTime: null,
      formattedDate: "Yesterday",
      isOlderThan30Minutes: noinfo,
    };
  }

  // If the timestamp is older than today, return the date in the format DD MMM YY
  const monthAbbreviation = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(dateObject);
  const formattedDate = `${dateObject
    .getDate()
    .toString()
    .padStart(2, "0")} ${monthAbbreviation} ${dateObject
    .getFullYear()
    .toString()
    .slice(-2)}`;

  return {
    formattedTime: null,
    formattedDate,
    isOlderThan30Minutes: noinfo,
  };
}

export { formatTimestamp };