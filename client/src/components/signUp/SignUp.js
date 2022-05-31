import React, { useState } from 'react'
import Axios from '../../hook/axios'
export default function SignUp() {
    const [credentials,setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,  
    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };
    
    const handleClick  = (e)=>{
        e.preventDefault();
        try{

            Axios.post("auth/register", credentials)
            .then((res) =>{
                console.log(res.data)
            } )
            
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className="signUp">
            <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" onClick={handleClick} className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right" >
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
        </div>
    )
}
