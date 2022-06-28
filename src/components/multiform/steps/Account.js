import React, { useState } from 'react';
import validator from 'validator';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useStepperContext } from '../../../context/stepperContext';

const Account = () => {
  const { userData, setUserData } = useStepperContext();

  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mb-4 md:flex md:justify-between">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            First Name
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData.contact_first_name || ''}
              name="contact_first_name"
              placeholder="First Name"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Last Name
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData.contact_last_name || ''}
              name="contact_last_name"
              placeholder="Last Name"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Business Email
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={validateEmail}
              value={userData.contact_email || ''}
              name="contact_email"
              placeholder="Business Email"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
          <div className="text-red-500 text-xs italic">{emailError}</div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Company
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData.company || ''}
              name="company"
              placeholder="Company"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Phone Number
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <PhoneInput
              placeholder="Enter phone number"
              value={userData.contact_phone || ''}
              onChange={(value) => setUserData({ ...userData, contact_phone: value })}
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-gray-200"
            />

          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Username
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData.username || ''}
              name="username"
              placeholder="Username"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
