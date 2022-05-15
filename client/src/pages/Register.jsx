import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from   "../context/appContext";
//   global context and useNavigate later
/* Setting the initial state of the form. */

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert } = useAppContext();
  
  
  const state = useAppContext();
  console.log(state);
  /**
   * ToggleMember is a function that sets the value of isMember to the opposite of what it currently is
   */
  const ToggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  /**
   * The handleChange function is used to update the state of the component
   */
   const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

   const onSubmit = (e) => {
    e.preventDefault()

   /* Destructuring the values object and checking if any of the values are empty. If they are empty,
   it will display an alert. */
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register "}</h3>
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
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={ToggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
