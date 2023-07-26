import React from 'react';

const ManageCampaign = () => {
  // Sample data for demonstration purposes
  const campaigns = [
    { id: 1, name: 'Campaign 1', startDate: '2023-07-31', endDate: '2023-08-15' },
    { id: 2, name: 'Campaign 2', startDate: '2023-08-16', endDate: '2023-09-30' },
    { id: 3, name: 'Campaign 3', startDate: '2023-09-01', endDate: '2023-09-30' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Campaigns</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td className="border p-2">{campaign.id}</td>
              <td className="border p-2">{campaign.name}</td>
              <td className="border p-2">{campaign.startDate}</td>
              <td className="border p-2">{campaign.endDate}</td>
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

export default ManageCampaign;
