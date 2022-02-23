import React from 'react'
import styled from 'styled-components'

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
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
    }

    & .form::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: rgba(255,255,255, .08);
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
        background: rgba(255,255,255, .8);
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

    & .form .input-group input:focus + label, form .input-group input:valid + label  {
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
`

const Login = () => {
  return (
      <LoginWrapper>
          <form action="" className='form'>
              <img src="" alt="" />
              <h2>Login</h2>
              <div className="input-group">
                  <input type="email" name="email" id="login-email">
                      <label htmlFor="login-email">Email</label>
                  </input>
              </div>
              <div className="input-group">
                  <input type="password" name="password" id="login-password">
                      <label htmlFor="login-password">Password</label>
                  </input>
              </div>
              <input type="submit" value="Login" class="submit-btn" />
              <a href="#forgot-pw" className='forgot-pw'>Forgot Password?</a>
          </form>

          <div className="forgot-pw">
              <form action="" class="form">
                  <a href="#" class="close">&times;</a>
                  <h2>Reset Password</h2>
                  <div className="input-group">
                      <input type="email" name="email" id="email" />
                      <label htmlFor="email">Email</label>
                  </div>
                  <input type="submit" value="Submit" />
              </form>
          </div>
      </LoginWrapper>
  )
}

export default Login