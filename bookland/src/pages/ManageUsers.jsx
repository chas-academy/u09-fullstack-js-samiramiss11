// src/pages/ManageUsers.jsx
import React, { useEffect, useState } from 'react';
import { fetchUsers, adminUpdateUser} from '../utils/api';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  const toggleStatus = async (u) => {
    const updated = await adminUpdateUser(u._id, { isActive: !u.isActive });
    setUsers(users.map(x => x._id === u._id ? updated : x));
  };

  const toggleAdmin = async (u) => {
    const updated = await adminUpdateUser(u._id, { isAdmin: !u.isAdmin });
    setUsers(users.map(x => x._id === u._id ? updated : x));
  };

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        {/* ← wrap in an overflow-auto container */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Active</th>
                <th className="border p-2">Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u._id}>
                  <td className="border p-2 whitespace-nowrap">{u.name}</td>
                  <td className="border p-2 whitespace-nowrap">{u.email}</td>
                  {/* center the toggles */}
                  <td className="border p-2 text-center whitespace-nowrap">
                    <label className="inline-flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={u.isActive}
                          onChange={() => toggleStatus(u)}
                          className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors" />
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
                      </div>
                    </label>
                  </td>
                  <td className="border p-2 text-center whitespace-nowrap">
                    <label className="inline-flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={u.isAdmin}
                          onChange={() => toggleAdmin(u)}
                          className="sr-only peer"
                        />
                        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors" />
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
                      </div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};

export default ManageUsers;
