import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { login } from '../../store/user';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };

  return (
    <div>
      <div>
        <h4>Login</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {user && user.error && <p>{user.error}</p>}
      </div>
    </div>
  );
};

export default Login;
