import React from 'react';
import { useGetUsersQuery } from '../features/userApi';

const Dashboard = ({ onUserClick, onAddClick }) => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div>
      <button onClick={onAddClick} className="bg-blue-500 text-white p-2">
        Add User
      </button>
      <div className="grid grid-cols-3 gap-4">
        {data.data.map((user) => (
          <div
            key={user.id}
            className="border p-4"
            onClick={() => onUserClick(user)}
          >
            <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full" />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
