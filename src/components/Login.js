import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/user';
import { loginFields } from '../constants/formFiels';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';

const fields = loginFields;
const fieldsState = {};
// eslint-disable-next-line no-return-assign
fields.forEach((field) => fieldsState[field.id] = '');

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginState));
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {
                fields.map((field) => (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={loginState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                ))
            }
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />

      </form>
      {user && user.error && <p>{user.error}</p>}
    </>
  );
}
