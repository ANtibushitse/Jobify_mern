import {useState, useEffect} from "react";
import {Logo, FormRow,Alert} from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// global context and useNavigate later
/* Setting the initial state of the form. */

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
    showAlert: false,
};


function Register() {
    const [values, setValues] = useState(initialState);



    /**
     * A function that is called when the form is submitted.
     */
    const handleChange = (e) => {
        console.log(e.target);
    };

    /**
     * The function onSubmit is called when the form is submitted
     */
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };
    return (
        /*  */
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo/>
                <h3>Login</h3>
                {values.showAlert && (<Alert />)}
                {/* name field */}
                <FormRow type="text" name="name" label="Name" value={values.name} onChange={handleChange}/>
                {/* email field */}
                <FormRow type="email" name="email" label="email" value={values.email} onChange={handleChange}/>
                {/* password field */}
                <FormRow type="password" name="password" label="password" value={values.password}onChange={handleChange}/>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </Wrapper>
    );
}

export default Register;