import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    const [cartView, setCartView] = useState(false);
    const data = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item active" style={{ fontSize: "20px" }}>
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {
                            (localStorage.getItem("authToken")) ?
                                <li className="nav-item active" style={{ fontSize: "20px" }}>
                                    <Link className="nav-link" to="/">My Orders <span className="sr-only">(current)</span></Link>
                                </li>
                                : ""
                        }
                    </ul>
                    {
                        (!localStorage.getItem("authToken")) ?
                            <div className='d-flex ml-auto'>
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/CreateUser">Signup</Link>
                            </div>
                            :
                            <div className='d-flex ml-auto'>
                                <Link className="btn bg-white text-success mx-1" to="/" onClick={() => { setCartView(true) }}>My Cart{" "}
                                    <Badge pill bg="success" style={{ color: "#fff" }}>
                                        {data ? data.length : 0}
                                    </Badge>

                                </Link>
                                {
                                    cartView ? <Modal onClose={() => { setCartView(false) }}><Cart /></Modal> : null
                                }
                                <Link className="btn bg-danger text-white mx-1" onClick={handleLogout}>LogOut</Link>
                            </div>
                    }
                </div>
            </nav>
        </div>
    );
}
