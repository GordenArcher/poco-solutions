import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { AuthContext } from '../../utils/context/Context';

const Login = () => {

  const { setShowLogin } = useContext(AuthContext)
  return (
      <div className='w-full z-9999 h-screen fixed top-0 left-0 bg-[#00000087] flex justify-center items-center'>
        <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.3, ease: "easeOut" }} 
        className="max-w-[500px]  bg-white p-6 rounded-lg shadow-lg"
      >
        <div className='absolute right-[50px] top-[70px]'>
          <button onClick={() => setShowLogin(false)} className='text-[#fff] rounded-[50%] flex items-center justify-center border-1 w-[50px] h-[50px] cursor-pointer text-2xl !font-extrabold'>
          <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <div className='max-w-[500px] relative flex items-center'>
          <StyledWrapper>
            <form className="form">
              <p className="form-title">Sign in to your account</p>
              <div className="input-container">
                <input type="email" placeholder="Enter email" />
                <span>
                </span>
              </div>
              <div className="input-container">
                <input type="password" placeholder="Enter password" />
              </div>
              <button type="submit" className="submit">
                Sign in
              </button>
              <p className="signup-link">
                No account?
                <a href>Sign up</a>
              </p>
            </form>
          </StyledWrapper>
        </div>
      </motion.div>
        
      </div>
  );
}

const StyledWrapper = styled.div`
  .form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
  }

  .input-container {
    position: relative;
  }

  .input-container input, .form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
  }

  .input-container input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }

  .signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }

  .signup-link a {
    text-decoration: underline;
  }`;

export default Login;
