import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import validator from 'validator';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Timezones from '../helpers/timezones';
import LocalStorage from '../helpers/localStorage';
import createMerchant from '../services/merchant.service';

const user = LocalStorage.getUser();

const initState = {
  user_id: user.id,
  company: '',
  address_1: '',
  address_2: '',
  city: '',
  state: '',
  postal: '',
  country: '',
  timezone_id: '',
  contact_first_name: '',
  contact_last_name: '',
  contact_phone: '',
  contact_email: '',
  account_number: '',
  routing_number: '',
  username: '',
  fee_plan: '',
};
const Details = () => {
  const [userData, setUserData] = useState(initState);

  const [emailError, setEmailError] = useState('');

  const dispatch = useDispatch();

  const createMerch = () => {
    dispatch(createMerchant({
      user_id: parseInt(user.id, 10),
      company: userData.company,
      address_1: userData.address_1,
      address_2: userData.address_2,
      city: userData.city,
      state: userData.state,
      postal: userData.postal,
      country: userData.country,
      timezone_id: userData.timezone_id,
      contact_first_name: userData.contact_first_name,
      contact_last_name: userData.contact_last_name,
      contact_phone: userData.contact_phone,
      contact_email: userData.contact_email,
      account_number: userData.account_number,
      routing_number: userData.routing_number,
      username: user.username,
      fee_plan: parseInt(538368, 10),
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="relative flex flex-col items-center text-teal-600 ">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              City
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                onChange={handleChange}
                value={userData.city || ''}
                name="city"
                placeholder="City"
                type="text"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Address 1
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                onChange={handleChange}
                value={userData.address_1 || ''}
                name="address_1"
                placeholder="Address 1"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Address 2
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                onChange={handleChange}
                value={userData.address_2 || ''}
                name="address_2"
                placeholder="Address 2"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Country
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <CountryDropdown
                onChange={(val) => setUserData({ ...userData, country: val })}
                value={userData.country || ''}
                name="country"
                placeholder="Country"
                className="bg-white p-1 px-2 appearance-none outline-none w-full text-gray-400"
                required
              />
            </div>
          </div>
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              State/Province
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <RegionDropdown
                country={userData.country}
                onChange={(e) => { setUserData({ ...userData, state: e }); }}
                value={userData.state || ''}
                name="region"
                placeholder="State"
                type="text"
                className="bg-white p-1 px-2 appearance-none outline-none w-full text-gray-400"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Timezone
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <select
            // eslint-disable-next-line max-len
                onChange={(e) => { setUserData({ ...userData, timezone_id: parseInt(e.target.value, 10) }); }}
                className="bg-white p-1 px-2 appearance-none outline-none w-full text-gray-400"
              >
                {Timezones.map((option) => (
                  <option
                    key={option.id}
                    value={option.id}
                    required
                  >
                    {option.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Postal Code
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                onChange={handleChange}
                value={userData.postal || ''}
                name="postal"
                placeholder="Postal Code"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Account Number
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.account_number || ''}
              name="account_number"
              placeholder="Account Number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Routing Number
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.routing_number || ''}
              name="routing_number"
              placeholder="Routing Number"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 my-5">
          <button type="submit" onClick={createMerch} className="p-1 cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
            Button
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
