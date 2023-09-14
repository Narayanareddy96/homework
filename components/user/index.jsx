'use client';
import Link from 'next/link';
import { fetchUsers, deleteUser } from '../../redux/userSlice';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    toast.success('Successfully User Deleted!');
  };
  if (loading) {
    return 'Loading...';
  }
  return users.length > 0 ? (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              firstName
            </th>
            <th scope="col" className="px-6 py-3">
              lastName
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-6 py-4">{user.firstName}</td>
              <td className="px-6 py-4">{user.lastName}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <Link href={`/user/${user.id}`}>
                  <button
                    className="inline-block rounded bg-indigo-400 px-2 py-1 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-300"
                    onClick={() => {}}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td className="px-6 py-4">
                <button
                  className="inline-block rounded bg-indigo-400 px-2 py-1 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-300"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>No Data found</div>
  );
};

export default User;
