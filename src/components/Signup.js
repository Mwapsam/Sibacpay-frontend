import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/user';
import { signupFields } from '../constants/formFiels';
import FormAction from './FormAction';
import Input from './Input';

const fields = signupFields;
const fieldsState = {};

// eslint-disable-next-line no-return-assign
fields.forEach((field) => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(signupState));
    e.target.reset();
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {
                fields.map((field) => (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

      </form>
      {user && user.errors && <p>{user.errors}</p>}
    </>
  );
}
