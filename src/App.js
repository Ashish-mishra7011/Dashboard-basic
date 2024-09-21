import Dashboard from './component/Dashboard';
import Modal from './component/Modal';
import UserForm from './component/UserForm';
import React, { useState } from 'react';

import { useGetUsersQuery, useCreateUserMutation } from './features/userApi';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data, refetch } = useGetUsersQuery(); // Use RTK Query to get users
  const [createUser] = useCreateUserMutation();

  const handleAddClick = () => {
    setSelectedUser(null);
    setModalOpen(true);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleFormSubmit = async (data) => {
    if (!selectedUser) {
      // Add new user using RTK Query mutation
      const result = await createUser(data);
      console.log('User created:', result);

      if (result.data) {
        refetch(); // Refetch users to display the updated list
      }
    }
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Dashboard onUserClick={handleUserClick} onAddClick={handleAddClick} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <UserForm defaultValues={selectedUser} onSubmit={handleFormSubmit} />
      </Modal>
    </div>
  );
};

export default App;
