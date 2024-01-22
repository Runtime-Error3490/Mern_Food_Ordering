import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const response = await fetch("http://localhost:5000/api/loginuser ", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": credentials.email,
        "password": credentials.password
      })
    });

    const data = await response.json();
    console.log(data);
    if (!data.success) {
      window.alert("Invalid Credentials");
    }
    else{
      navigate("/");
    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>  
          <div className="form-group mt-5">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <div className=' m-3 d-flex justify-content-center'>
             <button type="submit" className=" m-3 btn btn-success ">Submit</button>
             <Link to="/CreateUser" className='m-3 btn btn-danger'>I'm a new user</Link>
          </div>
        </form>
      </div>
    </>
  )
}
