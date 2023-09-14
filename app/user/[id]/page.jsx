'use client';
import { useParams } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../redux/userSlice';
import Form from '../../../components/Form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const EditUser = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [formdata, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    address: '',
    status: false,
  });
  useEffect(() => {
    console.log('asas');
    console.log(users);
    setFormData(users.filter((user) => user.id === params.id)[0]);
  }, [users]);
  // const dispatch = useDispatch();

  const handleFormUpdate = (e) => {
    setFormData((prev) => {
      let values = e.target.value;

      return {
        ...prev,
        [e.target.name]: values,
      };
    });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(editUser({ data: formdata, id: params.id }));
    toast.success('User Updated Successfully!');
    router.push('/');
  };
  if (loading) {
    return 'Loading...';
  }
  return (
    <div className="flex flex-col items-center mt-2 p-4">
      <h2 className="text-xl m-2 font-bold">Update User</h2>
      <Form
        type="Update"
        formdata={formdata}
        handleFormUpdate={handleFormUpdate}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default EditUser;
