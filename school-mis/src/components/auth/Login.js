import React, { useState } from 'react'
import styled from 'styled-components'
import { Navigate } from "react-router-dom";

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & .form {
        position: relative;
        width: 100%;
        max-width: 23rem;
        padding: 5rem 2.5rem 2.5rem;
        border-radius: 10px;
        color: #fff;
        background: rgba(0,0,0,.7);
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
    }
    & .form::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        /* background: rgba(255,255,255,.8); */
        transform: skewX(-26deg);
        transform-origin: bottom left;
        border-radius: 10px;
        pointer-events: none;
    }
    & .form img {
        position: absolute;
        top: -50px;
        left: calc(50% - 50px);
        width: 100px;
        background: rgb(255,255,255,);
        border-radius: 50%;
    }
    & .form h2 {
        text-align: center;
        letter-spacing: 1px;
        margin-bottom: 2rem;
        color: #b6cb58;
    }
    & .form .input-group {
        position: relative;
    }
    & .form .input-group input {
        width: 100%;
        padding: 10px 0;
        font-size: 1rem;
        letter-spacing: 1px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background-color: transparent;
        color: inherit;
    }
    & .form .input-group label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 1rem;
        pointer-events: none;
        transition: .3s ease-out;
    }
    & .form .input-group input:focus + label, 
       .form .input-group input:valid + label  {
        transform: translateY(-18px);
        color: #b6cb58;
        font-size: large.8rem;
    }
    & .submit-btn {
        display: block;
        margin-left:auto ;
        border: none;
        outline: none;
        background: #b6cb58;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    & .forgot-pw {
        color: inherit;
    } 
    & .forgot-pw {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        height: 0;
        z-index: 1;
        background: #fff;
        opacity: 0;
        transition: .6s;
    }
    & #forgot-pw:target{
        height: 100%;
        opacity: 1;
    }
    & .close {
        position: absolute;
        right: 1.5rem;
        top: .5rem;
        font-size: 2rem;
        font-weight: 900;
        text-decoration: none;
        color: inherit;
    }
    & .danger-error {
    color: #e74c3c;
  }
`

const emailRegex = new RegExp(
    /^[a-zaA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


const Login = () => {
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const handleChange = (e) => {
        // e.preventDefault();
        // const [ name, value ] = e.target;
        const name = e.target.name;
        const value = e.target.value;
        let error;
        switch (name) {
            case "email":
                error = emailRegex.test(value) ? "" : "invalid email address";
                break;
            default:
                break;
        }
        setFormErrors({ [name]: error });
    };

    const checkPasswordValidation = (e) => {
        // e.preventDefault();
        const { value } = e.target;
        const paswdReg = { 
            isWhitespace : /^(?=.*\s)/,
            isContainsUppercase : /^(?=.*[A-Z])/,
            isContainsLowercase : /^(?=.*[a-z])/,
            isContainsNumber : /^(?=.*[0-9])/,
            isContainsSymbol : /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/,
            isValidLength : /^.{6,16}$/
         }

        if (value) {

            let errors = []

            if (paswdReg.isWhitespace.test(value)) {
          
                errors.push("Password must not contain Whitespaces.")
            }

            if (!paswdReg.isContainsUppercase.test(value)) {
                errors.push("Password must have at least one Uppercase Character.")
            }


            if (!paswdReg.isContainsLowercase.test(value)) {
                errors.push("Password must have at least one Lowercase Character.");
            }

            if (!paswdReg.isContainsNumber.test(value)) {
                errors.push("Password must contain at least one Digit.");
            }

            if (!paswdReg.isContainsSymbol.test(value)) {
                errors.push("Password must contain at least one Special Symbol.");
            }

            if (!paswdReg.isValidLength.test(value)) {
                errors.push("Password must be 6-16 Characters Long.")
            }
    
        setFormErrors({password:errors})
        

    }
}

const userRoles = [
    {   name : "Festus",
        email : "fes@gmail.com",
        password : "Fes12#",
        role : "Admin"
    },
    {
        name: "Alvin",
        email: "alv@gmail.com",
        password: "Alv12#",
        role: "Teacher"
    },
    {
        name: "Salma",
        email: "salma@gmail.com",
        password: "Sal12#",
        role: "Student"
    },
    {
        name: "John",
        email: "john@gmail.com",
        password: "Joh12#",
        role: "Student"
    }
]


    const handleLogin = (e) => {
        //e.preventDefault();

        //console.log(userRoles);
        const user = { email };
        console.log(user)
        let person;

        for (person of userRoles) {
            //console.log(person.role);

            if (user.email == person.email) {
                //console.log(person.role);
                if (person.role == "Admin") {
                    setRedirect('/admin-dashboard')

                }
                if (person.role == "Teacher") {
                    setRedirect('/teacher-dashboard')

                }
                if (person.role == "Student") {
                    setRedirect('/student-dashboard')

                }
            }

        }

    }

    if (redirect) {
        return <Navigate to={redirect} />;
    } else
    return (
        <LoginWrapper>
            <form onSubmit={handleLogin} className='form'>
                <img src="" alt="" />
                <h2>Login</h2>
                <div className="input-group">
                    <input type="email" name="email" id="login-email" value={email}
                        className={formErrors.email ? "error" : null}
                        onChange={(e) => {
                            handleChange(e);
                            setEmail(e.target.value);
                        }} />
                    <label htmlFor="login-email">Email</label>
                    {formErrors.email && (
                        <small className="danger-error">{formErrors.email}</small>
                    )}
                </div>
                <div className="input-group">
                    <input type="password" name="password" id="login-password" value={password}
                        className={formErrors.password ? "error" : null}
                        onChange={(e) => {
                            checkPasswordValidation(e);
                            setPassword(e.target.value);
                        }} />
                    <label htmlFor="login-password">Password</label>
                    {formErrors.password &&  formErrors.password.map((error)=>(
                        <small className="danger-error">
                            {formErrors.password[0]}
                        </small>
                    )) }
                </div>
                <input type="submit" value="Login" className="submit-btn" />
                <a href="#forgot-pw" className='forgot-pw'>Forgot Password?</a>
            </form>

            <div className="forgot-pw">
                <form action="" className="form">
                    <a href="#" className="close">&times;</a>
                    <h2>Reset Password</h2>
                    <div className="input-group">
                        <input type="email" name="email" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <input type="submit" value="Submit" onClick={handleLogin} />
                </form>
            </div>
        </LoginWrapper>
    )
}

export default Login
