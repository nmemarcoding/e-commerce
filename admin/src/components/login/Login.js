import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from '../../hooks/axios.js'

export default function Login() {
    const navigate = useNavigate()
    const [login,setLogin] = useState('');
    const [credentials,setCredentials] = useState({
        username: undefined,
        password: undefined,
    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };
      const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("auth/login", credentials)
            .then((res) =>{
                console.log(res.data.isAdmin)
                localStorage.setItem('Admin',res.data.isAdmin);
                sessionStorage.setItem('Admin',res.data.isAdmin);
        
                if (sessionStorage.getItem('Admin') === 'true') {
                  navigate('/home');
                  console.log('isAdmin')
                  window.location.reload()
                }
            } ).catch((e)=>{
                setLogin(e.message)
                console.log(e.message);
            })
            
       
    }
    return (
        <div className="login">
        <h3>{setLogin}</h3>
            <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id = "password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit"  onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
        </div>
    )
}
