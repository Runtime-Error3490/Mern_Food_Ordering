import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        const response = await fetch("https://mern-food-ordering-d891.onrender.com/api/CreateUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": credentials.name,
                "email": credentials.email,
                "password": credentials.password,
                "location": credentials.geolocation
            })
        });

        const data = await response.json();
        console.log(data);
        if (!data.success) {
            window.alert("Invalid Credentials");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="geolocation">Geolocation</label>
                        <input type="text" className="form-control" id="geolocation" placeholder="Enter Geolocation" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
                    </div>
                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
