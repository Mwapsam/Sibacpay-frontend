import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/user';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user.data && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </>
        )}
        {user.data && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <button type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
        )}
      </ul>
    </>
  );
};

export default Navbar;
