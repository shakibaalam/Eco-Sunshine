import React from "react";

const MyEvent = () => {
  // Sample data for demonstration
  const registeredEvents = [
    { id: 1, eventName: "Event 1", date: "2023-07-23", location: "Location 1" },
    { id: 2, eventName: "Event 2", date: "2023-07-25", location: "Location 2" },
    { id: 3, eventName: "Event 3", date: "2023-07-28", location: "Location 3" },
    // Add more registered events as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        My Registered Events
      </h2>
      {registeredEvents.length === 0 ? (
        <p className="text-gray-500">
          You have not registered for any events yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-4 py-2 border border-[#7abf18]">Event ID</th>
                <th className="px-4 py-2 border border-[#7abf18]">
                  Event Name
                </th>
                <th className="px-4 py-2 border border-[#7abf18]">Date</th>
                <th className="px-4 py-2 border border-[#7abf18]">Location</th>
              </tr>
            </thead>
            <tbody>
              {registeredEvents.map((event) => (
                <tr key={event.id}>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event.id}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event.eventName}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event.date}
                  </td>
                  <td className="px-4 py-2 border text-center border-[#7abf18]">
                    {event.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEvent;
