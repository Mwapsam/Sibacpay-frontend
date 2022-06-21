import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { signup } from '../../store/user';

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState({
    username: '',
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
    dispatch(signup(values));
  };

  return (
    <div>
      <div>
        <h4>Create Account</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={values.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
            />
          </div>
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
          <button type="submit">Signup</button>
        </form>
        {user && user.errors && <p>{user.errors}</p>}
      </div>
    </div>
  );
};

export default Signup;
