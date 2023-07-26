import React from 'react';

const ManageEvent = () => {
  // Sample data for demonstration purposes
  const events = [
    { id: 1, title: 'Event 1', date: '2023-07-31', location: 'Location A' },
    { id: 2, title: 'Event 2', date: '2023-08-15', location: 'Location B' },
    { id: 3, title: 'Event 3', date: '2023-09-10', location: 'Location C' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="border p-2">{event.id}</td>
              <td className="border p-2">{event.title}</td>
              <td className="border p-2">{event.date}</td>
              <td className="border p-2">{event.location}</td>
              <td className="border p-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEvent;
