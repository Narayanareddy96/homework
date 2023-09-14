'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/userSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Form from '../../components/Form';

const CreateUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formdata, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    address: '',
    status: false,
  });
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
    // console.log(formdata);
    dispatch(createUser(formdata));
    toast.success('User created Successfully!');
    router.push('/');
  };
  return (
    <div className="flex flex-col items-center mt-2 p-4">
      <h2 className="text-xl m-2 font-bold">Create New user</h2>
      <Form
        type="Create"
        formdata={formdata}
        handleFormUpdate={handleFormUpdate}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default CreateUser;
