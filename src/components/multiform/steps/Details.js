import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// eslint-disable-next-line import/no-cycle
import { useStepperContext } from '../../../context/stepperContext';
import Timezones from '../../../helpers/timezones';

const Details = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
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
              onChange={(e) => { setUserData({ ...userData, region: e }); }}
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
    </div>
  );
};

export default Details;
