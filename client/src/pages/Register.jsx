import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

// global context and useNavigate later
/* Setting the initial state of the form. */

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert } = useAppContext();
  const ToggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  /**
   * The function onSubmit is called when the form is submitted
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name, email, password, isMember,
    } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register '}</h3>
        {/**  A conditional rendering.
         * If the value of isMember is false,
         * then the FormRow component will be rendered.
         */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
          />
        )}
        {showAlert && <Alert />}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          label="email"
          value={values.email}
          onChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          label="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" className="member-btn" onClick={ToggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
