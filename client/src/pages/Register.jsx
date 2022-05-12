import {useState, useEffect} from "react";
import {Logo} from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// global context and useNavigate later
/* Setting the initial state of the form. */

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
};


function Register() {
    const [values, setValues] = useState(initialState);

    // global context and useNavigate later

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

                {/* name field */}
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>

                    <input
                        type="text"
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </Wrapper>
    );
}

export default Register;