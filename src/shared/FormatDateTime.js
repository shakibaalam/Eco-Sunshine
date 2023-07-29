// dateUtils.js

export const formatDateTime = (date) => {
    const eventDate = new Date(date);
  
    // Get the date in "dd MMM" format
    const formattedDate = eventDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
  
    // Get the time in "hh:mmam/pm" format
    const formattedTime = eventDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  
    return {
      formattedDate,
      formattedTime,
    };
  };
  