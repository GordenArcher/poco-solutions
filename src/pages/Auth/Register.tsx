import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Loader from '../../components/Loader';

const Register = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    const RegisterUser = async (e) => {
        e.preventDefault()
    
        if(!registerData.username || !registerData.email || !registerData.password || !registerData.password2) return alert("All field are required")
            
            setIsLoading(true)
         try {
            const response = await fetch("http://localhost:8000/api/v1/auth/register/", {
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                username : registerData.username,
                email : registerData.email,
                password: registerData.password,
                password2: registerData.password2,
            })
            })
        
            if(response.ok){
            const data = await response.json()
            console.log(data)
            }
        
            else{
            const errorData = await response.json()
            console.log(errorData)
            }
         } catch (error) {
            console.log(error)
         }finally{
            setIsLoading(false)
         }
        
      }

    return(
        <div className='w-full !py-10 !mt-6 !px-10 !mb-6 flex justify-center items-center'>

            <div className='max-w-[500px] relative flex items-center'>
                <StyledWrapper>
                    <form className="form">
                    <p className="form-title">Join</p>
                    <div className="input-container">
                        <input type="text" value={registerData.username} name='username'  placeholder="Enter Your Name" onChange={(e) => setRegisterData((prevdate) => ({...prevdate, username: e.target.value}))} />
                    </div>
                    <div className="input-container">
                        <input type="email" value={registerData.email} name='email' placeholder="Enter Email" onChange={(e) => setRegisterData((prevdate) => ({...prevdate, email: e.target.value}))} />
                    </div>
                    <div className="input-container">
                        <input type="password" value={registerData.password} name='password' placeholder="Enter password" onChange={(e) => setRegisterData((prevdate) => ({...prevdate, password: e.target.value}))} />
                    </div>
                    <div className="input-container">
                        <input type="password" value={registerData.password2} name='password2' placeholder="Confirm password" onChange={(e) => setRegisterData((prevdate) => ({...prevdate, password2: e.target.value}))} />
                    </div>
                    <button disabled onClick={RegisterUser} type="submit" className="submit">
                        {isLoading ? <Loader /> : "Register"}
                    </button>
                    <p className="signup-link">
                        have account?
                        <Link to={'/login'}>Log In</Link>
                    </p>
                    </form>
                </StyledWrapper>
            </div>
        </div>
    )

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

export default Register
