/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import LocalStorage from '../helpers/localStorage';

const StepperContext = createContext({ userData: '', setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState('');

  const createMerchant = async (data) => {
    const jwtToken = LocalStorage.getUser();
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/merchants`, {
      ...data,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const res = response.data;

    setUserData(res, ...userData);
  };

  return (
    <StepperContext.Provider value={{ userData, setUserData, createMerchant }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
